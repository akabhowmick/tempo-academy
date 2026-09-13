# Tempo Community Academy - React + TypeScript (Vite)

Vite + React 18 + TypeScript, react-router-dom for routing. Plain CSS, no
Tailwind. This is a client-rendered SPA, not Next.js, no server component.

## Run it
```
npm install
npm run dev
```
Then open http://localhost:5173

## Build & deploy
```
npm run build
```
Outputs to `dist/`. Deploy to Vercel (static build, `vercel.json` handles
SPA routing so refreshing `/courses` etc doesn't 404) or any static host.

## Structure
- `src/App.tsx` route table
- `src/pages/` one file per route: Home, Courses, Pricing, About, Gallery,
  Contact, Thanks, Privacy, Accessibility, NotFound
- `src/components/Header.tsx` mobile nav toggle (React state), `Footer.tsx`,
  `CallBar.tsx`, `Layout.tsx` wraps every page
- `src/lib/useSeo.ts` sets document title, meta description, OG tags, and
  canonical URL per route on mount
- `src/index.css` all styling, brand tokens in `:root`
- `public/assets/` icons, OG image, placeholder SVGs
- `public/robots.txt`, `sitemap.xml`, `site.webmanifest`

## SEO note (read before launch)
This is a client-side SPA. `useSeo` updates `<title>` and meta tags after
JS runs, which is fine for browsers and for Google (it renders JS), but a
few link-preview bots (some Slack/iMessage previews) only read the raw HTML
and may show the generic tags from `index.html` instead of the per-page
ones. If OG previews on individual pages matter, prerender the build before
launch (e.g. `vite-plugin-ssg`, or Vercel's static prerendering) rather than
shipping the pure client-rendered build. Flagging this now so it's not a
surprise at launch, not urgent for a filler-content build.

## Content swap map (when owners deliver material)
| Placeholder | Replace with |
| --- | --- |
| `public/assets/ph-1..9.svg` | Real class/studio photos |
| `public/assets/avatar.svg` uses | Real headshots |
| "Placeholder bio" text in `src/pages/About.tsx` | Real bios |
| "Placeholder quote" figures in `src/pages/Home.tsx` | Real testimonials |

## Booking, when you scope it
No backend yet, contact form still posts to Formspree. When booking is
ready: add Supabase for availability/appointments and an API layer (Vercel
serverless functions work fine alongside a Vite SPA), then swap the
contact form's program-select block for a real slot picker.

## TODO before launch
1. Contact form: create a Formspree (or similar) form, replace
   `REPLACE_WITH_FORM_ID` in `src/pages/Contact.tsx`, test from an outside email.
2. Confirm pricing, hours, phones, and address with the owners.
3. Replace placeholder images and bios (see swap map).
4. Decide on prerendering if per-page OG previews matter (see SEO note).
5. Security headers via Vercel config (CSP, HSTS, X-Content-Type-Options,
   Referrer-Policy, Permissions-Policy).
6. Install analytics, update the Analytics section of `src/pages/Privacy.tsx`.
7. Add uptime monitoring.
8. Run Lighthouse mobile on the deployed site and record scores.
9. Verify the Google Business Profile name/address/phone matches the footer.
10. Smoke test per the Kordane launch checklist.
