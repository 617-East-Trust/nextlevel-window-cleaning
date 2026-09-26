// ResidentialPressureWashing.tsx — Next Level Window Cleaning
import useSEO from "@/hooks/useSEO";
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { SchemaMarkup, ServiceSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import CTASection from "@/components/CTASection";
import { ServiceReviews } from "@/components/GoogleReviews";
import { CheckCircle, ChevronDown, ChevronUp, ArrowRight, Phone } from "lucide-react";
import { PRESSURE_WASHING_HERO } from "@/config/images";

// Phone number with local NC area code
const PHONE = "(919) 348-9808";
const PHONE_HREF = "tel:9193489808";

const surfaces = ["Driveways & Sidewalks","Patios & Decks","Siding & Brick","Fences","Garage Floors","Retaining Walls"];
const faqs = [
  { q: "Is pressure washing safe for my siding?", a: "Yes, when done correctly. We adjust pressure levels based on the surface type. Vinyl and wood siding require lower pressure than concrete — we know the difference." },
  { q: "How often should I pressure wash my driveway?", a: "Once a year is a good baseline for most driveways in North Carolina. Homes with heavy tree cover or shade may benefit from more frequent cleaning." },
  { q: "Will pressure washing remove all stains?", a: "Most stains — algae, mold, mildew, dirt, and grime — come off completely. Some deep oil stains may require additional treatment, which we can discuss during your estimate." },
  { q: "Do I need to move my vehicles or furniture?", a: "We ask that you clear the area being cleaned. We'll let you know exactly what to move when we schedule the job." },
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

export default function ResidentialPressureWashing() {
  useSEO(
    "Pressure Washing in Sanford, NC | Next Level Window Cleaning",
    "Professional pressure washing for driveways, sidewalks, decks, and fences in Sanford and Lee County, NC. Locally owned, fully insured.",
    "/residential/pressure-washing"
  );
  return (
    <Layout>
      <ServiceSchema 
        name="Residential Pressure Washing" 
        description="Professional pressure washing for driveways, sidewalks, decks, and fences in Sanford and Lee County, NC. Locally owned, fully insured." 
        url="/residential/pressure-washing" 
      />
      <BreadcrumbSchema items={[{"name":"Home","url":"/"},{"name":"Residential","url":"/residential"},{"name":"Pressure Washing","url":"/residential/pressure-washing"}]} />
      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        }))
      }} />
      <section className="relative min-h-[380px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={PRESSURE_WASHING_HERO} alt="Pressure washing Sanford NC" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(10,20,40,0.75) 0%, rgba(10,20,40,0.4) 60%, transparent 100%)' }} />
        </div>
        <div className="container relative z-10 py-16">
          <nav className="text-white/70 text-xs mb-4 flex items-center gap-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
            <Link href="/"><span className="hover:text-white cursor-pointer">Home</span></Link>
            <span>/</span>
            <Link href="/residential"><span className="hover:text-white cursor-pointer">Residential</span></Link>
            <span>/</span>
            <span className="text-white">Pressure Washing</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Residential Pressure Washing in Sanford, NC
          </h1>
          <p className="text-white/85 text-lg mb-6 max-w-lg">
            Remove years of grime, algae, and stains from your driveway, patio, siding, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/get-a-free-estimate"><span className="btn-coral">Get a Free Estimate <ArrowRight size={16} /></span></Link>
            <a href={PHONE_HREF} className="btn-outline-white"><Phone size={16} /> {PHONE}</a>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container max-w-3xl">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-4">Restore Your Home's Exterior</h2>
          <p className="text-gray-600 leading-relaxed ml-5 mb-4">
            Living in Sanford means fighting a constant battle against North Carolina humidity. Between the heavy pollen seasons and dense tree cover, it doesn't take long for green algae and black mold to take over your driveway, siding, and back deck. We don't just blast these surfaces with water — we adjust our pressure levels to safely wash away the grime without gouging your wood or cracking your vinyl.
          </p>
          <p className="text-gray-600 leading-relaxed ml-5 mb-4">
            Every job uses professional-grade equipment calibrated to the surface we're cleaning. Concrete gets higher pressure. Wood decks get a gentler touch. Your home gets what it actually needs — not a one-setting-fits-all approach.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white border-t border-gray-100">
        <div className="container max-w-3xl">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-6">Why Pressure Washing Matters in North Carolina</h2>
          <div className="ml-5 space-y-4 text-gray-600 leading-relaxed">
            <p>
              North Carolina's climate creates the perfect conditions for organic growth on exterior surfaces. Warm, humid summers combined with mild winters mean mold, mildew, and algae never really go dormant — they just slow down. Homeowners in Lee County, Harnett County, and throughout the Sandhills region deal with a unique set of challenges that require more than a garden hose.
            </p>
            <p>
              <strong className="text-gray-900">Red clay stains.</strong> If you've lived in central NC for any length of time, you know the struggle. Red clay dust settles on driveways, sidewalks, and siding after every rain. Left untreated, it bonds to porous surfaces like concrete and brick, creating stubborn orange-brown stains that only professional-grade pressure washing equipment can remove.
            </p>
            <p>
              <strong className="text-gray-900">Pine pollen and tree sap.</strong> Sanford sits in the heart of North Carolina's pine country. Each spring, a thick yellow blanket of pine pollen coats every exterior surface. When pollen mixes with morning dew and afternoon humidity, it forms a sticky film that traps dirt and accelerates algae growth. Regular pressure washing keeps this cycle from building up year after year.
            </p>
            <p>
              <strong className="text-gray-900">Hurricane season debris.</strong> From June through November, tropical weather patterns push heavy rain and wind across the Sandhills. The resulting organic debris — leaves, pine needles, mud splatter — leaves behind stains that set in if not addressed quickly. We offer post-storm cleanup pressure washing for homeowners who need fast turnaround.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-sky-tint">
        <div className="container max-w-3xl">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-6">Our Pressure Washing Process</h2>
          <div className="ml-5 space-y-5">
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>1. Surface Assessment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Before we touch a trigger, we walk your property and assess every surface. Concrete, brick, wood, vinyl — each material has a maximum safe PSI. We identify problem areas, check for pre-existing damage, and plan the approach.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>2. Pre-Treatment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Heavily soiled areas get an eco-friendly detergent pre-treatment. This loosens organic growth and oil-based stains before we apply pressure, reducing the PSI needed and protecting your surfaces.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>3. Pressure Washing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Using commercial-grade equipment with adjustable pressure and interchangeable nozzle tips, we clean each surface at exactly the right pressure. Concrete driveways might see 3,000 PSI. Cedar decks get 500-800 PSI with a fan tip. We never guess.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>4. Final Rinse & Inspection</h3>
              <p className="text-gray-600 text-sm leading-relaxed">A thorough rinse removes all cleaning agents and loosened debris. We walk the property with you to make sure every surface meets our standard — and yours.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-sky-tint">
        <div className="container">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-8">Surfaces We Clean</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 ml-5">
            {surfaces.map((s) => (
              <div key={s} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                <CheckCircle size={17} style={{ color: 'var(--brand-aqua)' }} />
                <span className="text-gray-700 text-sm font-semibold" style={{ fontFamily: 'Manrope, sans-serif' }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container max-w-2xl">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-6">Pressure Washing FAQs</h2>
          <div className="ml-5 flex flex-col gap-3">
            {faqs.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      <ServiceReviews ids={["boone", "steve"]} />
      <CTASection title="Ready to Restore Your Exterior?" subtitle="Get a free pressure washing estimate for your Sanford, NC home." />
    </Layout>
  );
}
