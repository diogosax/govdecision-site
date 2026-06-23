import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { site } from "@/data/site";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { Logo } from "./Logo";

export type FooterNavItem = { key: string; label: string; href: string };

export type FooterProps = {
  locale: Locale;
  homeHref: string;
  nav: FooterNavItem[];
  /** Legal / compliance links (Terms · Privacy · Compliance) — SITE-018. */
  legal: FooterNavItem[];
  /** WhatsApp Business contact line — SITE-018. */
  whatsapp: { label: string; number: string; href: string };
  startReadinessHref: string;
  login: { label: string; href: string };
  t: {
    tagline: string;
    blurb: string;
    platformHeading: string;
    getStartedHeading: string;
    startReadiness: string;
    legalHeading: string;
    legalDisclaimer: string;
    copyright: string;
    madeWith: string;
    inFlorida: string;
  };
};

export function Footer({
  locale,
  homeHref,
  nav,
  legal,
  whatsapp,
  startReadinessHref,
  login,
  t,
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-plum text-white">
      <div className="bg-grid-light">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">
            {/* Brand */}
            <div className="max-w-sm">
              <Logo variant="white" href={homeHref} className="h-8" />
              <p className="mt-5 text-sm font-medium uppercase tracking-[0.16em] text-white/50">
                {t.tagline}
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                {site.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {t.blurb}
              </p>
            </div>

            {/* Platform links */}
            <nav aria-label="Footer" className="text-sm">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                {t.platformHeading}
              </h3>
              <ul className="mt-4 space-y-3">
                {nav.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className="text-white/75 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Account / contact */}
            <div className="text-sm">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                {t.getStartedHeading}
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <TrackedLink
                    href={login.href}
                    event="app_login_clicked"
                    eventProps={{
                      locale,
                      section: "footer",
                      href: login.href,
                    }}
                    className="text-white/75 transition-colors hover:text-white"
                  >
                    {login.label}
                  </TrackedLink>
                </li>
                <li>
                  <TrackedLink
                    href={startReadinessHref}
                    event="cta_clicked"
                    eventProps={{
                      locale,
                      section: "footer",
                      cta: "start_readiness",
                      href: startReadinessHref,
                    }}
                    className="text-white/75 transition-colors hover:text-white"
                  >
                    {t.startReadiness}
                  </TrackedLink>
                </li>
                <li>
                  <a
                    href={`mailto:${site.contactEmail}`}
                    className="text-white/75 transition-colors hover:text-white"
                  >
                    {site.contactEmail}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsapp.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-white/75 transition-colors hover:text-white"
                  >
                    {whatsapp.label}: {whatsapp.number}
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal / compliance */}
            <nav aria-label="Legal" className="text-sm">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                {t.legalHeading}
              </h3>
              <ul className="mt-4 space-y-3">
                {legal.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className="text-white/75 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Legal disclaimer */}
          <p className="mt-14 max-w-3xl text-xs leading-relaxed text-white/45">
            {t.legalDisclaimer}
          </p>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {site.name}. {t.copyright}
            </p>
            <p className="inline-flex items-center gap-1.5">
              {t.madeWith}{" "}
              <span aria-label="love" role="img" style={{ color: "#E56A3A" }}>
                ❤
              </span>{" "}
              {t.inFlorida}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
