import { useEffect } from "react";

interface SeoOptions {
  title: string;
  description: string;
  path: string; // e.g. "/courses"
  noindex?: boolean;
}

const BASE_URL = "https://www.tempocommunityacademy.com";

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Sets document title and meta tags on route change.
 * This is a client-rendered SPA (Vite), so these tags update after JS runs.
 * If a crawler needs tags present in the initial HTML (some social-preview
 * bots do), prerender the build (e.g. vite-plugin-ssr, or a Vercel static
 * export step) before launch. See README.
 */
export function useSeo({ title, description, path, noindex }: SeoOptions) {
  useEffect(() => {
    const fullTitle = path === "/" ? title : `${title} | Tempo Community Academy`;
    document.title = fullTitle;
    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", `${BASE_URL}${path}`, "property");
    setCanonical(`${BASE_URL}${path}`);
    if (noindex) {
      setMeta("robots", "noindex");
    } else {
      const el = document.head.querySelector('meta[name="robots"]');
      if (el) el.remove();
    }
  }, [title, description, path, noindex]);
}
