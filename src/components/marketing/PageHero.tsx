import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

/** Standard inner-page hero on a soft surface. */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      <div aria-hidden className="bg-grid absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(229,106,58,0.12),transparent_70%)]"
      />
      <Container className="relative py-16 sm:py-24">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-plum sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-slate sm:text-xl">
            {lead}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
