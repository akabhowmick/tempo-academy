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

export default function Gallery() {
  useSeo({ path: "/gallery", ...routeMeta["/gallery"] });

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
          </div>
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
