// Home.tsx — Next Level Window Cleaning
// Design: Local Pride Modernism — asymmetric hero, aqua primary, coral CTA
// All 10 required sections: Hero, Trust Bar, Services, Video Proof, Audience Split,
// How It Works, Service Area, Testimonials, FAQ Preview, Final CTA

import { useState } from "react";
import useSEO from "@/hooks/useSEO";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import {
  Phone, ArrowRight, Shield, Star, Users, Clock, CheckCircle,
  MapPin, ChevronDown, ChevronUp, Home as HomeIcon, Building2,
  Sparkles, Droplets, Lightbulb, Wind, Gauge
} from "lucide-react";
import { 
  HERO_GENERATED, GALLERY, RESIDENTIAL_WINDOW_CLEANING_HERO 
} from "@/config/images";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { GoogleRatingStrip, ReviewQuote } from "@/components/GoogleReviews";
import { GOOGLE_REVIEWS, GOOGLE_RATING, GOOGLE_REVIEW_COUNT, GBP_SEARCH_URL } from "@/data/reviews";

// Real job photos from Next Level Window Cleaning
const HERO_IMG = HERO_GENERATED;
const COMMERCIAL_IMG = GALLERY.gallery_02;
const PRESSURE_IMG = GALLERY.gallery_10;

// Local Business Schema - rendered on homepage for maximum SEO impact
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://nextlevelwindowsnc.com/#business",
  "name": "Next Level Window Cleaning",
  "description": "Professional window cleaning, pressure washing, soft washing, gutter cleaning, and Christmas light installation in Sanford, NC and surrounding areas.",
  "url": "https://nextlevelwindowsnc.com",
  "telephone": "+19193489808",
  "email": "info@nextlevelwindowsnc.com",
  "founder": { "@type": "Person", "name": "Adam Griffith" },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sanford", "addressRegion": "NC",
    "postalCode": "27330", "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 35.4799, "longitude": -79.1775 },
  "areaServed": [
    { "@type": "City", "name": "Sanford", "containedInPlace": { "@type": "State", "name": "North Carolina" } },
    { "@type": "City", "name": "Cameron", "containedInPlace": { "@type": "State", "name": "North Carolina" } },
    { "@type": "City", "name": "Spring Lake", "containedInPlace": { "@type": "State", "name": "North Carolina" } },
    { "@type": "City", "name": "Broadway", "containedInPlace": { "@type": "State", "name": "North Carolina" } }
  ],
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "07:00", "closes": "18:00" }
  ],
  "sameAs": ["https://www.google.com/maps?cid=17541810205668916141", "https://www.facebook.com/people/Next-Level-Window-Cleaning/61579913446585/"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": GOOGLE_RATING,
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": String(GOOGLE_REVIEW_COUNT)
  },
  "review": GOOGLE_REVIEWS.map((r) => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": r.author },
    "datePublished": r.date,
    "reviewRating": { "@type": "Rating", "ratingValue": String(r.rating), "bestRating": "5", "worstRating": "1" },
    "reviewBody": r.text
  })),
  "hasOfferCatalog": {
    "@type": "OfferCatalog", "name": "Exterior Cleaning Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Window Cleaning", "url": "https://nextlevelwindowsnc.com/residential/window-cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pressure Washing", "url": "https://nextlevelwindowsnc.com/residential/pressure-washing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Soft Washing", "url": "https://nextlevelwindowsnc.com/residential/soft-washing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Christmas Light Installation", "url": "https://nextlevelwindowsnc.com/residential/christmas-lights" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Window Cleaning", "url": "https://nextlevelwindowsnc.com/commercial" } }
    ]
  }
};

// Phone number with local NC area code
const PHONE = "(919) 348-9808";
const PHONE_HREF = "tel:9193489808";

const trustItems = [
  { icon: Shield, label: "Fully Insured" },
  { icon: HomeIcon, label: "Locally Owned" },
  { icon: Users, label: "Residential & Commercial" },
  { icon: Clock, label: "Fast Quote Turnaround" },
  { icon: Star, label: "Real Work, Real Results" },
];

