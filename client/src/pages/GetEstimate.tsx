// GetEstimate.tsx — Next Level Window Cleaning
// Email delivery through Web3Forms when VITE_WEB3FORMS_KEY is configured.
import useSEO from "@/hooks/useSEO";
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import {
  Phone,
  CheckCircle,
  Home as HomeIcon,
  Building2,
  Loader2,
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { PHONE_DISPLAY, PHONE_HREF } from "@/const";

const WEB3FORMS_KEY =
  import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";
const FORM_DELIVERY_CONFIGURED = WEB3FORMS_KEY !== "YOUR_WEB3FORMS_ACCESS_KEY";

type FormType = "residential" | "commercial";

function SuccessMessage() {
  return (
    <div className="py-12 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <CheckCircle size={32} className="text-green-500" />
      </div>
      <h3
        className="mb-2 text-2xl font-extrabold text-gray-900"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        We got your request.
      </h3>
      <p className="mb-6 text-gray-600">
        We&apos;ll review your details and follow up. You can also reach us
        directly at{" "}
        <a
          href={PHONE_HREF}
          className="font-semibold"
          style={{ color: "var(--brand-aqua)" }}
        >
          {PHONE_DISPLAY}
        </a>
        .
      </p>
      <Link href="/">
        <span className="btn-primary">Back to Home</span>
      </Link>
    </div>
  );
}

function UnavailableFormNotice() {
  return (
    <div
      className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-center"
      role="status"
    >
      <h3
        className="text-xl font-extrabold text-gray-900"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        Online requests are being updated.
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        Please call or text to discuss your property and request an estimate.
      </p>
      <a href={PHONE_HREF} className="btn-coral mt-5">
        <Phone size={16} /> Call or Text {PHONE_DISPLAY}
      </a>
    </div>
  );
}

async function submitToWeb3Forms(payload: Record<string, string>) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      from_name: "Next Level Window Cleaning Website",
      ...payload,
    }),
  });
  return response.json();
}

function ResidentialForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    service: "",
    timeframe: "",
    bestTime: "",
    notes: "",
  });
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!FORM_DELIVERY_CONFIGURED) {
      setError(
        `Online requests are temporarily unavailable. Please call or text ${PHONE_DISPLAY}.`
      );
      return;
    }
    setLoading(true);
    setError("");
    try {
      const data = await submitToWeb3Forms({
        subject: `New Residential Estimate Request — ${form.name} — ${form.service}`,
        name: form.name,
        phone: form.phone,
        email: form.email || "Not provided",
        address: `${form.address}, ${form.city}`,
        service: form.service,
        timeframe: form.timeframe || "No preference",
        best_time_to_call: form.bestTime || "Any time",
        notes: form.notes || "None",
        lead_type: "Residential",
        botcheck: "",
      });
      if (data.success) setSubmitted(true);
      else
        setError(`Something went wrong. Please call or text ${PHONE_DISPLAY}.`);
    } catch {
      setError(`Network error. Please call or text ${PHONE_DISPLAY}.`);
    } finally {
      setLoading(false);
    }
  };

  if (!FORM_DELIVERY_CONFIGURED) return <UnavailableFormNotice />;
  if (submitted) return <SuccessMessage />;
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="form-label" htmlFor="res-name">
            Your Name *
          </label>
          <input
            required
            id="res-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="res-phone">
            Phone Number *
          </label>
          <input
            required
            id="res-phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="form-input"
            placeholder={PHONE_DISPLAY}
          />
        </div>
      </div>
      <div>
        <label className="form-label" htmlFor="res-email">
          Email Address
        </label>
        <input
          id="res-email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="form-input"
          placeholder="jane@example.com"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="form-label" htmlFor="res-address">
            Property Address *
          </label>
          <input
            required
            id="res-address"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="form-input"
            placeholder="123 Main St"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="res-city">
            City *
          </label>
          <input
            required
            id="res-city"
            name="city"
            value={form.city}
            onChange={handleChange}
            className="form-input"
            placeholder="Sanford"
          />
        </div>
      </div>
      <div>
        <label className="form-label" htmlFor="res-service">
          Service Needed *
        </label>
        <select
          required
          id="res-service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="form-input"
        >
          <option value="">Select a service...</option>
          <option value="Window Cleaning">Window Cleaning</option>
          <option value="Pressure Washing">Pressure Washing</option>
          <option value="Soft Washing">Soft Washing</option>
          <option value="Gutter Cleaning">Gutter Cleaning</option>
          <option value="Christmas Lights">Christmas Lights</option>
          <option value="Multiple Services">Multiple Services</option>
        </select>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="form-label" htmlFor="res-timeframe">
            Preferred Timeframe
          </label>
          <select
            id="res-timeframe"
            name="timeframe"
            value={form.timeframe}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">No preference</option>
            <option value="As soon as possible">As soon as possible</option>
            <option value="This week">This week</option>
            <option value="Next week">Next week</option>
            <option value="This month">This month</option>
          </select>
        </div>
        <div>
          <label className="form-label" htmlFor="res-best-time">
            Best Time to Reach You
          </label>
          <select
            id="res-best-time"
            name="bestTime"
            value={form.bestTime}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Any time</option>
            <option value="Morning (7am–12pm)">Morning (7am–12pm)</option>
            <option value="Afternoon (12pm–5pm)">Afternoon (12pm–5pm)</option>
            <option value="Evening (5pm–7pm)">Evening (5pm–7pm)</option>
          </select>
        </div>
      </div>
      <div>
        <label className="form-label" htmlFor="res-notes">
          Additional Notes
        </label>
        <textarea
          id="res-notes"
          name="notes"
          value={form.notes}
          onChange={handleChange}
          className="form-input"
          rows={3}
          placeholder="Any details about your property or specific concerns..."
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
        className="btn-coral justify-center py-3.5 text-base disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Submitting...
          </>
        ) : (
          "Send Estimate Request"
        )}
      </button>
      <p className="text-center text-xs text-gray-400">
        Your information is used to respond to this request.
      </p>
    </form>
  );
}

function CommercialForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    businessName: "",
    contactName: "",
    phone: "",
    email: "",
    address: "",
    propertyType: "",
    service: "",
    frequency: "",
    scope: "",
    schedule: "",
    notes: "",
  });
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!FORM_DELIVERY_CONFIGURED) {
      setError(
        `Online requests are temporarily unavailable. Please call or text ${PHONE_DISPLAY}.`
      );
      return;
    }
    setLoading(true);
    setError("");
    try {
      const data = await submitToWeb3Forms({
        subject: `New Commercial Bid Request — ${form.businessName} — ${form.service}`,
        business_name: form.businessName,
        contact_name: form.contactName,
        phone: form.phone,
        email: form.email || "Not provided",
        address: form.address,
        property_type: form.propertyType || "Not specified",
        service: form.service || "Not specified",
        frequency: form.frequency || "Not specified",
        scope: form.scope || "Not specified",
        preferred_schedule: form.schedule || "Not specified",
        notes: form.notes || "None",
        lead_type: "Commercial",
        botcheck: "",
      });
      if (data.success) setSubmitted(true);
      else
        setError(`Something went wrong. Please call or text ${PHONE_DISPLAY}.`);
    } catch {
      setError(`Network error. Please call or text ${PHONE_DISPLAY}.`);
    } finally {
      setLoading(false);
    }
  };

  if (!FORM_DELIVERY_CONFIGURED) return <UnavailableFormNotice />;
  if (submitted) return <SuccessMessage />;
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="form-label" htmlFor="business-name">
            Business Name *
          </label>
          <input
            required
            id="business-name"
            name="businessName"
            value={form.businessName}
            onChange={handleChange}
            className="form-input"
            placeholder="Acme Retail LLC"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="contact-name">
            Contact Name *
          </label>
          <input
            required
            id="contact-name"
            name="contactName"
            value={form.contactName}
            onChange={handleChange}
            className="form-input"
            placeholder="John Smith"
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="form-label" htmlFor="business-phone">
            Phone *
          </label>
          <input
            required
            id="business-phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="form-input"
            placeholder={PHONE_DISPLAY}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="business-email">
            Email
          </label>
          <input
            id="business-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="form-input"
            placeholder="john@business.com"
          />
        </div>
      </div>
      <div>
        <label className="form-label" htmlFor="business-address">
          Property Address *
        </label>
        <input
          required
          id="business-address"
          name="address"
          value={form.address}
          onChange={handleChange}
          className="form-input"
          placeholder="456 Commerce Blvd, Sanford, NC"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="form-label" htmlFor="property-type">
            Type of Property
          </label>
          <select
            id="property-type"
            name="propertyType"
            value={form.propertyType}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select...</option>
            <option value="Retail Storefront">Retail Storefront</option>
            <option value="Office Building">Office Building</option>
            <option value="Restaurant / Café">Restaurant / Café</option>
            <option value="Medical / Dental">Medical / Dental</option>
            <option value="Property Management">Property Management</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="form-label" htmlFor="business-service">
            Service Needed
          </label>
          <select
            id="business-service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select...</option>
            <option value="Window Cleaning">Window Cleaning</option>
            <option value="Pressure Washing">Pressure Washing</option>
            <option value="Soft Washing">Soft Washing</option>
            <option value="Multiple Services">Multiple Services</option>
          </select>
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="form-label" htmlFor="frequency">
            One-Time or Recurring?
          </label>
          <select
            id="frequency"
            name="frequency"
            value={form.frequency}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select...</option>
            <option value="One-Time">One-Time</option>
            <option value="Weekly">Weekly</option>
            <option value="Bi-Weekly">Bi-Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
        <div>
          <label className="form-label" htmlFor="scope">
            Estimated Scope
          </label>
          <input
            id="scope"
            name="scope"
            value={form.scope}
            onChange={handleChange}
            className="form-input"
            placeholder="e.g., 3 storefronts, 2-story building"
          />
        </div>
      </div>
      <div>
        <label className="form-label" htmlFor="schedule">
          Preferred Schedule
        </label>
        <input
          id="schedule"
          name="schedule"
          value={form.schedule}
          onChange={handleChange}
          className="form-input"
          placeholder="e.g., Early morning before 8am, weekdays only"
        />
      </div>
      <div>
        <label className="form-label" htmlFor="business-notes">
          Notes
        </label>
        <textarea
          id="business-notes"
          name="notes"
          value={form.notes}
          onChange={handleChange}
          className="form-input"
          rows={3}
          placeholder="Any special requirements, access notes, or questions..."
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
        className="btn-coral justify-center py-3.5 text-base disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Submitting...
          </>
        ) : (
          "Send Commercial Request"
        )}
      </button>
      <p className="text-center text-xs text-gray-400">
        Your information is used to respond to this request.
      </p>
    </form>
  );
}

