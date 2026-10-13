// Gallery categories for /gallery (one cover tile each, the first photo) and
// the /gallery/:slug pages (every photo in the category). Each category page
// also needs an entry in src/lib/route-meta.json and public/sitemap.xml so
// it gets prerendered. Images are 800x800 tiles from scripts/optimize-images.mjs.
export interface Photo {
  img: string;
  alt: string;
}

export interface GalleryCategory {
  slug: string;
  title: string;
  photos: Photo[];
}

export const GALLERY: GalleryCategory[] = [
  {
    slug: "art-design",
    title: "Art & Design",
    photos: [
      { img: "gallery-art.webp", alt: "An instructor working beside a student on a Korean ink painting" },
      { img: "more-art-flower-painting.webp", alt: "A student painting red flowers in a vase on a purple canvas" },
      { img: "more-art-ink-drawing.webp", alt: "A student tracing a detailed flower drawing beside an ink stone" },
    ],
  },
  {
    slug: "cooking-baking",
    title: "Cooking & Baking",
    photos: [
      { img: "gallery-cooking.webp", alt: "A student stir-frying at a portable burner with an instructor helping" },
      { img: "more-cooking-demo.webp", alt: "An instructor demonstrating how to stir-fry zucchini on a portable burner" },
      { img: "more-cooking-noodles.webp", alt: "A student in an apron stirring noodles in a pan" },
      { img: "more-cooking-prep.webp", alt: "Students and instructors chopping vegetables together on green cutting boards" },
      { img: "more-cooking-stuffed-mushrooms.webp", alt: "A tray of stuffed mushrooms and perilla leaves being prepared" },
      { img: "more-cooking-songpyeon-table.webp", alt: "An instructor helping students shape songpyeon rice cakes for Chuseok" },
      { img: "more-cooking-songpyeon-dough.webp", alt: "A young student in gloves kneading rice cake dough in a mixing bowl" },
    ],
  },
  {
    slug: "dance-body-form",
    title: "Dance & Body Form",
    photos: [
      { img: "gallery-dance.webp", alt: "Students and an instructor mid-move during a dance class" },
      { img: "more-dance-squat.webp", alt: "Students holding a squat beside foam rollers while an instructor leads from the stage" },
      { img: "more-dance-moves.webp", alt: "Two students stepping through a dance move as the instructor demonstrates" },
      { img: "more-dance-floor.webp", alt: "A student in a floral shirt following along during dance class" },
    ],
  },
  {
    slug: "computer-science",
    title: "Computer Science",
    photos: [
      { img: "gallery-computer-science.webp", alt: "An instructor leaning in to help a student at a laptop" },
      { img: "more-cs-group.webp", alt: "Students working on laptops at tables in the computer lab" },
      { img: "more-cs-laptops.webp", alt: "An overhead view of a student and instructor working on laptops" },
      { img: "more-cs-worksheets.webp", alt: "Students working through laptop lessons and worksheets at a long table" },
    ],
  },
  {
    slug: "baking",
    title: "Baking",
    photos: [
      { img: "gallery-baking.webp", alt: "A baking instructor preparing food alongside students at a table" },
      { img: "more-baking-mixing.webp", alt: "A student mixing cream for a pie with strawberries nearby" },
      { img: "more-baking-parfait.webp", alt: "A finished strawberry parfait topped with pink cream" },
      { img: "more-baking-thumbs-up.webp", alt: "A student giving a thumbs-up over a plate of food they made" },
    ],
  },
  {
    slug: "tshirt-design",
    title: "T-shirt design",
    photos: [
      { img: "gallery-tshirt-design.webp", alt: "An instructor showing a student how to use a heat press to make a custom T-shirt" },
      { img: "more-tshirt-heat-press.webp", alt: "An instructor and a student lining up a design on a T-shirt next to the heat press" },
      { img: "more-tshirt-workshop.webp", alt: "Students and instructors working on T-shirts around a table in the design room" },
    ],
  },
  {
    slug: "community-events",
    title: "Community events",
    photos: [
      { img: "gallery-community-event.webp", alt: "A staff member and a student high-fiving at a trampoline park outing" },
      { img: "more-event-bounce.webp", alt: "TEMPO staff in green shirts at a trampoline park outing" },
      { img: "more-event-party.webp", alt: "Students and staff gathered around a party table at a community event" },
    ],
  },
  {
    slug: "student-projects",
    title: "Student projects",
    photos: [
      { img: "gallery-student-art.webp", alt: "Framed student artwork displayed on easels at an art show" },
      { img: "more-art-canvases.webp", alt: "Four student paintings of flowers and city scenes displayed on a shelf" },
      { img: "more-art-exhibit.webp", alt: "A student looking at framed student artwork hung along a wall" },
      { img: "more-tshirt-finished.webp", alt: "Finished white T-shirts with custom lettering laid out on a table" },
      { img: "more-tshirt-inhale-exhale.webp", alt: "A finished T-shirt printed with \"Inhale\" and \"Exhale\" designs" },
    ],
  },
  {
    slug: "studio-team",
    title: "Our studio & team",
    photos: [
      { img: "gallery-studio-kitchen.webp", alt: "Students and staff cooking together in the teaching kitchen" },
      { img: "more-team.webp", alt: "Five TEMPO team members smiling together in front of window blinds" },
    ],
  },
];
