/**
 * All site copy and data. Written from scratch (facts paraphrased in original
 * wording). Edit here to change what the page says without touching components.
 */
import { siteConfig } from "./site.config";

/**
 * Pricing provenance (spec §9 content-sourcing). Prices below were observed on
 * WOW!'s own pages; WOW! markets straightforward, no-teaser pricing (the rate is
 * the ongoing rate, protected by optional Price Lock for Life), so there is no
 * promotional step-up — the honest qualifier is "plus taxes, fees & surcharges".
 * Availability and exact rate vary by address; agents confirm on the call.
 */
export const PRICING_AS_OF = "Aug 2026";
export const PRICING_SOURCE = "wowway.com";

export type Plan = {
  id: string;
  tier: string;
  tagline: string;
  download: string;
  unit: string;
  price: string;
  period: string;
  /** Verbatim promo condition shown under the price (e.g. AutoPay requirement). */
  qualifier: string;
  accent: "blue" | "orange" | "gold" | "cyan";
  bestFor: string;
  perks: string[];
  featured?: boolean;
  source: string;
  observedAt: string; // YYYY-MM-DD
};

export const plans: Plan[] = [
  {
    id: "browse",
    tier: "Basic Browsing",
    tagline: "Everyday browsing, made effortless",
    download: "300",
    unit: "Mbps",
    price: "25",
    period: "/mo",
    qualifier: "with Auto Pay & Paperless Billing · plus taxes, fees & surcharges",
    accent: "cyan",
    bestFor: "Solo users, smaller homes and light streaming",
    perks: [
      "Comfortable for a couple of connected devices",
      "Smooth HD streaming and video calls",
      "No annual contract — leave whenever you like",
    ],
    source: "https://www.wowway.com/internet",
    observedAt: "2026-08-19",
  },
  {
    id: "everyday",
    tier: "Everyday Activity",
    tagline: "Work, school and streaming at once",
    download: "500",
    unit: "Mbps",
    price: "40",
    period: "/mo",
    qualifier: "with Auto Pay & Paperless Billing · plus taxes, fees & surcharges",
    accent: "blue",
    bestFor: "Busy households juggling many devices",
    perks: [
      "Plenty of headroom for a full house online",
      "4K streaming and low-lag video meetings",
      "Whole-home mesh Wi-Fi ready",
    ],
    featured: true,
    source: "https://www.wowway.com/internet",
    observedAt: "2026-08-19",
  },
  {
    id: "gig",
    tier: "Unlimited Access",
    tagline: "Serious speed for everything at once",
    download: "1",
    unit: "Gig",
    price: "80",
    period: "/mo",
    qualifier: "with Auto Pay & Paperless Billing · plus taxes, fees & surcharges",
    accent: "orange",
    bestFor: "Gamers, creators and large connected homes",
    perks: [
      "Download huge files and games in moments",
      "Handles dozens of devices without a hiccup",
      "Ideal for live streaming and cloud backups",
    ],
    source: "https://www.wowway.com/internet",
    observedAt: "2026-08-19",
  },
];

export const fiberSpeeds = ["100 Mbps", "500 Mbps", "1 Gig", "3 Gig", "5 Gig"];

export type Feature = {
  icon: string; // key into Icon component
  title: string;
  body: string;
};

export const features: Feature[] = [
  {
    icon: "contract",
    title: "No contracts, ever",
    body: "Month-to-month freedom. Change your plan or walk away anytime — no early-termination penalties hiding in the fine print.",
  },
  {
    icon: "infinity",
    title: "Truly unlimited data",
    body: "Stream, game and work as much as you want. There are no data caps and no surprise overage charges at the end of the month.",
  },
  {
    icon: "lock",
    title: "Price Lock for Life",
    body: "Add optional price protection for just $5/mo and your monthly rate stays put for as long as you keep the same speed. No creeping annual increases.",
  },
  {
    icon: "mesh",
    title: "Whole-home Wi-Fi",
    body: "A managed eero mesh system blankets every room in fast, steady signal — goodbye dead zones, hello coverage that reaches the back porch.",
  },
  {
    icon: "shield",
    title: "30-day money-back",
    body: "Give the service a real test drive. If it isn't right for you within the first month, you're covered by a satisfaction guarantee.",
  },
  {
    icon: "bolt",
    title: "Simple self-install",
    body: "For most plans WOW! ships a free, plug-and-play kit to your door, so you can get connected without waiting on a technician. Professional installation is available if you prefer.",
  },
];

