import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";
import { localePath } from "@/i18n/routing";
import { mainNav, loginHref } from "@/data/navigation";
import { SiteJsonLd } from "@/components/seo/JsonLd";
import { Header, type HeaderNavItem } from "./Header";
import { Footer } from "./Footer";
import { LocaleSuggestionBanner } from "./LocaleSuggestionBanner";

/**
 * The shared site shell (skip link + header + main + footer), wired with the
 * active locale's dictionary. Both root layouts (EN root and `[locale]`) render
 * this, so the chrome stays identical across locales while the copy and link
 * targets follow the locale.
 */
export function SiteChrome({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: ReactNode;
}) {
  const nav: HeaderNavItem[] = mainNav.map((item) => ({
    key: item.key,
    label: dict.common.nav[item.key],
    href: localePath(locale, item.href),
  }));

  const login = { label: dict.common.login, href: loginHref };

  return (
    <>
      <SiteJsonLd locale={locale} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-plum focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {dict.common.skipToContent}
      </a>
      <Header
        locale={locale}
        homeHref={localePath(locale, "/")}
        nav={nav}
        primaryCta={{
          label: dict.common.cta.startReadiness,
          href: localePath(locale, "/contact"),
        }}
        login={login}
        languageLabel={dict.common.languageSelector.label}
        languageCurrent={dict.common.languageSelector.current}
      />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer
        locale={locale}
        homeHref={localePath(locale, "/")}
        nav={nav}
        startReadinessHref={localePath(locale, "/contact")}
        login={login}
        t={dict.common.footer}
      />
      <LocaleSuggestionBanner locale={locale} />
    </>
  );
}
