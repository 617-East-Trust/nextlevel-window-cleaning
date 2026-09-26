# Exterior Care Plan — Hero Panel Concept

**Status:** Approved in conversation for implementation on 2026-09-26  
**Route:** Homepage hero  
**Primary action:** Continue to a free estimate with a carry-forward summary

## Concept

Translate the reference’s editorial booking panel into an original service-planning tool for exterior cleaning: **Exterior Care Plan**.

The panel is not a booking calendar. It helps a Sanford-area visitor make three small, useful decisions before entering the estimate flow:

1. **Property:** home or business.
2. **Services/surfaces:** windows, siding & roof, driveway & walkways, gutters, and/or holiday lights.
3. **Seasonal focus:** spring pollen, summer exterior wash, leaves & gutters, or holiday lights.

The user then sees a visible summary and continues to `/get-a-free-estimate` with those selections in the URL. The estimate page turns the selection into an appropriate form type, service field value, and editable note.

## Why combine all three requested ideas

| Requested concept       | Role in the combined flow     | User value                                                                                  |
| ----------------------- | ----------------------------- | ------------------------------------------------------------------------------------------- |
| Care Plan Builder       | The core three-step panel     | Makes a multi-service request easy to describe.                                             |
| Instant Service Finder  | The service/surface selection | Helps visitors name what needs attention without learning service terminology first.        |
| Seasonal Property Check | The optional seasonal focus   | Gives a visitor a relevant reason for the timing without forcing a seasonal claim or offer. |

## Experience principles

- **Useful before persuasive:** the panel collects only information that helps the customer explain a job.
- **Progressive commitment:** property, services, then optional timing; no phone or email required in the hero.
- **No manufactured urgency:** no countdowns, availability claims, inflated ratings, or fictional booking slots.
- **One plan, one handoff:** selections are shown clearly, passed to the estimate route, and remain editable.
- **Accessible by default:** native buttons, grouped fieldsets, selected states exposed with `aria-pressed`, a live plan summary, keyboard operation, and reduced-motion support.

## Evidence and assumptions

| Item                                                                                 | Status                                    | Treatment                                                                                             |
| ------------------------------------------------------------------------------------ | ----------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Current services: windows, pressure washing, soft washing, gutters, Christmas lights | Verified from current service routes      | Used as the service selections.                                                                       |
| Residential and commercial work                                                      | Verified from existing site routes        | Used as the property selection.                                                                       |
| Seasonal labels                                                                      | Recommendation                            | Used as optional user-selected timing context, not as a prescribed maintenance claim.                 |
| “Free estimate”                                                                      | Existing supplied site offer              | Used as the primary completion action.                                                                |
| Form delivery key                                                                    | Not configured in the current environment | The estimate page maintains the visible call/text fallback and shows the carried plan when available. |

## Visual translation

- **Reference lesson retained:** a photo-led hero with one large, dark, editorial planning panel that carries the primary task.
- **Reference elements not copied:** visual branding, copy, review counts, treatment cards, open-status claim, address choices, price treatment, cookie panel, logo, and layout details.
- **Original Next Level execution:** aqua/coral color system, service icons, field-guide labels, waterline motifs, local property-care language, and a plan summary in place of booking availability.

## Acceptance checks

- The panel is meaningful without any decorative effects.
- A visitor can select property, one or more services, an optional seasonal focus, and continue by keyboard or touch.
- The estimate route receives and displays the plan selections.
- No unsupported promises, ratings, or availability claims are introduced.
- Desktop and mobile layouts preserve readable panel controls and a working call/text alternative.
