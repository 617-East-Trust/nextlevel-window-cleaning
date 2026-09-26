# Next Level Window Cleaning — Experience Audit & Change Brief

**Date:** 2026-09-26  
**Mode:** Audit + landing-page implementation  
**Primary artifact:** Homepage redesign for `nextlevelwindowsnc.com`

## Communication brief

| Item              | Decision                                                                                                                            |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Primary audience  | Sanford-area homeowners, plus local businesses and property managers evaluating exterior-cleaning help.                             |
| Reader’s job      | Determine whether the company covers the needed service and area, then request an estimate or call/text.                            |
| Primary action    | **Request a free estimate.** Calling/texting is the secondary, equally visible path.                                                |
| Governing thought | Clear service choices, a real local operating area, and an uncomplicated estimate path are more persuasive than decorative “proof.” |
| Experience tier   | **Campaign / supporting:** a high-craft local-service homepage, not a WebGL flagship.                                               |
| Voice             | Direct, calm, neighborly, and specific. No pressure language, invented urgency, ratings, or outcome claims.                         |

## Inputs, evidence, and constraints

### Verified inputs

- The business is **Next Level Window Cleaning**, based in Sanford, NC; its tracked services are window cleaning, pressure washing, soft washing, gutter cleaning, and Christmas light installation. `business-info.md`, `client/src/pages/Home.tsx`
- The public site identifies Sanford, Cameron, Spring Lake, and Broadway as service areas, offers free estimates, and presents local ownership and insurance as trust signals. Live homepage, 2026-09-26
- The primary display phone is `(919) 348-9808`; the live footer also displays `(323) 485-1020`. `client/src/components/Layout.tsx`
- The current hero image loads successfully in the live browser. `hero-generated-v1-n8YeMmynmW4YiJFzATdXJt.webp`
- The current build is React 19, Vite, Tailwind CSS 4, and pre-rendered at build time. `package.json`, `prerender.ts`

### Assumptions to validate with the owner

- `(919) 348-9808` is the preferred public call/text number and should become the one canonical number used in all local listings and structured data.
- “Fully insured” remains accurate and can continue as a site-wide trust claim.
- A Web3Forms access key is available in production. The repository only contains the placeholder fallback, so the working submission path cannot be proven from source.
- The existing gallery images and customer copy are approved for public use. Their live delivery and review provenance are not currently reliable enough to use as structured proof.

### 3D justification decision

**Do not use WebGL or a 3D canvas.** The site sells a practical, locally delivered service. The customer’s decision is helped by legible service routing, strong photography, and an obvious contact path; a canvas would add load and maintenance cost without explaining the service better. The redesign uses restrained CSS depth, translucent “glass” planes, and waterline geometry as a progressive visual layer, with a complete no-motion alternative.

## Claim-and-evidence ledger

| Claim or element                                                           | Classification                         | Evidence                                                                            | Treatment in redesign                                                                                               |
| -------------------------------------------------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Sanford-area exterior cleaning                                             | Verified                               | `business-info.md`; live homepage; local service routes                             | Retained.                                                                                                           |
| Window cleaning, pressure washing, soft washing, gutters, Christmas lights | Verified                               | `business-info.md`; service routes                                                  | Retained.                                                                                                           |
| Locally owned                                                              | Supplied-unverified                    | Existing site copy                                                                  | Retained as an existing owner-supplied claim; owner should reconfirm during content approval.                       |
| Fully insured                                                              | Supplied-unverified                    | Existing site copy                                                                  | Retained as an existing owner-supplied claim; owner should reconfirm during content approval.                       |
| Same-day response / fast turnaround                                        | Supplied-unverified                    | Existing site copy only                                                             | Removed from primary conversion copy until operationally confirmed.                                                 |
| Three named, five-star testimonials and `AggregateRating`                  | Unsupported                            | Hard-coded in `Home.tsx`; business notes say the Facebook profile was not yet rated | Removed from the homepage and JSON-LD. Replace only with source-linked, permissioned reviews.                       |
| “100+ jobs completed” / “5★ average rating”                                | Unsupported                            | Hard-coded in `OurWork.tsx`                                                         | Remove or replace with service-category information.                                                                |
| “Real job photos”                                                          | Supplied-unverified + delivery failure | Component comments and gallery page; live asset requests return 403                 | Do not use as primary proof until originals and delivery are verified.                                              |
| Local `(919)` phone number                                                 | Supplied-unverified                    | Current site and repository constants                                               | Keep as existing public number; do not silently replace the secondary number everywhere without owner confirmation. |

## Audit findings and remediation order