export default function GetEstimate() {
  useSEO(
    "Get a Free Estimate | Next Level Window Cleaning Sanford, NC",
    "Request a free window cleaning or exterior cleaning estimate in Sanford, NC. Locally owned and fully insured.",
    "/get-a-free-estimate"
  );
  const [formType, setFormType] = useState<FormType>("residential");
  return (
    <Layout>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Get a Free Estimate", url: "/get-a-free-estimate" },
        ]}
      />
      <section className="border-b border-gray-200 bg-sky-tint py-12">
        <div className="container max-w-2xl text-center">
          <nav
            className="mb-4 flex items-center justify-center gap-1.5 text-xs text-gray-400"
            aria-label="Breadcrumb"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            <Link href="/">
              <span className="cursor-pointer hover:text-gray-600">Home</span>
            </Link>
            <span>/</span>
            <span className="text-gray-600">Get a Free Estimate</span>
          </nav>
          <h1
            className="mb-3 text-3xl font-extrabold text-gray-900 lg:text-4xl"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Get a Free Estimate
          </h1>
          <p className="mb-2 text-gray-600">
            Tell us about your property and the service you have in mind.
          </p>
          <p className="text-sm text-gray-500">
            Prefer to call?{" "}
            <a
              href={PHONE_HREF}
              className="font-semibold"
              style={{ color: "var(--brand-aqua)" }}
            >
              {PHONE_DISPLAY}
            </a>{" "}
            — call or text.
          </p>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="container max-w-2xl">
          <div
            className="mb-8 flex overflow-hidden rounded-xl border border-gray-200"
            aria-label="Estimate type"
          >
            <button
              type="button"
              onClick={() => setFormType("residential")}
              aria-pressed={formType === "residential"}
              className={`flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-bold transition-colors ${formType === "residential" ? "text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
              style={{
                fontFamily: "Manrope, sans-serif",
                backgroundColor:
                  formType === "residential" ? "var(--brand-aqua)" : undefined,
              }}
            >
              <HomeIcon size={16} /> Residential
            </button>
            <button
              type="button"
              onClick={() => setFormType("commercial")}
              aria-pressed={formType === "commercial"}
              className={`flex flex-1 items-center justify-center gap-2 border-l border-gray-200 py-3.5 text-sm font-bold transition-colors ${formType === "commercial" ? "text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
              style={{
                fontFamily: "Manrope, sans-serif",
                backgroundColor:
                  formType === "commercial" ? "var(--brand-aqua)" : undefined,
              }}
            >
              <Building2 size={16} /> Commercial
            </button>
          </div>
          {formType === "residential" ? (
            <ResidentialForm />
          ) : (
            <CommercialForm />
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-5 border-t border-gray-100 pt-6">
            {["Fully Insured", "Locally Owned", "Free Estimates"].map(item => (
              <span
                key={item}
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-500"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <CheckCircle size={13} style={{ color: "var(--brand-aqua)" }} />{" "}
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-sky-tint py-10">
        <div className="container max-w-2xl text-center">
          <p className="mb-3 text-gray-600">Rather talk to someone directly?</p>
          <a
            href={PHONE_HREF}
            className="btn-coral inline-flex px-8 py-3.5 text-base"
          >
            <Phone size={17} /> Call or Text {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </Layout>
  );
}
