# Asset map

Raw originals live in `assets-src/` (gitignored, never committed). Paths below
are relative to `assets-src/TCA Website folder/`. Optimized WebP output goes to
`public/assets/`. 11 HEIC files were converted to JPEG in place (same name,
`.jpg`).

Source folder contents: 150 images, 1 video (`.MOV`), 3 Word docs. No logo, no
PDFs, no testimonials.

## Placed

| Source file | What it is | Destination (file + component) | New filename |
| --- | --- | --- | --- |
| `Class photos/Events/IMG_4181.jpg` | Large community group photo at a trampoline park, ~40 people, staff in green TCA shirts, everyone smiling at camera. Landscape 4:3, bright and colorful | Home hero, replaces the SVG bar illustration in `.hero-art` (`Home.tsx`) | `hero-community.webp` |
| `Class photos/Art - Fine Art/IMG_5328.jpeg` | Close-up of hands painting a bright flower still life on canvas, paints and brushes around | Art card (`Home.tsx` PROGRAMS) + Art section (`Courses.tsx`) | `program-art.webp` |
| `Class photos/Cooking/SongPyeonRiceCake/IMG_7192.jpg` | Instructor in green TCA shirt guiding students shaping songpyeon rice cakes at a table of mixing bowls | Cooking card (`Home.tsx`) + Cooking section (`Courses.tsx`) | `program-cooking.webp` |
| `Class photos/Dance&BodyForm/IMG_1584.jpeg` | Instructor on stage leading two students in a squat/movement exercise in the dance room | Dance card (`Home.tsx`) + Dance section (`Courses.tsx`) | `program-dance.webp` |
| `Class photos/Computer /IMG_6967.jpeg` | Students working on laptops around a wooden table, instructor at the head of the table. Landscape | CS card (`Home.tsx`) + CS section (`Courses.tsx`) | `program-computer-science.webp` |
| `Class photos/cafe-image.png` | Stock-style shot: pour-over coffee brewing beside a hand grinder (620×496, supplied later) | Cafe card (`Home.tsx`) + Cafe section (`Courses.tsx`) | `program-cafe.webp` |
| `Class photos/makeup.png` | Stock-style shot: open makeup kit with palettes and brushes (616×482, supplied later) | Makeup card (`Home.tsx`) + Beauty section (`Courses.tsx`) | `program-makeup.webp` |
| Uploaded favicon pack (rainbow tree TEMPO logo; the upload folder was deleted after copying) | Logo icons | `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`; the 512 icon is also the source for `og.png` and the header logo (`logo.webp`, white keyed out) | as listed |
| `Class photos/Art - Fine Art/IMG_6037.jpeg` | Instructor beside a student doing Korean ink painting at a long table | Gallery tile "Art & Design" (`Gallery.tsx`) | `gallery-art.webp` |
| `Class photos/Cooking/IMG_6229.jpeg` | Student stir-frying at a portable burner with the instructor helping | Gallery tile "Cooking & Baking" | `gallery-cooking.webp` |
| `Class photos/Dance&BodyForm/IMG_4417.JPG` | Students and instructor mid-dance-move in the dance room | Gallery tile "Dance & Body Form" | `gallery-dance.webp` |
| `Class photos/Computer /IMG_1508.jpeg` | Instructor leaning in to help a student at a laptop in the computer room | Gallery tile "Computer Science" | `gallery-computer-science.webp` |
| `Class photos/Baking/IMG_1545.jpeg` | Baking instructor working alongside students at a table, food prep in progress | Gallery tile, **replaces "Cafe & More"** (no cafe photos), caption "Baking" | `gallery-baking.webp` |
| `Class photos/Art- Tshirt desingning/IMG_7352.jpeg` | Instructor showing a student how to use the heat press for T-shirt design | Gallery tile, **replaces "Makeup & Beauty"** (no beauty photos), caption "T-shirt design" | `gallery-tshirt-design.webp` |
| `Class photos/Events/IMG_4195.jpeg` | Staff member and student high-fiving at a trampoline park event | Gallery tile "Community events" | `gallery-community-event.webp` |
| `Class photos/Art - Fine Art/IMG_4476.JPG` | Framed student artwork (watercolor/marker scenes) on easels at an exhibit | Gallery tile "Student projects" | `gallery-student-art.webp` |
| `Class photos/Cooking/IMG_4787.jpeg` | Teaching kitchen: shelves, cookware, students and staff cooking together | Gallery tile "Our studio" | `gallery-studio-kitchen.webp` |
| `TCA team members/Headshots of insturctors/InaeKim.jpg` | Inae Kim, seated studio portrait, grey blazer | Leadership, Inae Kim (`About.tsx`) | `team-inae-kim.webp` |
| `TCA team members/Headshots of insturctors/Cynthia Martinez_.jpg` | Cynthia Martinez, studio portrait, teal blazer | Leadership, Cynthia Martinez (`About.tsx`) | `team-cynthia-martinez.webp` |
| `TCA team members/Headshots of insturctors/Cesia Maldonado.png` | Cesia Maldonado, portrait, black blazer | Instructors, Cesia Maldonado (`About.tsx`) | `team-cesia-maldonado.webp` |
| `TCA team members/Headshots of insturctors/Halle Kim.png` | Halle Kim, portrait, glasses, grey top | Instructors, Halle Kim (`About.tsx`) | `team-halle-kim.webp` |
| `TCA team members/Headshots of insturctors/D1F74B83-4F06-43A2-95A8-6F4AFF005CAB.PNG` | **Unnamed** headshot: woman with curly hair, black top. Jasmine Rodriguez (confirmed) | Instructors, Jasmine Rodriguez (`About.tsx`) | `team-jasmine-rodriguez.webp` |
| `TCA team members/Headshots of insturctors/PXL_20231224_170225167.MP.jpg` | Casual phone photo of a man in a flannel over a graphic tee. Pognee Kim (confirmed by Inae, who renamed it in the Drive folder) | Instructors, Pognee Kim (`src/lib/team.ts`) | `team-pognee-kim.webp` |
| `TCA team members/Headshots of insturctors/image.jpeg` | Cartoon chef illustration. Jin Bok's choice instead of a headshot (per Inae) | Instructors, Jin Bok (`src/lib/team.ts`) | `team-jin-bok.webp` |
| `TCA team members/Headshots of insturctors/Team Bios_.docx` | Bios for Halle, Cesia, Jasmine. Pognee and Jin are headings with no text | Bio text for Halle, Cesia, Jasmine (`About.tsx`) | n/a (text) |

