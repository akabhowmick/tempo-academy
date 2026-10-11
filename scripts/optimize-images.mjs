// Converts the raw client photos in assets-src/ (gitignored) into optimized
// WebP files in public/assets/. The mapping mirrors ASSETS.md. Each image is
// auto-rotated from its EXIF orientation, cropped, resized to 2x its largest
// rendered size, and written with all metadata (including GPS) stripped, which
// is sharp's default when withMetadata() is not called.
import sharp from "sharp";
import { existsSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const SRC = "assets-src/TCA Website folder";
const OUT = "public/assets";
const QUALITY = 78;
const WARN_KB = 300;

const HERO = { width: 1200, height: 900 };
const CARD = { width: 1200, height: 900 };
const TILE = { width: 800, height: 800 };
const HEADSHOT = { width: 600, height: 600, position: "north" };

// Cropping: `focus: [x, y]` (0-1 fractions of the rotated source) is where
// the people are. The largest box with the slot's aspect ratio is centered
// there, clamped to the frame, so subjects stay in the middle instead of
// getting cut off. Measured by eye per photo; re-check if you swap a source.
// Without `focus`, `position` is passed to sharp (default: centre), and
// `extract` takes an explicit source-pixel region instead. `zoom` > 1 tightens
// the focus box when the subject is small in a near-square source.
const IMAGES = [
  ["Class photos/Events/IMG_4181.jpg", "hero-community.webp", { ...HERO, focus: [0.5, 0.6] }],

  ["Class photos/Art - Fine Art/IMG_5328.jpeg", "program-art.webp", { ...CARD, focus: [0.5, 0.3] }],
  ["Class photos/Cooking/SongPyeonRiceCake/IMG_7192.jpg", "program-cooking.webp", { ...CARD, focus: [0.5, 0.35] }],
  ["Class photos/Dance&Body Form/IMG_1584.jpeg", "program-dance.webp", { ...CARD, focus: [0.5, 0.6] }],
  ["Class photos/Computer /IMG_6967.jpeg", "program-computer-science.webp", { ...CARD, focus: [0.55, 0.5] }],
  // Stock-style photos supplied at ~620px wide, so they stay at native size.
  ["Class photos/cafe-image.png", "program-cafe.webp", { width: 620, height: 465 }],
  ["Class photos/makeup.png", "program-makeup.webp", { width: 616, height: 462 }],

  ["Class photos/Art - Fine Art/IMG_6037.jpeg", "gallery-art.webp", { ...TILE, focus: [0.5, 0.49] }],
  ["Class photos/Cooking/IMG_6229.jpeg", "gallery-cooking.webp", { ...TILE, focus: [0.5, 0.33] }],
  ["Class photos/Dance&Body Form/IMG_4417.JPG", "gallery-dance.webp", { ...TILE, focus: [0.5, 0.48] }],
  ["Class photos/Computer /IMG_1508.jpeg", "gallery-computer-science.webp", { ...TILE, focus: [0.5, 0.6] }],
  ["Class photos/Baking/IMG_1545.jpeg", "gallery-baking.webp", { ...TILE, focus: [0.5, 0.55] }],
  ["Class photos/Art- Tshirt desingning/IMG_7352.jpeg", "gallery-tshirt-design.webp", { ...TILE, focus: [0.5, 0.42] }],
  ["Class photos/Events/IMG_4195.jpeg", "gallery-community-event.webp", { ...TILE, focus: [0.5, 0.62] }],
  ["Class photos/Art - Fine Art/IMG_4476.JPG", "gallery-student-art.webp", { ...TILE, focus: [0.45, 0.5] }],
  ["Class photos/Cooking/IMG_4787.jpeg", "gallery-studio-kitchen.webp", { ...TILE, focus: [0.5, 0.62] }],

  // Gallery "See more" set (Gallery.tsx MORE), same square tile size.
  ["Class photos/Art - Fine Art/IMG_5316.jpeg", "more-art-flower-painting.webp", { ...TILE, focus: [0.5, 0.55] }],
  ["Class photos/Art - Fine Art/IMG_4477.JPG", "more-art-canvases.webp", { ...TILE, focus: [0.48, 0.5] }],
  ["Class photos/Art - Fine Art/IMG_4057.jpeg", "more-art-ink-drawing.webp", { ...TILE, focus: [0.5, 0.5] }],
  ["Class photos/Art - Fine Art/IMG_4486.jpg", "more-art-exhibit.webp", { ...TILE, focus: [0.5, 0.45] }],
  ["Class photos/Art- Tshirt desingning/IMG_6558.JPG", "more-tshirt-finished.webp", { ...TILE, focus: [0.5, 0.55] }],
  ["Class photos/Art- Tshirt desingning/IMG_6884.jpeg", "more-tshirt-workshop.webp", { ...TILE, focus: [0.5, 0.48] }],
  ["Class photos/Art- Tshirt desingning/IMG_8654.jpeg", "more-tshirt-inhale-exhale.webp", { ...TILE, focus: [0.5, 0.6] }],
  ["Class photos/Art- Tshirt desingning/IMG_7357.jpeg", "more-tshirt-heat-press.webp", { ...TILE, focus: [0.5, 0.48] }],
  ["Class photos/Cooking/IMG_3750.JPG", "more-cooking-noodles.webp", { ...TILE, focus: [0.5, 0.35] }],
  ["Class photos/Cooking/SongPyeonRiceCake/IMG_7191.jpg", "more-cooking-songpyeon-table.webp", { ...TILE, focus: [0.5, 0.4] }],
  ["Class photos/Cooking/SongPyeonRiceCake/IMG_7199.jpg", "more-cooking-songpyeon-dough.webp", { ...TILE, focus: [0.5, 0.37] }],
  ["Class photos/Cooking/IMG_3719.jpeg", "more-cooking-demo.webp", { ...TILE, focus: [0.5, 0.38] }],
  ["Class photos/Cooking/IMG_4449.jpeg", "more-cooking-stuffed-mushrooms.webp", { ...TILE, focus: [0.5, 0.45] }],
  ["Class photos/Cooking/IMG_6997.jpeg", "more-cooking-prep.webp", { ...TILE, focus: [0.5, 0.5] }],
  ["Class photos/Baking/IMG_6637.jpeg", "more-baking-parfait.webp", { ...TILE, focus: [0.5, 0.55] }],
  ["Class photos/Baking/IMG_7481.jpeg", "more-baking-thumbs-up.webp", { ...TILE, focus: [0.5, 0.5] }],
  ["Class photos/Baking/IMG_5653.jpeg", "more-baking-mixing.webp", { ...TILE, focus: [0.5, 0.37] }],
  ["Class photos/Computer /IMG_6494.jpeg", "more-cs-laptops.webp", { ...TILE, focus: [0.4, 0.5] }],
  ["Class photos/Computer /IMG_7443.jpeg", "more-cs-group.webp", { ...TILE, focus: [0.5, 0.55] }],
  ["Class photos/Computer /IMG_6181.jpeg", "more-cs-worksheets.webp", { ...TILE, focus: [0.5, 0.45] }],
  ["Class photos/Events/IMG_4831.jpeg", "more-event-bounce.webp", { ...TILE, focus: [0.5, 0.5] }],
  ["Class photos/Events/IMG_4921.jpeg", "more-event-party.webp", { ...TILE, focus: [0.5, 0.55] }],
  ["TCA team members/Group photos/10_3 Group 1.JPG", "more-team.webp", { ...TILE, focus: [0.55, 0.62], zoom: 1.2 }],

  ["TCA team members/Headshots of insturctors/InaeKim.jpg", "team-inae-kim.webp", { ...HEADSHOT, extract: { left: 730, top: 150, width: 1400, height: 1400 } }],
  ["TCA team members/Headshots of insturctors/Cynthia Martinez_.jpg", "team-cynthia-martinez.webp", HEADSHOT],
  ["TCA team members/Headshots of insturctors/Cesia Maldonado.png", "team-cesia-maldonado.webp", HEADSHOT],
  ["TCA team members/Headshots of insturctors/Halle Kim.png", "team-halle-kim.webp", HEADSHOT],
  ["TCA team members/Headshots of insturctors/D1F74B83-4F06-43A2-95A8-6F4AFF005CAB.PNG", "team-jasmine-rodriguez.webp", HEADSHOT],
  ["TCA team members/Headshots of insturctors/PXL_20231224_170225167.MP.jpg", "team-jin-park.webp", HEADSHOT],
];

/** Largest box with the target aspect ratio, centered on the focus point, clamped to the image. */
function focusBox(srcW, srcH, width, height, [fx, fy], zoom = 1) {
  const scale = Math.min(srcW / width, srcH / height) / zoom;
  const w = Math.round(width * scale);
  const h = Math.round(height * scale);
  const clamp = (v, max) => Math.min(Math.max(v, 0), max);
  return {
    left: clamp(Math.round(fx * srcW - w / 2), srcW - w),
    top: clamp(Math.round(fy * srcH - h / 2), srcH - h),
    width: w,
    height: h,
  };
}

if (!existsSync(SRC)) {
  console.error(`Missing ${SRC}. Download the client's Drive folder into assets-src/ first.`);
  process.exit(1);
}
mkdirSync(OUT, { recursive: true });

const oversized = [];
for (const [src, name, { width, height, position = "centre", focus, zoom, extract }] of IMAGES) {
  const out = join(OUT, name);
  // Rotate first, as its own pass, so crop coordinates refer to the upright image.
  // Raw pixels in between, so there's no extra lossy re-encode.
  const { data, info: rotated } = await sharp(join(SRC, src)).autoOrient().raw().toBuffer({ resolveWithObject: true });
  let img = sharp(data, { raw: { width: rotated.width, height: rotated.height, channels: rotated.channels } });
  if (focus) img = img.extract(focusBox(rotated.width, rotated.height, width, height, focus, zoom));
  else if (extract) img = img.extract(extract);
  const info = await img
    .resize({ width, height, fit: "cover", position, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(out);
  const kb = Math.round(statSync(out).size / 1024);
  if (kb > WARN_KB) oversized.push(name);
  console.log(`${name.padEnd(34)} ${String(info.width).padStart(4)}x${String(info.height).padEnd(4)} ${String(kb).padStart(4)} KB${kb > WARN_KB ? "  <-- over 300KB" : ""}`);
}

if (oversized.length) console.log(`\nOver ${WARN_KB}KB: ${oversized.join(", ")}`);
else console.log(`\nAll outputs under ${WARN_KB}KB.`);
