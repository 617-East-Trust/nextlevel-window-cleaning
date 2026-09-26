// Contact.tsx — Next Level Window Cleaning
// Email delivery through Web3Forms when VITE_WEB3FORMS_KEY is configured.
import useSEO from "@/hooks/useSEO";
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Facebook,
  Loader2,
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { FACEBOOK_URL, PHONE_DISPLAY, PHONE_HREF } from "@/const";

const WEB3FORMS_KEY =
  import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";
const FORM_DELIVERY_CONFIGURED = WEB3FORMS_KEY !== "YOUR_WEB3FORMS_ACCESS_KEY";

function SuccessMessage() {
  return (
    <div className="py-10 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
        <CheckCircle size={28} className="text-green-500" />
      </div>
      <h3
        className="mb-2 text-xl font-extrabold text-gray-900"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        Message sent.
      </h3>
      <p className="text-sm text-gray-600">
        We&apos;ll review your message and follow up. You can also reach us at{" "}
        <a
          href={PHONE_HREF}
          className="font-semibold"
          style={{ color: "var(--brand-aqua)" }}
        >
          {PHONE_DISPLAY}
        </a>
        .
      </p>
    </div>
  );
}

function ContactFallback() {
  return (
    <div
      className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-center"
      role="status"
    >
      <h3
        className="text-xl font-extrabold text-gray-900"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        Online messages are being updated.
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        Please call or text to discuss your property and the service you need.
      </p>
      <a href={PHONE_HREF} className="btn-coral mt-5">
        <Phone size={16} /> Call or Text {PHONE_DISPLAY}
      </a>
    </div>
  );
}

export default function Contact() {
  useSEO(
    "Contact Us | Next Level Window Cleaning in Sanford, NC",
    "Call or message Next Level Window Cleaning about window washing, gutter cleaning, pressure washing, and exterior services in the Sandhills.",
    "/contact"
  );
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!FORM_DELIVERY_CONFIGURED) {
      setError(
        `Online messages are temporarily unavailable. Please call or text ${PHONE_DISPLAY}.`
      );
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Contact Form Submission — ${form.name}`,
          from_name: "Next Level Window Cleaning Website",
          name: form.name,
          phone: form.phone,
          email: form.email || "Not provided",
          message: form.message,
          botcheck: "",
        }),
      });
      const data = await response.json();
      if (data.success) setSubmitted(true);
      else
        setError(`Something went wrong. Please call or text ${PHONE_DISPLAY}.`);
    } catch {
      setError(`Network error. Please call or text ${PHONE_DISPLAY}.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <section className="border-b border-gray-200 bg-sky-tint py-12">
        <div className="container max-w-3xl text-center">
          <nav
            className="mb-4 flex items-center justify-center gap-1.5 text-xs text-gray-400"
            aria-label="Breadcrumb"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            <Link href="/">
              <span className="cursor-pointer hover:text-gray-600">Home</span>
            </Link>
            <span>/</span>
            <span className="text-gray-600">Contact</span>
          </nav>
          <h1
            className="mb-3 text-3xl font-extrabold text-gray-900 lg:text-4xl"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Contact Next Level Window Cleaning
          </h1>
          <p className="text-gray-600">
            Call, text, or send a message about the service your property needs.
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container">
          <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-2">
            <div>
              <h2 className="section-heading mb-6 text-xl text-gray-900">
                Get in Touch
              </h2>
              <div className="ml-5 flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "var(--brand-aqua-light)" }}
                  >
                    <Phone size={18} style={{ color: "var(--brand-aqua)" }} />
                  </div>
                  <div>
                    <p
                      className="mb-0.5 text-sm font-bold text-gray-900"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Phone / Text
                    </p>
                    <a
                      href={PHONE_HREF}
                      className="text-gray-600 transition-colors hover:text-gray-900"
                    >
                      {PHONE_DISPLAY}
                    </a>
                    <p className="mt-0.5 text-xs text-gray-400">Call or text</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "var(--brand-aqua-light)" }}
                  >
                    <Mail size={18} style={{ color: "var(--brand-aqua)" }} />
                  </div>
                  <div>
                    <p
                      className="mb-0.5 text-sm font-bold text-gray-900"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:info@nextlevelwindowsnc.com"
                      className="text-gray-600 transition-colors hover:text-gray-900"
                    >
                      info@nextlevelwindowsnc.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "var(--brand-aqua-light)" }}
                  >
                    <MapPin size={18} style={{ color: "var(--brand-aqua)" }} />
                  </div>
                  <div>
                    <p
                      className="mb-0.5 text-sm font-bold text-gray-900"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Service Area
                    </p>
                    <p className="text-sm text-gray-600">
                      Sanford, NC and surrounding areas
                      <br />
                      Lee County, NC
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "var(--brand-aqua-light)" }}
                  >
                    <Clock size={18} style={{ color: "var(--brand-aqua)" }} />
                  </div>
                  <div>
                    <p
                      className="mb-0.5 text-sm font-bold text-gray-900"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Hours
                    </p>
                    <p className="text-sm text-gray-600">
                      Monday–Saturday: 7am – 6pm
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "var(--brand-aqua-light)" }}
                  >
                    <Facebook
                      size={18}
                      style={{ color: "var(--brand-aqua)" }}
                    />
                  </div>
                  <div>
                    <p
                      className="mb-0.5 text-sm font-bold text-gray-900"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Facebook
                    </p>
                    <a
                      href={FACEBOOK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                    >
                      Next Level Window Cleaning
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative ml-5 mt-8 h-64 overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                <iframe
                  title="Next Level Window Cleaning Service Area — Sanford NC"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52303.37!2d-79.1775!3d35.4799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5b1e9d4e4e4b%3A0x0!2sSanford%2C%20NC!5e0!3m2!1sen!2sus!4v1"
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="rounded-2xl bg-sky-tint p-6 lg:p-8">
              <h2
                className="mb-5 text-xl font-extrabold text-gray-900"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Send a Message
              </h2>
              {!FORM_DELIVERY_CONFIGURED ? (
                <ContactFallback />
              ) : submitted ? (
                <SuccessMessage />
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                    aria-hidden="true"
                    tabIndex={-1}
                  />
                  <div>
                    <label className="form-label" htmlFor="contact-name">
                      Your Name *
                    </label>
                    <input
                      required
                      id="contact-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contact-phone">
                      Phone *
                    </label>
                    <input
                      required
                      id="contact-phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder={PHONE_DISPLAY}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contact-email">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contact-message">
                      Message *
                    </label>
                    <textarea
                      required
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="form-input"
                      rows={4}
                      placeholder="Tell us what you need..."
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-600" role="alert">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-coral justify-center py-3 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />{" "}
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    Your information is used to respond to this message.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
