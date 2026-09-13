import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";

const TILES: [string, string, string][] = [
  ["ph-1", "Placeholder: art class photo", "Art & Design"],
  ["ph-2", "Placeholder: cooking class photo", "Cooking & Baking"],
  ["ph-3", "Placeholder: dance class photo", "Dance & Body Form"],
  ["ph-4", "Placeholder: computer science class photo", "Computer Science"],
  ["ph-5", "Placeholder: cafe class photo", "Cafe & More"],
  ["ph-6", "Placeholder: makeup class photo", "Makeup & Beauty"],
  ["ph-7", "Placeholder: community event photo", "Community events"],
  ["ph-8", "Placeholder: student project photo", "Student projects"],
  ["ph-9", "Placeholder: studio photo", "Our studio"],
];

export default function Gallery() {
  useSeo({
    title: "Gallery",
    description: "Photos from classes and events at Tempo Community Academy in Bayside, Queens.",
    path: "/gallery",
  });

  return (
    <Layout>
      <div className="page-hero">
        <div className="wrap">
          <h1>Gallery</h1>
          <p>Moments from our classes and community. Photos below are placeholders until the academy&apos;s own photos are added.</p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="gallery-grid">
            {TILES.map(([img, alt, caption]) => (
              <figure key={img}>
                <img src={`/assets/${img}.svg`} width={800} height={600} loading="lazy" alt={alt} />
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
