import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";
import routeMeta from "@/lib/route-meta.json";

const CARDS: { title: string; rows: [string, string][] }[] = [
  { title: "Computer Science", rows: [["Beginner small group, 60 min", "$80"], ["Advanced small group, 60 min", "$100"], ["1:1 private session, 60 min", "$120"], ["1:1 private session, 90 min", "$150"]] },
  { title: "Art & Design", rows: [["Beginner group, 60 min", "$100"], ["Beginner 1:1 instruction, 60 min", "$120"], ["Advanced group, 60 min", "$150"], ["Advanced class, 90 min", "$200"]] },
  { title: "Dance & Body Form", rows: [["Session, 45 min", "$60"], ["Session, 60 min", "$90"]] },
  { title: "Cooking & Baking", rows: [["1 class, 90 min", "$175"]] },
  { title: "Makeup & Beauty", rows: [["Session, 60 min", "$130"], ["Session, 90 min", "$175"]] },
  { title: "Cafe Class", rows: [["Session, 90 min", "$150"], ["Advanced, 3 hours", "$240"]] },
];

export default function Pricing() {
  useSeo({ path: "/pricing", ...routeMeta["/pricing"] });

  return (
    <Layout>
      <div className="page-hero">
        <div className="wrap">
          <h1>Pricing</h1>
          <p>Per-session rates by program and format. Contact us to confirm availability and find the right fit.</p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="grid-3">
            {CARDS.map((c) => (
              <div className="price-card" key={c.title}>
                <h2>{c.title}</h2>
                {c.rows.map(([label, amt]) => (
                  <div className="price-row" key={label}>
                    <span>{label}</span>
                    <span className="amt">{amt}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="price-note" style={{ marginTop: "1.6rem" }}>
            Rates shown per session. Please <Link to="/contact">contact us</Link> to confirm current pricing, availability, and scheduling.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h2>Questions about pricing?</h2>
              <p>We are happy to walk you through options by phone or email.</p>
            </div>
            <Link className="btn btn-light" to="/contact">Contact us</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
