# TODO: Launch Punch List

From the Kordane launch checklist sweep, September 13, 2026. Tier 0 + Tier 1
(brochure / local business). Items marked **[code]** can be done in the repo
now. Items marked **[owner]** need input or accounts from the Tempo owners.
Items marked **[deploy]** can only be verified on the live site.

*Updated September 13, 2026: all [code] items below are done. See README.md
for details (Netlify deploy, CSP hash regeneration, env vars, prerendering).*

---

## Blockers

- [x] **[code]** Deploying on Netlify, not Vercel. Added `netlify.toml` with:
  - [x] A redirect rule (`/*` → `/index.html`, status 200) so refreshing
        `/courses` etc. doesn't 404.
  - [x] Security headers (CSP, HSTS, X-Content-Type-Options,
        Referrer-Policy, Permissions-Policy) in a `[[headers]]` block.
  - [x] `vercel.json` deleted.
- [ ] **[owner + code]** Contact form is not live.
  - [x] **[code]** `src/pages/Contact.tsx` now reads the Formspree endpoint
        from `VITE_FORMSPREE_ID` (see `.env.example`). Until it's set, the
        form is disabled and shows a phone/email fallback instead of
        silently posting to a dead endpoint.
  - [ ] **[owner]** Create the Formspree form, set `VITE_FORMSPREE_ID` in
        Netlify's environment variables, then test a real submission from
        an outside email address and confirm it lands in an inbox someone
        reads.
- [ ] **[owner]** Replace placeholder content (see swap map in README):
  - [ ] `public/assets/ph-1..9.svg` with real class and studio photos
        (WebP, sized correctly, keep explicit width/height)
  - [ ] `public/assets/avatar.svg` uses with real headshots
  - [ ] Placeholder bios in `src/pages/About.tsx`
  - [ ] Placeholder testimonial quotes in `src/pages/Home.tsx` (get
        permission from the families first)
- [ ] **[owner]** Confirm pricing, hours, both phone numbers, and the street
      address with the owners before anything goes live.
- [ ] **[owner + code]** Pick and install analytics.
  - [x] **[code]** Plausible (cookieless, no consent banner needed) is
        wired up in `index.html` and allowed in the CSP. Domain is
        hardcoded to `tempocommunityacademy.com`.
        `src/pages/Privacy.tsx` names the tool.
  - [ ] **[owner]** Confirm the Plausible site is registered under that
        exact domain and traffic is showing up in the dashboard.
- [ ] **[owner]** Wire up uptime monitoring (FreelanceOps).

## Code fixes

- [x] **[code]** Top-level React error boundary added
      (`src/components/ErrorBoundary.tsx`, wraps `<App />` in
      `src/main.tsx`) so a component crash shows a friendly fallback
      instead of a white screen.
- [x] **[code]** Explicit `twitter:title`, `twitter:description`, and
      `twitter:image` meta tags added (in `index.html` and mirrored in
      `src/lib/useSeo.ts` alongside the og: tags).
- [x] **[code]** Contact form error handling: invalid submit now shows
      inline error text tied to each field via `aria-describedby`, with
      focus moved to the first invalid field, instead of relying only on
      the browser's native `required` bubbles.
- [x] **[code, decide first]** Prerendering. Decided: static per-route HTML
      shells, not full SSG. `scripts/prerender.mjs` runs after `vite build`
      and bakes per-page title/description/OG/twitter/canonical tags (from
      `src/lib/route-meta.json`) into `dist/<route>/index.html` for every
      indexed route, so link-preview bots that don't run JS see correct
      per-page previews. See README "Prerendering".

## Post-deploy verification

- [ ] **[deploy]** Run Lighthouse mobile on the deployed site. Target 90+
      Performance, 100 Accessibility. Record scores below.
- [ ] **[deploy]** Load at 320px wide, confirm no horizontal scroll.
- [ ] **[deploy]** Test on a real iPhone in Safari, over cellular.
- [ ] **[deploy]** Paste the URL into Slack or iMessage, check the OG preview.
- [ ] **[deploy]** Verify Google Business Profile name, address, and phone
      match the footer exactly.
- [ ] **[deploy]** HTTPS redirect works, one canonical host, the other 301s.
- [ ] **[deploy]** Hit a nonexistent URL, confirm the custom 404 renders.
- [ ] **[deploy]** Full 10-minute smoke test from the Kordane launch
      checklist.

**Lighthouse mobile scores:**
Performance **_ · Accessibility _** · Best Practices **_ · SEO _**

---

## Already verified, no action needed

Icons and OG image at exact correct dimensions (32x32 ico, 180x180 apple
touch, 192/512 manifest icons, 1200x630 OG with real branding). robots.txt
and sitemap.xml correct, noindex pages properly excluded. Accessibility
fundamentals solid: skip link, landmarks, single h1 per page, labeled
inputs, focus rings, keyboard nav with Escape on mobile menu,
reduced-motion respected, 44px+ touch targets, alt text throughout.
Honeypot on the form. Sticky mobile call bar with safe-area padding.
Consistent NAP across footer, contact page, and LocalBusiness JSON-LD.
Canonical and OG tags per route. No secrets or .env anywhere in the repo or
git history. dangerouslySetInnerHTML used only for static JSON-LD.