const services = [
  {
    icon: Sparkles,
    title: "Window Cleaning",
    desc: "Clean windows inside and out. Residential or commercial, we handle both.",
    href: "/residential/window-cleaning",
    color: "var(--brand-aqua)",
  },
  {
    icon: Droplets,
    title: "Pressure Washing",
    desc: "Driveways, patios, siding, decks — we get the grime off without damaging the surface.",
    href: "/residential/pressure-washing",
    color: "var(--brand-aqua)",
  },
  {
    icon: Wind,
    title: "Soft Washing",
    desc: "Low-pressure cleaning that kills algae and mold at the root. Safe for roofs and painted surfaces.",
    href: "/residential/soft-washing",
    color: "var(--brand-aqua)",
  },
  {
    icon: Lightbulb,
    title: "Christmas Lights",
    desc: "Professional holiday light installation and takedown.",
    href: "/residential/christmas-lights",
    color: "oklch(0.75 0.15 55)",
  },
  {
    icon: Gauge,
    title: "Gutter Cleaning",
    desc: "Thorough gutter cleaning and downspout flushing. Prevent water damage before it starts.",
    href: "/residential/gutter-cleaning",
    color: "var(--brand-aqua)",
  },
];

const steps = [
  { num: "01", title: "Request Your Estimate", desc: "Fill out our quick form or give us a call. We'll get back to you fast." },
  { num: "02", title: "We Confirm the Scope", desc: "We review your property details and confirm the service plan with you." },
  { num: "03", title: "We Do the Work", desc: "Our team shows up on time, fully equipped, and gets the job done right." },
  { num: "04", title: "You Enjoy the Results", desc: "Step back and enjoy a cleaner, brighter home or business." },
];

const serviceAreas = [
  "Sanford, NC", "Cameron, NC", "Spring Lake, NC", "Broadway, NC",
  "Carbonton, NC", "Lemon Springs, NC",
];

// Curated order for the homepage grid — strongest, most specific Google reviews first.
// Full review data lives in @/data/reviews (synced from the Google Business Profile).
const HOME_REVIEW_IDS = ["aguilera", "steve", "boone", "fortin", "jb", "pruitt"];

