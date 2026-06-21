import type { Metadata } from "next";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { PageHero } from "@/components/marketing/PageHero";
import { PricingCards } from "@/components/marketing/PricingCards";
import { CtaBand } from "@/components/marketing/CtaBand";
import { pricingComparison, pricingNote } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Two ways to work with GovDecision: GovDecision One (platform-led, self-service) and GovDecision Assisted (service-led, with Sax Global support). Brazil (BRL) and international (USD) pricing.",
};

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-coral/10 text-coral-600">
        <Icon name="check" size={13} />
      </span>
    );
  }
  if (value === false) {
    return <span className="text-line">—</span>;
  }
  return <span className="text-sm font-semibold text-plum">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="A premium platform for serious government business."
        lead="GovDecision One is platform-led for teams that want structure and speed. GovDecision Assisted is service-led, with Sax Global support to build practical market access. Not a clipping tool — a business growth platform."
      />

      {/* Plans */}
      <Section tone="ivory">
        <PricingCards />
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate">
          {pricingNote}
        </p>
      </Section>

      {/* Comparison */}
      <Section tone="white">
        <SectionHeader
          eyebrow="Compare"
          title="What is included in each plan."
          lead="Both plans share the platform. Assisted adds Sax Global support, calibration, and executive guidance."
        />
        <div className="mt-10 overflow-hidden rounded-3xl border border-line">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-surface/70 text-sm">
                <th className="px-5 py-4 font-semibold text-plum">Capability</th>
                <th className="px-5 py-4 text-center font-semibold text-plum">
                  GovDecision One
                </th>
                <th className="px-5 py-4 text-center font-semibold text-plum">
                  <span className="inline-flex items-center gap-1.5">
                    GovDecision Assisted
                    <span className="rounded-full bg-coral px-2 py-0.5 text-[0.6rem] font-bold uppercase text-white">
                      Guided
                    </span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/70 bg-white">
              {pricingComparison.map((row) => (
                <tr key={row.capability} className="text-sm">
                  <td className="px-5 py-3.5 font-medium text-plum/90">
                    {row.capability}
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <Cell value={row.one} />
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <Cell value={row.assisted} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <CtaBand
        eyebrow="Get started"
        title="Let's scope the right plan for your company."
        subtitle="Pricing depends on your country, corridor, profile, and the level of assisted support you need. Tell us where you want to compete."
        primary={{ label: "Talk to Sax Global", href: "/contact" }}
        secondary={{ label: "Explore the platform", href: "/platform" }}
      />
    </>
  );
}
