import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";

export default function Contact() {
  useSeo({
    title: "Contact",
    description: "Contact Tempo Community Academy in Bayside, Queens by phone, email, or the form. By appointment only. English, Korean, and Spanish spoken.",
    path: "/contact",
  });

  return (
    <Layout>
      <div className="page-hero">
        <div className="wrap">
          <h1>Contact us</h1>
          <p>We meet by appointment only, no walk-ins. Call, email, or send the form and we will reply within one business day.</p>
        </div>
      </div>

      <section className="section">
        <div className="wrap grid-2">
          <div>
            <h2>Reach us directly</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.4rem", display: "grid", gap: ".6rem" }}>
              <li><strong>Inae:</strong> <a href="tel:+19175829560">917-582-9560</a> (English &amp; Korean)</li>
              <li><strong>Cesia:</strong> <a href="tel:+19298108648">929-810-8648</a> (English &amp; Spanish)</li>
              <li><strong>Email:</strong> <a href="mailto:contacttempoacademy@gmail.com">contacttempoacademy@gmail.com</a></li>
              <li><strong>Address:</strong> 214-22 42nd Ave, Bayside, NY 11361 (<a href="https://www.google.com/maps/search/?api=1&query=214-22+42nd+Ave+Bayside+NY+11361">get directions</a>)</li>
            </ul>
            <h3>Hours</h3>
            <p>Mon to Fri: 10:00 AM to 6:00 PM<br />Saturday: 12:00 PM to 6:00 PM<br />By appointment only.</p>
            <iframe
              className="map-embed"
              loading="lazy"
              title="Map showing Tempo Community Academy at 214-22 42nd Ave, Bayside, NY"
              src="https://www.google.com/maps?q=214-22+42nd+Ave,+Bayside,+NY+11361&output=embed"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div>
            <h2>Send a message</h2>
            {/* TODO before launch: replace REPLACE_WITH_FORM_ID with a real Formspree (or equivalent) endpoint and test delivery from an outside address. */}
            <form className="form-grid" action="https://formspree.io/f/REPLACE_WITH_FORM_ID" method="POST">
              <div>
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" autoComplete="name" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required />
              </div>
              <div>
                <label htmlFor="phone">Phone (optional)</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <div>
                <label htmlFor="program">Program you are interested in</label>
                <select id="program" name="program" defaultValue="Not sure yet">
                  <option>Not sure yet</option>
                  <option>Art &amp; Design</option>
                  <option>Cooking &amp; Baking</option>
                  <option>Dance &amp; Body Form</option>
                  <option>Computer Science</option>
                  <option>Cafe &amp; More</option>
                  <option>Makeup &amp; Beauty</option>
                </select>
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required />
              </div>
              <label className="hp" htmlFor="_gotcha" aria-hidden="true" tabIndex={-1}>Leave this field empty</label>
              <input className="hp" type="text" id="_gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <input type="hidden" name="_next" value="https://www.tempocommunityacademy.com/thanks" />
              <button className="btn" type="submit">Send message</button>
              <p className="price-note">We reply within one business day. Your details are only used to respond to your inquiry. See our <a href="/privacy">privacy policy</a>.</p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
