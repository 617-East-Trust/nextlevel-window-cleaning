import React from "react";
import { Star, MapPin } from "lucide-react";
import { GOOGLE_REVIEWS, GBP_SEARCH_URL } from "@/data/reviews";

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={15} fill="currentColor" className="text-yellow-400" />
      ))}
    </div>
  );
}

// Compact trust strip — rating + count + Google attribution, links to the listing.
export function GoogleRatingStrip({ dark = false }: { dark?: boolean }) {
  const text = dark ? "text-white" : "text-gray-900";
  const sub = dark ? "text-white/70" : "text-gray-500";
  return (
    <a
      href={GBP_SEARCH_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-full border px-5 py-2.5 transition-colors ${
        dark ? "border-white/25 bg-white/10 hover:bg-white/20" : "border-gray-200 bg-white hover:bg-gray-50 shadow-sm"
      }`}
    >
      <Stars />
      <span className={`font-extrabold text-sm ${text}`} style={{ fontFamily: "Manrope, sans-serif" }}>
        5.0
      </span>
      <span className={`text-sm ${sub}`} style={{ fontFamily: "Manrope, sans-serif" }}>
        {GOOGLE_REVIEWS.length} Google reviews — 100% five-star
      </span>
    </a>
  );
}

// One real review as a compact quote card. Pass a review id, e.g. "aguilera".
export function ReviewQuote({ id }: { id: string }) {
  const r = GOOGLE_REVIEWS.find((g) => g.id === id);
  if (!r) return null;
  return (
    <div className="service-card p-6">
      <Stars />
      <p className="text-gray-700 text-sm leading-relaxed my-4 italic">“{r.text}”</p>
      <div>
        <p className="font-bold text-gray-900 text-sm" style={{ fontFamily: "Manrope, sans-serif" }}>
          {r.author}
        </p>
        <p className="text-gray-400 text-xs flex items-center gap-1 mt-0.5">
          <MapPin size={11} /> Verified Google review
        </p>
      </div>
    </div>
  );
}

// Section block for service pages — one or two real quotes before the CTA.
export function ServiceReviews({ ids, heading = "A Word From Our Customers" }: { ids: string[]; heading?: string }) {
  return (
    <section className="py-16 bg-sky-tint">
      <div className="container">
        <div className="mb-8 text-center">
          <h2
            className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            {heading}
          </h2>
          <div className="flex justify-center mt-4">
            <GoogleRatingStrip />
          </div>
        </div>
        <div className={`grid gap-6 max-w-4xl mx-auto ${ids.length > 1 ? "sm:grid-cols-2" : "sm:max-w-md"}`}>
          {ids.map((id) => (
            <ReviewQuote key={id} id={id} />
          ))}
        </div>
      </div>
    </section>
  );
}
