import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";
import routeMeta from "@/lib/route-meta.json";

type Person = { name: string; role: string; img?: string; bio?: string };

// Roles and bios follow the owners' "Team Bios" doc. People without a photo
// yet get an initials badge; people without a bio yet show name and role only.
const LEADERSHIP: Person[] = [
  { name: "Inae Kim", role: "Program Director", img: "team-inae-kim.webp" },
  { name: "Cynthia Martinez", role: "Admin Director", img: "team-cynthia-martinez.webp" },
  {
    name: "Cesia Maldonado",
    role: "Office Manager and Computer Science, Beginner",
    img: "team-cesia-maldonado.webp",
    bio: "I'm Cesia Maldonado, and I am the Office Manager and Beginner Computer Class Instructor. I love being part of a welcoming and supportive environment where everyone feels comfortable learning and growing. I help keep our daily operations organized while teaching students the basics of computers and technology in a fun, simple, and engaging way. I enjoy connecting with students, helping them build confidence, and celebrating their progress along the way!",
  },
];

const INSTRUCTORS: Person[] = [
  { name: "Eunice Lee", role: "Art & Design, Beginner. Licensed NYS teacher" },
  { name: "Pognee Kim", role: "Art & Design and Computer Science, Advanced. Licensed NYS teacher" },
  { name: "Jin Park", role: "Cooking & Baking", img: "team-jin-park.webp" },
  {
    name: "Jasmine Rodriguez",
    role: "Cooking & Baking",
    img: "team-jasmine-rodriguez.webp",
    bio: "I lead hands-on baking classes where I get to share my love of baking with people of all ages and abilities. Each class gives individuals the opportunity to learn new recipes they can make at home and try new foods. My goal is to create a fun and welcoming environment where everyone can participate, have fun and enjoy things they can make on their own.",
  },
  {
    name: "Halle Kim",
    role: "Dance & Body Form. Certified Pilates instructor, registered nurse",
    img: "team-halle-kim.webp",
    bio: "I'm a BASI Pilates–certified instructor and registered nurse who believes everyone can benefit from movement. My goal is to create a welcoming and supportive environment where each person can build strength, confidence, and body awareness at their own pace.",
  },
];

function PersonCard({ p }: { p: Person }) {
  const initials = p.name.split(" ").map((w) => w[0]).join("");
  return (
    <div className="person">
      {p.img ? (
        <img src={`/assets/${p.img}`} width={600} height={600} loading="lazy" alt={`Portrait of ${p.name}`} />
      ) : (
        <span className="initials" aria-hidden="true">{initials}</span>
      )}
      <h3>{p.name}</h3>
      <p className="role">{p.role}</p>
      {p.bio && <p>{p.bio}</p>}
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
