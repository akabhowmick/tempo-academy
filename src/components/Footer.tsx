import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h3>Tempo Community Academy</h3>
            <p>Personalized creative and enrichment programs in Bayside, Queens.</p>
            <p className="values">Trust<br />Empowerment<br />Motivation<br />Passion<br />Opportunity</p>
          </div>
          <div>
            <h3>Visit</h3>
            <ul>
              <li>214-22 42nd Ave<br />Bayside, NY 11361</li>
              <li><a href="https://www.google.com/maps/search/?api=1&query=214-22+42nd+Ave+Bayside+NY+11361">Get directions</a></li>
              <li><a href="tel:+19175829560">Inae: 917-582-9560</a> (English &amp; Korean)</li>
              <li><a href="tel:+19298108648">Cynthia: 929-810-8648</a> (English &amp; Spanish)</li>
              <li><a href="mailto:contacttempoacademy@gmail.com">contacttempoacademy@gmail.com</a></li>
            </ul>
          </div>
          <div>
            <h3>Hours</h3>
            <ul>
              <li>Mon to Fri: 10:00 AM to 6:00 PM</li>
              <li>Saturday: 12:00 PM to 6:00 PM</li>
              <li>By appointment only, no walk-ins.</li>
            </ul>
          </div>
          <div>
            <h3>Explore</h3>
            <ul>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy">Privacy policy</Link></li>
              <li><Link to="/accessibility">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        <p className="fineprint">&copy; {year} Tempo Community Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}
