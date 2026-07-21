import Link from "next/link";
import { games, socials } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 md:grid-cols-[1.1fr_1fr] md:pb-28 md:pt-24">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-royal">
              Trading card community
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-6xl">
              Every pull
              <br />
              deserves a home.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              The Bulk Box is where collectors and players of Pokémon, One
              Piece, Lorcana and Dragon Ball trade cards, share pulls and meet
              up at fairs across the Benelux.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/socials"
                className="rounded-full bg-navy px-7 py-3.5 font-semibold text-white shadow-lg shadow-navy/20 transition-all hover:-translate-y-0.5 hover:bg-navy-soft hover:shadow-xl hover:shadow-navy/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
              >
                Join the community
              </Link>
              <Link
                href="/events"
                className="rounded-full border border-line bg-white px-7 py-3.5 font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-navy/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
              >
                Upcoming events
              </Link>
            </div>
          </div>

          {/* Fanned cards — real 63:88 card proportions */}
          <div className="relative mx-auto h-72 w-full max-w-sm md:h-80" aria-hidden="true">
            {games.map((g, i) => {
              const rot = (i - 1.5) * 10;
              const lift = Math.abs(i - 1.5) * 18;
              return (
                <div
                  key={g.name}
                  className="foil card-ratio absolute left-1/2 top-1/2 w-32 rounded-xl shadow-2xl shadow-navy/30 transition-transform duration-500 hover:z-10 hover:scale-105 md:w-36"
                  style={{
                    background: `linear-gradient(160deg, ${g.from}, ${g.to} 80%)`,
                    transform: `translate(-50%, -50%) translateX(${(i - 1.5) * 72}px) translateY(${lift}px) rotate(${rot}deg)`,
                    zIndex: i < 2 ? i : 3 - i,
                  }}
                >
                  <img
                    src={g.card}
                    alt=""
                    className="h-full w-full rounded-xl object-cover"
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Games ────────────────────────────────────────── */}
      <section className="border-y border-line bg-ice">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              What we collect
            </h2>
            <p className="mt-3 text-muted">
              Four main games, one community. Vintage or modern, sealed or
              singles, playing or investing — everyone is welcome.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {games.map((g) => (
              <article key={g.name} className="group">
                <div
                  className="foil card-ratio rounded-xl p-1.5 shadow-lg shadow-navy/15 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-navy/25"
                  style={{
                    background: `linear-gradient(165deg, ${g.from}, ${g.to} 85%)`,
                  }}
                >
                  <img
                    src={g.card}
                    alt={`${g.cardName} card`}
                    className="h-full w-full rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-lg font-bold text-ink">
                      {g.name}
                    </h3>
                    <span className="rounded-full bg-white px-2.5 py-0.5 font-display text-[10px] font-semibold uppercase tracking-wide text-navy">
                      {g.tag}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs font-medium text-royal">
                    {g.cardName}
                  </p>
                  <p className="mt-2 hidden text-sm leading-snug text-muted md:block">
                    {g.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we do ───────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Trade",
              body: "Post your binder, browse trade stacks and make fair deals with people you actually know. No sniping, no lowballing culture.",
            },
            {
              title: "Talk",
              body: "Set releases, market moves, grading questions, pull luck. The chat runs every day across WhatsApp and Discord.",
            },
            {
              title: "Meet",
              body: "We go to conventions and card fairs together and host our own trade nights. Cards are better in person.",
            },
          ].map((f, i) => (
            <div key={f.title}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ice font-display text-lg font-bold text-navy">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">
                {f.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="foil relative overflow-hidden rounded-3xl bg-navy px-8 py-14 text-center text-white md:px-16 md:py-16">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Your bulk belongs here.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/70">
            Join the group chat, say hi and show us your latest pull. That is
            genuinely all it takes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {socials.slice(0, 2).map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 font-semibold text-navy transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Join on {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
