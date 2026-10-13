import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";
import routeMeta from "@/lib/route-meta.json";

const PROGRAMS = [
  { img: "program-art.webp", w: 1200, h: 900, title: "Art & Design", desc: "Drawing, painting, sculpture, and crafting, from beginner 1:1 instruction to advanced group projects.", href: "/courses#art", alt: "A student painting a bright red and yellow flower still life on canvas" },
  { img: "program-cooking.webp", w: 1200, h: 900, title: "Cooking & Baking", desc: "Kitchen skills from chopping and measuring to pasta, soups, cookies, and cake, taught from scratch.", href: "/courses#cooking", alt: "An instructor guiding students as they shape songpyeon rice cakes from bowls of dough" },
  { img: "program-dance.webp", w: 1200, h: 900, title: "Dance & Body Form", desc: "Zumba, K-Pop dance, and yoga that build strength, posture, and confidence. No experience needed.", href: "/courses#dance", alt: "An instructor on stage leading two students through a squat in the dance studio" },
  { img: "program-computer-science.webp", w: 1200, h: 900, title: "Computer Science", desc: "From everyday computer skills to the basics of coding, at beginner and advanced levels.", href: "/courses#cs", alt: "Students working on laptops around a wooden table in the computer room" },
  { img: "program-cafe.webp", w: 620, h: 465, title: "Cafe & More", desc: "Hands-on barista training: espresso, milk steaming, latte art, and cafe etiquette.", href: "/courses#cafe", alt: "Coffee brewing in a pour-over filter beside a hand grinder and potted plants" },
  { img: "program-makeup.webp", w: 616, h: 462, title: "Makeup & Beauty", desc: "Skincare and step-by-step makeup for everyday looks and special occasions.", href: "/courses#beauty", alt: "An open makeup kit with eyeshadow palettes, brushes, and lipsticks" },
];

export default function Home() {
  useSeo({ path: "/", ...routeMeta["/"] });

  return (
    <Layout>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">Bayside, Queens</p>
            <h1>Where we celebrate everyone&apos;s unique rhythm.</h1>
            <p className="lede">Personalized classes in art, cooking and baking, dance, beauty, barista skills, and computer science. Small groups and 1:1 sessions, taught with patience in a space that feels like community.</p>
            <div className="hero-actions">
              <Link className="btn" to="/courses">Explore courses</Link>
              <a className="btn btn-ghost" href="mailto:contacttempoacademy@gmail.com">Email us</a>
            </div>
            <p className="hero-note">By appointment only. Classes offered in English, Korean, and Spanish.</p>
          </div>
          <div className="hero-art">
            {/* Largest above-the-fold image: eager, high priority, preloaded in index.html.
                Lowercase fetchpriority because React 18 doesn't know the camelCase prop. */}
            <img src="/assets/hero-community.webp" width={1200} height={900} {...{ fetchpriority: "high" }} alt="TEMPO students, families, and staff in green TEMPO shirts posing together for a big group photo at a trampoline park outing" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Compassion meets expertise</h2>
            <p>Our mission is to provide a well-rounded, experiential education that fosters creativity, skill development, and personal growth through high-quality instruction in music, culinary arts, visual arts, and related disciplines. Every learner works with experienced instructors on a customized plan that builds confidence and essential life skills.</p>
          </div>
          <div className="steps">
            <div className="step">
              <h3>Reach out</h3>
              <p>Call, email, or send a message to tell us about your learner. We meet by appointment, in the language your family is most comfortable with.</p>
            </div>
            <div className="step">
              <h3>Build a plan</h3>
              <p>Instructors design a customized learning plan around each learner&apos;s strengths, interests, and pace.</p>
            </div>
            <div className="step">
              <h3>Learn and grow</h3>
              <p>Small group or 1:1 sessions in a familiar, comfortable environment, with progress you can see.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="programs-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="programs-h">Programs for every kind of learner</h2>
            <p>Six hands-on programs taught by experienced instructors, including licensed NYS teachers and certified specialists.</p>
          </div>
          <div className="grid-3">
            {PROGRAMS.map((c) => (
              <article className="card" key={c.title}>
                <img src={`/assets/${c.img}`} width={c.w} height={c.h} loading="lazy" alt={c.alt} />
                <div className="card-body">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <Link className="card-link" to={c.href}>See the course</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="faq-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="faq-h">Common questions</h2>
          </div>
          <div className="faq">
            <details>
              <summary>Do I need any experience to join?</summary>
              <p>No experience is needed for any of our programs. Beginner and advanced levels are available in art and computer science, and every class starts with the fundamentals.</p>
            </details>
            <details>
              <summary>How do I sign up? Can I walk in?</summary>
              <p>We meet by appointment only, no walk-ins. Call or email us, or send a message through our contact page, and we will set up a time to talk about the right program and schedule.</p>
            </details>
            <details>
              <summary>What languages do you speak?</summary>
              <p>You can reach us in English, Korean (Inae, 917-582-9560), and Spanish (Cesia, 929-810-8648). Just let us know your preferred language when you get in touch.</p>
            </details>
          </div>
          <p className="faq-more"><Link className="btn btn-ghost" to="/faq">See all questions</Link></p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h2>Ready to find your rhythm?</h2>
              <p>By appointment only. We reply within one business day.</p>
            </div>
            <Link className="btn btn-light" to="/contact">Get in touch</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
