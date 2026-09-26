// ResidentialChristmasLights.tsx — Next Level Window Cleaning
// Design: Local Pride Modernism — warm holiday palette, real job photos, before/after slider
import useSEO from "@/hooks/useSEO";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ServiceSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import CTASection from "@/components/CTASection";
import { ServiceReviews } from "@/components/GoogleReviews";
import BeforeAfter from "@/components/BeforeAfter";
import { CheckCircle, ArrowRight, Phone, Lightbulb, Star } from "lucide-react";
import { CHRISTMAS_LIGHTS, BEFORE_AFTER } from "@/config/images";

// Phone number with local NC area code
const PHONE = "(919) 348-9808";
const PHONE_HREF = "tel:9193489808";

const HERO_IMG = CHRISTMAS_LIGHTS;

const services = [
  "Professional installation on rooflines, trees, and shrubs",
  "Custom design to match your home's style",
  "Safe, secure mounting — no damage to your property",
  "Takedown and storage at season's end",
  "Commercial and HOA properties welcome",
  "Maintenance visits if a strand goes out",
];

const steps = [
  { num: "01", title: "Request a Quote", desc: "Call, text, or fill out our form. We'll get back to you quickly with pricing." },
  { num: "02", title: "We Design the Look", desc: "We walk the property and plan the layout to maximize curb appeal." },
  { num: "03", title: "Professional Install", desc: "We show up on time with all the equipment and handle everything safely." },
  { num: "04", title: "Takedown Included", desc: "After the season, we come back and remove everything cleanly." },
];

export default function ResidentialChristmasLights() {
  useSEO(
    "Christmas Light Installation in Sanford, NC | Next Level",
    "Professional holiday light installation and takedown for homes in Sanford and Lee County, NC. Stress-free, beautiful results every time.",
    "/residential/christmas-lights"
  );
  return (
    <Layout>
      <ServiceSchema 
        name="Christmas Light Installation" 
        description="Professional holiday light installation and takedown for homes in Sanford and Lee County, NC. Stress-free, beautiful results every time." 
        url="/residential/christmas-lights" 
      />
      <BreadcrumbSchema items={[{"name":"Home","url":"/"},{"name":"Residential","url":"/residential"},{"name":"Christmas Lights","url":"/residential/christmas-lights"}]} />
      {/* ── HERO ── */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Christmas light installation Sanford NC"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, rgba(10,15,30,0.82) 0%, rgba(10,15,30,0.55) 55%, rgba(10,15,30,0.15) 100%)" }}
          />
        </div>
        <div className="container relative z-10 py-16">
          <nav className="text-white/70 text-xs mb-4 flex items-center gap-1.5" style={{ fontFamily: "Manrope, sans-serif" }}>
            <Link href="/"><span className="hover:text-white cursor-pointer">Home</span></Link>
            <span>/</span>
            <Link href="/residential"><span className="hover:text-white cursor-pointer">Residential</span></Link>
            <span>/</span>
            <span className="text-white">Christmas Lights</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 rounded-full px-3 py-1 mb-4">
            <Lightbulb size={13} className="text-yellow-300" />
            <span className="text-yellow-200 text-xs font-bold" style={{ fontFamily: "Manrope, sans-serif" }}>
              SEASONAL SERVICE — BOOK EARLY
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 max-w-xl leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
            Christmas Light Installation in Sanford, NC
          </h1>
          <p className="text-white/85 text-lg mb-6 max-w-lg leading-relaxed">
            Professional holiday light installation and takedown. We handle everything so you can enjoy the season stress-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/get-a-free-estimate">
              <span className="btn-coral">Get a Free Estimate <ArrowRight size={16} /></span>
            </Link>
            <a href={PHONE_HREF} className="btn-outline-white">
              <Phone size={16} /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER SLIDER ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Text side */}
            <div>
              <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-4">
                See the Difference
              </h2>
              <p className="text-gray-600 leading-relaxed ml-5 mb-5">
                A professionally installed light display transforms your home's curb appeal overnight. Drag the slider to compare the before and after on a real job we completed right here in Sanford, NC.
              </p>
              <div className="ml-5 space-y-3 mb-6">
                {[
                  "Same home — completely transformed",
                  "Roofline, windows, and landscaping covered",
                  "Installed safely without damaging your property",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-gray-700">
                    <CheckCircle size={16} style={{ color: "var(--brand-aqua)" }} />
                    <span className="text-sm font-medium" style={{ fontFamily: "Manrope, sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>
              {/* Social proof mini-badge */}
              <div className="ml-5 inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2.5">
                <div className="flex">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-800" style={{ fontFamily: "Manrope, sans-serif" }}>
                  "Looked amazing — neighbors kept asking who did it!"
                </span>
              </div>
            </div>

            {/* Before/After slider */}
            <div>
              <BeforeAfter
                beforeSrc={BEFORE_AFTER.before}
                afterSrc={BEFORE_AFTER.after}
                beforeLabel="Before"
                afterLabel="After"
                alt="Christmas light installation before and after Sanford NC"
                aspectRatio="3/4"
              />
              <p className="text-center text-xs text-gray-400 mt-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                Actual job — Sanford, NC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO COPY ── */}
      <section className="py-14 bg-sky-tint">
        <div className="container max-w-3xl">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-4">
            Enjoy the Holidays Without the Hassle
          </h2>
          <p className="text-gray-600 leading-relaxed ml-5 mb-4">
            Holiday light installation sounds simple but takes hours — and involves ladders, tangled lights, and cold weather. Let us handle it. We install, maintain, and take down your lights professionally and safely, so you can focus on what matters.
          </p>
          <p className="text-gray-600 leading-relaxed ml-5">
            We work with homeowners and businesses throughout Sanford, NC. Seasonal slots fill up fast — book early to lock in your date.
          </p>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-14 bg-white">
        <div className="container">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-8">What's Included</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-5">
            {services.map((s) => (
              <div key={s} className="flex items-start gap-3 bg-sky-tint rounded-xl p-4">
                <CheckCircle size={17} className="mt-0.5 flex-shrink-0" style={{ color: "var(--brand-aqua)" }} />
                <span className="text-gray-700 text-sm font-medium" style={{ fontFamily: "Manrope, sans-serif" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-14 bg-sky-tint">
        <div className="container">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-8">How It Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="bg-white rounded-2xl p-5 shadow-sm">
                <p className="text-3xl font-extrabold mb-3" style={{ color: "var(--brand-aqua)", fontFamily: "Manrope, sans-serif", opacity: 0.35 }}>
                  {num}
                </p>
                <h3 className="font-bold text-gray-900 mb-1.5 text-base" style={{ fontFamily: "Manrope, sans-serif" }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceReviews ids={["fortin", "pruitt"]} />
      <CTASection
        title="Book Your Holiday Light Installation"
        subtitle="Slots fill up fast. Contact us early to secure your spot in Sanford, NC."
      />
    </Layout>
  );
}
