import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";
import routeMeta from "@/lib/route-meta.json";
import { MegaphoneArt, ClosedSignArt } from "@/components/NoticeArt";
import { WEEKLY, EVENTS, CLOSURES, current, type Notice } from "@/lib/schedule";

function NoticeList({ items, empty }: { items: Notice[]; empty: ReactNode }) {
  const shown = current(items);
  if (shown.length === 0) return <p className="notice-empty">{empty}</p>;
  return (
    <ul className="notice-list">
      {shown.map((n) => (
        <li key={`${n.date} ${n.title}`}>
          <p className="notice-date">{n.date}</p>
          <h3>
            {n.icon && <span aria-hidden="true">{n.icon} </span>}
            {n.title}
            {n.icon && <span aria-hidden="true"> {n.icon}</span>}
          </h3>
          {n.details && <p>{n.details}</p>}
        </li>
      ))}
    </ul>
  );
}

export default function Schedule() {
  useSeo({ path: "/schedule", ...routeMeta["/schedule"] });

  return (
    <Layout>
      <div className="page-hero">
        <div className="wrap">
          <h1>Schedule</h1>
          <p>Our regular weekly classes, upcoming events, and closures. Classes are by registration, so please <Link to="/contact">contact us</Link> to sign up or check availability.</p>
        </div>
      </div>

      <section className="section" aria-labelledby="weekly-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="weekly-h">Weekly classes</h2>
          </div>
          <div className="grid-2">
            {WEEKLY.map((d) => (
              <div className="price-card" key={d.day}>
                <h3>{d.day}</h3>
                {d.classes.map((c) => (
                  <div className="price-row" key={c.name}>
                    <span>{c.name}</span>
                    <span className="amt">{c.time}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="price-note" style={{ marginTop: "1.6rem" }}>
            Questions or attendance updates? Korean: <a href="tel:+19175829560">917-582-9560</a> (Inae). English &amp; Spanish: <a href="tel:+19298108648">929-810-8648</a> (Cesia). Or email <a href="mailto:contacttempoacademy@gmail.com">contacttempoacademy@gmail.com</a>.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap grid-2">
          <div>
            <div className="notice-head">
              <MegaphoneArt />
              <h2>Upcoming events</h2>
            </div>
            <NoticeList
              items={EVENTS}
              empty={<>No upcoming events posted right now. Check back soon, or follow us on <a href="https://www.instagram.com/tempocommunity_academy1/">Instagram</a> for updates.</>}
            />
          </div>
          <div>
            <div className="notice-head">
              <ClosedSignArt />
              <h2>Closures &amp; holidays</h2>
            </div>
            <NoticeList items={CLOSURES} empty="No closures coming up. We're open as usual." />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h2>Want to join a class?</h2>
              <p>Get in touch and we&apos;ll find the right class and time.</p>
            </div>
            <Link className="btn btn-light" to="/contact">Contact us</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
