import { Button } from "@/components/ui/Button";
import { TrackedButton } from "@/components/analytics/TrackedButton";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type {
  AnalyticsEventName,
  AnalyticsProperties,
} from "@/lib/analytics/events";

/**
 * A CTA link. When `event` is provided the button is tracked (rendered through
 * the `TrackedButton` client wrapper); otherwise it stays a plain server
 * `Button`, so existing untracked usages keep working unchanged.
 */
type CtaLink = {
  label: string;
  href: string;
  event?: AnalyticsEventName;
  eventProps?: AnalyticsProperties;
};

export function CtaBand({
  eyebrow,
  title,
  subtitle,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  primary: CtaLink;
  secondary?: CtaLink | null;
}) {
  // Absolute (http/https) hrefs — e.g. the GovDecision app login — render as
  // real external anchors instead of client-routed links.
  const isExternal = (href: string) => /^https?:\/\//.test(href);

  return (
    <section className="bg-ivory py-12 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-plum px-6 py-14 text-center sm:px-12 sm:py-20">
          <div aria-hidden className="bg-grid-light absolute inset-0 opacity-60" />
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(229,106,58,0.35),transparent_70%)]"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
            <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-white/70">
              {subtitle}
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              {primary.event ? (
                <TrackedButton
                  href={primary.href}
                  external={isExternal(primary.href)}
                  size="lg"
                  withArrow
                  event={primary.event}
                  eventProps={primary.eventProps}
                >
                  {primary.label}
                </TrackedButton>
              ) : (
                <Button
                  href={primary.href}
                  external={isExternal(primary.href)}
                  size="lg"
                  withArrow
                >
                  {primary.label}
                </Button>
              )}
              {secondary &&
                (secondary.event ? (
                  <TrackedButton
                    href={secondary.href}
                    external={isExternal(secondary.href)}
                    variant="light"
                    size="lg"
                    event={secondary.event}
                    eventProps={secondary.eventProps}
                  >
                    {secondary.label}
                  </TrackedButton>
                ) : (
                  <Button
                    href={secondary.href}
                    external={isExternal(secondary.href)}
                    variant="light"
                    size="lg"
                  >
                    {secondary.label}
                  </Button>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
