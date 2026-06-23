import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";
import { localePath } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { PageHero } from "@/components/marketing/PageHero";
import { CtaBand } from "@/components/marketing/CtaBand";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { site } from "@/data/site";

const factIcons: IconName[] = ["shield", "compass", "flag", "globe"];
const beliefIcons: IconName[] = ["target", "checklist", "route"];

export function CompanyView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const lp = (href: string) => localePath(locale, href);
  const t = dict.company;

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lead={t.lead}>
        <div className="grid gap-3 sm:grid-cols-2 lg:max-w-2xl lg:grid-cols-4">
          {t.facts.map((f, i) => (
            <div
              key={f.label}
              className="rounded-2xl border border-line bg-white/70 p-4"
            >
              <Icon name={factIcons[i]} size={18} className="text-coral" />
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
            eyebrow={t.ownership.eyebrow}
            title={t.ownership.title}
            lead={t.ownership.lead}
          />
          <div className="space-y-4 text-pretty leading-relaxed text-slate">
            <p>{t.ownership.p1}</p>
            <p>{t.ownership.p2}</p>
          </div>
        </div>
      </Section>

      {/* Why Sax Group built GovDecision */}
      <Section tone="surface">
        <SectionHeader
          align="center"
          eyebrow={t.why.eyebrow}
          title={t.why.title}
          lead={t.why.lead}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.why.beliefs.map((b, i) => (
            <div
              key={b.title}
              className="rounded-3xl border border-line bg-white p-6 shadow-soft"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-plum/5 text-plum">
                <Icon name={beliefIcons[i]} size={22} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-plum">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Made with love in Florida */}
      <Section tone="white">
        <Container size="narrow" className="text-center">
          <div className="mx-auto inline-flex flex-col items-center gap-4 rounded-3xl border border-line bg-surface/50 px-10 py-12">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">
              {t.madeWith.localLabelSuffix}
            </span>
            <p className="text-2xl font-bold tracking-tight text-plum">
              {t.madeWith.heading}{" "}
              <span style={{ color: "#E56A3A" }} aria-label="love" role="img">
                ❤
              </span>{" "}
              {t.madeWith.inFlorida}
            </p>
            <p className="max-w-md text-pretty text-sm leading-relaxed text-slate">
              {t.madeWith.body}
            </p>
            <Button href={lp("/contact")} withArrow className="mt-2">
              {t.madeWith.cta}
            </Button>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-slate">
            <span className="font-semibold text-plum">{t.whatsapp.prompt}</span>{" "}
            {t.whatsapp.lead}{" "}
            <TrackedLink
              href={site.whatsappUrl}
              event="cta_clicked"
              eventProps={{
                locale,
                page: "/company",
                section: "company_contact",
                cta: "whatsapp_contact",
              }}
              className="font-semibold text-plum underline-offset-4 hover:underline"
            >
              {site.whatsappNumber}
            </TrackedLink>
            .
          </p>
        </Container>
      </Section>

      <CtaBand
        eyebrow={dict.common.footer.getStartedHeading}
        title={t.finalCta.title}
        subtitle={t.finalCta.subtitle}
        primary={{ label: dict.common.cta.startReadiness, href: lp("/contact") }}
        secondary={{ label: t.finalCta.secondary, href: lp("/platform") }}
      />
    </>
  );
}
