import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";
import routeMeta from "@/lib/route-meta.json";

export default function Privacy() {
  useSeo({ path: "/privacy", ...routeMeta["/privacy"] });

  return (
    <Layout>
      <div className="page-hero">
        <div className="wrap">
          <h1>Privacy policy</h1>
          <p>Effective date: September 11, 2026</p>
        </div>
      </div>
      <section className="section">
        <div className="wrap prose">
          <h2>Who we are</h2>
          <p>This website is operated by Tempo Community Academy, 214-22 42nd Ave, Bayside, NY 11361. You can reach us at <a href="mailto:contacttempoacademy@gmail.com">contacttempoacademy@gmail.com</a>.</p>
          <h2>What we collect</h2>
          <p>If you use our contact form, we collect the information you submit: your name, email address, phone number if you include it, and your message. We use it only to respond to your inquiry and to schedule appointments.</p>
          <h2>What we do not do</h2>
          <p>We do not sell your personal information. We do not use your contact details for marketing without your permission.</p>
          <h2>Analytics</h2>
          <p>We use Plausible Analytics to measure page visits in aggregate. Plausible does not use cookies and does not collect or store any personal data, so no cookie consent banner is needed for it. You can read more at <a href="https://plausible.io/data-policy">plausible.io/data-policy</a>.</p>
          <h2>Third-party services</h2>
          <p>Our contact form is delivered by a form-processing service, and our site is served by a hosting provider. These services process your submission on our behalf. The map on the contact page is embedded from Google Maps, which may set its own cookies when loaded.</p>
          <h2>Your choices</h2>
          <p>You can contact us anytime to ask what information we hold about you or to request that we delete it. Email <a href="mailto:contacttempoacademy@gmail.com">contacttempoacademy@gmail.com</a>.</p>
        </div>
      </section>
    </Layout>
  );
}
