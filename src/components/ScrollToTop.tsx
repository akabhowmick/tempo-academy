import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** React Router doesn't reset scroll position between routes by default. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return; // let anchor links (e.g. /courses#art) do their own thing
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
