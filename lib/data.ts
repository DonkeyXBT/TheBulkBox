// ── Community links ─────────────────────────────────────────────
// Replace each href with the real invite / profile URL.
export const socials = [
  {
    name: "WhatsApp",
    handle: "Community group chat",
    description:
      "The fastest way to reach the group. Daily pulls, quick trades and meetup planning.",
    href: "https://chat.whatsapp.com/",
    cta: "Join the group",
    accent: "#25D366",
  },
  {
    name: "Discord",
    handle: "The Bulk Box server",
    description:
      "Organised channels per game, trade listings, price talk and voice rooms on pack-opening nights.",
    href: "https://discord.gg/",
    cta: "Join the server",
    accent: "#5865F2",
  },
  {
    name: "Instagram",
    handle: "@thebulkbox",
    description:
      "Pull highlights, collection showcases and event photos from the community.",
    href: "https://instagram.com/",
    cta: "Follow us",
    accent: "#E1306C",
  },
  {
    name: "TikTok",
    handle: "@thebulkbox",
    description:
      "Pack openings, top pulls of the week and quick market takes.",
    href: "https://tiktok.com/",
    cta: "Follow us",
    accent: "#0a1b3d",
  },
  {
    name: "YouTube",
    handle: "The Bulk Box",
    description:
      "Longer box breaks, set reviews and event recaps when there is something worth watching.",
    href: "https://youtube.com/",
    cta: "Subscribe",
    accent: "#FF0000",
  },
] as const;

// ── Games we collect ────────────────────────────────────────────
// Card images are hotlinked from official / community card databases.
export const games = [
  {
    name: "Pokémon",
    since: "1996",
    tag: "The classic",
    note: "From vintage WOTC to the newest sets — the heart of the community.",
    from: "#fde047",
    to: "#3b82f6",
    card: "https://images.pokemontcg.io/base1/58_hires.png",
    cardName: "Pikachu — Base Set",
  },
  {
    name: "One Piece",
    since: "2022",
    tag: "Fast riser",
    note: "Leaders, alt arts and a market that never sits still.",
    from: "#ef4444",
    to: "#0f2e64",
    card: "https://static.dotgg.gg/onepiece/card/ST01-001.webp",
    cardName: "Monkey.D.Luffy — ST01",
  },
  {
    name: "Lorcana",
    since: "2023",
    tag: "New ink",
    note: "Disney's TCG — enchanted rares and a friendly play scene.",
    from: "#a78bfa",
    to: "#f5b01b",
    card: "https://cards.lorcast.io/card/digital/large/crd_7a1dc3b9b23041a78c7e1b46ff4a2f2c.avif",
    cardName: "Buzz Lightyear — Space Ranger",
  },
  {
    name: "Dragon Ball",
    since: "2017",
    tag: "Power scaling",
    note: "Fusion World and Masters — SCRs and god rares welcome.",
    from: "#fb923c",
    to: "#dc2626",
    card: "https://www.dbs-cardgame.com/fw/images/cards/card/en/FB01-001_f.webp",
    cardName: "Son Goku — FB01 Leader",
  },
] as const;

// ── Events & trade fairs ────────────────────────────────────────
// Community-maintained list. Dates change per edition — always
// check the official site before travelling.
export const events = [
  {
    name: "Dutch Comic Con",
    location: "Jaarbeurs, Utrecht (NL)",
    window: "Spring & winter editions",
    type: "Convention",
    description:
      "The biggest pop-culture convention in the Netherlands. Large TCG vendor area — good hunting for singles and sealed.",
    href: "https://www.dutchcomiccon.com/",
    meetup: true,
  },
  {
    name: "Heroes Made in Asia",
    location: "Evenementenhal, Gorinchem (NL)",
    window: "Usually autumn",
    type: "Convention",
    description:
      "Anime and Asian pop-culture fair with a strong One Piece and Dragon Ball vendor presence.",
    href: "https://madeinasia.nl/",
    meetup: true,
  },
  {
    name: "Comic Con Brussels",
    location: "Brussels Expo (BE)",
    window: "Usually spring",
    type: "Convention",
    description:
      "Belgium's largest comic convention. Growing card corner and an easy train ride for the Benelux crew.",
    href: "https://www.comicconbrussels.com/",
    meetup: false,
  },
  {
    name: "Card & Collectible fairs",
    location: "Various cities (NL / BE / DE)",
    window: "Monthly, all year",
    type: "Trade fair",
    description:
      "Dedicated card markets — rows of binders and display cases. We share dates in the WhatsApp group as they are announced.",
    href: "/socials",
    meetup: true,
  },
  {
    name: "Bulk Box trade nights",
    location: "Rotating, announced in Discord",
    window: "Every few weeks",
    type: "Community",
    description:
      "Our own meetups. Bring your binder, your trade stack and your worst pulls for show and tell.",
    href: "/socials",
    meetup: true,
  },
] as const;
