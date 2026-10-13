import { Link } from "react-router-dom";

export default function CallBar() {
  return (
    <div className="call-bar">
      <a className="btn" href="mailto:contacttempoacademy@gmail.com">Email us</a>
      <Link className="btn btn-light" to="/contact">Book by appointment</Link>
    </div>
  );
}
