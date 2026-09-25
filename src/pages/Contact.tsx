import { FormEvent, useState } from "react";
import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";
import routeMeta from "@/lib/route-meta.json";

// Set at build time (see .env.example). Until the owners create a Formspree
// form and this is set, the form is disabled and visitors are pointed to
// phone/email instead of silently posting to a dead endpoint.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;
const FORM_ACTION = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : undefined;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Field = "name" | "email" | "message";
type FieldErrors = Partial<Record<Field, string>>;

export default function Contact() {
  useSeo({ path: "/contact", ...routeMeta["/contact"] });
  const [errors, setErrors] = useState<FieldErrors>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const nextErrors: FieldErrors = {};

    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    if (!name) nextErrors.name = "Enter your name.";

    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    if (!email) nextErrors.email = "Enter your email address.";
    else if (!EMAIL_RE.test(email)) nextErrors.email = "Enter a valid email address.";

    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
    if (!message) nextErrors.message = "Enter a message.";

    const firstInvalid = (Object.keys(nextErrors) as Field[])[0];
    if (firstInvalid) {
      e.preventDefault();
      setErrors(nextErrors);
      (form.elements.namedItem(firstInvalid) as HTMLElement).focus();
    } else if (Object.keys(errors).length > 0) {
      setErrors({});
    }
  }

  function clearError(field: Field) {
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  }

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
            {!FORM_ACTION && (
              <p className="notice">
                The contact form isn&apos;t connected yet. Please reach us directly by <a href="tel:+19175829560">phone</a> or <a href="mailto:contacttempoacademy@gmail.com">email</a> in the meantime.
              </p>
            )}
            <form className="form-grid" action={FORM_ACTION} method="POST" noValidate onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  aria-invalid={errors.name ? "true" : undefined}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  onChange={() => clearError("name")}
                />
                {errors.name && <p className="field-error" id="name-error">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  aria-invalid={errors.email ? "true" : undefined}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  onChange={() => clearError("email")}
                />
                {errors.email && <p className="field-error" id="email-error">{errors.email}</p>}
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
                <textarea
                  id="message"
                  name="message"
                  required
                  aria-invalid={errors.message ? "true" : undefined}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  onChange={() => clearError("message")}
                />
                {errors.message && <p className="field-error" id="message-error">{errors.message}</p>}
              </div>
              <label className="hp" htmlFor="_gotcha" aria-hidden="true" tabIndex={-1}>Leave this field empty</label>
              <input className="hp" type="text" id="_gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <input type="hidden" name="_next" value="https://www.tempocommunityacademy.com/thanks" />
              <button className="btn" type="submit" disabled={!FORM_ACTION}>Send message</button>
              <p className="price-note">We reply within one business day. Your details are only used to respond to your inquiry. See our <a href="/privacy">privacy policy</a>.</p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
