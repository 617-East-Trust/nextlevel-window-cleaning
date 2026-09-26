// ResidentialWindowCleaning.tsx — Next Level Window Cleaning
import useSEO from "@/hooks/useSEO";
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { ServiceReviews } from "@/components/GoogleReviews";
import { CheckCircle, ChevronDown, ChevronUp, ArrowRight, Phone } from "lucide-react";
import { RESIDENTIAL_WINDOW_CLEANING_HERO } from "@/config/images";
import { ServiceSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";

const HERO_IMG = RESIDENTIAL_WINDOW_CLEANING_HERO;

// Phone number with local NC area code
const PHONE = "(919) 348-9808";
const PHONE_HREF = "tel:9193489808";

const benefits = [
  "Better natural light inside your home",
  "Improved curb appeal and first impressions",
  "Longer window lifespan — removes corrosive buildup",
  "Clean glass that actually stays clean",
  "Safe cleaning methods for all window types",
  "Interior and exterior cleaning available",
];

const faqs = [
  { q: "How often should I have my windows cleaned?", a: "Most homeowners benefit from professional window cleaning 2–4 times per year. Homes near busy roads or with lots of trees may need more frequent service." },
  { q: "Do I need to be home during the service?", a: "Not necessarily. For exterior-only cleaning, you don't need to be present. For interior cleaning, we'll coordinate a time that works for you." },
  { q: "Do you clean screens?", a: "Yes, we clean window screens as part of our standard service. We remove, clean, and reinstall them carefully." },
  { q: "What equipment do you use?", a: "We bring all our own professional-grade equipment. You don't need to provide anything." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors">
        <span className="font-bold text-gray-900 text-sm pr-4" style={{ fontFamily: 'Manrope, sans-serif' }}>{q}</span>
        {open ? <ChevronUp size={18} className="flex-shrink-0 text-[var(--brand-aqua)]" /> : <ChevronDown size={18} className="flex-shrink-0 text-gray-400" />}
      </button>
      {open && <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed bg-white border-t border-gray-100">{a}</div>}
    </div>
  );
}

export default function ResidentialWindowCleaning() {
  useSEO(
    "Residential Window Cleaning in Sanford, NC | Next Level",
    "Professional residential window cleaning in Sanford and the Sandhills. We safely remove NC pollen, dirt, and grime for streak-free glass.",
    "/residential/window-cleaning"
  );
  return (
    <Layout>
      <ServiceSchema 
        name="Residential Window Cleaning" 
        description="Professional residential window cleaning in Sanford and the Sandhills. We safely remove NC pollen, dirt, and grime for streak-free glass." 
        url="/residential/window-cleaning" 
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Residential", url: "/residential" },
        { name: "Window Cleaning", url: "/residential/window-cleaning" }
      ]} />
      {/* Hero */}
      <section className="relative min-h-[380px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Residential window cleaning Sanford NC" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(10,20,40,0.75) 0%, rgba(10,20,40,0.4) 60%, transparent 100%)' }} />
        </div>
        <div className="container relative z-10 py-16">
          <nav className="text-white/70 text-xs mb-4 flex items-center gap-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
            <Link href="/"><span className="hover:text-white cursor-pointer">Home</span></Link>
            <span>/</span>
            <Link href="/residential"><span className="hover:text-white cursor-pointer">Residential</span></Link>
            <span>/</span>
            <span className="text-white">Window Cleaning</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Residential Window Cleaning in Sanford, NC
          </h1>
          <p className="text-white/85 text-lg mb-6 max-w-lg">
            Crystal-clear windows, inside and out. Professional service for homes throughout Sanford and Lee County.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/get-a-free-estimate"><span className="btn-coral">Get a Free Estimate <ArrowRight size={16} /></span></Link>
            <a href={PHONE_HREF} className="btn-outline-white"><Phone size={16} /> {PHONE}</a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="container max-w-3xl">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-4">What Is Residential Window Cleaning?</h2>
          <p className="text-gray-600 leading-relaxed ml-5 mb-4">
            Professional window cleaning isn't just about looks — it actually protects your glass. Hard water deposits, oxidation, and pollen etch into the surface over time. We remove that buildup so your windows stay clear and last longer. No streaks, no leftover film, no garden-hose guesswork.
          </p>
          <p className="text-gray-600 leading-relaxed ml-5">
            Next Level Window Cleaning serves homeowners throughout Sanford, NC with thorough, careful service. We treat your home like our own and take pride in the results we deliver.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 bg-sky-tint">
        <div className="container">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-8">Benefits of Professional Window Cleaning</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-5">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                <CheckCircle size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--brand-aqua)' }} />
                <span className="text-gray-700 text-sm font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 bg-white">
        <div className="container max-w-3xl">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-8">Our Process</h2>
          <div className="ml-5 flex flex-col gap-6">
            {[
              { step: "1", title: "Free Estimate", desc: "We assess your home's windows and provide a clear, upfront quote." },
              { step: "2", title: "Scheduled Service", desc: "We arrive on time with all equipment. No setup required from you." },
              { step: "3", title: "Thorough Cleaning", desc: "We clean frames, sills, glass, and screens — interior and exterior." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                  style={{ backgroundColor: 'var(--brand-aqua)', fontFamily: 'Manrope, sans-serif' }}>
                  {step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-sky-tint">
        <div className="container max-w-2xl">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-6">Window Cleaning FAQs</h2>
          <div className="ml-5 flex flex-col gap-3">
            {faqs.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      <ServiceReviews ids={["aguilera", "pruitt"]} />
      <CTASection title="Ready for Cleaner Windows?" subtitle="Get a free estimate for residential window cleaning in Sanford, NC." />
    </Layout>
  );
}
