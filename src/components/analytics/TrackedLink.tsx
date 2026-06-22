"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import {
  trackEvent,
  type AnalyticsEventName,
  type AnalyticsProperties,
} from "@/lib/analytics/events";

/**
 * Client wrapper for tracked text links. Renders a Next.js `<Link>` for
 * internal routes and a real `<a>` for external/mailto/tel targets, firing a
 * sanitized analytics event on click. Used for plain (non-Button) links such as
 * the footer/header "Log in" link.
 */
type TrackedLinkProps = {
  href: string;
  event: AnalyticsEventName;
  eventProps?: AnalyticsProperties;
  /** Force an external anchor. Auto-detected from the href when omitted. */
  external?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">;

function isExternalHref(href: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(href) || href.startsWith("#");
}

export function TrackedLink({
  href,
  event,
  eventProps,
  external,
  className,
  children,
  ...rest
}: TrackedLinkProps) {
  const handleClick = () => {
    trackEvent(event, eventProps);
  };

  if (external ?? isExternalHref(href)) {
    return (
      <a
        href={href}
        className={className}
        rel="noreferrer noopener"
        onClick={handleClick}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
