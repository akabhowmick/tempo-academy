// Postbuild step: writes a static HTML shell per route so link-preview bots
// (Slack, iMessage) that only read raw HTML — not run JS — see the correct
// per-page title/description/OG tags instead of the generic homepage ones.
// Browsers and Googlebot are unaffected either way; every shell loads the
// same bundle and src/lib/useSeo.ts takes over immediately on mount.
//
// Route data comes from src/lib/route-meta.json, the same file the page
// components read via useSeo, so the prerendered tags and the client-set
// tags cannot drift apart. Run automatically via the "postbuild" npm script.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const DIST = join(ROOT, "dist");
const BASE_URL = "https://www.tempocommunityacademy.com";

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function setTitle(html, title) {
  if (!/<title>[^<]*<\/title>/.test(html)) throw new Error("No <title> tag found in template");
  return html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
}

/** Replace an existing <meta attr="key" ...> tag's content, or insert one before </head>. */
function upsertMeta(html, attr, key, value) {
  const tagRe = new RegExp(`<meta[^>]*\\b${attr}="${key}"[^>]*>`, "i");
  const newTag = `<meta ${attr}="${key}" content="${escapeHtml(value)}">`;
  if (tagRe.test(html)) return html.replace(tagRe, newTag);
  if (!html.includes("</head>")) throw new Error("No </head> tag found in template");
  return html.replace("</head>", `${newTag}\n</head>`);
}

/** Replace an existing <link rel="canonical" ...>, or insert one before </head>. */
function upsertCanonical(html, href) {
  const tagRe = /<link[^>]*\brel="canonical"[^>]*>/i;
  const newTag = `<link rel="canonical" href="${escapeHtml(href)}">`;
  if (tagRe.test(html)) return html.replace(tagRe, newTag);
  if (!html.includes("</head>")) throw new Error("No </head> tag found in template");
  return html.replace("</head>", `${newTag}\n</head>`);
}

function main() {
  const indexPath = join(DIST, "index.html");
  if (!existsSync(indexPath)) {
    console.error(`prerender: ${indexPath} not found. Run "npm run build" first.`);
    process.exit(1);
  }
  const template = readFileSync(indexPath, "utf8");

  const routeMeta = JSON.parse(readFileSync(join(ROOT, "src/lib/route-meta.json"), "utf8"));
  // Same set of routes as public/sitemap.xml: indexable pages only. /thanks
  // and /404 are noindex and stay on the plain SPA fallback.
  const routes = Object.entries(routeMeta).filter(([, meta]) => !meta.noindex);

  for (const [path, meta] of routes) {
    const fullTitle = path === "/" ? meta.title : `${meta.title} | Tempo Community Academy`;
    const url = `${BASE_URL}${path}`;

    let html = template;
    html = setTitle(html, fullTitle);
    html = upsertMeta(html, "name", "description", meta.description);
    html = upsertMeta(html, "property", "og:title", fullTitle);
    html = upsertMeta(html, "property", "og:description", meta.description);
    html = upsertMeta(html, "property", "og:url", url);
    html = upsertMeta(html, "name", "twitter:title", fullTitle);
    html = upsertMeta(html, "name", "twitter:description", meta.description);
    html = upsertCanonical(html, url);

    const outPath = path === "/" ? indexPath : join(DIST, path.replace(/^\//, ""), "index.html");
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html);
    console.log(`prerender: wrote ${outPath.replace(ROOT + "/", "")}`);
  }
}

main();
