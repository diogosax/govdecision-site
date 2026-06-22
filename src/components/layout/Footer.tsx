import Link from "next/link";
import { site } from "@/data/site";
import { Logo } from "./Logo";

export type FooterNavItem = { key: string; label: string; href: string };

export type FooterProps = {
  homeHref: string;
  nav: FooterNavItem[];
  startReadinessHref: string;
  login: { label: string; href: string };
  t: {
    tagline: string;
    blurb: string;
    platformHeading: string;
    getStartedHeading: string;
    startReadiness: string;
    legalDisclaimer: string;
    copyright: string;
    madeWith: string;
    inFlorida: string;
  };
};

export function Footer({
  homeHref,
  nav,
  startReadinessHref,
  login,
  t,
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-plum text-white">
      <div className="bg-grid-light">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
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
                  <a
                    href={login.href}
                    className="text-white/75 transition-colors hover:text-white"
                  >
                    {login.label}
                  </a>
                </li>
                <li>
                  <Link
                    href={startReadinessHref}
                    className="text-white/75 transition-colors hover:text-white"
                  >
                    {t.startReadiness}
                  </Link>
                </li>
                <li>
                  <a
                    href={`mailto:${site.contactEmail}`}
                    className="text-white/75 transition-colors hover:text-white"
                  >
                    {site.contactEmail}
                  </a>
                </li>
              </ul>
            </div>
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