const faqPreview = [
  {
    q: "Are you insured?",
    a: "Yes. Next Level Window Cleaning is fully insured. We carry liability insurance on every job so you can have complete peace of mind.",
  },
  {
    q: "How do estimates work?",
    a: "Just fill out our estimate form or give us a call. We'll review your property details and get back to you quickly — usually the same day.",
  },
  {
    q: "Do you serve commercial properties?",
    a: "Absolutely. We work with storefronts, offices, restaurants, and property managers throughout the Sanford area. Ask about recurring service.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Sanford, Cameron, Spring Lake, Broadway, and surrounding towns in Lee County, NC.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-gray-900 text-sm pr-4" style={{ fontFamily: 'Manrope, sans-serif' }}>{q}</span>
        {open ? <ChevronUp size={18} className="flex-shrink-0 text-[var(--brand-aqua)]" /> : <ChevronDown size={18} className="flex-shrink-0 text-gray-400" />}
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed bg-white border-t border-gray-100">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  useSEO(
    "Next Level Window Cleaning | Sanford, NC",
    "Window cleaning, pressure washing & exterior services in Sanford, NC. Locally owned, fully insured. Free estimates — call (919) 348-9808.",
    "/"
  );

  return (
    <Layout>
      <SchemaMarkup schema={localBusinessSchema} />
      {/* ── 1. HERO ── */}
      <section className="relative min-h-[580px] lg:min-h-[680px] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Professional window cleaning in Sanford NC"
            className="w-full h-full object-cover object-center" loading="eager" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(10,20,40,0.72) 0%, rgba(10,20,40,0.45) 55%, rgba(10,20,40,0.1) 100%)' }} />
        </div>

        <div className="container relative z-10 py-16 lg:py-24">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-5">
              <MapPin size={13} className="text-[var(--brand-coral)]" />
              <span className="text-white text-xs font-semibold" style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.05em' }}>
                SANFORD, NC &amp; SURROUNDING AREAS
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-5 leading-tight"
              style={{ fontFamily: 'Manrope, sans-serif' }}>
              Professional Window Cleaning &amp; Exterior Washing in Sanford, NC
            </h1>
            <p className="text-white/85 text-lg mb-8 leading-relaxed">
              Locally owned and fully insured. Serving homeowners and businesses in Sanford, NC with real results and honest service.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/get-a-free-estimate">
                <span className="btn-coral text-base px-7 py-3.5">
                  <ArrowRight size={18} /> Get a Free Estimate
                </span>
              </Link>
              <a href={PHONE_HREF} className="btn-outline-white text-base px-7 py-3.5">
                <Phone size={18} /> {PHONE}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              {["Fully Insured", "Locally Owned", "Free Estimates"].map((tag) => (
                <span key={tag} className="flex items-center gap-1.5 text-white/90 text-sm font-semibold"
                  style={{ fontFamily: 'Manrope, sans-serif' }}>
                  <CheckCircle size={15} className="text-green-400" /> {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST BAR ── */}
      <section className="border-b border-gray-100" style={{ backgroundColor: 'var(--brand-aqua)' }}>
        <div className="container py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white">
                <Icon size={16} className="flex-shrink-0" />
                <span className="font-semibold text-sm whitespace-nowrap" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CORE SERVICES ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="mb-10">
            <h2 className="section-heading text-3xl lg:text-4xl text-gray-900 mb-3">
              Our Services
            </h2>
            <p className="text-gray-500 text-base ml-5 max-w-lg">
              From sparkling windows to clean driveways — we handle the exterior so you don't have to.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {services.map(({ icon: Icon, title, desc, href, color }) => (
              <Link key={href} href={href}>
                <div className="service-card p-6 group cursor-pointer h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${color}18` }}>
                    <Icon size={24} style={{ color }} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                  <span className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                    style={{ color: 'var(--brand-aqua)', fontFamily: 'Manrope, sans-serif' }}>
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. VIDEO PROOF ── */}
      <section className="py-16 lg:py-20 bg-sky-tint">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-heading text-3xl lg:text-4xl text-gray-900 mb-4">
                See Real Results
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 ml-5">
                We let our work speak for itself. Watch us in action on real jobs right here in Sanford, NC. No stock footage, no gimmicks — just clean results.
              </p>
              <div className="ml-5 flex flex-col gap-3">
                {["Before-and-after transformations", "Real local job sites", "Professional equipment and technique"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-gray-700">
                    <CheckCircle size={17} style={{ color: 'var(--brand-aqua)' }} />
                    <span className="text-sm font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 ml-5">
                <Link href="/our-work">
                  <span className="btn-primary">View Our Work <ArrowRight size={16} /></span>
                </Link>
              </div>
            </div>
            {/* Video placeholder with real pressure washing image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-gray-900 group cursor-pointer">
              <img src={PRESSURE_IMG} alt="Pressure washing results in Sanford NC"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <a href="https://www.facebook.com/people/Next-Level-Window-Cleaning/61579913446585/"
                  target="_blank" rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[18px] ml-1"
                    style={{ borderLeftColor: 'var(--brand-aqua)' }} />
                </a>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5">
                <span className="text-white text-xs font-semibold" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Watch on Facebook →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. AUDIENCE SPLIT ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <h2 className="section-heading text-3xl lg:text-4xl text-gray-900 mb-10">
            Who We Serve
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Homeowners */}
            <div className="relative rounded-2xl overflow-hidden min-h-[320px] group">
              <img src={HERO_IMG} alt="Residential window cleaning"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,20,40,0.85) 0%, rgba(10,20,40,0.3) 60%, transparent 100%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <HomeIcon size={20} className="text-white" />
                  <span className="text-white/80 text-xs font-bold uppercase tracking-wider" style={{ fontFamily: 'Manrope, sans-serif' }}>For Homeowners</span>
                </div>
                <h3 className="text-white text-2xl font-extrabold mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Residential Services
                </h3>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  Window cleaning, pressure washing, soft washing, and holiday lights for your home.
                </p>
                <Link href="/residential">
                  <span className="btn-coral text-sm py-2.5 px-5">Explore Residential <ArrowRight size={15} /></span>
                </Link>
              </div>
            </div>

            {/* Businesses */}
            <div className="relative rounded-2xl overflow-hidden min-h-[320px] group">
              <img src={COMMERCIAL_IMG} alt="Commercial window cleaning Sanford NC"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,20,40,0.85) 0%, rgba(10,20,40,0.3) 60%, transparent 100%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 size={20} className="text-white" />
                  <span className="text-white/80 text-xs font-bold uppercase tracking-wider" style={{ fontFamily: 'Manrope, sans-serif' }}>For Businesses</span>
                </div>
                <h3 className="text-white text-2xl font-extrabold mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Commercial Services
                </h3>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  Storefronts, offices, restaurants, and property managers — recurring or one-time.
                </p>
                <Link href="/commercial">
                  <span className="btn-primary text-sm py-2.5 px-5">Explore Commercial <ArrowRight size={15} /></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. HOW IT WORKS ── */}
      <section className="py-16 lg:py-20 bg-sky-tint">
        <div className="container">
          <div className="mb-10">
            <h2 className="section-heading text-3xl lg:text-4xl text-gray-900 mb-3">
              How It Works
            </h2>
            <p className="text-gray-500 text-base ml-5">Simple, straightforward, no surprises.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="relative">
                <div className="text-6xl font-extrabold mb-3 leading-none select-none"
                  style={{ color: 'var(--brand-aqua)', opacity: 0.15, fontFamily: 'Manrope, sans-serif' }}>
                  {num}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 -mt-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/get-a-free-estimate">
              <span className="btn-primary text-base px-8 py-3.5">Start with a Free Estimate <ArrowRight size={17} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. SERVICE AREA ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-heading text-3xl lg:text-4xl text-gray-900 mb-4">
                Serving Sanford &amp; Surrounding Areas
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 ml-5">
                We're based right here in Sanford, NC and proud to serve our neighbors across Lee County and nearby towns. If you're not sure whether we cover your area, just give us a call.
              </p>
              <div className="ml-5 grid grid-cols-2 gap-2 mb-6">
                {serviceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-gray-700">
                    <MapPin size={14} style={{ color: 'var(--brand-aqua)' }} />
                    <span className="text-sm font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>{area}</span>
                  </div>
                ))}
              </div>
              <div className="ml-5">
                <Link href="/service-areas">
                  <span className="btn-primary">View All Service Areas <ArrowRight size={16} /></span>
                </Link>
              </div>
            </div>
            {/* Map embed placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-72 lg:h-80 bg-gray-100 relative">
              <iframe
                title="Next Level Window Cleaning Service Area — Sanford NC"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52303.37!2d-79.1775!3d35.4799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5b1e9d4e4e4b%3A0x0!2sSanford%2C%20NC!5e0!3m2!1sen!2sus!4v1"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. REVIEWS (real Google reviews — synced from GBP) ── */}
      <section className="py-16 lg:py-20 bg-sky-tint">
        <div className="container">
          <div className="mb-10">
            <h2 className="section-heading text-3xl lg:text-4xl text-gray-900 mb-3">
              What Our Customers Say
            </h2>
            <p className="text-gray-500 text-base ml-5 mb-5">
              Real reviews from real neighbors — every one left on Google by an actual customer.
            </p>
            <div className="ml-5">
              <GoogleRatingStrip />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_REVIEW_IDS.map((id) => (
              <ReviewQuote key={id} id={id} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={GBP_SEARCH_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold hover:opacity-80 transition-opacity"
              style={{ color: 'var(--brand-aqua)', fontFamily: 'Manrope, sans-serif' }}>
              Read all {GOOGLE_REVIEW_COUNT} reviews on Google <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── 9. FAQ PREVIEW ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3"
                style={{ fontFamily: 'Manrope, sans-serif' }}>
                Common Questions
              </h2>
              <p className="text-gray-500">Quick answers to what people ask us most.</p>
            </div>
            <div className="flex flex-col gap-3 mb-8">
              {faqPreview.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
            </div>
            <div className="text-center">
              <Link href="/faq">
                <span className="btn-primary">See All FAQs <ArrowRight size={16} /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. FINAL CTA ── */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Get a free estimate today. We'll get back to you the same day. Serving Sanford, NC and surrounding areas."
      />
    </Layout>
  );
}
