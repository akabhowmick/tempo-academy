import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";
import routeMeta from "@/lib/route-meta.json";

// Adapted from TEMPO ABA's Terms of Use (per the owners), minus the
// healthcare-specific sections.
export default function Terms() {
  useSeo({ path: "/terms", ...routeMeta["/terms"] });

  return (
    <Layout>
      <div className="page-hero">
        <div className="wrap">
          <h1>Terms of use</h1>
          <p>Effective date: October 10, 2026 | Last updated: October 12, 2026</p>
        </div>
      </div>
      <section className="section">
        <div className="wrap prose">
          <h2>Welcome</h2>
          <p>Welcome to the website of TEMPO Community Academy, LLC (&ldquo;TEMPO,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By accessing or using www.tempocommunityacademy.com (the &ldquo;Website&rdquo;), you agree to be bound by these Terms of Use. If you do not agree with these terms, please discontinue use of the Website.</p>

          <h2>Purpose of this website</h2>
          <p>Our Website is intended to provide general information about TEMPO Community Academy and our programs. Using the Website or contacting us through it does not by itself enroll you in a program; enrollment is confirmed directly with our team.</p>

          <h2>Intellectual property</h2>
          <p>Unless otherwise noted, all content on this Website, including text, graphics, logos, photographs, icons, and design elements, is the property of TEMPO Community Academy, LLC and is protected by applicable copyright, trademark, and intellectual property laws.</p>
          <p>You may view, download, or print materials for your personal, non-commercial use only. You may not reproduce, modify, distribute, publish, or create derivative works without our prior written permission. Photographs of our learners and staff may not be copied or reused for any purpose.</p>

          <h2>Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Website for unlawful purposes.</li>
            <li>Attempt to gain unauthorized access to the Website or its systems.</li>
            <li>Upload malicious software or harmful code.</li>
            <li>Interfere with the Website&apos;s functionality or security.</li>
            <li>Misrepresent your identity when communicating with us.</li>
          </ul>

          <h2>Accuracy of information</h2>
          <p>We strive to keep the information on our Website accurate and current. However, programs, schedules, instructors, and pricing may change over time, and we cannot guarantee that all content will always be complete, accurate, or up to date. We reserve the right to modify Website content without prior notice.</p>

          <h2>Third-party links</h2>
          <p>Our Website may include links to third-party websites, such as social media and maps, for your convenience. We do not control or endorse the content, products, or services of third-party websites and are not responsible for their privacy practices or content.</p>

          <h2>Disclaimer of warranties</h2>
          <p>This Website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We make no warranties, express or implied, regarding the availability, accuracy, reliability, or completeness of Website content.</p>

          <h2>Limitation of liability</h2>
          <p>To the fullest extent permitted by law, TEMPO Community Academy, LLC shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of, or inability to use, this Website.</p>

          <h2>Governing law</h2>
          <p>These Terms of Use are governed by the laws of the State of New York, without regard to its conflict of law principles.</p>

          <h2>Changes to these terms</h2>
          <p>We may update these Terms of Use at any time. Updated versions will be posted on this page with a revised effective date. Your continued use of the Website constitutes acceptance of any revisions.</p>

          <h2>Contact us</h2>
          <p>Questions about these Terms of Use may be directed to:<br />TEMPO Community Academy, LLC<br />214-22 42nd Ave, Bayside, NY 11361<br />Email: <a href="mailto:contacttempoacademy@gmail.com">contacttempoacademy@gmail.com</a></p>
        </div>
      </section>
    </Layout>
  );
}
