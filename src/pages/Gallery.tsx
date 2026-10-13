import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";
import routeMeta from "@/lib/route-meta.json";
import { GALLERY } from "@/lib/gallery";

export default function Gallery() {
  useSeo({ path: "/gallery", ...routeMeta["/gallery"] });

  return (
    <Layout>
      <div className="page-hero">
        <div className="wrap">
          <h1>Gallery</h1>
          <p>Moments from our classes and community. Pick a category to see all its photos.</p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="gallery-grid">
            {GALLERY.map((c) => (
              <Link className="gallery-link" to={`/gallery/${c.slug}`} key={c.slug}>
                <figure>
                  {/* The caption names the link, so the cover photo is decorative here. */}
                  <img src={`/assets/${c.photos[0].img}`} width={800} height={800} loading="lazy" alt="" />
                  <figcaption>
                    <strong>{c.title}</strong> · {c.photos.length} photos
                  </figcaption>
                </figure>
              </Link>
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
