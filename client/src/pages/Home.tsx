// Home.tsx — Next Level Window Cleaning
// Direction: Clearline Fieldbook
// Narrative: local fit → service choice → surface-aware care → clear process → estimate

import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  ChevronUp,
  Droplets,
  Gauge,
  Home as HomeIcon,
  Lightbulb,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Wind,
} from "lucide-react";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import ExteriorCarePlan from "@/components/ExteriorCarePlan";
import useSEO from "@/hooks/useSEO";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { HERO_GENERATED } from "@/config/images";
import { PHONE_DISPLAY, PHONE_HREF } from "@/const";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://nextlevelwindowsnc.com/#business",
  name: "Next Level Window Cleaning",
  description:
    "Window cleaning, pressure washing, soft washing, gutter cleaning, and Christmas light installation in Sanford, NC and surrounding areas.",
  url: "https://nextlevelwindowsnc.com",
  telephone: "+19193489808",
  email: "info@nextlevelwindowsnc.com",
  founder: { "@type": "Person", name: "Adam Griffith" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sanford",
    addressRegion: "NC",
    postalCode: "27330",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 35.4799, longitude: -79.1775 },
  areaServed: [
    {
      "@type": "City",
      name: "Sanford",
      containedInPlace: { "@type": "State", name: "North Carolina" },
    },
    {
      "@type": "City",
      name: "Cameron",
      containedInPlace: { "@type": "State", name: "North Carolina" },
    },
    {
      "@type": "City",
      name: "Spring Lake",
      containedInPlace: { "@type": "State", name: "North Carolina" },
    },
    {
      "@type": "City",
      name: "Broadway",
      containedInPlace: { "@type": "State", name: "North Carolina" },
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/people/Next-Level-Window-Cleaning/61579913446585/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Exterior Cleaning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential Window Cleaning",
          url: "https://nextlevelwindowsnc.com/residential/window-cleaning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pressure Washing",
          url: "https://nextlevelwindowsnc.com/residential/pressure-washing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Soft Washing",
          url: "https://nextlevelwindowsnc.com/residential/soft-washing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gutter Cleaning",
          url: "https://nextlevelwindowsnc.com/residential/gutter-cleaning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Christmas Light Installation",
          url: "https://nextlevelwindowsnc.com/residential/christmas-lights",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Window Cleaning",
          url: "https://nextlevelwindowsnc.com/commercial",
        },
      },
    ],
  },
};

const services = [
  {
    icon: Sparkles,
    name: "Window Cleaning",
    detail: "Clear glass for homes, storefronts, and workspaces.",
    href: "/residential/window-cleaning",
  },
  {
    icon: Gauge,
    name: "Pressure Washing",
    detail: "A strong clean for durable outdoor surfaces.",
    href: "/residential/pressure-washing",
  },
  {
    icon: Wind,
    name: "Soft Washing",
    detail: "A gentler approach for roofs, siding, and painted surfaces.",
    href: "/residential/soft-washing",
  },
  {
    icon: Droplets,
    name: "Gutter Cleaning",
    detail: "Gutter and downspout cleaning to keep water moving.",
    href: "/residential/gutter-cleaning",
  },
  {
    icon: Lightbulb,
    name: "Christmas Lights",
    detail: "Installation and takedown for the holiday season.",
    href: "/residential/christmas-lights",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Tell us about the property",
    body: "Start with the service you need and the address or area you want cleaned.",
  },
  {
    number: "02",
    title: "Confirm the scope",
    body: "We review the details with you so the service matches the surface and the job.",
  },
  {
    number: "03",
    title: "Choose the next step",
    body: "Once the scope is clear, you can decide whether to schedule the work.",
  },
];

const serviceAreas = [
  "Sanford",
  "Cameron",
  "Spring Lake",
  "Broadway",
  "Lee County",
];