export type Product = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  accent: "blue" | "orange" | "gold" | "cyan";
};

export const products: Product[] = [
  {
    id: "fiber",
    eyebrow: "Fiber Internet",
    title: "Symmetrical fiber up to 5 Gig",
    body: "Where fiber is available, uploads run just as fast as downloads. It's the sweet spot for creators, remote teams and homes that never want to think about buffering again.",
    bullets: ["Matching upload & download", "Rock-steady low latency", "Future-proof capacity"],
    accent: "blue",
  },
  {
    id: "tv",
    eyebrow: "Internet + TV",
    title: "Bundle live TV with YouTube TV",
    body: "Pair your internet with YouTube TV and add NFL Sunday Ticket — every game, every Sunday, now $240 for the season. Enjoy 100+ channels of live sports, news and shows, plus $10/mo off YouTube TV when you bundle.",
    bullets: ["NFL Sunday Ticket — now $240", "$10/mo off YouTube TV", "Watch on any screen"],
    accent: "orange",
  },
  {
    id: "mobile",
    eyebrow: "Mobile",
    title: "Wireless at a fair price on nationwide 5G",
    body: "Say hello to WOW! Mobile — add wireless lines on a reliable nationwide 5G network at a fair price, designed to pair with your home internet.",
    bullets: ["Fast nationwide 5G", "Flexible line options", "Made to bundle"],
    accent: "gold",
  },
  {
    id: "phone",
    eyebrow: "Home Phone",
    title: "Crystal-clear home phone",
    body: "Keep a dependable landline with the calling features you actually use — unlimited nationwide calling, voicemail and caller ID, all on one tidy bill.",
    bullets: ["Unlimited nationwide calls", "Keep your number", "Popular calling features"],
    accent: "cyan",
  },
];

export const steps = [
  {
    n: "01",
    title: "Call the order line",
    body:
      "Call " +
      siteConfig.phoneDisplay +
      " and reach a trained sales agent, " +
      siteConfig.hoursDisplay +
      ". No account or forms needed to get a quote.",
  },
  {
    n: "02",
    title: "Agent confirms your address",
    body: "We check what's serviceable at your exact address on WOW!'s systems and quote today's WOW! plans and promotions for your home.",
  },
  {
    n: "03",
    title: "Get connected — WOW! handles setup",
    body: "WOW! ships a self-install kit for most plans; professional installation is available for a fee (free on fiber). Your install is scheduled with WOW! on the same call.",
  },
];

export type Faq = {
  q: string;
  a: string;
};

export const faqs: Faq[] = [
  {
    // Archetype 1 — Availability (never "Yes"; coverage varies; call to confirm).
    q: "Is WOW! available at my address?",
    a: "Coverage varies by neighborhood, so the only way to be sure is a quick address check. WOW! builds and maintains its own network in select communities across eight states; call us and an agent will confirm the exact plans and speeds that reach your specific address, using WOW!'s own serviceability systems.",
  },
  {
    // Archetype 2 — Official-site disambiguation (compliance asset; string is lint-allowlisted).
    q: "Is this the official WOW! site?",
    a: "No — this site is operated by an independent authorized dealer of WOW! (WideOpenWest). We help you compare and order WOW! services by phone, but WOW! is a separate company that owns its brand and trademarks. Your service agreement and billing relationship are with WOW!, not with this dealer.",
  },
  {
    // Archetype 3 — Pricing / fees.
    q: "What does the monthly price include, and are there extra fees?",
    a: "The price you see is WOW!'s straightforward monthly rate for that speed with Auto Pay and paperless billing; taxes, fees and surcharges are additional. WOW! doesn't use teaser pricing, and you can add optional Price Lock for Life for $5/mo so your rate won't rise as long as you keep the same speed. Exact pricing is confirmed for your address when you call. Pricing shown is as of " + PRICING_AS_OF + ".",
  },
  {
    // Archetype 4 — Installation (self-install default; pro install available; via the call).
    q: "How does installation work?",
    a: "WOW! ships a self-install kit for most internet plans — it plugs in and sets up through a guided app, with no technician visit needed. If you'd rather have a professional handle it, professional installation is available for a fee (and is included free on fiber orders). Your install is scheduled with WOW! on the same call when you order.",
  },
  {
    // Archetype 5 — Contract / data.
    q: "Is there an annual contract or a data cap?",
    a: "No. WOW! internet plans are month-to-month with no annual contract and no early-termination fee, and every plan includes unlimited data with no overage charges. You can change or cancel your plan whenever you need to.",
  },
  {
    // Archetype 6 — Equipment.
    q: "What equipment do I need, and can I use my own?",
    a: "WOW!'s Whole-Home WiFi is powered by an eero system — typically two eero devices to blanket your home, with more available for larger spaces (WOW! uses TP-Link equipment on its 3 Gig and 5 Gig fiber tiers). Whether equipment is included or carries a monthly fee depends on the plan; an agent will confirm the equipment and any fee for your plan when you call.",
  },
  {
    // Archetype 7 — Support routing (REQUIRED, §1 new-orders-only): send existing customers to WOW!.
    q: "I'm already a WOW! customer — can you help with my bill, an outage, or cancelling?",
    a: "Our line handles new orders only. For billing questions, outages, account changes, moves or cancellations on an existing account, please contact WOW! directly at " + siteConfig.carrierSupportDisplay + " or through your WOW! account — they manage all existing-customer support.",
  },
  {
    // Optional — What happens when I call (3-step, hours, recording disclosure).
    q: "What happens when I call?",
    a: "You'll reach a trained sales agent on our order line (" + siteConfig.hoursDisplay + "). They confirm what's serviceable at your exact address, quote today's WOW! promotions, and — if you choose to order — place the order and schedule your installation with WOW!. Calls may be recorded for quality and training.",
  },
  {
    // Optional — Speeds.
    q: "How fast can WOW! internet go?",
    a: "Plans scale from everyday speeds up to multi-gig fiber. Where fiber is available, you can reach up to 5 Gig with symmetrical upload and download speeds. An agent will show you the fastest tier your address supports.",
  },
];

