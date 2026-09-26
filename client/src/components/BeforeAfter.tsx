// BeforeAfter.tsx — accessible before/after comparison
import { useId, useRef, useState } from "react";
import { ArrowLeftRight } from "lucide-react";

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
  /** Aspect ratio as a CSS value, e.g. "4/3" or "16/9". Defaults to "4/3" */
  aspectRatio?: string;
}

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
  alt = "Before and after comparison",
  aspectRatio = "4/3",
}: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const instructionsId = useId();

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl select-none shadow-lg"
      style={{ aspectRatio }}
      role="group"
      aria-label={alt}
    >
      <img
        src={afterSrc}
        alt={`${alt} — ${afterLabel.toLowerCase()}`}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeSrc}
          alt={`${alt} — ${beforeLabel.toLowerCase()}`}
          className="absolute inset-0 h-full max-w-none object-cover"
          style={{
            width: containerRef.current
              ? `${containerRef.current.offsetWidth}px`
              : "100%",
          }}
          draggable={false}
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 top-0 z-10 w-0.5 bg-white shadow-md"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      />
      <div
        className="pointer-events-none absolute top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl"
        style={{ left: `${position}%` }}
      >
        <ArrowLeftRight
          size={18}
          style={{ color: "var(--brand-aqua)" }}
          strokeWidth={2.5}
        />
      </div>
      <div className="pointer-events-none absolute left-3 top-3 z-10">
        <span
          className="rounded-full bg-black/55 px-2.5 py-1 text-xs font-bold text-white"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {beforeLabel}
        </span>
      </div>
      <div className="pointer-events-none absolute right-3 top-3 z-10">
        <span
          className="rounded-full px-2.5 py-1 text-xs font-bold text-white"
          style={{
            backgroundColor: "var(--brand-aqua)",
            fontFamily: "Manrope, sans-serif",
          }}
        >
          {afterLabel}
        </span>
      </div>
      <p id={instructionsId} className="sr-only">
        Use the left and right arrow keys to compare the before and after
        images.
      </p>
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={event => setPosition(Number(event.target.value))}
        aria-label={`${beforeLabel} and ${afterLabel} comparison position`}
        aria-describedby={instructionsId}
        className="absolute inset-0 z-20 h-full w-full cursor-col-resize opacity-0"
      />
      {position === 50 && (
        <div className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2">
          <span
            className="rounded-full bg-black/45 px-3 py-1 text-xs font-semibold text-white"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Drag or use arrow keys to compare
          </span>
        </div>
      )}
    </div>
  );
}
