import useSEO from "@/hooks/useSEO";
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ServiceSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import CTASection from "@/components/CTASection";
import { ServiceReviews } from "@/components/GoogleReviews";
import { CheckCircle, ChevronDown, ChevronUp, Phone, ArrowRight } from "lucide-react";

const PHONE = "(919) 348-9808";
const PHONE_HREF = "tel:9193489808";

const benefits = [
  "Prevent costly water damage to fascia, soffits, and foundations",
  "Eliminate mosquito and pest breeding grounds",
  "Protect your roof — clogged gutters cause shingle rot and leaks",
  "Extend the lifespan of your gutter system",
  "We bag and haul away all debris — no mess left behind",
  "Safe ladder work by fully insured professionals",
];

const faqs = [
  { q: "How often should gutters be cleaned?", a: "Most homes need gutter cleaning twice a year — once in spring after pollen season and once in fall after leaves drop. Homes under heavy tree cover may need it 3–4 times per year." },
  { q: "What does gutter cleaning include?", a: "We remove all debris (leaves, sticks, sediment) from the gutters and downspouts by hand, flush the system with water to verify proper drainage, and do a visual inspection for damage or sagging sections." },
  { q: "Can clogged gutters damage my home?", a: "Yes. Overflowing gutters cause water to pool around your foundation, erode landscaping, rot fascia boards, and leak into soffits. Keeping gutters clear is one of the most cost-effective home maintenance tasks." },
  { q: "Do you clean downspouts too?", a: "Absolutely. We flush downspouts from the top to clear blockages and confirm water flows freely from the outlet at the base." },
  { q: "Are you insured for ladder work?", a: "Yes. Next Level Window Cleaning is fully insured, including liability coverage for all ladder and roofline work. You can request proof of insurance before your appointment." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors">
        <span className="font-bold text-gray-900 text-sm pr-4" style={{ fontFamily: 'Manrope, sans-serif' }}>{q}</span>
        {open ? <ChevronUp size={18} className="flex-shrink-0 text-[var(--brand-aqua)]" /> : <ChevronDown size={18} className="flex-shrink-0 text-gray-400" />}
      </button>
      {open && <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed bg-white">{a}</div>}
    </div>
  );
}

export default function ResidentialGutterCleaning() {
  useSEO(
    "Gutter Cleaning in Sanford, NC | Next Level Window Cleaning",
    "Professional gutter cleaning services in Sanford, NC and surrounding areas. We remove debris, flush downspouts, and keep your gutters flowing freely. Fully insured. Free estimates.",
    "/residential/gutter-cleaning"
  );

  return (
    <Layout>
      <ServiceSchema
        name="Gutter Cleaning"
        description="Professional gutter cleaning and downspout flushing for residential properties in Sanford, NC and surrounding areas."
        url="https://nextlevelwindowsnc.com/residential/gutter-cleaning"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nextlevelwindowsnc.com/" },
          { name: "Residential", url: "https://nextlevelwindowsnc.com/residential" },
          { name: "Gutter Cleaning", url: "https://nextlevelwindowsnc.com/residential/gutter-cleaning" },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-[var(--brand-charcoal)] text-white py-20 md:py-28">
        <div className="container max-w-4xl text-center">
          <p className="text-[var(--brand-aqua)] font-semibold text-sm uppercase tracking-widest mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>Residential Service</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Gutter Cleaning in Sanford, NC</h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Clogged gutters cause real damage. We clear debris, flush downspouts, and protect your home — fully insured, same-week scheduling available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-a-free-estimate" className="inline-flex items-center gap-2 bg-[var(--brand-coral)] text-white px-7 py-3.5 rounded-lg font-bold hover:opacity-90 transition-opacity" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Get a Free Estimate <ArrowRight size={18} />
            </Link>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors" style={{ fontFamily: 'Manrope, sans-serif' }}>
              <Phone size={18} /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2 text-center" style={{ fontFamily: 'Manrope, sans-serif' }}>What's Included</h2>
          <p className="text-gray-500 text-center mb-10">Every gutter cleaning job includes:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Hand Debris Removal", desc: "We manually remove leaves, sticks, and sediment from every gutter run." },
              { title: "Downspout Flushing", desc: "Each downspout is flushed from top to bottom to clear blockages and confirm flow." },
              { title: "Water Flow Test", desc: "We run water through the entire system to verify proper pitch and drainage." },
              { title: "Visual Inspection", desc: "We flag any sagging sections, loose hangers, or damage we spot during service." },
              { title: "Debris Bagged & Removed", desc: "All gutter waste is bagged and hauled away. Your yard stays clean." },
              { title: "Insured Ladder Work", desc: "Our team is fully insured for all heights. Proof of insurance available on request." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle size={22} className="flex-shrink-0 text-[var(--brand-aqua)] mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Manrope, sans-serif' }}>Why Clean Your Gutters?</h2>
          <ul className="space-y-4">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={20} className="flex-shrink-0 text-[var(--brand-aqua)] mt-0.5" />
                <span className="text-gray-700">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-14 bg-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>Service Area</h2>
          <p className="text-gray-600 mb-4">We provide gutter cleaning throughout Lee County and surrounding communities, including:</p>
          <p className="font-semibold text-[var(--brand-aqua)]" style={{ fontFamily: 'Manrope, sans-serif' }}>Sanford · Cameron · Spring Lake · Broadway · Pittsboro · Carthage</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Manrope, sans-serif' }}>Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      <ServiceReviews ids={["steve", "fortin"]} />
      <CTASection
        title="Ready to Schedule Your Gutter Cleaning?"
        subtitle="Free estimates, same-week scheduling, and 100% satisfaction guaranteed."
      />
    </Layout>
  );
}
