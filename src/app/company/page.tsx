import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { PageHero } from "@/components/marketing/PageHero";
import { CtaBand } from "@/components/marketing/CtaBand";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Company",
  description:
    "GovDecision is a Sax Group platform, built in Orlando, Florida. Sax Global supports cross-border business development, internationalization, and market access for suppliers selling to governments.",
};

const facts: { icon: IconName; label: string; value: string }[] = [
  { icon: "shield", label: "Owner", value: "Sax Group" },
  { icon: "compass", label: "Cross-border arm", value: "Sax Global" },
  { icon: "flag", label: "Based in", value: "Orlando, Florida" },
  { icon: "globe", label: "Focus", value: "Global public sector sales" },
];

const beliefs = [
  {
    icon: "target" as IconName,
    title: "Decisions beat alerts",
    body: "Suppliers need to know where to compete and where not to — not another feed of low-fit notifications.",
  },
  {
    icon: "checklist" as IconName,
    title: "Readiness is the real work",
    body: "Most losses trace back to missing documents, registrations, or partners discovered too late.",
  },
  {
    icon: "route" as IconName,
    title: "Route-to-market is strategy",
    body: "Direct, distributor, partner, subcontract, consortium, or prepare first — the route changes everything.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Built by Sax Group in Florida for suppliers going global."
        lead={`${site.name} is a ${site.parent} platform, created from a simple thesis: suppliers need more than tender alerts. They need readiness, qualification, decision support, and execution structure to win government business across borders.`}
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:max-w-2xl lg:grid-cols-4">
          {facts.map((f) => (
            <div
              key={f.label}
              className="rounded-2xl border border-line bg-white/70 p-4"
            >
              <Icon name={f.icon} size={18} className="text-coral" />
              <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
                {f.label}
              </p>
              <p className="text-sm font-bold text-plum">{f.value}</p>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Ownership / context */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeader
            eyebrow="Ownership & context"
            title="A Sax Group platform, supported by Sax Global."
            lead={`${site.parent} is based in ${site.location}. ${site.parentArm}, its cross-border business arm, supports business development, internationalization, and market access for companies expanding into new countries.`}
          />
          <div className="space-y-4 text-pretty leading-relaxed text-slate">
            <p>
              {site.name} sits where software and service meet. The platform
              structures the decision and readiness process; {site.parentArm}{" "}
              adds practical, human support where market access and cross-border
              execution demand it.
            </p>
            <p>
              That combination is deliberate. Public sector sales reward
              companies that prepare with method and move with confidence — not
              those who chase every notification.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Sax Group built GovDecision */}
      <Section tone="surface">
        <SectionHeader
          align="center"
          eyebrow="Why we built it"
          title="Why Sax Group built GovDecision"
          lead="Public sector sales are fragmented, complex, and hard to navigate across borders. GovDecision exists to help suppliers transform public procurement complexity into commercial clarity."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {beliefs.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl border border-line bg-white p-6 shadow-soft"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-plum/5 text-plum">
                <Icon name={b.icon} size={22} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-plum">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Made with love in Florida */}
      <Section tone="white">
        <Container size="narrow" className="text-center">
          <div className="mx-auto inline-flex flex-col items-center gap-4 rounded-3xl border border-line bg-surface/50 px-10 py-12">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">
              {site.parent} · {site.location}
            </span>
            <p className="text-2xl font-bold tracking-tight text-plum">
              Made with{" "}
              <span style={{ color: "#E56A3A" }} aria-label="love" role="img">
                ❤
              </span>{" "}
              in Florida
            </p>
            <p className="max-w-md text-pretty text-sm leading-relaxed text-slate">
              {site.tagline} — a platform for companies that want to grow through
              government business, built with care for the people who use it.
            </p>
            <Button href="/contact" withArrow className="mt-2">
              Talk to the team
            </Button>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Grow your government business with method."
        subtitle="Start with readiness. Pursue with method. Expand across public sector markets with better decisions."
        secondary={{ label: "Explore the platform", href: "/platform" }}
      />
    </>
  );
}
