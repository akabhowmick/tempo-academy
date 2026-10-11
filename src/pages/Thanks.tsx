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
          <p>Your message was sent. We reply within one business day. If it is urgent, email us at <a href="mailto:contacttempoacademy@gmail.com">contacttempoacademy@gmail.com</a>.</p>
          <p><Link className="btn" to="/">Back to home</Link></p>
        </div>
      </section>
    </Layout>
  );
}
