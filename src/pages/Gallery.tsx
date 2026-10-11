import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";
import routeMeta from "@/lib/route-meta.json";

const TILES: [string, string, string][] = [
  ["gallery-art.webp", "An instructor working beside a student on a Korean ink painting", "Art & Design"],
  ["gallery-cooking.webp", "A student stir-frying at a portable burner with an instructor helping", "Cooking & Baking"],
  ["gallery-dance.webp", "Students and an instructor mid-move during a dance class", "Dance & Body Form"],
  ["gallery-computer-science.webp", "An instructor leaning in to help a student at a laptop", "Computer Science"],
  ["gallery-baking.webp", "A baking instructor preparing food alongside students at a table", "Baking"],
  ["gallery-tshirt-design.webp", "An instructor showing a student how to use a heat press to make a custom T-shirt", "T-shirt design"],
  ["gallery-community-event.webp", "A staff member and a student high-fiving at a trampoline park outing", "Community events"],
  ["gallery-student-art.webp", "Framed student artwork displayed on easels at an art show", "Student projects"],
  ["gallery-studio-kitchen.webp", "Students and staff cooking together in the teaching kitchen", "Our studio"],
];

// Shown after "See more photos" so the first view stays light; they aren't in
// the DOM (or downloaded) until then.
const MORE: [string, string, string][] = [
  ["more-art-flower-painting.webp", "A student painting red flowers in a vase on a purple canvas", "Art & Design"],
  ["more-art-ink-drawing.webp", "A student tracing a detailed flower drawing beside an ink stone", "Art & Design"],
  ["more-art-canvases.webp", "Four student paintings of flowers and city scenes displayed on a shelf", "Student projects"],
  ["more-art-exhibit.webp", "A student looking at framed student artwork hung along a wall", "Student projects"],
  ["more-tshirt-heat-press.webp", "An instructor and a student lining up a design on a T-shirt next to the heat press", "T-shirt design"],
  ["more-tshirt-workshop.webp", "Students and instructors working on T-shirts around a table in the design room", "T-shirt design"],
  ["more-tshirt-finished.webp", "Finished white T-shirts with custom lettering laid out on a table", "Student projects"],
  ["more-tshirt-inhale-exhale.webp", "A finished T-shirt printed with \"Inhale\" and \"Exhale\" designs", "Student projects"],
  ["more-cooking-demo.webp", "An instructor demonstrating how to stir-fry zucchini on a portable burner", "Cooking & Baking"],
  ["more-cooking-noodles.webp", "A student in an apron stirring noodles in a pan", "Cooking & Baking"],
  ["more-cooking-prep.webp", "Students and instructors chopping vegetables together on green cutting boards", "Cooking & Baking"],
  ["more-cooking-stuffed-mushrooms.webp", "A tray of stuffed mushrooms and perilla leaves being prepared", "Cooking & Baking"],
  ["more-cooking-songpyeon-table.webp", "An instructor helping students shape songpyeon rice cakes for Chuseok", "Cooking & Baking"],
  ["more-cooking-songpyeon-dough.webp", "A young student in gloves kneading rice cake dough in a mixing bowl", "Cooking & Baking"],
  ["more-baking-mixing.webp", "A student mixing cream for a pie with strawberries nearby", "Baking"],
  ["more-baking-parfait.webp", "A finished strawberry parfait topped with pink cream", "Baking"],
  ["more-baking-thumbs-up.webp", "A student giving a thumbs-up over a plate of food they made", "Baking"],
  ["more-cs-group.webp", "Students working on laptops at tables in the computer lab", "Computer Science"],
  ["more-cs-laptops.webp", "An overhead view of a student and instructor working on laptops", "Computer Science"],
  ["more-cs-worksheets.webp", "Students working through laptop lessons and worksheets at a long table", "Computer Science"],
  ["more-event-bounce.webp", "Tempo staff in green shirts at a trampoline park outing", "Community events"],
  ["more-event-party.webp", "Students and staff gathered around a party table at a community event", "Community events"],
  ["more-team.webp", "Five Tempo team members smiling together in front of window blinds", "Our team"],
];

export default function Gallery() {
  useSeo({ path: "/gallery", ...routeMeta["/gallery"] });
  const [showMore, setShowMore] = useState(false);
  const firstMoreRef = useRef<HTMLElement>(null);

  // The button disappears once clicked, so hand keyboard focus to the first new photo.
  useEffect(() => {
    if (showMore) firstMoreRef.current?.focus();
  }, [showMore]);

  return (
    <Layout>
      <div className="page-hero">
        <div className="wrap">
          <h1>Gallery</h1>
          <p>Moments from our classes and community.</p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="gallery-grid">
            {TILES.map(([img, alt, caption]) => (
              <figure key={img}>
                <img src={`/assets/${img}`} width={800} height={800} loading="lazy" alt={alt} />
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
            {showMore &&
              MORE.map(([img, alt, caption], i) => (
                <figure key={img} ref={i === 0 ? firstMoreRef : undefined} tabIndex={i === 0 ? -1 : undefined}>
                  <img src={`/assets/${img}`} width={800} height={800} loading="lazy" alt={alt} />
                  <figcaption>{caption}</figcaption>
                </figure>
              ))}
          </div>
          {!showMore && (
            <div className="gallery-more">
              <button type="button" className="btn btn-ghost" onClick={() => setShowMore(true)}>
                See more photos ({MORE.length})
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h2>Want to see it in person?</h2>
              <p>Book an appointment and visit the studio.</p>
            </div>
            <Link className="btn btn-light" to="/contact">Get in touch</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