Sizes: hero 1200×900 (renders in the right column at about 520px), program cards 1200×900, gallery tiles 800×800,
headshots 600×600. Crops are centered on the people in each photo via per-image focal points
in `scripts/optimize-images.mjs`. Cafe and makeup stay at their native ~620px.

## FAQ

`TCA Frequently Asked Questions.docx` is the full `/faq` page (`src/pages/Faq.tsx`).
The "register through our website" answer was changed to call/email/contact
page, since the site has no online registration. Home keeps a 3-question
teaser linking to it.

## Gallery "See more"

23 more photos, square-cropped to `public/assets/more-*.webp` and listed in
`MORE` in `Gallery.tsx`. They load only after the visitor taps "See more
photos". Sources and focal points are in `scripts/optimize-images.mjs`.

## Unplaced

- **Group photos** (`TCA team members/Group photos/`): `IMG_6313.jpg` is the best
  full-team photo (5 staff in TCA shirts in front of a chalkboard, all smiling at
  camera). It could go on About as a new "Our team" image, but there's no slot
  for it today. Near-duplicates: `IMG_3958.jpeg`, `IMG_3960.jpg`, `IMG_3961.jpg`.
  Indoor team shots against the blinds: `10_3 Group 1.JPG` and `10_3 Group 2.jpg`.
  Also `10_3 Behind the Scenes.JPG` (black and white) and `IMG_3634.jpeg` (two
  staff working at laptops).
- **`Cooking/SongPyeonRiceCake/What is Songpyeon.docx`**: a short social-post
  style write-up about the Chuseok songpyeon class. It would make a good gallery
  caption or news blurb, but there's no slot for it today.
- **`Cooking/SongPyeonRiceCake/IMG_7200.MOV`**: video. There's no video slot, and
  it's too heavy to self-host without transcoding.
- **Other class photos** (alternates for future swaps). Strong ones:
  - Art: `IMG_5316` (painting close-up), `IMG_4477` (paintings on a shelf),
    `IMG_4487` (exhibit table)
  - Cooking: `IMG_3750` (child at the stove), `IMG_7191` (songpyeon wide shot),
    `IMG_6231` (stir-fry)
  - Baking: `IMG_7481` (student giving a thumbs-up), `IMG_6637` (parfait)
  - CS: `IMG_6494` (laptops from overhead), `IMG_7443` (group at laptops)
  - T-shirt: `IMG_6558` (finished shirts), `IMG_8654` ("Inhale/Exhale" shirt)
  - Events: `IMG_4176` (near-duplicate of the hero photo)

  The rest are similar angles of the same sessions: Art 6, Baking 22, Computer
  20, Cooking 31, Dance 8, Events 5, T-shirt 18.

## Decisions (owner review)

- Bios doc is the source of truth: Cesia is Office Manager plus Beginner
  Computer instructor, so she moved to Leadership and Lynn Lee was removed.
- The 929-810-8648 English & Spanish line is now listed under Cynthia, not Cesia.
- Cafe & More and Makeup & Beauty use the owner-supplied `cafe-image.png` /
  `makeup.png` (optimized to `program-cafe.webp` / `program-makeup.webp`).
- Favicons and `og.png` use the uploaded logo. No vector logo, so the old
  `favicon.svg` was removed.
- The testimonials section was removed from Home.

## Still missing

- **Vector logo**: only PNG/ICO icons were supplied, so there's no `favicon.svg`.
