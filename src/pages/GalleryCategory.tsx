import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";
import routeMeta from "@/lib/route-meta.json";
import { GALLERY } from "@/lib/gallery";
import NotFound from "@/pages/NotFound";

const META = routeMeta as Record<string, { title: string; description: string }>;

export default function GalleryCategory() {
  const { slug } = useParams();
  const category = GALLERY.find((c) => c.slug === slug);
  const path = `/gallery/${slug}`;
  // Hooks can't be conditional, so fall back to the 404 meta for unknown slugs.
  useSeo({ path: category ? path : "/404", ...(META[path] ?? META["/404"]) });

  if (!category) return <NotFound />;

  return (
    <Layout>
      <div className="page-hero">
        <div className="wrap">
          <p className="crumb"><Link to="/gallery">Gallery</Link></p>
          <h1>{category.title}</h1>
          <p>{category.photos.length} photos from our classes and community.</p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="gallery-grid">
            {category.photos.map((p) => (
              <figure key={p.img}>
                <img src={`/assets/${p.img}`} width={800} height={800} loading="lazy" alt={p.alt} />
              </figure>
            ))}
          </div>
          <p className="gallery-more">
            <Link className="btn btn-ghost" to="/gallery">Back to all photos</Link>
          </p>
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
