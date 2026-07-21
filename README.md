# The Bulk Box

Community website for The Bulk Box — a trading card community for Pokémon, One Piece, Lorcana and Dragon Ball collectors.

Built with Next.js 15, React 19 and Tailwind CSS 4.

## Pages

- `/` — home: hero, the four games, what the community does
- `/socials` — WhatsApp, Discord, Instagram, TikTok, YouTube links
- `/events` — trade fairs, conventions and community meetups

## Editing content

All community content lives in one file: [`lib/data.ts`](lib/data.ts).

- **Social links** — replace the placeholder `href` values with your real
  WhatsApp invite, Discord invite and profile URLs.
- **Events** — add or remove events in the `events` array; each entry takes a
  name, location, date window, description and link.
- **Games** — the `games` array drives both the hero card fan and the
  "What we collect" grid.

## Development

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
```

## Deployment

Deployed on Vercel. Pushes to `main` deploy automatically once the repo is
connected to a Vercel project.
