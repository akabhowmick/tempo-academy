import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";
import routeMeta from "@/lib/route-meta.json";

export default function Thanks() {
  useSeo({ path: "/thanks", ...routeMeta["/thanks"] });

  return (
    <Layout>
      <section className="section">
        <div className="wrap prose">
          <h1>Thank you!</h1>
          <p>Your message was sent. We reply within one business day. If it is urgent, call us in Korean at <a href="tel:+19175829560">917-582-9560</a> (Inae) or in English &amp; Spanish at <a href="tel:+19298108648">929-810-8648</a> (Cesia).</p>
          <p><Link className="btn" to="/">Back to home</Link></p>
        </div>
      </section>
    </Layout>
  );
}
