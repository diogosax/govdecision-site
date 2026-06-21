"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  loginLink,
  mainNav,
  primaryCta,
} from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { LanguageSelector } from "./LanguageSelector";

export function Header() {
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

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-line bg-ivory/85 backdrop-blur-md"
          : "border-b border-transparent bg-ivory/0"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-6 sm:h-[72px] sm:px-8">
        <Logo priority className="h-7 sm:h-[30px]" />

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-plum"
                  : "text-slate hover:text-plum"
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
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSelector />
          <a
            href={loginLink.href}
            className="text-sm font-semibold text-plum/80 transition-colors hover:text-plum"
          >
            {loginLink.label}
          </a>
          <Button href={primaryCta.href} size="md" withArrow>
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-plum lg:hidden"
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
      <div
        id="mobile-menu"
        className={`lg:hidden ${menuOpen ? "block" : "hidden"}`}
      >
        <div className="border-t border-line bg-ivory px-6 pb-8 pt-4">
          <nav aria-label="Mobile" className="flex flex-col">
            {mainNav.map((item) => (
              <Link
                key={item.href}
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
              onClick={() => setMenuOpen(false)}
            >
              {primaryCta.label}
            </Button>
            <a
              href={loginLink.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-line py-3 text-center text-sm font-semibold text-plum"
            >
              {loginLink.label}
            </a>
            <div className="mt-2 flex justify-center">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
