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
  /** Promo condition shown directly under the price (§3 qualifier line). */
  qualifier: string;
  /**
   * §3 step-up line. WOW! uses no-teaser pricing (the rate is the ongoing rate,
   * protected by optional Price Lock for Life), so there is no promotional
   * increase to invent — the honest step-up states the rate holds.
   */
  stepUp: string;
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
    tagline: "Great for everyday browsing",
    download: "300",
    unit: "Mbps",
    price: "25",
    period: "/mo",
    qualifier: "with Auto Pay & Paperless Billing",
    stepUp: "then the same rate · plus taxes, fees & surcharges",
    accent: "cyan",
    bestFor: "One or two people, smaller homes and light streaming",
    perks: [
      "Handles a few devices at once",
      "Smooth HD streaming and video calls",
      "No annual contract, so you can leave anytime",
    ],
    source: "https://www.wowway.com/internet",
    observedAt: "2026-08-19",
  },
  {
    id: "everyday",
    tier: "Everyday Activity",
    tagline: "Enough for work, school and streaming",
    download: "500",
    unit: "Mbps",
    price: "40",
    period: "/mo",
    qualifier: "with Auto Pay & Paperless Billing",
    stepUp: "then the same rate · plus taxes, fees & surcharges",
    accent: "blue",
    bestFor: "Busy homes with lots of devices",
    perks: [
      "Keeps up with a full house online",
      "4K streaming and lag-free video calls",
      "Works with whole-home mesh Wi-Fi",
    ],
    featured: true,
    source: "https://www.wowway.com/internet",
    observedAt: "2026-08-19",
  },
  {
    id: "gig",
    tier: "Unlimited Access",
    tagline: "Plenty of speed for a busy home",
    download: "1",
    unit: "Gig",
    price: "80",
    period: "/mo",
    qualifier: "with Auto Pay & Paperless Billing",
    stepUp: "then the same rate · plus taxes, fees & surcharges",
    accent: "orange",
    bestFor: "Gamers, creators and larger connected homes",
    perks: [
      "Big files and games download fast",
      "Runs dozens of devices at once",
      "Great for live streaming and cloud backups",
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
    title: "No contracts",
    body: "Every plan is month-to-month. Change it or cancel anytime, with no early-termination fees buried in the fine print.",
  },
  {
    icon: "infinity",
    title: "Unlimited data",
    body: "Use as much as you want. There are no data caps and no overage charges at the end of the month.",
  },
  {
    icon: "lock",
    title: "Price Lock for Life",
    body: "For an extra $5 a month, your rate stays the same for as long as you keep the same speed. No yearly increases to worry about.",
  },
  {
    icon: "mesh",
    title: "Whole-home Wi-Fi",
    body: "A managed eero mesh system covers every room with a strong, steady signal, right out to the back porch.",
  },
  {
    icon: "shield",
    title: "30-day money-back",
    body: "Give it a real try. If WOW! isn't right for you in the first month, the satisfaction guarantee has you covered.",
  },
  {
    icon: "bolt",
    title: "Simple self-install",
    body: "For most plans, WOW! ships a free plug-and-play kit to your door, so you're not waiting on a technician. Prefer a pro? Professional installation is available too.",
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
    body: "Where fiber's available, your uploads are as fast as your downloads. That's a real difference if you work from home, make content, or just never want to see a buffering spinner again.",
    bullets: ["Uploads as fast as downloads", "Steady, low latency", "Room to grow"],
    accent: "blue",
  },
  {
    id: "tv",
    eyebrow: "Internet + TV",
    title: "Bundle live TV with YouTube TV",
    body: "Add live TV with YouTube TV, plus NFL Sunday Ticket for every game on Sunday (now $240 for the season). You get 100+ channels of sports, news and shows, and $10 a month off YouTube TV when you bundle.",
    bullets: ["NFL Sunday Ticket — now $240", "$10/mo off YouTube TV", "Watch on any screen"],
    accent: "orange",
  },
  {
    id: "mobile",
    eyebrow: "Mobile",
    title: "Wireless at a fair price on nationwide 5G",
    body: "Add WOW! Mobile lines on a reliable nationwide 5G network at a fair price, built to pair with your home internet.",
    bullets: ["Nationwide 5G", "Flexible line options", "Made to bundle"],
    accent: "gold",
  },
  {
    id: "phone",
    eyebrow: "Home Phone",
    title: "A reliable home phone",
    body: "Keep a dependable landline with the features you actually use: unlimited nationwide calling, voicemail and caller ID, all on one bill.",
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
    body: "A managed eero mesh system (usually two devices) covers every room with a strong, steady signal. Add more for a larger home.",
    price: "Included on select plans",
  },
  {
    icon: "bolt",
    name: "WOW! Fiber Connection pack",
    body: "Setup help on day one, so your fiber connection runs smoothly from the start.",
    price: "Free on fiber",
  },
  {
    icon: "lock",
    name: "Price Lock for Life",
    body: "Keeps your monthly rate the same for as long as you keep the same speed. No yearly increases.",
    price: "$5/mo",
  },
  {
    icon: "infinity",
    name: "Unlimited data on every plan",
    body: "No data caps and no overage charges. It comes standard on every WOW! internet plan, not as an add-on.",
    price: "Included",
  },
  {
    icon: "tv",
    name: "TV through WOW!'s YouTube TV offer",
    body: "Live TV through WOW!'s YouTube TV offer: 100+ channels on any screen, with NFL Sunday Ticket available.",
    price: "Bundle & save",
  },
  {
    icon: "shield",
    name: "30-day money-back guarantee",
    body: "Try WOW! for 30 days. If it's not right for you, the guarantee has you covered.",
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

