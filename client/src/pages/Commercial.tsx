// Commercial.tsx — Next Level Window Cleaning
// Written for business buyers: storefronts, offices, restaurants, property managers
import useSEO from "@/hooks/useSEO";
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ServiceSchema, BreadcrumbSchema, SchemaMarkup } from "@/components/SchemaMarkup";
import CTASection from "@/components/CTASection";
import { ServiceReviews } from "@/components/GoogleReviews";
import { CheckCircle, ChevronDown, ChevronUp, ArrowRight, Phone, Building2, Calendar, Shield, FileText, Clock } from "lucide-react";
import { COMMERCIAL_HERO } from "@/config/images";

// Phone number with local NC area code
const PHONE = "(919) 348-9808";
const PHONE_HREF = "tel:9193489808";

const reasons = [
  { icon: Calendar, title: "Reliable Scheduling", desc: "We show up when we say we will. Recurring service available weekly, bi-weekly, or monthly." },
  { icon: Shield, title: "Fully Insured", desc: "We carry full liability insurance. You can add us as additionally insured if required." },
  { icon: FileText, title: "Professional Invoicing", desc: "Clean invoices, consistent communication, and easy payment for your records." },
  { icon: Clock, title: "Early / Off-Hours Available", desc: "We can schedule before your business opens so there's no disruption to your customers." },
  { icon: Building2, title: "Multi-Property Support", desc: "Managing multiple locations? We can coordinate service across all of them." },
  { icon: CheckCircle, title: "Consistent Results", desc: "The same professional standard on every visit — not just the first one." },
];
const clientTypes = ["Retail storefronts","Restaurants & cafes","Office buildings","Property management companies","Medical & dental offices","Auto dealerships","Small commercial complexes"];
const faqs = [
  { q: "Do you offer recurring commercial service?", a: "Yes. We offer weekly, bi-weekly, and monthly service agreements for commercial clients. Recurring clients get priority scheduling and consistent results." },
  { q: "Can you work around our business hours?", a: "Absolutely. We offer early morning and off-hours scheduling so your cleaning is done before customers arrive." },
  { q: "Are you insured for commercial properties?", a: "Yes. We carry full liability insurance and can provide certificates of insurance for your records or property manager." },
  { q: "How do I get a commercial bid?", a: "Fill out our commercial bid form or give us a call. We'll review your property details and provide a clear, itemized quote." },
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
export default function Commercial() {
  useSEO(
    "Commercial Window & Exterior Cleaning Sanford, NC | Next Level",
    "Reliable commercial exterior cleaning in Sanford, NC. Keep your storefront or business looking professional with our window and pressure washing services.",
    "/commercial"
  );
  return (
    <Layout>
      <ServiceSchema 
        name="Commercial Exterior Cleaning" 
        description="Reliable commercial exterior cleaning in Sanford, NC. Keep your storefront or business looking professional with our window and pressure washing services." 
        url="/commercial" 
      />
      <BreadcrumbSchema items={[{"name":"Home","url":"/"},{"name":"Commercial","url":"/commercial"}]} />
      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        }))
      }} />
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={COMMERCIAL_HERO} alt="Commercial window cleaning Sanford NC" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(10,20,40,0.80) 0%, rgba(10,20,40,0.5) 60%, transparent 100%)' }} />
        </div>
        <div className="container relative z-10 py-16">
          <nav className="text-white/70 text-xs mb-4 flex items-center gap-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
            <Link href="/"><span className="hover:text-white cursor-pointer">Home</span></Link><span>/</span>
            <span className="text-white">Commercial</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-3 py-1 mb-4">
            <Building2 size={13} className="text-white" />
            <span className="text-white text-xs font-bold" style={{ fontFamily: 'Manrope, sans-serif' }}>COMMERCIAL SERVICES</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Commercial Window Cleaning &amp; Exterior Washing in Sanford, NC</h1>
          <p className="text-white/85 text-lg mb-6 max-w-xl">Reliable, insured, professional exterior cleaning for storefronts, offices, restaurants, and property managers.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/get-a-free-estimate"><span className="btn-coral text-base px-7 py-3.5">Request a Commercial Bid <ArrowRight size={16} /></span></Link>
            <a href={PHONE_HREF} className="btn-outline-white text-base px-7 py-3.5"><Phone size={16} /> {PHONE}</a>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container max-w-3xl">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-4">Built for Business</h2>
          <p className="text-gray-600 leading-relaxed ml-5 mb-4">Your storefront is the first thing customers see. Dirty windows, grimy siding, and stained walkways send the wrong message. We help businesses in Sanford, NC maintain a professional appearance year-round.</p>
          <p className="text-gray-600 leading-relaxed ml-5">We understand that commercial clients have different needs than homeowners — reliable scheduling, insurance documentation, flexible hours, and consistent quality. That's exactly what we deliver.</p>
        </div>
      </section>

      {/* Sanford-specific commercial content */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="container max-w-3xl">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-4">Why Sanford Businesses Choose Next Level</h2>
          <div className="ml-5 space-y-4 text-gray-600 leading-relaxed">
            <p>Sanford's downtown district along Carthage Street and the US-1 corridor sees heavy foot traffic — and heavy pollen. Between spring yellow pollen coats and summer algae buildup on north-facing storefronts, commercial properties in Lee County need more frequent cleaning than most owners expect. We're based right here in Sanford, which means we can respond fast when you need us — often the same day.</p>
            <p>We work with property managers who oversee multiple buildings along the US-421 and NC-87 corridors, restaurant owners in the downtown historic district who need early-morning service before opening, and medical offices near Central Carolina Hospital that require consistent, documented cleaning schedules. Every property gets a custom plan — not a one-size-fits-all package.</p>
            <p>Our commercial clients also appreciate that we carry full liability insurance and can be named as additionally insured on your policy. We provide certificates of insurance, professional invoices, and consistent communication — everything your accounting and compliance teams need.</p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-sky-tint">
        <div className="container">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-8">Why Businesses Choose Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="service-card p-5">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: 'var(--brand-aqua-light)' }}>
                  <Icon size={20} style={{ color: 'var(--brand-aqua)' }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5 text-base" style={{ fontFamily: 'Manrope, sans-serif' }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-6">Who We Serve</h2>
              <div className="ml-5 flex flex-col gap-3">
                {clientTypes.map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: 'var(--brand-aqua)' }} />
                    <span className="text-gray-700 text-sm font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-sky-tint rounded-2xl p-8">
              <h3 className="font-extrabold text-gray-900 text-xl mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>Ready to Talk?</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">Fill out our commercial bid form and we'll get back to you the same day. Or give us a call — we're easy to reach.</p>
              <div className="flex flex-col gap-3">
                <Link href="/get-a-free-estimate"><span className="btn-coral w-full justify-center">Request a Commercial Bid <ArrowRight size={15} /></span></Link>
                <a href={PHONE_HREF} className="btn-primary w-full justify-center"><Phone size={15} /> {PHONE}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-sky-tint">
        <div className="container max-w-2xl">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-6">Commercial FAQs</h2>
          <div className="ml-5 flex flex-col gap-3">{faqs.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}</div>
        </div>
      </section>

      <ServiceReviews ids={["jimenez", "pruitt"]} />
      <CTASection title="Let's Talk About Your Property" subtitle="Request a commercial bid today. We respond the same day." />
    </Layout>
  );
}