/* ---- Value-added services (§2.4) — WOW!'s real, named add-ons ------------- */
export type AddOn = {
  icon: string;
  name: string;
  body: string;
  price: string; // "Included with X" / "$5/mo" / "Ask about pricing"
};

export const addOns: AddOn[] = [
  {
    icon: "mesh",
    name: "Whole-Home WiFi powered by eero",
    body: "A managed eero mesh system — typically two devices — blankets every room in strong, steady signal, with more available for larger homes.",
    price: "Included on select plans",
  },
  {
    icon: "bolt",
    name: "WOW! Fiber Connection pack",
    body: "Day-one setup support to get your fiber connection running smoothly from the moment it's installed.",
    price: "Free on fiber",
  },
  {
    icon: "lock",
    name: "Price Lock for Life",
    body: "Optional price protection that keeps your monthly rate the same for as long as you keep the same speed — no annual increases.",
    price: "$5/mo",
  },
  {
    icon: "infinity",
    name: "Unlimited data — every plan",
    body: "Stream, game and work with no data caps and no overage charges. It's standard on every WOW! internet plan, not an upsell.",
    price: "Included",
  },
  {
    icon: "tv",
    name: "TV through WOW!'s YouTube TV offer",
    body: "Add live TV via WOW!'s YouTube TV partnership — 100+ channels on any screen, with NFL Sunday Ticket available.",
    price: "Bundle & save",
  },
  {
    icon: "shield",
    name: "30-day money-back guarantee",
    body: "Try WOW! risk-free — if it isn't right within the first 30 days, WOW!'s guarantee has you covered.",
    price: "Included",
  },
];

/* ---- Honest fine-print grid (§2.5) — FCC-label-style facts per tier ------- */
export type FineFactRow = { label: string; values: [string, string, string] };

/** Column headers align to the three internet tiers above. */
export const fineFactTiers = ["300 Mbps", "500 Mbps", "1 Gig"];

export const fineFacts: FineFactRow[] = [
  { label: "Monthly price", values: ["$25/mo", "$40/mo", "$80/mo"] },
  { label: "Promo length", values: ["No teaser pricing", "No teaser pricing", "No teaser pricing"] },
  { label: "Price after promo", values: ["Same rate", "Same rate", "Same rate"] },
  { label: "Self-install kit fee", values: ["Ask when you call", "Ask when you call", "Ask when you call"] },
  { label: "Professional install", values: ["Available for a fee", "Available for a fee", "Free on fiber"] },
  { label: "Equipment fee", values: ["Ask when you call", "Ask when you call", "Ask when you call"] },
  { label: "Typical speeds (down)", values: ["Up to 300 Mbps", "Up to 500 Mbps", "Up to 1 Gbps"] },
  { label: "Data cap", values: ["No data cap", "No data cap", "No data cap"] },
  { label: "Contract", values: ["No annual contract", "No annual contract", "No annual contract"] },
];

