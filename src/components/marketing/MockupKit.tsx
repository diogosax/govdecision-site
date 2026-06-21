import type { ReactNode } from "react";

/**
 * Shared building blocks for the product-style mockups.
 * All data shown is generic sample data — no real organizations or customers.
 */

/** Apple-like app window chrome. */
export function WindowFrame({
  title,
  badge,
  children,
  className = "",
}: {
  title: string;
  badge?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[1.4rem] border border-line bg-white shadow-card ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-line/80 bg-surface/70 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <span className="truncate text-xs font-semibold text-slate">
          {title}
        </span>
        {badge && (
          <span className="ml-auto rounded-full bg-plum/5 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-plum/60">
            {badge}
          </span>
        )}
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}

export function Pill({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "coral" | "plum" | "good" | "warn";
}) {
  const tones = {
    neutral: "bg-surface text-slate",
    coral: "bg-coral/10 text-coral-600",
    plum: "bg-plum/8 text-plum",
    good: "bg-emerald-50 text-emerald-700",
    warn: "bg-amber-50 text-amber-700",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/** Circular score gauge (0–100). */
export function ScoreRing({
  value,
  label,
  sublabel,
  tone = "coral",
  size = 132,
}: {
  value: number;
  label: string;
  sublabel?: string;
  tone?: "coral" | "plum";
  size?: number;
}) {
  const stroke = 11;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value));
  const offset = c - (pct / 100) * c;
  const color = tone === "coral" ? "#e56a3a" : "#2b2440";

  return (
    <div
      className="relative inline-flex shrink-0 items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#eceae4"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold tracking-tight text-plum tabular-nums">
          {label}
        </span>
        {sublabel && (
          <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
            {sublabel}
          </span>
        )}
      </div>
    </div>
  );
}

/** Horizontal progress meter. */
export function Meter({
  value,
  label,
  valueLabel,
  tone = "plum",
}: {
  value: number;
  label: string;
  valueLabel?: string;
  tone?: "plum" | "coral";
}) {
  const color = tone === "coral" ? "bg-coral" : "bg-plum";
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="font-medium text-slate">{label}</span>
        <span className="font-bold text-plum tabular-nums">
          {valueLabel ?? `${value}%`}
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-surface">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        />
      </div>
    </div>
  );
}

/** A labeled key/value field row used across mockups. */
export function FieldRow({
  label,
  value,
  emphasis = false,
}: {
  label: string;
  value: ReactNode;
  emphasis?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-2">
      <span className="text-xs font-medium uppercase tracking-wide text-slate">
        {label}
      </span>
      <span
        className={`text-right text-sm ${
          emphasis ? "font-bold text-plum" : "font-semibold text-plum/90"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

/** Small list item with a colored status dot. */
export function BlockerItem({
  children,
  tone = "warn",
}: {
  children: ReactNode;
  tone?: "warn" | "bad" | "good";
}) {
  const dot =
    tone === "bad"
      ? "bg-rose-500"
      : tone === "good"
        ? "bg-emerald-500"
        : "bg-amber-500";
  return (
    <li className="flex items-start gap-2.5 text-sm text-plum/85">
      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
      <span>{children}</span>
    </li>
  );
}
