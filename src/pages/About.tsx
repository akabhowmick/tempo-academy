import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";
import routeMeta from "@/lib/route-meta.json";
import { LEADERSHIP, INSTRUCTORS, firstName, initials, type Person } from "@/lib/team";

function PersonCard({ p }: { p: Person }) {
  return (
    <div className="person">
      {p.img ? (
        <img src={`/assets/${p.img}`} width={600} height={600} loading="lazy" alt={`Portrait of ${p.name}`} />
      ) : (
        <span className="initials" aria-hidden="true">{initials(p)}</span>
      )}
      <h3>{p.name}</h3>
      {p.credentials && <p className="creds">{p.credentials}</p>}
      <p className="role">{p.role}</p>
      {p.teaser && <p>{p.teaser}</p>}
      {p.bio && <Link className="card-link" to={`/about/${p.slug}`}>Read {firstName(p)}&apos;s bio</Link>}
    </div>
  );
}

export default function About() {
  useSeo({ path: "/about", ...routeMeta["/about"] });

  return (
    <Layout>
      <div className="page-hero">
        <div className="wrap">
          <h1>About us</h1>
          <p>Compassion meets expertise. We provide experiential education that fosters creativity, skill development, and personal growth in a respectful, inclusive, and inspiring environment.</p>
        </div>
      </div>

      <section className="section">
        <div className="wrap prose">
          <h2>Our mission</h2>
          <p>Tempo Community Academy offers personalized creative and enrichment programs designed to nurture each learner&apos;s unique strengths and interests. Our services bring engaging, high quality learning experiences directly to community settings, allowing learners to grow in familiar and comfortable environments.</p>
          <p>Experienced instructors collaborate with each learner to create customized learning plans that foster creativity, build confidence, and strengthen essential life skills, empowering every learner to thrive in their unique way.</p>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="leadership-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="leadership-h">Leadership</h2>
          </div>
          <div className="grid-3">
            {LEADERSHIP.map((p) => <PersonCard p={p} key={p.name} />)}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="instructors-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="instructors-h">Instructors</h2>
            <p>Our team includes licensed NYS teachers and certified specialists across every program.</p>
          </div>
          <div className="grid-3">
            {INSTRUCTORS.map((p) => <PersonCard p={p} key={p.name} />)}
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
