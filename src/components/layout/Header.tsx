"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import { Button } from "@/components/ui/Button";
import { trackEvent, pageFromPathname } from "@/lib/analytics/events";
import { Logo } from "./Logo";
import { LanguageSelector } from "./LanguageSelector";

export type HeaderNavItem = {
  key: string;
  label: string;
  href: string;
  /** Optional submenu entries. When present, the item renders as a small
   *  dropdown on desktop and is flattened into its children on mobile.
   *  (SITE-014: Opportunity Briefs lives under Market Access.) */
  children?: HeaderNavItem[];
};

export type HeaderProps = {
  locale: Locale;
  homeHref: string;
  nav: HeaderNavItem[];
  primaryCta: { label: string; href: string };
  login: { label: string; href: string };
  languageLabel: string;
  languageCurrent: string;
};

/**
 * Small, premium dropdown for a primary nav item that has children (SITE-014).
 * Opens on hover and on click/Enter; closes on Escape, outside click, or when
 * focus leaves the group. Mirrors the LanguageSelector popover styling.
 */
function NavDropdown({
  label,
  items,
  isActive,
}: {
  label: string;
  items: HeaderNavItem[];
  isActive: (href: string) => boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const parentActive = items.some((it) => isActive(it.href));

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const openNow = () => {
    cancelClose();
    setOpen(true);
  };
  // Brief delay so moving the pointer from trigger to panel doesn't flicker
  // closed; never closes while keyboard focus is still inside the group.
  const closeSoon = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      if (ref.current?.contains(document.activeElement)) return;
      setOpen(false);
    }, 90);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      cancelClose();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors ${
          parentActive ? "text-plum" : "text-slate hover:text-plum"
        }`}
      >
        <span className="relative">
          {label}
          {parentActive && (
            <span
              aria-hidden
              className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-coral"
            />
          )}
        </span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path
            d="m3 4.5 3 3 3-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div role="menu" className="absolute left-0 top-full z-50 min-w-[14rem] pt-2">
          <div className="overflow-hidden rounded-2xl border border-line bg-white/95 p-1.5 shadow-card backdrop-blur-md">
            {items.map((it) => (
              <Link
                key={it.key}
                href={it.href}
                role="menuitem"
                aria-current={isActive(it.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-3 py-2 text-sm transition-colors ${
                  isActive(it.href)
                    ? "bg-surface font-semibold text-plum"
                    : "text-slate hover:bg-surface/60 hover:text-plum"
                }`}
              >
                {it.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header({
  locale,
  homeHref,
  nav,
  primaryCta,
  login,
  languageLabel,
  languageCurrent,
}: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => pathname.startsWith(href);
  const page = pageFromPathname(pathname);

  const trackPrimaryCta = () =>
    trackEvent("cta_clicked", {
      locale,
      page,
      section: "header",
      cta: "start_readiness",
      href: primaryCta.href,
    });
  const trackLogin = () =>
    trackEvent("app_login_clicked", {
      locale,
      page,
      section: "header",
      href: login.href,
    });

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-line bg-ivory/85 backdrop-blur-md"
          : "border-b border-transparent bg-ivory/0"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-6 sm:h-[72px] sm:px-8">
        <Logo priority href={homeHref} className="h-7 sm:h-[30px]" />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.children && item.children.length > 0 ? (
              <NavDropdown
                key={item.key}
                label={item.label}
                items={item.children}
                isActive={isActive}
              />
            ) : (
              <Link
                key={item.key}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href) ? "text-plum" : "text-slate hover:text-plum"
                }`}
              >
                <span className="relative">
                  {item.label}
                  {isActive(item.href) && (
                    <span
                      aria-hidden
                      className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-coral"
                    />
                  )}
                </span>
              </Link>
            ),
          )}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSelector
            locale={locale}
            label={languageLabel}
            current={languageCurrent}
          />
          <a
            href={login.href}
            onClick={trackLogin}
            className="whitespace-nowrap text-sm font-semibold text-plum/80 transition-colors hover:text-plum"
          >
            {login.label}
          </a>
          <Button href={primaryCta.href} size="md" withArrow onClick={trackPrimaryCta}>
            {primaryCta.label}
          </Button>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-plum lg:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className={`lg:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="border-t border-line bg-ivory px-6 pb-8 pt-4">
          <nav aria-label="Mobile" className="flex flex-col">
            {/* Flatten submenu groups (Market Access → Market Access + Briefs)
                into a simple grouped list — no collapsible submenu on mobile. */}
            {nav
              .flatMap((item) =>
                item.children && item.children.length > 0 ? item.children : [item],
              )
              .map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex items-center justify-between border-b border-line/70 py-3.5 text-base font-medium ${
                    isActive(item.href) ? "text-coral" : "text-plum"
                  }`}
                >
                  {item.label}
                  <span aria-hidden className="text-slate">
                    &rsaquo;
                  </span>
                </Link>
              ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Button
              href={primaryCta.href}
              size="lg"
              withArrow
              className="w-full"
              onClick={() => {
                trackPrimaryCta();
                setMenuOpen(false);
              }}
            >
              {primaryCta.label}
            </Button>
            <a
              href={login.href}
              onClick={() => {
                trackLogin();
                setMenuOpen(false);
              }}
              className="rounded-full border border-line py-3 text-center text-sm font-semibold text-plum"
            >
              {login.label}
            </a>
            <div className="mt-2 flex justify-center">
              <LanguageSelector
                locale={locale}
                label={languageLabel}
                current={languageCurrent}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
