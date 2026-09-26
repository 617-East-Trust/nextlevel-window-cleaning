// OurWork.tsx — Next Level Window Cleaning
// Purpose: a service library until approved, working project imagery is available.
import useSEO from "@/hooks/useSEO";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import {
  ArrowRight,
  Building2,
  Droplets,
  Facebook,
  Gauge,
  Lightbulb,
  Sparkles,
  Wind,
} from "lucide-react";
import { HERO_GENERATED } from "@/config/images";
import { FACEBOOK_URL } from "@/const";

const serviceCards = [
  {
    icon: Sparkles,
    title: "Window Cleaning",
    copy: "Interior and exterior window cleaning for homes, storefronts, and workplaces.",
    href: "/residential/window-cleaning",
  },
  {
    icon: Gauge,
    title: "Pressure Washing",
    copy: "A stronger clean for durable outdoor surfaces such as driveways and sidewalks.",
    href: "/residential/pressure-washing",
  },
  {
    icon: Wind,
    title: "Soft Washing",
    copy: "A lower-pressure approach for roofs, siding, and other more delicate exteriors.",
    href: "/residential/soft-washing",
  },
  {
    icon: Droplets,
    title: "Gutter Cleaning",
    copy: "Gutter and downspout cleaning to help water move through the system.",
    href: "/residential/gutter-cleaning",
  },
  {
    icon: Lightbulb,
    title: "Christmas Lights",
    copy: "Holiday light installation and takedown for a cleaner seasonal setup.",
    href: "/residential/christmas-lights",
  },
  {
    icon: Building2,
    title: "Commercial Care",
    copy: "Exterior care for offices, storefronts, restaurants, and managed properties.",
    href: "/commercial",
  },
];

export default function OurWork() {
  useSEO(
    "Our Services | Next Level Window Cleaning | Sanford, NC",
    "Explore Next Level Window Cleaning services for Sanford-area homes and businesses, including window cleaning, pressure washing, soft washing, and gutters.",
    "/our-work"
  );

  return (
    <Layout>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Our Work", url: "/our-work" },
        ]}
      />
      <section className="border-b border-gray-200 bg-sky-tint py-12">
        <div className="container max-w-3xl text-center">
          <nav
            className="mb-4 flex items-center justify-center gap-1.5 text-xs text-gray-400"
            aria-label="Breadcrumb"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            <Link href="/">
              <span className="cursor-pointer hover:text-gray-600">Home</span>
            </Link>
            <span>/</span>
            <span className="text-gray-600">Services</span>
          </nav>
          <p className="eyebrow">Service library</p>
          <h1
            className="mt-3 text-3xl font-extrabold text-gray-900 lg:text-4xl"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Care for the surfaces around your property.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Review the service routes below, then request an estimate for your
            Sanford-area home or business.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <img
              src={HERO_GENERATED}
              alt="Exterior cleaning in progress at a residential property"
              className="w-full rounded-2xl object-cover shadow-lg"
              style={{ aspectRatio: "4/3" }}
            />
            <div>
              <p className="eyebrow">Start with the surface</p>
              <h2
                className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-gray-900"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                A driveway, roof, and window need different care.
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                The service pages explain the approach used for each type of
                exterior. If you are not sure where to begin, an estimate
                request is a good place to describe what you see.
              </p>
              <Link href="/get-a-free-estimate">
                <span className="btn-primary mt-7">
                  Request a Free Estimate <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="clearline-surface py-14 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Find the right route</p>
            <h2
              className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-gray-900 md:text-4xl"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Six ways to take care of an exterior.
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map(({ icon: Icon, title, copy, href }) => (
              <Link key={href} href={href}>
                <article className="service-field-card group h-full">
                  <span className="service-field-icon">
                    <Icon size={21} />
                  </span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <span className="service-field-link">
                    Explore service <ArrowRight size={15} />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container text-center">
          <div className="mx-auto max-w-xl rounded-2xl border border-gray-200 bg-sky-tint p-8">
            <Facebook
              size={26}
              className="mx-auto"
              style={{ color: "var(--brand-aqua)" }}
            />
            <h2
              className="mt-4 text-xl font-extrabold text-gray-900"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Follow the local work
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Visit Next Level Window Cleaning on Facebook for updates from the
              team.
            </p>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5"
            >
              Visit Facebook <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to talk through your property?"
        subtitle="Get a free estimate for a Sanford-area home or business, or call or text to confirm the right service."
      />
    </Layout>
  );
}
