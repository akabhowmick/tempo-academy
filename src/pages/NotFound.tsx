import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";

export default function NotFound() {
  useSeo({
    title: "Page Not Found",
    description: "The page you were looking for does not exist. Find your way back to Tempo Community Academy.",
    path: "/404",
    noindex: true,
  });

  return (
    <Layout>
      <section className="section">
        <div className="wrap prose">
          <h1>This page missed a beat.</h1>
          <p>The page you were looking for does not exist or has moved. Try one of these instead:</p>
          <p>
            <Link className="btn" to="/">Home</Link>{" "}
            <Link className="btn btn-ghost" to="/courses">Courses</Link>{" "}
            <Link className="btn btn-ghost" to="/contact">Contact</Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
