import type { Metadata } from "next";
import Link from "next/link";
import { events } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Trade fairs, conventions and community meetups where The Bulk Box shows up.",
};

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="max-w-xl">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-royal">
          Events
        </p>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
          Where the binders
          <br />
          come out.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Conventions, card fairs and our own trade nights. Dates shift per
          edition, so always check the official site — and tell us in the chat
          if you are going.
        </p>
      </div>

      <div className="mt-14 flex flex-col gap-5">
        {events.map((e) => {
          const external = e.href.startsWith("http");
          const Wrapper = external ? "a" : Link;
          return (
            <Wrapper
              key={e.name}
              href={e.href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group grid gap-4 rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-lg hover:shadow-navy/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal md:grid-cols-[1fr_auto] md:items-center md:p-8"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h2 className="font-display text-xl font-bold text-ink md:text-2xl">
                    {e.name}
                  </h2>
                  <span className="rounded-full bg-ice px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-wide text-navy">
                    {e.type}
                  </span>
                  {e.meetup && (
                    <span className="rounded-full bg-gold/15 px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-wide text-[#8a6100]">
                      ★ We meet here
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm font-medium text-muted">
                  {e.location} · {e.window}
                </p>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                  {e.description}
                </p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-navy transition-colors group-hover:border-navy group-hover:bg-navy group-hover:text-white">
                {external ? "Official site" : "Get the dates"}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Wrapper>
          );
        })}
      </div>

      <div className="mt-12 rounded-3xl bg-navy px-8 py-10 text-white md:px-12">
        <h2 className="font-display text-2xl font-bold">Know a fair we missed?</h2>
        <p className="mt-2 max-w-lg text-white/70">
          This list is community-maintained. Drop new events in the Discord and
          we will add them here.
        </p>
        <Link
          href="/socials"
          className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-navy transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Open socials
        </Link>
      </div>
    </div>
  );
}
