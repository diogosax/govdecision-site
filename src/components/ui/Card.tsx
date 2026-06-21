import type { ReactNode } from "react";

/** Soft, rounded surface card with a quiet hover lift. */
export function Card({
  children,
  className = "",
  as: Tag = "div",
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  interactive?: boolean;
}) {
  return (
    <Tag
      className={`rounded-3xl border border-line bg-white shadow-soft ${
        interactive
          ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
          : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
