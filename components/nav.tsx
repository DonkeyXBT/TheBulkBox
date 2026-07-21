"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/socials", label: "Socials" },
  { href: "/events", label: "Events" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-lg text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-royal"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-9 w-9" />
          <span className="font-display text-lg font-bold tracking-tight">
            The Bulk Box
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal ${
                  active
                    ? "bg-ice text-navy"
                    : "text-muted hover:bg-ice hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/socials"
            className="ml-3 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-navy-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
          >
            Join us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl text-ink hover:bg-ice focus-visible:outline-2 focus-visible:outline-royal md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="border-t border-line bg-white px-5 pb-5 pt-2 md:hidden"
          aria-label="Main mobile"
        >
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-medium ${
                  active ? "bg-ice text-navy" : "text-muted hover:bg-ice"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
