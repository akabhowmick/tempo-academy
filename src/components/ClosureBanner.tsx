import { Link } from "react-router-dom";
import { CLOSURES, current } from "@/lib/schedule";

// Site-wide notice for closures marked `banner: true` in src/lib/schedule.ts.
// It disappears by itself after the closure's `end` date.
export default function ClosureBanner() {
  const closure = current(CLOSURES).find((c) => c.banner);
  if (!closure) return null;

  return (
    <div className="closure-banner" role="note">
      <div className="wrap">
        {closure.icon && <span aria-hidden="true">{closure.icon} </span>}
        <strong>{closure.title}:</strong> we&apos;re closed {closure.date}.{" "}
        <Link to="/schedule">See the schedule</Link>
      </div>
    </div>
  );
}
