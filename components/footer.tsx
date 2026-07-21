import Link from "next/link";
import Logo from "./logo";
import { socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Logo className="h-8 w-8 text-white" />
              <span className="font-display text-lg font-bold">The Bulk Box</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              A community for trading card collectors and players. Pokémon, One
              Piece, Lorcana, Dragon Ball — if it comes in a booster, we talk
              about it.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm">
            <div className="flex flex-col gap-3">
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-white/40">
                Pages
              </span>
              <Link href="/" className="text-white/75 hover:text-white">Home</Link>
              <Link href="/socials" className="text-white/75 hover:text-white">Socials</Link>
              <Link href="/events" className="text-white/75 hover:text-white">Events</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-white/40">
                Community
              </span>
              {socials.slice(0, 4).map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 hover:text-white"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} The Bulk Box. Not affiliated with any
          trading card publisher. All game names belong to their owners.
        </div>
      </div>
    </footer>
  );
}
