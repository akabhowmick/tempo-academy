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
Runs `tsc -b && vite build`, then a `postbuild` step
(`scripts/prerender.mjs`) writes a static HTML shell per route into `dist/`
(see "Prerendering" below). Deploys to **Netlify**: `netlify.toml` sets the
build command, the SPA fallback redirect so refreshing `/courses` etc.
doesn't 404, and the security headers (CSP, HSTS, and friends). It would also
work on any static host that serves `<dir>/index.html` for a request to
`/<dir>` (Vercel, GitHub Pages, S3, nginx) with an equivalent SPA-fallback
and header config swapped in.

### Environment variables
Copy `.env.example` to `.env.local` for local dev (gitignored), or set in
Netlify's Site settings → Environment variables for production builds.

| Variable | Purpose |
| --- | --- |
| `VITE_FORMSUBMIT_ID` | [FormSubmit](https://formsubmit.co) endpoint for the contact form, which posts to `https://formsubmit.co/<value>`. Use the inbox email address only for the one-time activation, then the random-string ID (see below). Until set, the form on `/contact` is disabled and shows an email fallback instead of posting to a dead endpoint. |

#### Activating the contact form (FormSubmit)
1. Set `VITE_FORMSUBMIT_ID` to the inbox address (`contacttempoacademy@gmail.com`)
   in Netlify, deploy, and submit the form once.
2. FormSubmit emails that inbox an activation link. Click it.
3. FormSubmit then gives a random-string ID for the form. Replace the email
   address in `VITE_FORMSUBMIT_ID` with that ID and redeploy, so the address
   isn't exposed in the page source.

The form is a plain POST (no JS fetch). Hidden fields set the redirect back to
`/thanks` (`_next`), turn off FormSubmit's captcha page (`_captcha`; the
`_honey` honeypot field catches bots instead), use the table email layout
(`_template`), and set the email subject (`_subject`).

### Content Security Policy
`netlify.toml` ships a `script-src` with no `'unsafe-inline'`, pinning the
one static inline script (the homepage's LocalBusiness JSON-LD in
`index.html`) by sha256 hash instead. If you edit that script block, the
build will still succeed but the page will fail the browser's CSP check at
runtime (open devtools console to see it) until the hash in `netlify.toml`
is updated. Regenerate it with:
```
node -e "const fs=require('fs'),c=require('crypto');const h=fs.readFileSync('dist/index.html','utf8').match(/<script type=\"application\/ld\+json\">([\s\S]*?)<\/script>/)[1];console.log('sha256-'+c.createHash('sha256').update(h,'utf8').digest('base64'))"
```
(run after `npm run build`, so it hashes what Vite actually emits).

## Structure
- `src/App.tsx` route table
- `src/pages/` one file per route: Home, Courses, Pricing, About, Gallery,
  Faq, Contact, Thanks, Privacy, Terms, Nondiscrimination, Accessibility,
  NotFound
- `src/components/Header.tsx` mobile nav toggle (React state), `Footer.tsx`,
  `CallBar.tsx`, `Layout.tsx` wraps every page, `ErrorBoundary.tsx` top-level
  crash guard (wraps `<App />` in `src/main.tsx`)
- `src/lib/route-meta.json` single source of truth for each route's title,
  description, and noindex flag — read by both `useSeo` (client) and
  `scripts/prerender.mjs` (build time), so the two can't drift apart
- `src/lib/useSeo.ts` sets document title, meta description, OG/twitter
  tags, and canonical URL per route on mount
- `scripts/prerender.mjs` postbuild step, see "Prerendering" below
- `src/index.css` all styling, brand tokens in `:root`
- `public/assets/` icons, OG image, optimized WebP photos (generated, see
  "Images" below)
- `public/robots.txt`, `sitemap.xml`, `site.webmanifest`
- `netlify.toml` build command, SPA redirect, and security headers

## Prerendering
This is a client-side SPA: without help, only `index.html`'s static tags
exist in the raw HTML, and `useSeo` updates `<title>` and meta tags after JS
runs. That's fine for browsers and for Google (it renders JS), but some
link-preview bots (Slack, iMessage) only read the raw HTML and would show
the generic homepage tags on every page.

`scripts/prerender.mjs` runs after `vite build` and writes one static shell
per route in `src/lib/route-meta.json` as `dist/<route>/index.html`, with that
route's title/description/OG/twitter/canonical tags baked in. That includes
each team bio page (`/about/<slug>`) and noindex pages like `/thanks`, which
also get `<meta name="robots" content="noindex">`. Only indexable routes are
listed in `public/sitemap.xml`. Every shell loads the same JS bundle, so the
app behaves identically for browsers; this only changes what a bot sees
before JS runs.

### Real 404s
`netlify.toml`'s catch-all (`/*` → `/index.html`) uses status 404. Real files
win over redirects on Netlify, so it only matches unknown paths, which get a
true 404 status while the app renders its NotFound page. The `/404` entry in
`route-meta.json` is that page's metadata, not a route, so it isn't
prerendered. **Any new route must be added to `route-meta.json`** (and to the
sitemap if indexable), or it will be served as a 404 in production.

Note: `npm run preview` (Vite's own static server) only resolves these
per-route files for a path with a trailing slash (`/courses/`) or the exact
file (`/courses/index.html`) — it falls back to the root SPA shell for
`/courses` with no trailing slash. Netlify's file resolution checks
`<path>/index.html` before applying the SPA redirect regardless of a
trailing slash, so `/courses` resolves correctly once deployed; this is a
`vite preview` quirk, not a build issue.

## Images
Raw client photos live in `assets-src/` (gitignored, never committed). Run
`npm run optimize` (`scripts/optimize-images.mjs`, uses sharp) to regenerate
the WebP files in `public/assets/`: auto-rotated, resized to 2x their rendered
size, metadata and GPS stripped. `ASSETS.md` maps each source file to its slot.
To swap a photo, edit the list in the script (each entry's `focus` point
keeps the people centered in the crop), re-run it, and update width/height
in the component if the output size changed.

## Content still to come
| Slot | Status |
| --- | --- |
| Headshots in `src/lib/team.ts` | Eunice Lee and Jin Bok show an initials badge until photos arrive |
| Team in `src/lib/team.ts` | Eunice has no bio yet. Each bio gets its own `/about/<slug>` page (also add it to `route-meta.json` and `sitemap.xml`) |

## Booking, when you scope it
No backend yet, contact form still posts to FormSubmit. When booking is
ready: add Supabase for availability/appointments and an API layer (Netlify
Functions work fine alongside a Vite SPA), then swap the contact form's
program-select block for a real slot picker.

## Analytics
[Plausible](https://plausible.io) is wired up in `index.html` (cookieless,
no consent banner needed — see `src/pages/Privacy.tsx`). The tracked domain
is hardcoded as `tempocommunityacademy.com`; update it there if the
production domain changes.

## TODO before launch
Owner-blocked or deploy-only items remaining — see `todo.md` for the full,
checkable list with more detail.
1. Activate FormSubmit (see "Activating the contact form" above), swap in
   the random-string ID, and test delivery from an outside email address.
2. Pricing, hours, and address are confirmed. Phone numbers are
   intentionally not published (owners' request): contact is email + form.
3. Get the remaining photos and bios (see "Content still to come" above).
4. Confirm the Plausible domain/site setup matches production.
5. Add uptime monitoring.
6. Run Lighthouse mobile on the deployed site and record scores.
7. Verify the Google Business Profile name/address matches the footer.
8. Smoke test per the Kordane launch checklist.
