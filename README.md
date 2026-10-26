# Creative Collective website

A standalone responsive website built with HTML, CSS and JavaScript. No build step, framework, remote font service or runtime dependency.

## Open or host

Open `index.html` directly, or serve this directory with any static web server. For example, `python3 -m http.server 8080`, then visit http://localhost:8080. Upload the directory contents to your static host to publish. This delivery is local and has not been deployed.

## Included

- `index.html`: all nine requested sections, plus studio introduction.
- `styles.css`: brand colors, local Poppins, responsive layouts, reduced motion, print styles and visible keyboard focus.
- `script.js`: mobile menu, mobile service disclosure, motion, UTM capture, and the lead-form submission experience.
- `projects.html`: four individually linkable concept previews.
- `privacy.html`: description of this static site's data behavior.
- `assets/`: local optimized artwork, original transparent master logo and wordmark, Poppins fonts and license.
- `reference/`: supplied website reference and brand board for comparison.

## Contact and lead funnel

The project inquiry form sends entries to **CreativeCollectivesPH@gmail.com**, explicitly confirmed by the owner. It captures name, email, organization, service interest, budget range, timeline, project details, consent, and available UTM parameters. JavaScript uses FormSubmit’s AJAX endpoint so visitors remain on the page; the standard POST action remains as a no-JavaScript fallback.

FormSubmit requires the owner to confirm the destination email the first time the form is used. The live form should not be announced until that activation message has been approved. FormSubmit is a third-party relay and states that submissions may be retained for 30 days; `privacy.html` discloses this processing.

## Source and content fidelity

The connected Google Drive folder was verified on 2026-09-08:
https://drive.google.com/drive/folders/12hhTHW_xWsczf4aG02TTqSCyieQdXVXz

The local synced sources have matching filenames and are unchanged. Working asset copies are cropped/resized for layout and exported to WebP/PNG. Original transparent masters are preserved in assets.

- Identity: `creative-collective-logo-1080-transparent.png` and `creative-collective-wordmark-1080-transparent.png`.
- Color/type reference: `3fc37d09-d465-4020-bc8b-cec2e069c659.png` specifies yellow #FFD200, near black, and Poppins. Cream is the neutral requested in the website brief.
- Website and project names: `bf448705-1c66-448b-ad9f-f85eda7c44dc.png`.
- Hero artwork: `4a68a76c-7ca5-4188-88fb-d2b698d8c8d7.png`.
- Brand application artwork: `1578fc65-bf6e-488b-941b-f555803486d4.png`.
- Copy and service architecture: the supplied Creative Collectives Strategy conversation.
- The retrieved conversation records an error generating the newer full website mockup. No newer approved full-page rendering was available. This implementation combines the available website reference with the requested rounded black/cream/yellow editorial card treatment and all requested sections.

## Content status before public launch

Peak Fitness, Lumina Wellness, URBN Studios, and the logo roster appear in the visual reference, but their client relationships or project results are unverified. The site presents them as concept material rather than social proof. The testimonial section explicitly reserves space for future permissioned feedback and contains no endorsement. Replace those entries only with permissioned, verified content.

The hero team, merchandise and studio imagery are supplied visual concepts and do not establish real staff, manufactured inventory or an occupied office. Small project thumbnails were extracted from the source mockup; higher-resolution originals would improve their detail.

No fabricated awards, metrics, social links, case-study outcomes or client quotes were added. There are no nonfunctional social controls or pretend booking actions.

## Editing

Edit text directly in the HTML files. Tokens are at the top of styles.css. Set the final production domain and absolute social-preview image metadata after choosing a host; no guessed canonical URL is included. Any new analytics, backend form handler, or hosting-related processing should be reflected in privacy.html.

Design settings: variance 7, motion 3, density 4. Native editorial CSS; 18px cards, pill buttons, and a committed black/yellow/cream palette. The reference's three-line headline and alternating surfaces intentionally follow the brand brief.

## Pre-launch polish (2026-09-20)

- Reframed unverified logos, projects, and testimonials as concept material instead of client proof.
- Replaced the earlier email handoff with a POST-based lead funnel. The form has an AJAX experience, a no-JavaScript POST fallback, validation, consent, a honeypot, UTM capture, and explicit success/error states.
- Added progressive disclosure for optional mobile services, while keeping every service visible without JavaScript.
- Reworked small project previews to render near their native resolution instead of stretching across full cards.
- Repaired tablet card-title overflow, relaxed display letter spacing, enlarged touch targets, and improved text wrapping.
- Added Open Graph and Twitter metadata using local project imagery. Add the final canonical URL and absolute social-image URL after choosing the production domain.
- Added a brand-led motion layer with staggered hero type, scroll reveals, floating editorial annotations, playful card angles, responsive hover details, and subtle pointer depth. All continuous and entrance motion is disabled when reduced-motion is requested.

## Verification (2026-10-04)

- Chrome layouts checked at 320, 390, 640, 768, 1024 and 1440 CSS pixels: no horizontal overflow, missing images or overflowing headings.
- axe-core WCAG 2 A/AA, WCAG 2.1 AA and WCAG 2.2 AA automated checks: zero violations on the home, concept and privacy pages at mobile and desktop widths. Automated checks do not replace a full manual accessibility audit.
- Mobile menu opens, closes with Escape and returns focus. Service disclosures and process details work natively. Navigation remains available without JavaScript.
- Lead-form success and error states were checked with intercepted test responses; no inquiry or email was sent.
- Required-field validation, reset behavior, button state, destination address, and the no-JavaScript POST action were checked in both the folder-based site and standalone HTML export.
- Reduced-motion mode disables entry animation.
- All local HTML links, asset references and fragment destinations passed an integrity check.
- Lighthouse simulated mobile: performance 96, accessibility 100, best practices 100, SEO 100; FCP 1.2 s, LCP 2.6 s, total blocking time 70 ms and CLS 0. Local lab measurements vary by device, network and eventual host.
- Final desktop/mobile page renders visually reviewed.

Poppins Latin WOFF2 files are distributed by Fontsource; the included SIL Open Font License applies. Reference image crops and original transparent masters remain local.