| Priority | Finding                                                                                       | Reader / delivery impact                                          | Recommended change                                                                                                           | Effort                 |
| -------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| P0       | Homepage emits a five-star `AggregateRating` and named reviews with no source trail.          | Can undermine trust and create search-policy exposure.            | Remove the review section/schema; add source-linked reviews only after owner approval.                                       | Low                    |
| P0       | Two homepage images return HTTP 403 in a real browser: the “proof” panel and commercial card. | Broken proof and a visually damaged first impression.             | Rebuild homepage around the one loading hero image and CSS service panels; restore/replace the gallery originals separately. | Medium                 |
| P0       | The form submits using a placeholder key when `VITE_WEB3FORMS_KEY` is missing.                | A visitor can complete a form that has no configured destination. | Add a clear pre-submit fallback to call/text; verify the production environment value.                                       | Low                    |
| P1       | The page shows both NC and LA phone numbers.                                                  | Weakens local NAP consistency and creates decision friction.      | Owner confirms one canonical public number, then update site copy, schema, GBP, and citations in one release.                | Low after confirmation |
| P1       | Browser warns that the preloaded hero is not the hero shown.                                  | Wasted preload and misleading performance optimization.           | Preload the actual rendered hero or switch the rendered hero to the preloaded asset.                                         | Low                    |
| P1       | Navigation dropdown and before/after control are not fully keyboard-operable.                 | Prevents a complete keyboard path.                                | Add button semantics, menu state, and keyboard range input.                                                                  | Low                    |
| P2       | Current homepage repeats reassurance language and spreads the same CTA across many sections.  | Dilutes the main decision.                                        | Use one clear narrative: fit → services → simple process → service area → estimate.                                          | Medium                 |

## Creative direction sheet

### Creative tension

> **Next Level Window Cleaning turns “exterior cleaning is another chore” into “your property has a clear, manageable maintenance plan.”**

**Friction:** crisp professional care vs. the warm familiarity of a local service business.

| Element               | Direction                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Claim                 | The site makes a cleaner exterior feel easy to start, not hard to research.                                        |
| Emotional temperature | Clear, capable, approachable.                                                                                      |
| Visual verbs          | Frame, rinse, clarify.                                                                                             |
| Material cues         | Clean glass reflections, sunlight on siding, a measured waterline, understated field labels.                       |
| Anti-references       | Blue-gradient SaaS cards, fake five-star walls, generic “before and after” stock imagery, hardware-store clip art. |

### Three explored directions

| Direction                          | Premise                                                                                                                                   | Strength                                                                               | Risk                                                                     |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Clearline Fieldbook** — selected | A bright, structured service field guide: clean glass planes, exact service labels, and an estimate path that feels ready for a real job. | Supports a practical homeowner decision while remaining distinct and locally grounded. | Needs real field photography restored for expansion beyond the homepage. |
| Watermark Workshop                 | A more tactile, editorial treatment with paper labels and blue-pencil annotations.                                                        | Warmer and more craft-led.                                                             | Can become decorative or look less established at small sizes.           |
| Street-Ready Service               | Bold color blocks and utility-style service routing for fast mobile scanning.                                                             | Fastest path to action.                                                                | Risks reducing the brand to another generic local-service template.      |

**Selection:** Clearline Fieldbook has the strongest balance of truth, distinction, maintenance, and conversion clarity. It preserves the existing aqua/coral palette but replaces soft generic card styling with an intentional system: cobalt service labels, a carefully bounded coral action color, deep ink text, translucent sky panels, and thin “waterline” rules. It is original work and does not imitate another company or designer.

## Homepage narrative and interaction model

1. **Hero — fit + action:** identify the local service and two paths: request an estimate or call/text.
2. **Service field guide — relevance:** make the five services easy to scan without asking the reader to decipher package language.
3. **Care by surface — mechanism:** explain why different surfaces need different cleaning approaches. This uses existing, factual service distinctions rather than unsupported testimonials.
4. **A straightforward path — effort:** reduce friction with a short, honest estimate process.
5. **Serving Sanford and nearby towns — local relevance:** identify the listed cities and link to service-area detail.
6. **Questions before booking — objections:** answer insurance, scope, commercial, and service-area questions with existing approved content.
7. **Final CTA — action:** restate the free-estimate action; no manufactured timeframe.

### Interaction model

- **Primary input:** Native scroll, keyboard, pointer, and touch.
- **Motion:** Subtle CSS entrance and hover effects only; opacity-only in reduced-motion mode.
- **Mobile behavior:** The call/text and estimate actions remain in the sticky mobile bar; service cards stay one-column, full-width tap targets.
- **No-JavaScript behavior:** Pre-rendered copy, semantic links, telephone links, and forms remain usable. Decorative effects are nonessential.

## Implementation scope for this branch

1. Rebuild the homepage in the selected direction, using only a confirmed-loading hero image for primary imagery.
2. Remove unsupported homepage rating/testimonial JSON-LD and visible review treatment.
3. Correct the homepage hero preload.
4. Improve header dropdown semantics and footer social label.
5. Make the before/after control keyboard-operable.
6. Add a Web3Forms configuration guard on contact and estimate forms.
7. Record remaining owner decisions and the gallery-CDN repair in the handoff.

## Acceptance criteria

- The reader can identify the service area, service types, and primary estimate action in the first screen.
- No visible homepage image request fails in a real browser.
- No unsupported rating, testimonial, “jobs completed,” or response-time claim remains in the redesigned homepage.
- Primary navigation and the before/after control have an accessible keyboard path.
- The build, TypeScript check, desktop/mobile inspection, and reduced-motion inspection pass.
- The public form clearly directs the reader to call/text if no delivery key exists.
