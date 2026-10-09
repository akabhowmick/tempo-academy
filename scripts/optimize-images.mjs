// Converts the raw client photos in assets-src/ (gitignored) into optimized
// WebP files in public/assets/. The mapping mirrors ASSETS.md. Each image is
// auto-rotated from its EXIF orientation, resized to 2x its largest rendered
// size, and written with all metadata (including GPS) stripped, which is
// sharp's default when withMetadata() is not called.
import sharp from "sharp";
import { existsSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const SRC = "assets-src/TCA Website folder";
const OUT = "public/assets";
const QUALITY = 78;
const WARN_KB = 300;

// Crops default to sharp's attention strategy. A slot can override with
// `position` (e.g. "north" keeps faces in tall portraits) or a manual
// `extract` region in source pixels when the subject is small in frame.
const HERO = { width: 1200, height: 900 };
const CARD = { width: 1200, height: 900 };
const TILE = { width: 800, height: 800 };
const HEADSHOT = { width: 600, height: 600, position: "north" };

const IMAGES = [
  ["Class photos/Events/IMG_4181.jpg", "hero-community.webp", HERO],

  ["Class photos/Art - Fine Art/IMG_5328.jpeg", "program-art.webp", CARD],
  ["Class photos/Cooking/SongPyeonRiceCake/IMG_7192.jpg", "program-cooking.webp", { ...CARD, position: "centre" }],
  ["Class photos/Dance&Body Form/IMG_1584.jpeg", "program-dance.webp", CARD],
  ["Class photos/Computer /IMG_6967.jpeg", "program-computer-science.webp", CARD],

  ["Class photos/Art - Fine Art/IMG_6037.jpeg", "gallery-art.webp", TILE],
  ["Class photos/Cooking/IMG_6229.jpeg", "gallery-cooking.webp", { ...TILE, position: "centre" }],
  ["Class photos/Dance&Body Form/IMG_4417.JPG", "gallery-dance.webp", { ...TILE, position: "centre" }],
  ["Class photos/Computer /IMG_1508.jpeg", "gallery-computer-science.webp", TILE],
  ["Class photos/Baking/IMG_1545.jpeg", "gallery-baking.webp", TILE],
  ["Class photos/Art- Tshirt desingning/IMG_7352.jpeg", "gallery-tshirt-design.webp", TILE],
  ["Class photos/Events/IMG_4195.jpeg", "gallery-community-event.webp", TILE],
  ["Class photos/Art - Fine Art/IMG_4476.JPG", "gallery-student-art.webp", TILE],
  ["Class photos/Cooking/IMG_4787.jpeg", "gallery-studio-kitchen.webp", TILE],

  ["TCA team members/Headshots of insturctors/InaeKim.jpg", "team-inae-kim.webp", { ...HEADSHOT, extract: { left: 730, top: 150, width: 1400, height: 1400 } }],
  ["TCA team members/Headshots of insturctors/Cynthia Martinez_.jpg", "team-cynthia-martinez.webp", HEADSHOT],
  ["TCA team members/Headshots of insturctors/Cesia Maldonado.png", "team-cesia-maldonado.webp", HEADSHOT],
  ["TCA team members/Headshots of insturctors/Halle Kim.png", "team-halle-kim.webp", HEADSHOT],
  ["TCA team members/Headshots of insturctors/D1F74B83-4F06-43A2-95A8-6F4AFF005CAB.PNG", "team-jasmine-rodriguez.webp", HEADSHOT],
  ["TCA team members/Headshots of insturctors/PXL_20231224_170225167.MP.jpg", "team-jin-park.webp", HEADSHOT],
];

if (!existsSync(SRC)) {
  console.error(`Missing ${SRC}. Download the client's Drive folder into assets-src/ first.`);
  process.exit(1);
}
mkdirSync(OUT, { recursive: true });

const oversized = [];
for (const [src, name, { width, height, position = sharp.strategy.attention, extract }] of IMAGES) {
  const out = join(OUT, name);
  let img = sharp(join(SRC, src)).autoOrient();
  if (extract) img = sharp(await img.toBuffer()).extract(extract);
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
