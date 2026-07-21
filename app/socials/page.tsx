import type { Metadata } from "next";
import { socials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Socials",
  description:
    "Find The Bulk Box on WhatsApp, Discord, Instagram, TikTok and YouTube.",
};

export default function SocialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="max-w-xl">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-royal">
          Socials
        </p>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
          One community,
          <br />
          five places to find it.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          The group chat is where it happens — everything else is the highlight
          reel. Pick your platform.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {socials.map((s, i) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`foil group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal ${
              i === 0 ? "md:col-span-2 md:flex-row md:items-center md:gap-10" : ""
            }`}
          >
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="inline-block h-3 w-3 rounded-full"
                  style={{ backgroundColor: s.accent }}
                  aria-hidden="true"
                />
                <h2 className="font-display text-2xl font-bold text-ink">
                  {s.name}
                </h2>
              </div>
              <p className="mt-1 text-sm font-medium text-muted">{s.handle}</p>
              <p className="mt-4 max-w-md leading-relaxed text-muted">
                {s.description}
              </p>
            </div>
            <span className="mt-6 inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors group-hover:bg-navy-soft md:mt-0">
              {s.cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        ))}
      </div>

      <p className="mt-10 rounded-2xl bg-ice px-6 py-5 text-sm leading-relaxed text-muted">
        <strong className="text-ink">House rules everywhere:</strong> be
        decent, trade fair, no scams, no spam. Mods are active on every
        platform and bans carry across all of them.
      </p>
    </div>
  );
}
