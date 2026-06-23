import type { Locale } from "@/i18n/config";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { getLegal, type LegalKind } from "@/i18n/legal";
import { site } from "@/data/site";

/** Bare, locale-less route for each document. */
const pathByKind: Record<LegalKind, string> = {
  terms: "/terms",
  privacy: "/privacy",
  compliance: "/compliance",
};

/**
 * Shared view for the public legal / compliance pages (SITE-018): Terms of Use,
 * Privacy Notice, and Compliance. Rendered by both the EN-US (`(site)`) and the
 * localized (`[locale]`) routes. Readable, not scary — a soft hero, an
 * information note, numbered section cards, and a closing contact block with the
 * GovDecision email and WhatsApp Business line. Emits conservative WebPage +
 * BreadcrumbList JSON-LD (no legal-service or affiliation claims).
 */
export function LegalView({
  locale,
  kind,
}: {
  locale: Locale;
  kind: LegalKind;
}) {
  const chrome = getLegal(locale);
  const t = chrome[kind];
  const path = pathByKind[kind];

  return (
    <>
      <WebPageJsonLd
        locale={locale}
        path={path}
        name={t.meta.title}
        description={t.meta.description}
      />
      <BreadcrumbJsonLd
        locale={locale}
        crumbs={[
          { name: "GovDecision", path: "/" },
          { name: t.breadcrumbName, path },
        ]}
      />

      {/* ------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden border-b border-line bg-surface">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-70" />
        <div
          aria-hidden
          className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(229,106,58,0.12),transparent_70%)]"
        />
        <Container size="narrow" className="relative py-16 sm:py-20">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-plum sm:text-5xl">
            {t.title}
          </h1>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate">
            {chrome.updated}
          </p>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-slate">
            {t.lead}
          </p>
          <p className="mt-8 flex items-start gap-2.5 rounded-2xl border border-line bg-white/70 p-4 text-sm leading-relaxed text-slate">
            <Icon
              name="shield"
              size={17}
              className="mt-0.5 shrink-0 text-plum/50"
            />
            {chrome.note}
          </p>
        </Container>
      </section>

      {/* --------------------------------------------------------- Sections */}
      <section className="bg-ivory py-16 sm:py-20">
        <Container size="narrow">
          <ol className="space-y-5">
            {t.sections.map((section, i) => (
              <li
                key={section.heading}
                id={`s-${i + 1}`}
                className="scroll-mt-24 rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-plum/5 text-sm font-bold text-plum">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-xl font-bold tracking-tight text-plum">
                      {section.heading}
                    </h2>
                    <div className="mt-3 space-y-3 text-pretty text-sm leading-relaxed text-slate">
                      {section.body.map((para) => (
                        <p key={para}>{para}</p>
                      ))}
                    </div>
                    {section.bullets && (
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2.5 text-sm text-slate"
                          >
                            <Icon
                              name="check"
                              size={16}
                              className="mt-0.5 shrink-0 text-coral"
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </li>
            ))}

            {/* Closing contact / reporting block */}
            <li
              id={`s-${t.sections.length + 1}`}
              className="scroll-mt-24 rounded-3xl border border-coral/30 bg-coral/5 p-6 shadow-soft sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-coral shadow-soft">
                  <Icon name="compass" size={18} />
                </span>
                <div className="min-w-0">
                  <h2 className="text-xl font-bold tracking-tight text-plum">
                    {t.contact.heading}
                  </h2>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-slate">
                    {t.contact.body}
                  </p>
                  <dl className="mt-5 space-y-3 text-sm">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <dt className="font-semibold text-plum">
                        {chrome.contactEmailLabel}:
                      </dt>
                      <dd>
                        <a
                          href={`mailto:${site.contactEmail}`}
                          className="font-medium text-plum underline-offset-4 hover:underline"
                        >
                          {site.contactEmail}
                        </a>
                      </dd>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <dt className="font-semibold text-plum">
                        {chrome.contactWhatsappLabel}:
                      </dt>
                      <dd>
                        <a
                          href={site.whatsappUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="font-medium text-plum underline-offset-4 hover:underline"
                        >
                          {site.whatsappNumber}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </li>
          </ol>
        </Container>
      </section>
    </>
  );
}
