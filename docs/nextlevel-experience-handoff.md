# Next Level Window Cleaning — Experience Handoff

**Branch:** `manus/next-level-experience`  
**Preview:** https://4173-ir1840uxgjn1dmkacby57-ddcd5a0d.us1.manus.computer  
**Completed:** 2026-09-26

## What changed

The site now uses the **Clearline Fieldbook** direction: a bright, local-service experience built around one simple path—identify the exterior service, understand the approach, and request an estimate or call/text.

### Primary experience

- Rebuilt the homepage around **service fit, surface-aware care, a straightforward estimate path, and named service areas**.
- Replaced generic reassurance and repeated calls to action with more direct, property-specific language.
- Kept the design deliberately **2D-first**. CSS glass planes, waterline geometry, and controlled depth provide the visual character without a WebGL payload or a failure point on mobile.
- Retained the `(919) 348-9808` call/text line as the primary action across the revised experience.
- Improved the service library route (`/our-work`) so it now guides visitors to six service paths instead of loading gallery assets that currently fail in browsers.
- Added the hero **Exterior Care Plan**: a three-step property, service/surface, and optional seasonal-focus selection that carries a readable summary into the estimate route.
- Mapped the plan to the estimate form when Web3Forms is configured; with the current no-key fallback, the call/text panel still receives and displays the selected plan.

### Integrity and conversion safeguards

- Removed unsupported visible testimonials, five-star language, and `AggregateRating` markup from the homepage and static page schema.
- Removed unsupported `100+ jobs`, `5★ average rating`, “real jobs” language, and response-time promises from the revised primary routes.
- Fixed the homepage image preload so it matches the hero image actually rendered.
- Added a Web3Forms configuration guard. When `VITE_WEB3FORMS_KEY` is absent, **Contact** and **Get a Free Estimate** present a clear call/text alternative rather than accept a form that cannot be delivered.
- Centralized the primary phone number in shared constants for the revised layout and CTAs.

### Accessibility and interaction

- Added visible keyboard focus states.
- Converted the main navigation service menus to accessible buttons with `aria-expanded`, keyboard open, and Escape-to-close behavior.
- Rebuilt the before/after component as a native keyboard-operable range control for future use.
- Added a reduced-motion override that removes animation/transition time and leaves the content path intact.
- Preserved the mobile call/estimate bar.

## Validation completed

| Check                           | Result                                                                                                                                              |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm check`                    | Passed — TypeScript reports no errors.                                                                                                              |
| `pnpm build`                    | Passed — Vite build, all 22 prerendered routes, server bundle, sitemap, and robots output completed.                                                |
| Formatting                      | Passed — Prettier check on all changed source and documentation files.                                                                              |
| Desktop preview                 | Passed at 1440 px: no horizontal overflow, no failed images, no console warnings.                                                                   |
| Mobile preview                  | Passed at 390 px: no horizontal overflow; sticky call/estimate bar is present.                                                                      |
| Homepage integrity              | Passed: no `aggregateRating`, no testimonial heading, no failed images, and six estimate links are reachable.                                       |
| Keyboard menu                   | Passed: Enter opens the service menu; Escape closes it.                                                                                             |
| Reduced motion                  | Passed: `prefers-reduced-motion: reduce` sets scroll behavior to `auto`.                                                                            |
| Estimate/contact delivery guard | Passed: with no Web3Forms key configured, both routes show their call/text fallback and no nonfunctional form.                                      |
| Service library                 | Passed: no broken gallery images, no gallery image requests, six service links, and no console warnings.                                            |
| Exterior Care Plan              | Passed: property, multi-service, and seasonal selections produce a URL-safe plan handoff; desktop/mobile checks show no overflow or image failures. |
| Care-plan keyboard path         | Passed: native button focus plus Space selects a property; selected state and live plan summary update.                                             |
| Configured-form prefill         | Passed in local validation: a commercial soft-wash plan selects the commercial route, prefills Soft Washing, and records the editable plan note.    |

## Owner decisions required before publishing

1. **Activate online forms**
   - Create or locate the Web3Forms key and add `VITE_WEB3FORMS_KEY` to the production environment.
   - Re-test both the residential and commercial estimate forms plus the contact form with a real inbox.
   - Until then, the visible call/text fallback is intentional and safer than a dead form.

2. **Confirm one public phone number**
   - The header and primary CTAs use `(919) 348-9808`.
   - The footer still exposes `(323) 485-1020` as an alternate legacy line. Confirm whether it should remain, then update site schema, Google Business Profile, Facebook, and citation listings together so the NAP record is consistent.

3. **Restore verified project photography**
   - The former gallery image URLs (`gallery_*` and `before-after-*`) returned HTTP 403 in browser QA, leaving blank visual proof on the live site.
   - The route now uses a reliable service library to avoid that failure. Restore only owner-approved originals through a working asset host, then add a small, labeled case-study gallery with actual property, service, and usage permission details.

4. **Review secondary-page promises**
   - Older secondary pages still contain “same-day” or guaranteed-response language. Confirm the operational policy before retaining, narrowing, or removing those claims site-wide.

5. **Reconfirm supplied business claims**
   - “Locally owned” and “fully insured” remain based on existing owner-supplied copy. Confirm they are current before final deployment.

## Performance note

The final client JavaScript bundle is **560.64 kB raw / 144.28 kB gzip**; CSS is **133.80 kB raw / 22.36 kB gzip**. The gzip payload is within the project’s practical mobile target, but Vite still emits a raw-chunk warning. The next performance pass should split non-home routes or heavy UI dependencies rather than add more animation.

## Files of interest

- `client/src/pages/Home.tsx` — redesigned homepage, revised structured data, and claim-safe copy.
- `client/src/components/ExteriorCarePlan.tsx` and `client/src/lib/exteriorCarePlan.ts` — homepage care-plan panel and safe query-string handoff model.
- `client/src/pages/OurWork.tsx` — service-library replacement for the broken gallery experience.
- `client/src/pages/GetEstimate.tsx` and `client/src/pages/Contact.tsx` — transparent form-delivery guard.
- `client/src/components/Layout.tsx` — accessible navigation and shared contact treatment.
- `docs/plans/2026-09-26-next-level-experience.md` — complete audit, evidence ledger, creative direction, and implementation rationale.
- `docs/plans/2026-09-26-exterior-care-plan-concept.md` — original concept rationale, user flow, evidence treatment, and acceptance criteria for the care-plan panel.
