// Layout.tsx — Next Level Window Cleaning
// Design: Local Pride Modernism — Manrope + Inter, aqua-blue primary, coral CTA
// Sticky header with phone, mobile bottom CTA bar, full footer with NAP

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  MapPin,
  Mail,
  Facebook,
  Shield,
  Star,
  Clock,
} from "lucide-react";
import { LOGO_URL } from "@/config/images";
import {
  FACEBOOK_URL,
  PHONE_DISPLAY,
  PHONE_DISPLAY_SECONDARY,
  PHONE_HREF,
  PHONE_HREF_SECONDARY,
} from "@/const";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Residential",
    href: "/residential",
    children: [
      { label: "Window Cleaning", href: "/residential/window-cleaning" },
      { label: "Pressure Washing", href: "/residential/pressure-washing" },
      { label: "Soft Washing", href: "/residential/soft-washing" },
      { label: "Christmas Lights", href: "/residential/christmas-lights" },
      { label: "Gutter Cleaning", href: "/residential/gutter-cleaning" },
    ],
  },
  { label: "Commercial", href: "/commercial" },
  { label: "Our Work", href: "/our-work" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

function DropdownMenu({
  id,
  items,
}: {
  id: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div
      id={id}
      role="menu"
      className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50"
    >
      {items.map(item => (
        <Link key={item.href} href={item.href}>
          <span
            role="menuitem"
            className="block px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-sky-50 hover:text-[var(--brand-aqua)] transition-colors cursor-pointer"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top announcement bar */}
      <div
        className="hidden sm:flex items-center justify-between px-6 py-2 text-xs font-semibold text-white"
        style={{
          backgroundColor: "var(--brand-aqua-dark)",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        <span className="flex items-center gap-1.5">
          <MapPin size={12} /> Serving Sanford, Cameron, Spring Lake &amp;
          Broadway, NC
        </span>
        <a
          href={PHONE_HREF}
          className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
        >
          <Phone size={12} /> {PHONE_DISPLAY} — Free Estimates, Call or Text
        </a>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow duration-200 ${scrolled ? "shadow-md" : "border-b border-gray-100"}`}
      >
        <div className="container flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/">
            <span className="flex items-center gap-2 cursor-pointer">
              <img
                src={LOGO_URL}
                alt="Next Level Window Cleaning"
                className="h-10 w-auto object-contain"
              />
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map(item => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <button
                    className="nav-link flex items-center gap-1"
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={openDropdown === item.label}
                    aria-controls={`${item.label.toLowerCase()}-menu`}
                    onClick={() =>
                      setOpenDropdown(current =>
                        current === item.label ? null : item.label
                      )
                    }
                    onKeyDown={event => {
                      if (event.key === "Escape") setOpenDropdown(null);
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      padding: "0.25rem 0",
                    }}
                  >
                    {item.label} <ChevronDown size={14} />
                  </button>
                ) : (
                  <Link href={item.href}>
                    <span className="nav-link">{item.label}</span>
                  </Link>
                )}
                {item.children && openDropdown === item.label && (
                  <DropdownMenu
                    id={`${item.label.toLowerCase()}-menu`}
                    items={item.children}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex flex-col items-end">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-1.5 font-bold text-sm"
                style={{
                  color: "var(--brand-coral)",
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                <Phone size={15} /> {PHONE_DISPLAY}
              </a>
              <span className="text-[10px] text-gray-400 leading-tight">
                Call or text for an estimate
              </span>
            </div>
            <Link href="/get-a-free-estimate">
              <span className="btn-primary text-sm py-2.5 px-5">
                Get a Free Estimate
              </span>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="container py-4 flex flex-col gap-1">
              {navItems.map(item => (
                <div key={item.href}>
                  <Link href={item.href}>
                    <span
                      className="block py-2.5 font-semibold text-gray-800 hover:text-[var(--brand-aqua)] transition-colors"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {item.label}
                    </span>
                  </Link>
                  {item.children && (
                    <div className="pl-4 flex flex-col gap-0.5 mb-1">
                      {item.children.map(child => (
                        <Link key={child.href} href={child.href}>
                          <span
                            className="block py-2 text-sm text-gray-600 hover:text-[var(--brand-aqua)] transition-colors"
                            style={{
                              fontFamily: "Manrope, sans-serif",
                              fontWeight: 500,
                            }}
                          >
                            {child.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href={PHONE_HREF}
                  className="btn-coral text-center justify-center"
                >
                  <Phone size={16} /> Call / Text: {PHONE_DISPLAY}
                </a>
                <Link href="/get-a-free-estimate">
                  <span className="btn-primary w-full text-center justify-center">
                    Get a Free Estimate
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <img
                src={LOGO_URL}
                alt="Next Level Window Cleaning"
                className="h-12 w-auto object-contain mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Locally owned and fully insured exterior cleaning serving
                Sanford, NC and surrounding areas.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Next Level Window Cleaning on Facebook"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--brand-aqua)] transition-colors"
                >
                  <Facebook size={16} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4
                className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  letterSpacing: "0.08em",
                }}
              >
                Services
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {[
                  ["Window Cleaning", "/residential/window-cleaning"],
                  ["Pressure Washing", "/residential/pressure-washing"],
                  ["Soft Washing", "/residential/soft-washing"],
                  ["Gutter Cleaning", "/residential/gutter-cleaning"],
                  ["Christmas Lights", "/residential/christmas-lights"],
                  ["Commercial Services", "/commercial"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href}>
                      <span className="hover:text-white transition-colors cursor-pointer">
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  letterSpacing: "0.08em",
                }}
              >
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {[
                  ["About Us", "/about"],
                  ["Our Work", "/our-work"],
                  ["FAQ", "/faq"],
                  ["Service Areas", "/service-areas"],
                  ["Get a Free Estimate", "/get-a-free-estimate"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href}>
                      <span className="hover:text-white transition-colors cursor-pointer">
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact / NAP */}
            <div>
              <h4
                className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  letterSpacing: "0.08em",
                }}
              >
                Contact
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2.5">
                  <MapPin
                    size={15}
                    className="mt-0.5 flex-shrink-0 text-[var(--brand-aqua)]"
                  />
                  <span>
                    Sanford, NC 27330
                    <br />
                    Serving Lee County &amp; surrounding areas
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone
                    size={15}
                    className="flex-shrink-0 text-[var(--brand-aqua)]"
                  />
                  <div>
                    <a
                      href={PHONE_HREF}
                      className="hover:text-white transition-colors block"
                    >
                      {PHONE_DISPLAY}
                    </a>
                    <span className="text-[11px] text-gray-500">
                      or{" "}
                      <a
                        href={PHONE_HREF_SECONDARY}
                        className="hover:text-white transition-colors"
                      >
                        {PHONE_DISPLAY_SECONDARY}
                      </a>
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail
                    size={15}
                    className="flex-shrink-0 text-[var(--brand-aqua)]"
                  />
                  <a
                    href="mailto:info@nextlevelwindowsnc.com"
                    className="hover:text-white transition-colors"
                  >
                    info@nextlevelwindowsnc.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock
                    size={15}
                    className="flex-shrink-0 text-[var(--brand-aqua)]"
                  />
                  <span>Mon–Sat: 7am – 6pm</span>
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Shield size={12} className="text-green-400" /> Fully Insured
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Star size={12} className="text-yellow-400" /> Locally Owned
                </span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <p>
              © {new Date().getFullYear()} Next Level Window Cleaning. All
              rights reserved. Sanford, NC.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy">
                <span className="hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/terms">
                <span className="hover:text-white transition-colors cursor-pointer">
                  Terms of Service
                </span>
              </Link>
            </div>
            <p>Serving Sanford · Cameron · Spring Lake · Broadway, NC</p>
          </div>
        </div>
      </footer>

      {/* Mobile sticky bottom CTA bar */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-white/20"
        style={{ backgroundColor: "var(--brand-charcoal)" }}
      >
        <a
          href={PHONE_HREF}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-white font-bold text-sm border-r border-white/20"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          <Phone size={16} /> Call {PHONE_DISPLAY}
        </a>
        <Link href="/get-a-free-estimate">
          <span
            className="flex-1 flex items-center justify-center gap-2 py-3.5 text-white font-bold text-sm"
            style={{
              backgroundColor: "var(--brand-coral)",
              fontFamily: "Manrope, sans-serif",
            }}
          >
            Get Estimate
          </span>
        </Link>
      </div>
      {/* Bottom padding for mobile sticky bar */}
      <div className="lg:hidden h-14" />
    </div>
  );
}
