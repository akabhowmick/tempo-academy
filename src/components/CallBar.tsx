import { Link } from "react-router-dom";

export default function CallBar() {
  return (
    <div className="call-bar">
      <a className="btn" href="tel:+19175829560">Call us</a>
      <Link className="btn btn-light" to="/contact">Book by appointment</Link>
    </div>
  );
}
