import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";
import routeMeta from "@/lib/route-meta.json";

export default function Accessibility() {
  useSeo({ path: "/accessibility", ...routeMeta["/accessibility"] });

  return (
    <Layout>
      <div className="page-hero">
        <div className="wrap">
          <h1>Accessibility statement</h1>
          <p>Effective date: October 10, 2026 | Last updated: October 12, 2026</p>
        </div>
      </div>
      <section className="section">
        <div className="wrap prose">
          <h2>Our commitment</h2>
          <p>TEMPO Community Academy is committed to making this website usable by everyone, including people who rely on assistive technology. Inclusion is at the heart of what we do in our classrooms, and we hold our website to the same standard.</p>
          <h2>Standards</h2>
          <p>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. Measures on this site include semantic page structure, sufficient color contrast, visible keyboard focus, full keyboard navigation, text alternatives for meaningful images, labeled form fields, and respect for reduced-motion preferences.</p>
          <h2>Feedback</h2>
          <p>If you encounter any barrier using this site or need information in an alternative format, please tell us and we will work to fix it. Email <a href="mailto:contacttempoacademy@gmail.com">contacttempoacademy@gmail.com</a>. Please include the page address and a description of the problem.</p>
        </div>
      </section>
    </Layout>
  );
}
