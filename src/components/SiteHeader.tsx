"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { COMMISSION_HREF, COMMISSION_LABEL, NAV_LINKS } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-line bg-cream">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-5 py-3 sm:px-8">
        <Link
          href="/"
          aria-label="Sindy’s Dog Art, home"
          onClick={() => setOpen(false)}
        >
          <Logo size="xs" />
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
          className="-mr-3 min-h-11 px-3 text-sm font-medium uppercase tracking-[0.18em] xl:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="site-nav"
          aria-label="Main"
          className={`${
            open ? "flex" : "hidden"
          } w-full flex-col items-start gap-1 pb-3 pt-2 xl:flex xl:w-auto xl:flex-row xl:items-center xl:gap-6 xl:pb-0 xl:pt-0`}
        >
          {NAV_LINKS.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`min-h-11 content-center border-b-2 text-sm uppercase tracking-[0.12em] transition-colors hover:text-sage-deep ${
                  active ? "border-sage text-ink" : "border-transparent text-ink-soft"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <ButtonLink
            href={COMMISSION_HREF}
            onClick={() => setOpen(false)}
            className="mt-2 min-h-11 px-5 py-2 xl:ml-1 xl:mt-0 xl:px-4"
          >
            {COMMISSION_LABEL}
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
