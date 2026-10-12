import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";
import routeMeta from "@/lib/route-meta.json";

// Structure and wording follow TEMPO ABA's website privacy policy (per the
// owners), adapted to this site: no health information, cookieless Plausible
// instead of Google Analytics, and the services this site actually uses.
export default function Privacy() {
  useSeo({ path: "/privacy", ...routeMeta["/privacy"] });

  return (
    <Layout>
      <div className="page-hero">
        <div className="wrap">
          <h1>Website privacy policy</h1>
          <p>Effective date: October 10, 2026 | Last updated: October 12, 2026</p>
        </div>
      </div>
      <section className="section">
        <div className="wrap prose">
          <h2>Welcome</h2>
          <p>TEMPO Community Academy, LLC (&ldquo;TEMPO,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy and earning your trust. This Website Privacy Policy explains how we collect, use, disclose, and protect information when you visit www.tempocommunityacademy.com (the &ldquo;Website&rdquo;).</p>
          <p>This policy applies only to information collected through our Website. By using our Website, you agree to the practices described in this Privacy Policy.</p>

          <h2>Information you voluntarily provide</h2>
          <p>You may choose to provide information when you complete our contact form, request additional information, schedule an appointment, or email us. This information may include:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Telephone number, if you choose to include it</li>
            <li>General information about the learner and the programs you are interested in</li>
          </ul>
          <p>Please do not include medical or other highly sensitive personal information in the contact form or in email. If a learner needs specific support or accommodations, we are happy to discuss it with you directly.</p>

          <h2>Information collected automatically</h2>
          <p>We use Plausible Analytics to understand, in aggregate, how visitors use the Website, such as which pages are visited, the referring website, browser and device type, and general country or region. Plausible does not use cookies and does not collect or store personal data, and it is not used to identify you. You can read more at <a href="https://plausible.io/data-policy">plausible.io/data-policy</a>.</p>

          <h2>Cookies</h2>
          <p>Our Website does not set cookies. The map on our contact page is embedded from Google Maps, which may set its own cookies when it loads. Most web browsers let you manage or block cookies through their settings.</p>

          <h2>How we use information</h2>
          <p>Information collected through our Website may be used to:</p>
          <ul>
            <li>Respond to inquiries</li>
            <li>Schedule appointments and visits</li>
            <li>Communicate with prospective learners and families</li>
            <li>Improve Website functionality and performance</li>
            <li>Maintain Website security</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>We only collect information that is reasonably necessary to operate our Website and programs. We do not sell your personal information, and we do not use your contact details for marketing without your permission.</p>

          <h2>Third-party services</h2>
          <p>To support our Website, we work with service providers including a website hosting provider, a form-processing service that delivers contact form submissions to us, Plausible Analytics, Google Maps, and our email provider. These providers may access information only as necessary to perform services on our behalf.</p>

          <h2>Links to other websites</h2>
          <p>Our Website includes links to third-party websites, such as our Instagram and TikTok pages and Google Maps. We are not responsible for the privacy practices, content, or security of external websites, and we encourage you to review their privacy policies.</p>

          <h2>Children&apos;s privacy</h2>
          <p>Our Website is intended for parents, guardians, caregivers, and adult learners seeking information about our programs. We do not knowingly collect personal information directly from children through our Website. If you believe a child has provided personal information through our Website, please contact us so we can remove it.</p>

          <h2>Data security</h2>
          <p>We take reasonable administrative, technical, and physical measures to protect information collected through our Website from unauthorized access, disclosure, alteration, or destruction. No method of internet transmission or electronic storage can be guaranteed to be completely secure.</p>

          <h2>Email communications</h2>
          <p>Standard email may not be a secure method of communication. For your privacy, please avoid sending sensitive personal information by email.</p>

          <h2>Your choices</h2>
          <p>You may choose not to provide personal information through our Website, and you can contact us at any time to ask what information we hold about you, to update it, or to request that we delete it. Choosing not to provide certain information may limit our ability to respond to your request.</p>

          <h2>Changes to this privacy policy</h2>
          <p>We may update this Privacy Policy from time to time to reflect changes in technology, legal requirements, or our practices. The revised policy will be posted on this page with an updated effective date.</p>

          <h2>Contact us</h2>
          <p>If you have questions about this Privacy Policy, please contact:<br />TEMPO Community Academy, LLC<br />214-22 42nd Ave, Bayside, NY 11361<br />Phone: <a href="tel:+19175829560">917-582-9560</a><br />Email: <a href="mailto:contacttempoacademy@gmail.com">contacttempoacademy@gmail.com</a></p>
        </div>
      </section>
    </Layout>
  );
}
