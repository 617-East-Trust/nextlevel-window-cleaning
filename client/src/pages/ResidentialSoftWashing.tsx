import useSEO from "@/hooks/useSEO";
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ServiceSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import CTASection from "@/components/CTASection";
import { ServiceReviews } from "@/components/GoogleReviews";
import { CheckCircle, ChevronDown, ChevronUp, ArrowRight, Phone } from "lucide-react";
import { SOFT_WASHING_HERO } from "@/config/images";

// Phone number with local NC area code
const PHONE = "(919) 348-9808";
const PHONE_HREF = "tel:9193489808";

const HERO_IMG = SOFT_WASHING_HERO;

const surfaces = ["Roof Shingles","Vinyl Siding","Stucco","Wood Siding","Painted Surfaces","Gutters & Fascia"];
const faqs = [
  { q: "What is soft washing?", a: "Soft washing uses low-pressure water combined with biodegradable cleaning solutions to safely remove algae, mold, mildew, and stains from delicate surfaces that would be damaged by high-pressure washing." },
  { q: "Is soft washing safe for my roof?", a: "Yes. Soft washing is actually the recommended method for roof cleaning. High-pressure washing can damage shingles and void warranties. Our low-pressure approach cleans thoroughly without any risk." },
  { q: "How long do soft washing results last?", a: "Soft washing treatments typically last 1–3 years because the cleaning solution kills algae and mold at the root, preventing quick regrowth." },
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
export default function ResidentialSoftWashing() {
  useSEO(
    "Soft Washing in Sanford, NC | Next Level Window Cleaning",
    "Safe, low-pressure soft washing for roofs, siding, and delicate surfaces in Sanford, NC. Removes algae, mold, and mildew without damage.",
    "/residential/soft-washing"
  );
  return (
    <Layout>
      <ServiceSchema 
        name="Residential Soft Washing" 
        description="Safe, low-pressure soft washing for roofs, siding, and delicate surfaces in Sanford, NC. Removes algae, mold, and mildew without damage." 
        url="/residential/soft-washing" 
      />
      <BreadcrumbSchema items={[{"name":"Home","url":"/"},{"name":"Residential","url":"/residential"},{"name":"Soft Washing","url":"/residential/soft-washing"}]} />
      <section className="relative min-h-[380px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Soft washing Sanford NC" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(10,20,40,0.75) 0%, rgba(10,20,40,0.4) 60%, transparent 100%)' }} />
        </div>
        <div className="container relative z-10 py-16">
          <nav className="text-white/70 text-xs mb-4 flex items-center gap-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
            <Link href="/"><span className="hover:text-white cursor-pointer">Home</span></Link><span>/</span>
            <Link href="/residential"><span className="hover:text-white cursor-pointer">Residential</span></Link><span>/</span>
            <span className="text-white">Soft Washing</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Soft Washing in Sanford, NC</h1>
          <p className="text-white/85 text-lg mb-6 max-w-lg">Safe, low-pressure exterior cleaning for roofs, siding, and delicate surfaces.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/get-a-free-estimate"><span className="btn-coral">Get a Free Estimate <ArrowRight size={16} /></span></Link>
            <a href={PHONE_HREF} className="btn-outline-white"><Phone size={16} /> {PHONE}</a>
          </div>
        </div>
      </section>
      <section className="py-14 bg-white"><div className="container max-w-3xl">
        <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-4">Gentle Cleaning for Delicate Surfaces</h2>
        <p className="text-gray-600 leading-relaxed ml-5 mb-4">High pressure has its place, but some surfaces need a gentler touch. We use biodegradable cleaning solutions at low pressure to kill algae, mold, and mildew at the root — without blasting your shingles off or stripping your paint.</p>
        <p className="text-gray-600 leading-relaxed ml-5">This is the method roof manufacturers and siding installers recommend. It cleans deeper, and the results hold up for years instead of months.</p>
      </div></section>
      <section className="py-14 bg-sky-tint"><div className="container">
        <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-8">What We Soft Wash</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 ml-5">
          {surfaces.map((s) => (
            <div key={s} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
              <CheckCircle size={17} style={{ color: 'var(--brand-aqua)' }} />
              <span className="text-gray-700 text-sm font-semibold" style={{ fontFamily: 'Manrope, sans-serif' }}>{s}</span>
            </div>
          ))}
        </div>
      </div></section>
      <section className="py-14 bg-white"><div className="container max-w-2xl">
        <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-6">Soft Washing FAQs</h2>
        <div className="ml-5 flex flex-col gap-3">{faqs.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}</div>
      </div></section>
      <ServiceReviews ids={["jb", "jimenez"]} />
      <CTASection title="Safe Cleaning for Your Home" subtitle="Get a free soft washing estimate in Sanford, NC." />
    </Layout>
  );
}
