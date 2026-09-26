// Residential.tsx — Next Level Window Cleaning
import useSEO from "@/hooks/useSEO";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ServiceSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import CTASection from "@/components/CTASection";
import { ServiceReviews } from "@/components/GoogleReviews";
import { ArrowRight, Phone, Sparkles, Droplets, Wind, Lightbulb } from "lucide-react";
import { GALLERY } from "@/config/images";

// Phone number with local NC area code
const PHONE = "(919) 348-9808";
const PHONE_HREF = "tel:9193489808";

const HERO_IMG = GALLERY.gallery_01;

const services = [
  { icon: Sparkles, title: "Window Cleaning", desc: "Interior and exterior window cleaning for homes of all sizes. Streak-free results every time.", href: "/residential/window-cleaning" },
  { icon: Droplets, title: "Pressure Washing", desc: "Driveways, patios, siding, decks — we remove years of buildup fast.", href: "/residential/pressure-washing" },
  { icon: Wind, title: "Soft Washing", desc: "Low-pressure cleaning for roofs, painted surfaces, and delicate siding.", href: "/residential/soft-washing" },
  { icon: Lightbulb, title: "Christmas Lights", desc: "Professional holiday light installation and takedown. Book early — slots fill fast.", href: "/residential/christmas-lights" },
];
export default function Residential() {
  useSEO(
    "Residential Exterior Cleaning in Sanford, NC | Next Level",
    "Window cleaning, pressure washing, soft washing, gutter cleaning, and Christmas lights for Sanford-area homeowners. Free estimates.",
    "/residential"
  );
  return (
    <Layout>
      <ServiceSchema 
        name="Residential Exterior Cleaning" 
        description="Window cleaning, pressure washing, soft washing, gutter cleaning, and Christmas lights for Sanford-area homeowners. Free estimates." 
        url="/residential" 
      />
      <BreadcrumbSchema items={[{"name":"Home","url":"/"},{"name":"Residential","url":"/residential"}]} />
      <section className="relative min-h-[380px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Residential exterior cleaning Sanford NC" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(10,20,40,0.75) 0%, rgba(10,20,40,0.4) 60%, transparent 100%)' }} />
        </div>
        <div className="container relative z-10 py-16">
          <nav className="text-white/70 text-xs mb-4 flex items-center gap-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
            <Link href="/"><span className="hover:text-white cursor-pointer">Home</span></Link><span>/</span>
            <span className="text-white">Residential</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Residential Exterior Cleaning in Sanford, NC</h1>
          <p className="text-white/85 text-lg mb-6 max-w-lg">Window cleaning, pressure washing, soft washing, and holiday lights — all from one locally owned, fully insured team.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/get-a-free-estimate"><span className="btn-coral">Get a Free Estimate <ArrowRight size={16} /></span></Link>
            <a href={PHONE_HREF} className="btn-outline-white"><Phone size={16} /> {PHONE}</a>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-10">Residential Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, title, desc, href }) => (
              <Link key={href} href={href}>
                <div className="service-card p-6 group cursor-pointer h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--brand-aqua-light)' }}>
                    <Icon size={24} style={{ color: 'var(--brand-aqua)' }} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg" style={{ fontFamily: 'Manrope, sans-serif' }}>{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                  <span className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: 'var(--brand-aqua)', fontFamily: 'Manrope, sans-serif' }}>
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ServiceReviews ids={["aguilera", "jb"]} />
      <CTASection title="Ready to Book Residential Service?" subtitle="Get a free estimate for your Sanford, NC home today." />
    </Layout>
  );
}
