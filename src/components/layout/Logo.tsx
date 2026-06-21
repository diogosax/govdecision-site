import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

/**
 * Real GovDecision wordmark (Deep Civic Plum + Strategic Coral), extracted from
 * the brand SVG to an optimizable PNG. The `white` variant knocks the artwork
 * out to white for use on the dark plum footer — the same real logo, reversed.
 */
export function Logo({
  variant = "color",
  className = "",
  priority = false,
  href = "/",
}: {
  variant?: "color" | "white";
  className?: string;
  priority?: boolean;
  href?: string | null;
}) {
  const img = (
    <Image
      src="/brand/govdecision-logo.png"
      alt={`${site.name} — ${site.positioning}`}
      width={386}
      height={70}
      priority={priority}
      className={`h-full w-auto ${
        variant === "white" ? "[filter:brightness(0)_invert(1)]" : ""
      }`}
    />
  );

  const wrapper = `inline-flex items-center ${className}`;

  if (href === null) {
    return <span className={wrapper}>{img}</span>;
  }

  return (
    <Link
      href={href}
      className={`${wrapper} rounded-md transition-opacity hover:opacity-80`}
      aria-label={`${site.name} home`}
    >
      {img}
    </Link>
  );
}
