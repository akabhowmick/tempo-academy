import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";
import routeMeta from "@/lib/route-meta.json";

// Adapted from TEMPO ABA's SMS and Text Messaging Policy (per the owners),
// with the clinical and insurance wording swapped for class and family use.
export default function TextMessaging() {
  useSeo({ path: "/text-messaging", ...routeMeta["/text-messaging"] });

  return (
    <Layout>
      <div className="page-hero">
        <div className="wrap">
          <h1>Text messaging policy</h1>
          <p>Effective date: October 12, 2026 | Last updated: October 12, 2026</p>
        </div>
      </div>
      <section className="section">
        <div className="wrap prose">
          <p>TEMPO Community Academy, LLC (&ldquo;TEMPO,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) may communicate with students, families, and prospective families by text message when appropriate and with the recipient&apos;s consent.</p>
          <p>Text messages may be used for:</p>
          <ul>
            <li>Class reminders</li>
            <li>Scheduling or rescheduling classes and appointments</li>
            <li>Program and schedule updates</li>
            <li>General administrative communication</li>
            <li>Requests to contact our office</li>
          </ul>
          <p>Text messaging is not intended for emergencies or urgent concerns.</p>
          <p>Because text messaging is not always a secure method of communication, please avoid sending sensitive personal information, such as medical, financial, or payment details, by text.</p>
          <p>Message frequency varies. Message and data rates may apply based on your mobile carrier.</p>
          <p>You may opt out of receiving text messages at any time by replying STOP or by contacting our office. For assistance, reply HELP or contact us directly.</p>

          <h2>Contact us</h2>
          <p>Questions about this policy may be directed to:<br />TEMPO Community Academy, LLC<br />214-22 42nd Ave, Bayside, NY 11361<br />Phone: <a href="tel:+19175829560">917-582-9560</a><br />Email: <a href="mailto:contacttempoacademy@gmail.com">contacttempoacademy@gmail.com</a></p>
        </div>
      </section>
    </Layout>
  );
}
