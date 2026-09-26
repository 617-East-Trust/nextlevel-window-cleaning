import { Link } from "wouter";
import {
  ArrowRight,
  Building2,
  Check,
  CircleGauge,
  Droplets,
  Home,
  Lightbulb,
  Sparkles,
  Wind,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  CARE_PLAN_PROPERTIES,
  CARE_PLAN_SEASONS,
  CARE_PLAN_SERVICES,
  createEstimateHref,
  getCarePlanSummary,
  type CarePlanProperty,
  type CarePlanServiceId,
} from "@/lib/exteriorCarePlan";

const serviceIcons = {
  windows: Sparkles,
  "soft-wash": Wind,
  "pressure-wash": CircleGauge,
  gutters: Droplets,
  "holiday-lights": Lightbulb,
} as const;

export default function ExteriorCarePlan() {
  const [property, setProperty] = useState<CarePlanProperty | null>(null);
  const [services, setServices] = useState<CarePlanServiceId[]>([]);
  const [season, setSeason] = useState<
    (typeof CARE_PLAN_SEASONS)[number]["id"] | null
  >(null);

  const plan = useMemo(
    () => ({ property, services, season }),
    [property, services, season]
  );
  const summary = getCarePlanSummary(plan);
  const estimateHref = createEstimateHref(plan);
  const isReady = Boolean(property && services.length);

  const toggleService = (service: CarePlanServiceId) => {
    setServices(current =>
      current.includes(service)
        ? current.filter(item => item !== service)
        : [...current, service]
    );
  };

  return (
    <aside className="care-plan-panel" aria-labelledby="care-plan-title">
      <div className="care-plan-header">
        <div>
          <p className="care-plan-kicker">Exterior care plan</p>
          <h2 id="care-plan-title">Start in three quick steps.</h2>
        </div>
        <span className="care-plan-step-count" aria-label="Three simple steps">
          3 steps
        </span>
      </div>

      <fieldset className="care-plan-fieldset">
        <legend>
          <span>01</span> What kind of property?
        </legend>
        <div className="care-plan-property-grid">
          {CARE_PLAN_PROPERTIES.map(item => {
            const active = property === item.id;
            const Icon = item.id === "residential" ? Home : Building2;
            return (
              <button
                type="button"
                key={item.id}
                className={`care-plan-property ${active ? "is-selected" : ""}`}
                aria-pressed={active}
                onClick={() => setProperty(item.id)}
              >
                <Icon size={18} />
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.description}</small>
                </span>
                {active && (
                  <Check
                    className="care-plan-check"
                    size={16}
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="care-plan-fieldset">
        <legend>
          <span>02</span> What needs attention?
        </legend>
        <div className="care-plan-service-grid">
          {CARE_PLAN_SERVICES.map(item => {
            const active = services.includes(item.id);
            const Icon = serviceIcons[item.id];
            return (
              <button
                type="button"
                key={item.id}
                className={`care-plan-service ${active ? "is-selected" : ""}`}
                aria-pressed={active}
                onClick={() => toggleService(item.id)}
              >
                <Icon size={17} />
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.detail}</small>
                </span>
                {active && (
                  <Check
                    className="care-plan-check"
                    size={15}
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="care-plan-fieldset">
        <legend>
          <span>03</span> Is there a seasonal focus?
        </legend>
        <div className="care-plan-season-grid">
          {CARE_PLAN_SEASONS.map(item => {
            const active = season === item.id;
            return (
              <button
                type="button"
                key={item.id}
                className={`care-plan-season ${active ? "is-selected" : ""}`}
                aria-pressed={active}
                onClick={() => setSeason(active ? null : item.id)}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="care-plan-summary" aria-live="polite">
        <p>Plan summary</p>
        <span>
          {summary || "Choose a property and one or more services to continue."}
        </span>
      </div>

      {isReady ? (
        <Link href={estimateHref}>
          <span className="care-plan-cta">
            Continue to a Free Estimate <ArrowRight size={18} />
          </span>
        </Link>
      ) : (
        <button type="button" className="care-plan-cta" disabled>
          Choose a service to continue <ArrowRight size={18} />
        </button>
      )}

      <p className="care-plan-help">
        Your selections make it easier to describe the job. You can still adjust
        the details before you submit.
      </p>
    </aside>
  );
}
