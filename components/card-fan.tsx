import { games } from "@/lib/data";

/* Fanned hand of the four community games' signature cards,
   at real 63:88 trading-card proportions. */
export default function CardFan({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
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
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
}
