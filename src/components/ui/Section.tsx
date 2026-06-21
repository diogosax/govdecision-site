import type { ReactNode } from "react";
import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";

type Tone = "ivory" | "surface" | "white" | "plum";

const tones: Record<Tone, string> = {
  ivory: "bg-ivory text-plum",
  surface: "bg-surface text-plum",
  white: "bg-white text-plum",
  plum: "bg-plum text-white",
};

export function Section({
  children,
  tone = "ivory",
  className = "",
  size = "default",
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  size?: "default" | "narrow" | "wide";
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${tones[tone]} ${className}`}>
      <Container size={size}>{children}</Container>
    </section>
  );
}

/** Standardized section heading block: eyebrow + title + optional lead. */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "default",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "light";
  className?: string;
}) {
  const isLight = tone === "light";
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start"
      } ${align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && (
        <Eyebrow tone={isLight ? "light" : "coral"}>{eyebrow}</Eyebrow>
      )}
      <h2
        className={`text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl ${
          isLight ? "text-white" : "text-plum"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`text-pretty text-lg leading-relaxed ${
            isLight ? "text-white/70" : "text-slate"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
