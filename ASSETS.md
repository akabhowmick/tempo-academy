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
| `TCA team members/Headshots of insturctors/PXL_20231224_170225167.MP.jpg` | **Unnamed** casual phone photo: man, flannel over graphic tee. Jin Park (assumed, please double-check) | Instructors, Jin Park (`About.tsx`) | `team-jin-park.webp` |
| `TCA team members/Headshots of insturctors/Team Bios_.docx` | Bios for Halle, Cesia, Jasmine. Pognee and Jin are headings with no text | Bio text for Halle, Cesia, Jasmine (`About.tsx`) | n/a (text) |

Sizes: hero 1200×900 (renders in the right column at about 520px), program cards 1200×900, gallery tiles 800×800,
headshots 600×600. All are center/attention-cropped from the source.

## Unplaced

- **Group photos** (`TCA team members/Group photos/`): `IMG_6313.jpg` is the best
  full-team photo (5 staff in TCA shirts in front of a chalkboard, all smiling at
  camera). It could go on About as a new "Our team" image, but there's no slot
  for it today. Near-duplicates: `IMG_3958.jpeg`, `IMG_3960.jpg`, `IMG_3961.jpg`.
  Indoor team shots against the blinds: `10_3 Group 1.JPG` and `10_3 Group 2.jpg`.
  Also `10_3 Behind the Scenes.JPG` (black and white) and `IMG_3634.jpeg` (two
  staff working at laptops).
- **`Headshots of insturctors/image.jpeg`**: a cartoon chef illustration, probably
  a stand-in for the cooking instructor. Not recommended next to real photos.
- **`TCA Frequently Asked Questions.docx`**: a long official FAQ (about 30
  questions). Home already has a 5-question FAQ. It could go on a new /faq page,
  or I could add a few of its questions to Home. It's not a PDF, so there's
  nothing for `public/resources/` unless you want it exported as one.
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
- Cafe & More and Makeup & Beauty use `cafe-image.png` / `makeup.png`
  ("Photo coming soon" stand-ins rendered from the old placeholder art).
- The testimonials section was removed from Home.

## Still missing

- **Cafe & More and Makeup & Beauty photos**: replace `cafe-image.png` /
  `makeup.png` when photos arrive.
- **Headshots**: Eunice Lee and Pognee Kim (they show an initials badge).
- **Bios**: Inae Kim, Cynthia Martinez, Eunice Lee, Pognee Kim, Jin Park.
- **Logo**: none in the folder, so favicons and `og.png` are unchanged.
