import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="wrap header-row">
          <Link className="brand" to="/" aria-label="Tempo Community Academy home">
            <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true">
              <rect width="64" height="64" rx="14" fill="#3E7C47" />
              <g fill="#FDF7EC">
                <rect x="12" y="26" width="8" height="26" rx="4" />
                <rect x="24" y="14" width="8" height="38" rx="4" />
                <rect x="36" y="20" width="8" height="32" rx="4" />
                <rect x="48" y="30" width="8" height="22" rx="4" />
              </g>
            </svg>
            <span>Tempo Community Academy</span>
          </Link>
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((o) => !o)}
          >
            Menu
          </button>
          <nav
            id="site-nav"
            className={`site-nav${open ? " open" : ""}`}
            aria-label="Main"
            onKeyDown={(e) => {
              if (e.key === "Escape") setOpen(false);
            }}
          >
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
            <Link className="nav-cta" to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
