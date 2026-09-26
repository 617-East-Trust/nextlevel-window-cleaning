export const CARE_PLAN_PROPERTIES = [
  {
    id: "residential",
    label: "Home",
    description: "House, condo, or rental property",
  },
  {
    id: "commercial",
    label: "Business",
    description: "Storefront, office, or managed property",
  },
] as const;

export const CARE_PLAN_SERVICES = [
  {
    id: "windows",
    label: "Windows",
    detail: "Glass, screens, and storefronts",
    residentialService: "Window Cleaning",
    commercialService: "Window Cleaning",
  },
  {
    id: "soft-wash",
    label: "Siding & roof",
    detail: "Lower-pressure exterior care",
    residentialService: "Soft Washing",
    commercialService: "Soft Washing",
  },
  {
    id: "pressure-wash",
    label: "Driveway & walkways",
    detail: "Durable hard surfaces",
    residentialService: "Pressure Washing",
    commercialService: "Pressure Washing",
  },
  {
    id: "gutters",
    label: "Gutters",
    detail: "Gutters and downspouts",
    residentialService: "Gutter Cleaning",
    commercialService: "Multiple Services",
  },
  {
    id: "holiday-lights",
    label: "Holiday lights",
    detail: "Installation and takedown",
    residentialService: "Christmas Lights",
    commercialService: "Multiple Services",
  },
] as const;

export const CARE_PLAN_SEASONS = [
  { id: "spring", label: "Spring pollen" },
  { id: "summer", label: "Summer exterior wash" },
  { id: "fall", label: "Leaves & gutters" },
  { id: "holiday", label: "Holiday lights" },
] as const;

export type CarePlanProperty = (typeof CARE_PLAN_PROPERTIES)[number]["id"];
export type CarePlanServiceId = (typeof CARE_PLAN_SERVICES)[number]["id"];
export type CarePlanSeason = (typeof CARE_PLAN_SEASONS)[number]["id"];

export interface ExteriorCarePlan {
  property: CarePlanProperty | null;
  services: CarePlanServiceId[];
  season: CarePlanSeason | null;
}

const validProperties = new Set<string>(
  CARE_PLAN_PROPERTIES.map(item => item.id)
);
const validServices = new Set<string>(CARE_PLAN_SERVICES.map(item => item.id));
const validSeasons = new Set<string>(CARE_PLAN_SEASONS.map(item => item.id));

export function createEstimateHref(plan: ExteriorCarePlan) {
  const params = new URLSearchParams();
  if (plan.property) params.set("property", plan.property);
  plan.services.forEach(service => params.append("service", service));
  if (plan.season) params.set("season", plan.season);
  const query = params.toString();
  return `/get-a-free-estimate${query ? `?${query}` : ""}`;
}

export function parseExteriorCarePlan(search: string): ExteriorCarePlan {
  const params = new URLSearchParams(search);
  const rawProperty = params.get("property");
  const rawSeason = params.get("season");
  const services = params
    .getAll("service")
    .filter((service): service is CarePlanServiceId =>
      validServices.has(service)
    );

  return {
    property:
      rawProperty && validProperties.has(rawProperty)
        ? (rawProperty as CarePlanProperty)
        : null,
    services: Array.from(new Set(services)),
    season:
      rawSeason && validSeasons.has(rawSeason)
        ? (rawSeason as CarePlanSeason)
        : null,
  };
}

export function getCarePlanSummary(plan: ExteriorCarePlan) {
  const property = CARE_PLAN_PROPERTIES.find(
    item => item.id === plan.property
  )?.label;
  const services = plan.services
    .map(id => CARE_PLAN_SERVICES.find(item => item.id === id)?.label)
    .filter(Boolean)
    .join(", ");
  const season = CARE_PLAN_SEASONS.find(item => item.id === plan.season)?.label;

  return [property, services, season].filter(Boolean).join(" · ");
}

export function getCarePlanNotes(plan: ExteriorCarePlan) {
  const summary = getCarePlanSummary(plan);
  return summary ? `Exterior Care Plan: ${summary}.` : "";
}

export function getCarePlanServiceValue(
  plan: ExteriorCarePlan,
  formType: Exclude<CarePlanProperty, null>
) {
  if (plan.services.length !== 1) {
    return plan.services.length > 1 ? "Multiple Services" : "";
  }

  const service = CARE_PLAN_SERVICES.find(item => item.id === plan.services[0]);
  if (!service) return "";
  return formType === "commercial"
    ? service.commercialService
    : service.residentialService;
}
