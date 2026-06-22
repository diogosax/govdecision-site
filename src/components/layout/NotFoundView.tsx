import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/routing";
import { notFoundCopy } from "@/i18n/not-found";

/**
 * Branded 404 content (no chrome — the surrounding layout supplies the
 * GovDecision header/footer). Shared by the EN `(site)` and localized
 * `[locale]` not-found boundaries; copy + links follow the active locale.
 */
export function NotFoundView({ locale }: { locale: Locale }) {
  const t = notFoundCopy[locale];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface to-ivory">
      <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(229,106,58,0.10),transparent_70%)]"
      />
      <Container className="relative flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="text-sm font-bold tracking-[0.3em] text-coral">{t.code}</p>
        <Eyebrow className="mt-4">{t.eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-2xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-plum sm:text-5xl">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate">
          {t.body}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href={localePath(locale, "/market-access")} size="lg" withArrow>
            {t.exploreCta}
          </Button>
          <Button href={localePath(locale, "/")} variant="ghost" size="lg">
            <Icon name="arrow-right" size={16} className="rotate-180" />
            {t.homeCta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
