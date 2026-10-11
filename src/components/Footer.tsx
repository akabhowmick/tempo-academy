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
              <li><a href="mailto:contacttempoacademy@gmail.com">contacttempoacademy@gmail.com</a><span className="footer-note">English, Korean &amp; Spanish</span></li>
              <li><a href="https://www.instagram.com/tempocommunity_academy1/">Instagram</a> <span aria-hidden="true">·</span> <a href="https://www.tiktok.com/@tempo.community.a">TikTok</a></li>
            </ul>
          </div>
          <div>
            <h3>Hours</h3>
            <ul>
              <li>Mon to Fri: 10 AM to 6 PM</li>
              <li>Saturday: 12 to 6 PM</li>
              <li className="footer-note">By appointment only, no walk-ins.</li>
            </ul>
          </div>
          <div>
            <h3>Explore</h3>
            <ul>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="fineprint">
          <p>&copy; {year} Tempo Community Academy. All rights reserved.</p>
          <p><Link to="/privacy">Privacy</Link> <span aria-hidden="true">·</span> <Link to="/terms">Terms</Link> <span aria-hidden="true">·</span> <Link to="/nondiscrimination">Nondiscrimination</Link> <span aria-hidden="true">·</span> <Link to="/accessibility">Accessibility</Link></p>
        </div>
      </div>
    </footer>
  );
}
