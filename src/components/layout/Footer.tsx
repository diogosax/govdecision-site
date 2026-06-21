import Link from "next/link";
import { footerNav, loginLink } from "@/data/navigation";
import { site } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-plum text-white">
      <div className="bg-grid-light">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
            {/* Brand */}
            <div className="max-w-sm">
              <Logo variant="white" className="h-8" />
              <p className="mt-5 text-sm font-medium uppercase tracking-[0.16em] text-white/50">
                Public sector sales intelligence
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                {site.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {site.name} is a {site.parent} platform, built in{" "}
                {site.location}. {site.parentArm} supports cross-border market
                access for suppliers selling to governments.
              </p>
            </div>

            {/* Platform links */}
            <nav aria-label="Footer" className="text-sm">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                Platform
              </h3>
              <ul className="mt-4 space-y-3">
                {footerNav.map((item) => (
                  <li key={item.href}>
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
                Get started
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={loginLink.href}
                    className="text-white/75 transition-colors hover:text-white"
                  >
                    {loginLink.label}
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/75 transition-colors hover:text-white"
                  >
                    Start readiness
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
            {site.legalDisclaimer}
          </p>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {site.name}. A {site.parent} platform.
            </p>
            <p className="inline-flex items-center gap-1.5">
              Made with{" "}
              <span aria-label="love" role="img" style={{ color: "#E56A3A" }}>
                ❤
              </span>{" "}
              in Florida
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
