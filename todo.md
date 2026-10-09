## Blockers

- [ ] **[owner + code]** Contact form is not live.
  - [ ] **[owner]** Create the Formspree form, set `VITE_FORMSPREE_ID` in
        Netlify's environment variables, then test a real submission from
        an outside email address and confirm it lands in an inbox someone
        reads.
- [ ] **[owner]** Replace placeholder content (see swap map in README):
  - [x] `public/assets/ph-1..9.svg` with real class and studio photos
        (WebP, sized correctly, keep explicit width/height)
  - [ ] Real photos for Cafe & More and Makeup & Beauty (currently
        `cafe-image.png` / `makeup.png` stand-ins)
  - [x] `public/assets/avatar.svg` uses with real headshots
  - [ ] Headshots for Eunice Lee and Pognee Kim (initials badge for now)
  - [x] Placeholder bios in `src/pages/About.tsx` (Halle, Cesia, Jasmine)
  - [ ] Bios for Inae, Cynthia, Eunice, Pognee, Jin
  - [x] Placeholder testimonial quotes in `src/pages/Home.tsx` (section
        removed, no testimonials for now)
- [ ] **[owner]** Confirm pricing, hours, both phone numbers, and the street
      address with the owners before anything goes live.
- [ ] **[owner + code]** Pick and install analytics.
  - [ ] **[owner]** Confirm the Plausible site is registered under that
        exact domain and traffic is showing up in the dashboard.
- [ ] **[owner]** Wire up uptime monitoring (FreelanceOps).

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
