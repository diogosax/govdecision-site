import type { ReactNode } from "react";

/** Small uppercase label used above section titles. */
export function Eyebrow({
  children,
  tone = "coral",
  className = "",
}: {
  children: ReactNode;
  tone?: "coral" | "plum" | "light";
  className?: string;
}) {
  const color =
    tone === "light"
      ? "text-white/70"
      : tone === "plum"
        ? "text-plum/60"
        : "text-coral";
  return (
    <span
      className={`inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] ${color} ${className}`}
    >
      <span
        aria-hidden
        className={`h-px w-6 ${tone === "light" ? "bg-white/40" : "bg-coral/50"}`}
      />
      {children}
    </span>
  );
}
