import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";

const LEADERSHIP = [
  { name: "Inae Kim", role: "Program Director" },
  { name: "Cynthia Martinez", role: "Admin Director" },
  { name: "Lynn Lee", role: "Office Manager" },
];

const INSTRUCTORS = [
  { name: "Eunice Lee", role: "Art & Design, Beginner. Licensed NYS teacher" },
  { name: "Pognee Kim", role: "Art & Design and Computer Science, Advanced. Licensed NYS teacher" },
  { name: "Cesia Maldonado", role: "Computer Science, Beginner" },
  { name: "Jin Park", role: "Cooking & Baking" },
  { name: "Jasmine Rodriguez", role: "Cooking & Baking" },
  { name: "Halle Kim", role: "Dance & Body Form. Certified Pilates instructor, registered nurse" },
];

export default function About() {
  useSeo({
    title: "About Us",
    description: "Meet the Tempo Community Academy team: licensed NYS teachers and certified specialists offering personalized enrichment programs in Bayside, Queens.",
    path: "/about",
  });

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
            {LEADERSHIP.map((p) => (
              <div className="person" key={p.name}>
                <img src="/assets/avatar.svg" width={96} height={96} loading="lazy" alt={`Placeholder headshot of ${p.name}`} />
                <h3>{p.name}</h3>
                <p className="role">{p.role}</p>
                <p>Placeholder bio. One or two sentences about {p.name.split(" ")[0]}&apos;s background and role, provided by the owners.</p>
              </div>
            ))}
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
            {INSTRUCTORS.map((p) => (
              <div className="person" key={p.name}>
                <img src="/assets/avatar.svg" width={96} height={96} loading="lazy" alt={`Placeholder headshot of ${p.name}`} />
                <h3>{p.name}</h3>
                <p className="role">{p.role}</p>
                <p>Placeholder bio to be provided by the owners.</p>
              </div>
            ))}
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
