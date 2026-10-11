import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";
import routeMeta from "@/lib/route-meta.json";

// Adapted from TEMPO ABA's Nondiscrimination Statement (per the owners).
export default function Nondiscrimination() {
  useSeo({ path: "/nondiscrimination", ...routeMeta["/nondiscrimination"] });

  return (
    <Layout>
      <div className="page-hero">
        <div className="wrap">
          <h1>Nondiscrimination statement</h1>
          <p>Effective date: October 10, 2026 | Last updated: October 10, 2026</p>
        </div>
      </div>
      <section className="section">
        <div className="wrap prose">
          <p>At Tempo Community Academy (&ldquo;Tempo,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), we believe every individual deserves to be treated with dignity, respect, and compassion.</p>
          <p>Tempo complies with all applicable federal and New York State civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability, sex, religion, gender identity, gender expression, sexual orientation, marital status, veteran status, or any other characteristic protected by law.</p>
          <p>We are committed to creating an inclusive environment where every learner and family feels welcomed, valued, and respected. Reasonable accommodations and language assistance in English, Korean, and Spanish are available upon request.</p>
          <p>If you believe you have experienced discrimination while participating in our programs, please contact us so we can address your concerns promptly and respectfully.</p>

          <h2>Contact us</h2>
          <p>Questions about this statement may be directed to:<br />Tempo Community Academy<br />214-22 42nd Ave, Bayside, NY 11361<br />Email: <a href="mailto:contacttempoacademy@gmail.com">contacttempoacademy@gmail.com</a></p>
        </div>
      </section>
    </Layout>
  );
}
