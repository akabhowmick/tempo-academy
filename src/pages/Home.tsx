import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";

const PROGRAMS = [
  { img: "ph-1", title: "Art & Design", desc: "Drawing, painting, sculpture, and crafting, from beginner 1:1 instruction to advanced group projects.", href: "/courses#art", alt: "Placeholder: students painting in an art class" },
  { img: "ph-2", title: "Cooking & Baking", desc: "Kitchen skills from chopping and measuring to pasta, soups, cookies, and cake, taught from scratch.", href: "/courses#cooking", alt: "Placeholder: a cooking and baking class in the kitchen" },
  { img: "ph-3", title: "Dance & Body Form", desc: "Zumba, K-Pop dance, and yoga that build strength, posture, and confidence. No experience needed.", href: "/courses#dance", alt: "Placeholder: a dance and movement class" },
  { img: "ph-4", title: "Computer Science", desc: "From everyday computer skills to the basics of coding, at beginner and advanced levels.", href: "/courses#cs", alt: "Placeholder: a computer science lesson" },
  { img: "ph-5", title: "Cafe & More", desc: "Hands-on barista training: espresso, milk steaming, latte art, and cafe etiquette.", href: "/courses#cafe", alt: "Placeholder: a barista pouring latte art in cafe class" },
  { img: "ph-6", title: "Makeup & Beauty", desc: "Skincare and step-by-step makeup for everyday looks and special occasions.", href: "/courses#beauty", alt: "Placeholder: a makeup and beauty lesson" },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization"],
  name: "Tempo Community Academy",
  url: "https://www.tempocommunityacademy.com/",
  image: "https://www.tempocommunityacademy.com/assets/og.png",
  email: "contacttempoacademy@gmail.com",
  telephone: "+19175829560",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "214-22 42nd Ave",
    addressLocality: "Bayside",
    addressRegion: "NY",
    postalCode: "11361",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "12:00", closes: "18:00" },
  ],
};

export default function Home() {
  useSeo({
    title: "Tempo Community Academy | Art, Cooking, Dance and Computer Science Classes in Bayside, NY",
    description: "Personalized enrichment classes in Bayside, Queens. Art, cooking and baking, dance, makeup, barista skills, and computer science in small groups and 1:1 sessions.",
    path: "/",
  });

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />

      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">Bayside, Queens</p>
            <h1>Where we celebrate everyone&apos;s unique rhythm.</h1>
            <p className="lede">Personalized classes in art, cooking and baking, dance, beauty, barista skills, and computer science. Small groups and 1:1 sessions, taught with patience in a space that feels like community.</p>
            <div className="hero-actions">
              <Link className="btn" to="/courses">Explore courses</Link>
              <a className="btn btn-ghost" href="tel:+19175829560">Call 917-582-9560</a>
            </div>
            <p className="hero-note">By appointment only. Classes offered in English, Korean, and Spanish.</p>
          </div>
          <div className="hero-art" aria-hidden="true">
            <svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="160" width="40" height="120" rx="20" fill="#3E7C47" />
              <rect x="66" y="80" width="40" height="200" rx="20" fill="#EFCB8F" />
              <rect x="122" y="120" width="40" height="160" rx="20" fill="#2E6B36" />
              <rect x="178" y="40" width="40" height="240" rx="20" fill="#8FBB8B" />
              <rect x="234" y="100" width="40" height="180" rx="20" fill="#3E7C47" />
              <rect x="290" y="140" width="40" height="140" rx="20" fill="#EFCB8F" />
              <rect x="346" y="70" width="40" height="210" rx="20" fill="#2E6B36" />
            </svg>
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
              <p>Call or email to tell us about your learner. We meet by appointment, in the language your family is most comfortable with.</p>
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
                <img src={`/assets/${c.img}.svg`} width={800} height={600} loading="lazy" alt={c.alt} />
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

      <section className="section" aria-labelledby="families-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="families-h">What families say</h2>
          </div>
          <div className="grid-2">
            <figure className="quote">
              <span className="fpo">Placeholder quote</span>
              <blockquote>Real testimonial from a Tempo family goes here. Ask the owners for two or three short quotes from parents or learners.</blockquote>
              <figcaption>Parent name, program</figcaption>
            </figure>
            <figure className="quote">
              <span className="fpo">Placeholder quote</span>
              <blockquote>Second testimonial goes here. Even an informal text message quote works well once the family gives permission to share it.</blockquote>
              <figcaption>Parent name, program</figcaption>
            </figure>
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
              <summary>Who are the classes for?</summary>
              <p>Everyone. Our programs are personalized for each learner&apos;s strengths, interests, and pace, with both small group and 1:1 options. Instructors adjust support and teaching strategies to each person&apos;s needs.</p>
            </details>
            <details>
              <summary>Do I need any experience to join?</summary>
              <p>No experience is needed for any of our programs. Beginner and advanced levels are available in art and computer science, and every class starts with the fundamentals.</p>
            </details>
            <details>
              <summary>How do I sign up? Can I walk in?</summary>
              <p>We meet by appointment only, no walk-ins. Call or email us and we will set up a time to talk about the right program and schedule.</p>
            </details>
            <details>
              <summary>What languages do you speak?</summary>
              <p>You can reach us in English, Korean (Inae, 917-582-9560), and Spanish (Cesia, 929-810-8648).</p>
            </details>
            <details>
              <summary>Where are classes held?</summary>
              <p>At our Bayside location at 214-22 42nd Ave, and directly in community settings so learners can grow in familiar, comfortable environments.</p>
            </details>
          </div>
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
