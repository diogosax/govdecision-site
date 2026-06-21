import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  // Decision / action moments
  primary:
    "bg-coral text-white shadow-soft hover:bg-coral-600 hover:shadow-card active:translate-y-px",
  // Authority on light surfaces
  secondary:
    "bg-plum text-white hover:bg-plum-700 active:translate-y-px",
  // Quiet on light surfaces
  ghost:
    "border border-line bg-white/60 text-plum hover:border-plum/30 hover:bg-white",
  // For use on dark/plum sections
  light:
    "bg-white text-plum hover:bg-ivory active:translate-y-px",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  external = false,
  type,
  disabled = false,
  ...rest
}: CommonProps & {
  href?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {children}
      {withArrow && <Icon name="arrow-right" size={18} />}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} rel="noreferrer noopener" {...rest}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type ?? "button"}
      className={classes}
      disabled={disabled}
      aria-busy={disabled || undefined}
      {...rest}
    >
      {content}
    </button>
  );
}
