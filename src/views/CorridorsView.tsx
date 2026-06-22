import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";
import { localePath } from "@/i18n/routing";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { PageHero } from "@/components/marketing/PageHero";
import { WorldMap } from "@/components/marketing/WorldMap";
import { CtaBand } from "@/components/marketing/CtaBand";
import { corridors, type CorridorStatus } from "@/data/corridors";

const statusStyles: Record<CorridorStatus, string> = {
  "Active focus": "bg-coral/10 text-coral-600",
  "In development": "bg-plum/8 text-plum",
  Targeted: "bg-surface text-slate",
  Multilateral: "bg-plum text-white",
};

/** Localized continental region labels shown on the corridor cards. */
const regionName: Record<Locale, Record<string, string>> = {
  "en-US": {},
  "pt-BR": {
    "North America": "América do Norte",
    "South America": "América do Sul",
    Africa: "África",
    Multilateral: "Multilateral",
  },
  es: {
    "North America": "América del Norte",
    "South America": "América del Sur",
    Africa: "África",
    Multilateral: "Multilateral",
  },
};

export function CorridorsView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const lp = (href: string) => localePath(locale, href);
  const t = dict.corridors;

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      {/* Map on a premium plum panel */}
      <Section tone="ivory">
        <div className="relative overflow-hidden rounded-[2rem] bg-plum p-6 sm:p-10">
          <div aria-hidden className="bg-grid-light absolute inset-0 opacity-50" />
          <div className="relative">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-white/50">
              {t.globalLine}
            </p>
            <WorldMap tone="plum" className="mt-4 max-h-[520px]" />
            <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5 text-xs text-white/70">
              <li className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-coral" />
                {t.legend.active}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border-[1.5px] border-white/70" />
                {t.legend.inDev}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rotate-45 bg-coral" />
                {t.legend.multilateral}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-coral ring-4 ring-coral/30" />
                {t.legend.hub}
              </li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-slate">
          {t.coverage}
        </p>
      </Section>

      {/* How corridors combine */}
      <Section tone="white">
        <SectionHeader
          eyebrow={t.combinesEyebrow}
          title={t.combinesTitle}
          lead={t.combinesLead}
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.combines.map((c) => (
            <div
              key={c}
              className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                <Icon name="check" size={13} />
              </span>
              <span className="text-sm font-medium text-plum/90">{c}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Market cards */}
      <Section tone="surface">
        <SectionHeader
          eyebrow={t.marketsEyebrow}
          title={t.marketsTitle}
          lead={t.marketsLead}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {corridors.map((c) => {
            const loc = t.corridorById[c.id];
            return (
              <article
                key={c.id}
                className="flex flex-col rounded-3xl border border-line bg-white p-6 shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-plum">
                    <Icon
                      name={c.type === "multilateral" ? "globe" : "flag"}
                      size={18}
                      className="text-coral"
                    />
                    <h3 className="text-lg font-bold">{loc.name}</h3>
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide ${statusStyles[c.status]}`}
                  >
                    {t.statusLabels[c.status]}
                  </span>
                  <span className="text-xs text-slate">
                    {regionName[locale][c.region] ?? c.region}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate">
                  {loc.summary}
                </p>
                <ul className="mt-5 space-y-2 border-t border-line/70 pt-5">
                  {loc.focus.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-plum/85"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-white p-6">
          <p className="flex items-start gap-3 text-sm text-slate">
            <Icon name="shield" size={18} className="mt-0.5 shrink-0 text-plum/50" />
            <span>{t.coverageNote}</span>
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow={dict.common.footer.getStartedHeading}
        title={t.finalCta.title}
        subtitle={t.finalCta.subtitle}
        primary={{ label: t.finalCta.primary, href: lp("/contact") }}
        secondary={{ label: t.finalCta.secondary, href: lp("/platform") }}
      />
    </>
  );
}
