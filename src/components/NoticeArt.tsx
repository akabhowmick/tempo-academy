// Decorative illustrations for the Schedule page's "Upcoming events" and
// "Closures & holidays" headings. Drawn in the site palette (see the :root
// tokens in index.css). Hidden from screen readers; the headings carry the meaning.

export function MegaphoneArt() {
  return (
    <svg className="notice-art" viewBox="0 0 160 140" aria-hidden="true" focusable="false">
      {/* confetti */}
      <path d="M20 22l9 4-7 6z" fill="#E39B3D" />
      <path d="M58 8l4 9-9-1z" fill="#1F4A26" />
      <path d="M134 14l8 5-8 4z" fill="#3E7C47" />
      <rect x="100" y="6" width="5" height="12" rx="2" transform="rotate(25 102 12)" fill="#E39B3D" />
      <rect x="14" y="72" width="5" height="12" rx="2" transform="rotate(-30 16 78)" fill="#3E7C47" />
      <circle cx="146" cy="118" r="4" fill="#EFCB8F" />
      <circle cx="30" cy="122" r="3.5" fill="#1F4A26" />
      <g transform="rotate(-14 80 76)">
        {/* handle */}
        <path d="M58 92l9 26a5 5 0 0 0 6 3l7-2a5 5 0 0 0 3-6l-7-22z" fill="#1F4A26" />
        {/* mouthpiece */}
        <rect x="28" y="62" width="22" height="30" rx="6" fill="#1F4A26" />
        {/* cone */}
        <path d="M48 60l58-26a8 8 0 0 1 11 7v72a8 8 0 0 1-11 7L48 94z" fill="#3E7C47" />
        <path d="M48 60l58-26a8 8 0 0 1 4 1L52 62z" fill="#2E6B36" />
        {/* bell rim */}
        <ellipse cx="116" cy="77" rx="9" ry="38" fill="#EFCB8F" />
        <ellipse cx="117" cy="77" rx="4" ry="27" fill="#E39B3D" />
        {/* sound waves */}
        <g fill="none" stroke="#E39B3D" strokeWidth="6" strokeLinecap="round">
          <path d="M136 52l12-10" />
          <path d="M140 77h16" />
          <path d="M136 102l12 10" />
        </g>
      </g>
    </svg>
  );
}

export function ClosedSignArt() {
  return (
    <svg className="notice-art" viewBox="0 0 160 140" aria-hidden="true" focusable="false">
      {/* falling leaves */}
      <path d="M16 30c10-6 20-2 20 8-10 6-20 2-20-8z" fill="#E39B3D" />
      <path d="M140 18c8-8 18-6 18 3-8 8-18 6-18-3z" fill="#EFCB8F" />
      <path d="M142 120c6-9 16-9 18-1-6 9-16 9-18 1z" fill="#3E7C47" />
      {/* cords and hook */}
      <path d="M80 18L36 56M80 18l44 38" stroke="#59606F" strokeWidth="3" strokeLinecap="round" />
      <circle cx="80" cy="16" r="7" fill="#E39B3D" stroke="#1F4A26" strokeWidth="2" />
      {/* sign board */}
      <rect x="18" y="52" width="124" height="74" rx="14" fill="#B8502F" />
      <rect x="25" y="59" width="110" height="60" rx="9" fill="none" stroke="#FDF7EC" strokeWidth="2.5" />
      <text x="80" y="80" textAnchor="middle" fill="#FDF7EC" fontFamily="Figtree, sans-serif" fontStyle="italic" fontWeight="600" fontSize="13">
        Sorry, we&apos;re
      </text>
      <text x="80" y="107" textAnchor="middle" fill="#FDF7EC" fontFamily="'Bricolage Grotesque', sans-serif" fontWeight="800" fontSize="28" textLength="92" lengthAdjust="spacingAndGlyphs">
        CLOSED
      </text>
    </svg>
  );
}
