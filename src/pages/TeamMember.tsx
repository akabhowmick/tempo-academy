import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";
import routeMeta from "@/lib/route-meta.json";
import { TEAM, initials } from "@/lib/team";
import NotFound from "@/pages/NotFound";

const META = routeMeta as Record<string, { title: string; description: string }>;

export default function TeamMember() {
  const { slug } = useParams();
  const person = TEAM.find((p) => p.slug === slug && p.bio);
  const path = `/about/${slug}`;
  // Hooks can't be conditional, so fall back to the 404 meta for unknown slugs.
  useSeo({ path: person ? path : "/404", ...(META[path] ?? META["/404"]) });

  if (!person?.bio) return <NotFound />;

  return (
    <Layout>
      <div className="page-hero">
        <div className="wrap">
          <h1>{person.name}</h1>
          <p>{[person.credentials, person.role].filter(Boolean).join(" · ")}</p>
        </div>
      </div>

      <section className="section">
        <div className="wrap bio-grid">
          {person.img ? (
            <img className="bio-photo" src={`/assets/${person.img}`} width={600} height={600} alt={person.imgAlt ?? `Portrait of ${person.name}`} />
          ) : (
            <span className="bio-photo initials" aria-hidden="true">{initials(person)}</span>
          )}
          <div className="prose">
            {person.bio.map((para) => <p key={para}>{para}</p>)}
            <p className="bio-back"><Link className="btn btn-ghost" to="/about">Meet the rest of the team</Link></p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h2>Come meet us</h2>
              <p>Visits are by appointment. We would love to show you around.</p>
            </div>
            <Link className="btn btn-light" to="/contact">Book a visit</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