const faqPreview = [
  {
    question: "Are you insured?",
    answer:
      "Yes. Next Level Window Cleaning states that it is fully insured for the work it performs.",
  },
  {
    question: "Can you help with commercial properties?",
    answer:
      "Yes. The team serves storefronts, offices, restaurants, and property managers, whether the need is one visit or recurring work.",
  },
  {
    question: "Which cleaning method does my property need?",
    answer:
      "It depends on the surface. Pressure washing is suited to durable areas such as concrete, while soft washing is used for more delicate surfaces such as roofs and painted siding.",
  },
  {
    question: "Do you serve my town?",
    answer:
      "Next Level serves Sanford, Cameron, Spring Lake, Broadway, and nearby Lee County communities. Call or text if you would like to confirm your address.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${question.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      <button
        type="button"
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 transition-colors"
        onClick={() => setOpen(current => !current)}
        aria-expanded={open}
        aria-controls={id}
      >
        <span
          className="font-bold text-slate-900 text-sm pr-3"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {question}
        </span>
        {open ? (
          <ChevronUp size={18} className="shrink-0 text-[var(--brand-aqua)]" />
        ) : (
          <ChevronDown size={18} className="shrink-0 text-slate-400" />
        )}
      </button>
      {open && (
        <div
          id={id}
          className="px-5 pb-5 text-sm leading-relaxed text-slate-600 border-t border-slate-100"
        >
          {answer}
        </div>
      )}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="section-heading-clean text-3xl md:text-4xl text-slate-950">
        {title}
      </h2>
      {body && (
        <p className="mt-4 text-slate-600 leading-relaxed text-base md:text-lg">
          {body}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  useSEO(
    "Next Level Window Cleaning | Sanford, NC",
    "Window cleaning, pressure washing, soft washing, gutter cleaning, and exterior services in Sanford, NC. Request a free estimate.",
    "/"
  );

  return (
    <Layout>
      <SchemaMarkup schema={localBusinessSchema} />

      <section className="hero-clearline relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_GENERATED}
            alt="Exterior cleaning in progress at a residential property"
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 hero-clearline-overlay" />
        </div>
        <div className="hero-waterline hero-waterline-one" aria-hidden="true" />
        <div className="hero-waterline hero-waterline-two" aria-hidden="true" />

        <div className="container relative z-10 py-12 md:py-16 lg:py-20">
          <div className="hero-clearline-layout">
            <div className="max-w-2xl animate-fade-in-up">
              <p className="hero-location-label">
                <MapPin size={14} /> Serving Sanford &amp; nearby communities
              </p>
              <h1
                className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                A clearer view of the work your property needs.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/88 md:text-xl">
                Window cleaning, exterior washing, gutter cleaning, and holiday
                light installation for homes and businesses around Sanford.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={PHONE_HREF}
                  className="btn-outline-white btn-hero text-base px-7 py-3.5"
                >
                  <Phone size={18} /> Call or Text {PHONE_DISPLAY}
                </a>
                <a href="#care-plan" className="hero-panel-anchor">
                  Build an exterior care plan <ArrowRight size={17} />
                </a>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  [HomeIcon, "Residential & commercial"],
                  [ShieldCheck, "Fully insured"],
                  [MapPin, "Sanford-area service"],
                ].map(([Icon, label]) => {
                  const FeatureIcon = Icon as typeof HomeIcon;
                  return (
                    <div className="hero-detail-card" key={label as string}>
                      <FeatureIcon size={16} />
                      <span>{label as string}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div id="care-plan" className="hero-care-plan-wrap">
              <ExteriorCarePlan />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Service field guide"
              title="Choose the service that fits the surface."
              body="Start with what needs attention. Each service route explains where it fits and what to expect before you request an estimate."
            />
            <Link href="/get-a-free-estimate">
              <span className="text-link-arrow">
                Not sure where to start? Request an estimate{" "}
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map(({ icon: Icon, name, detail, href }, index) => (
              <Link key={href} href={href}>
                <article
                  className="service-field-card group h-full"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="service-field-icon">
                    <Icon size={21} />
                  </span>
                  <h3>{name}</h3>
                  <p>{detail}</p>
                  <span className="service-field-link">
                    Explore service <ArrowRight size={15} />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="clearline-surface py-16 md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Care by surface"
                title="The method should match the material."
                body="A driveway, a roof, and storefront glass do not call for the same approach. The service pages make the difference plain so you can ask for the right kind of cleaning."
              />
              <div className="mt-8 grid gap-3">
                {[
                  [
                    "Glass & storefronts",
                    "Window cleaning for brighter views and a more polished exterior.",
                  ],
                  [
                    "Concrete & hardscapes",
                    "Pressure washing for durable driveways, patios, sidewalks, and similar surfaces.",
                  ],
                  [
                    "Roofs, siding & painted exteriors",
                    "Soft washing for surfaces that need a lower-pressure approach.",
                  ],
                ].map(([title, detail]) => (
                  <div className="surface-note" key={title}>
                    <Check size={17} />
                    <div>
                      <h3>{title}</h3>
                      <p>{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="surface-compass" aria-label="Property care guide">
              <div
                className="surface-compass-orbit surface-compass-orbit-one"
                aria-hidden="true"
              />
              <div
                className="surface-compass-orbit surface-compass-orbit-two"
                aria-hidden="true"
              />
              <p className="eyebrow">Property care</p>
              <p className="surface-compass-title">
                One property.
                <br />
                <em>Different surfaces.</em>
              </p>
              <p className="surface-compass-copy">
                Tell us what you see. We can help you start with the appropriate
                service page or estimate request.
              </p>
              <Link href="/guides/soft-washing-vs-pressure-washing">
                <span className="btn-primary mt-7">
                  Read the washing guide <ArrowRight size={16} />
                </span>
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionHeading
              eyebrow="From request to service"
              title="A straightforward way to get started."
              body="The estimate request is meant to make the first conversation easier, not lock you into a package."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {processSteps.map(step => (
                <article className="process-card" key={step.number}>
                  <p className="process-number">{step.number}</p>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="clearline-location py-16 md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Local service area"
                title="Based in Sanford. Built for the surrounding communities."
                body="If your town is nearby but not listed, call or text before you rule out a visit."
              />
              <div className="mt-8 flex flex-wrap gap-2.5">
                {serviceAreas.map(area => (
                  <span className="area-chip" key={area}>
                    <MapPin size={14} /> {area}
                  </span>
                ))}
              </div>
              <Link href="/service-areas">
                <span className="btn-primary mt-8">
                  View service areas <ArrowRight size={16} />
                </span>
              </Link>
            </div>
            <div className="location-panel">
              <p className="location-panel-kicker">
                A local call is the fastest way to confirm fit.
              </p>
              <p className="location-panel-number">{PHONE_DISPLAY}</p>
              <p className="location-panel-copy">
                Call or text with the address, the surface, and the work you
                have in mind.
              </p>
              <a href={PHONE_HREF} className="btn-coral mt-7">
                Call or Text <Phone size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="text-center">
            <p className="eyebrow">Before you book</p>
            <h2
              className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-slate-950 md:text-4xl"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Questions worth answering up front.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600 leading-relaxed">
              A few clear answers can save a call and help you choose the
              service that makes sense for your property.
            </p>
          </div>
          <div className="mt-9 flex flex-col gap-3">
            {faqPreview.map(({ question, answer }) => (
              <FAQItem key={question} question={question} answer={answer} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq">
              <span className="text-link-arrow">
                Read all FAQs <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to talk through your property?"
        subtitle="Request a free estimate for your Sanford-area home or business, or call or text to confirm the right service."
      />
    </Layout>
  );
}
