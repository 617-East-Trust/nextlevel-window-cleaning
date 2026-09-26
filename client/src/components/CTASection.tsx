// CTASection — reusable bottom CTA block for all pages
import { Link } from "wouter";
import { Phone, ArrowRight } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/const";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function CTASection({
  title = "Ready for Cleaner Windows?",
  subtitle = "Get a free estimate today. We serve Sanford, Cameron, Spring Lake, and Broadway, NC.",
  dark = true,
}: CTASectionProps) {
  return (
    <section
      className={`py-16 lg:py-20 ${dark ? "" : "bg-sky-tint"}`}
      style={
        dark
          ? {
              background:
                "linear-gradient(135deg, var(--brand-aqua-dark) 0%, var(--brand-aqua) 100%)",
            }
          : {}
      }
    >
      <div className="container text-center">
        <h2
          className={`text-3xl lg:text-4xl font-extrabold mb-4 ${dark ? "text-white" : ""}`}
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {title}
        </h2>
        <p
          className={`text-lg mb-8 max-w-xl mx-auto ${dark ? "text-white/85" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/get-a-free-estimate">
            <span
              className={`btn-coral text-base px-8 py-3.5 ${!dark ? "" : ""}`}
            >
              <ArrowRight size={18} /> Get a Free Estimate
            </span>
          </Link>
          <a
            href={PHONE_HREF}
            className="btn-outline-white text-base px-8 py-3.5"
          >
            <Phone size={18} /> Call or Text {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
