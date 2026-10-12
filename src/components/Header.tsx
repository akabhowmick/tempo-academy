import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // While the mobile menu is open, Escape closes it from anywhere on the page
  // and returns focus to the Menu button so keyboard users aren't stranded.
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="wrap header-row">
          <Link className="brand" to="/" aria-label="Tempo Community Academy home">
            <img src="/assets/logo.webp" width={48} height={48} alt="" />
            <span>Tempo Community Academy</span>
          </Link>
          <button
            ref={toggleRef}
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
