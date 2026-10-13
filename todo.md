## Blockers

- [ ] **[owner + code]** Contact form is not live.
  - [ ] **[deploy]** Deploy, then submit the form once.
  - [ ] **[owner]** Click the activation link FormSubmit emails to
        contacttempoacademy@gmail.com.
  - [ ] **[owner]** Send a real test submission from an outside email
        address, confirm it lands in an inbox someone reads and the
        browser ends on /thanks. Repeat once after the DNS transfer.
  - [ ] **[code, optional]** Swap the email in `.env.production` for the
        random-string ID FormSubmit provides, and redeploy.
- [ ] **[owner + deploy]** Transfer DNS from the old Squarespace site to
      Netlify (site is at https://tempo-academy.netlify.app/ until then).
  - [ ] In Netlify (Domain management), add `www.tempocommunityacademy.com`
        as the primary domain and `tempocommunityacademy.com` as an alias.
  - [ ] At the domain registrar: either point the apex A record to Netlify's
        load balancer and CNAME `www` to `tempo-academy.netlify.app`, or
        switch nameservers to Netlify DNS. Copy over any existing MX/TXT
        records first so nothing else on the domain breaks.
  - [ ] Wait for Netlify to provision HTTPS, then confirm the apex 301s to
        www and every page loads on the real domain.
  - [ ] Only then cancel the Squarespace site.
- [ ] **[owner]** Schedule page (`src/lib/schedule.ts`):
  - [ ] Replace the placeholder event and closure (shown with a
        "Placeholder" tag) with real ones, or delete them, before the DNS
        transfer.
  - [ ] Confirm Wednesday art: the October calendar shows two "Art - Snack
        Studio" classes (4-5 and 5-6 PM), the owners' schedule shows only
        Art 5-6 PM. What is "Snack Studio"?
  - [ ] Thursday Animation runs to 6:30 PM, but the posted hours say Mon to
        Fri close at 6 PM (footer, Contact page). Update the hours?
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
      footer exactly. Email is the main contact; phones are per language
      (Korean 917-582-9560 Inae, English & Spanish 929-810-8648 Cesia), so
      pick which one, if any, the profile should show.
- [ ] **[deploy]** HTTPS redirect works, one canonical host, the other 301s.
- [ ] **[deploy]** Hit a nonexistent URL, confirm the custom 404 renders
      and the response status is 404 (devtools Network tab). Also confirm
      /thanks and an /about/<name> bio page load with status 200.
- [ ] **[deploy]** Full 10-minute smoke test from the Kordane launch
      checklist.

**Lighthouse mobile scores:**
Performance **_ · Accessibility _** · Best Practices **_ · SEO _**
