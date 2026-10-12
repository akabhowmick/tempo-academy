## Blockers

- [ ] **[owner + code]** Contact form is not live.
  - [ ] **[owner + code]** Activate FormSubmit: set `VITE_FORMSUBMIT_ID` in
        Netlify to `contacttempoacademy@gmail.com`, deploy, and submit the
        form once.
  - [ ] **[owner]** Click the activation link FormSubmit emails to
        contacttempoacademy@gmail.com.
  - [ ] **[code]** Replace the email in `VITE_FORMSUBMIT_ID` with the
        random-string ID FormSubmit provides, and redeploy.
  - [ ] **[owner]** Send a real test submission from an outside email
        address, confirm it lands in an inbox someone reads and the
        browser ends on /thanks.
- [ ] **[owner]** Replace placeholder content (see swap map in README):
  - [x] `public/assets/ph-1..9.svg` with real class and studio photos
        (WebP, sized correctly, keep explicit width/height)
  - [x] Photos for Cafe & More and Makeup & Beauty
  - [x] `public/assets/avatar.svg` uses with real headshots
  - [x] Headshot for Jin Bok (chef illustration, her choice; Eunice Lee is no
        longer teaching and was removed)
  - [x] Placeholder bios in `src/pages/About.tsx` (Halle, Cesia, Jasmine)
  - [x] Bios for Inae, Cynthia, Pognee, Jin (each has an /about/<name> page)
  - [x] Placeholder testimonial quotes in `src/pages/Home.tsx` (section
        removed, no testimonials for now)
- [x] **[owner]** Confirm pricing, hours, both phone numbers, and the street
      address with the owners before anything goes live. (Confirmed in the
      owners' "TCA website" doc.)
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
- [ ] **[deploy]** Verify Google Business Profile name and address match the
      footer exactly, and that its phone is 917-582-9560 (Inae's line, as on
      the old site).
- [ ] **[deploy]** HTTPS redirect works, one canonical host, the other 301s.
- [ ] **[deploy]** Hit a nonexistent URL, confirm the custom 404 renders
      and the response status is 404 (devtools Network tab). Also confirm
      /thanks and an /about/<name> bio page load with status 200.
- [ ] **[deploy]** Full 10-minute smoke test from the Kordane launch
      checklist.

**Lighthouse mobile scores:**
Performance **_ · Accessibility _** · Best Practices **_ · SEO _**
