/**
 * All site copy and data (spec §9 content-sourcing). Every price, plan name and
 * promo carries a `source` URL and `observedAt` date. Figures that could NOT be
 * confirmed on wowway.com's public pages (per-tier prices are address-gated) use
 * "Ask when you call" / null-price rather than a guess.
 *
 * Re-scraped from wowway.com on 2026-08-19. Confirmed on WOW!'s own pages:
 *   - Cable Internet 300 Mbps = $25/mo (wowway.com/internet)
 *   - Fiber Internet starts at $40/mo, up to 5 Gig (wowway.com/fiber-internet)
 *   - Paperless Billing: $4/mo Paper Statement Fee if not enrolled
 *   - VISA Prepaid Reward Card: qualifying speed + 90 days good standing + valid email
 *   - Fiber: Free Professional Installation for new customers (limited-time)
 *   - Mobile tiers 1GB/3GB/8GB/Unlimited from $15/mo per line, $10/mo bundle discount, no contract, 5G
 *   - WOW! Home Phone $9/mo (bundled): Unlimited LOCAL calling + 100 min long distance
 *     ($0.05/min after), caller ID, call forwarding, robocall blocking, 3-way calling
 */
import { siteConfig } from "./site.config";

export const PRICING_AS_OF = "Aug 2026";
export const PRICING_SOURCE = "wowway.com";
export const OBSERVED_AT = "2026-08-19";

const SRC = {
  internet: "https://www.wowway.com/internet",
  internetDeals: "https://www.wowway.com/internet-deals-and-packages",
  fiberDeals: "https://www.wowway.com/fiber-internet-deals-and-packages",
  mobile: "https://www.wowway.com/phone/mobile",
  phone: "https://www.wowway.com/phone",
  phoneHome: "https://www.wowway.com/phone/home",
  tv: "https://www.wowway.com/wow/tv/channel-lineups",
  wholeHomeWifi: "https://www.wowway.com/internet/whole-home-wifi",
  home: "https://www.wowway.com/",
} as const;

// "Unlimited data / No data caps" is a live, carrier-published claim on WOW!'s
// homepage (SRC.home, verified 2026-08-19) — restored to the plan cards, hero
// chips and trust strip after an earlier precautionary removal.

export type Plan = {
  id: string;
  tier: string;
  tagline: string;
  download: string;
  unit: string;
  /** Base monthly price; "" = address-gated, render nullNote instead (§3). */
  price: string;
  period: string;
  /** Render the price as "from $X" for a starting/lead price. */
  priceFrom?: boolean;
  /** Shown when price is "" (gated). */
  nullNote?: string;
  /** §3 qualifier line — WOW!'s real condition. */
  qualifier: string;
  /** §3 step-up line. WOW! uses no promotional step-up; taxes/fees noted here. */
  stepUp: string;
  accent: "blue" | "orange" | "gold" | "cyan";
  bestFor: string;
  perks: string[];
  source: string;
  observedAt: string;
};

// Internet plans, WOW!'s real speed-based product names. Only the entry price
// ($25 / 300 Mbps) and the fiber start ($40) are confirmed on public pages;
// higher cable tiers are address-gated → null price ("Call for today's rate").
export const plans: Plan[] = [
  {
    id: "cable-300",
    tier: "Internet 300 Mbps",
    tagline: "WOW! cable internet — a solid everyday plan",
    download: "300",
    unit: "Mbps",
    price: "25",
    period: "/mo",
    qualifier: "Starting price · AutoPay discount available",
    stepUp: "plus taxes, fees & surcharges",
    accent: "cyan",
    bestFor: "One or two people, smaller homes and everyday streaming",
    perks: [
      "Handles a few devices at once",
      "Smooth HD streaming and video calls",
      "Unlimited data — no data caps",
      "No annual contract, so you can leave anytime",
    ],
    source: SRC.internet,
    observedAt: OBSERVED_AT,
  },
  {
    id: "cable-gig",
    tier: "Internet 1.2 Gig",
    tagline: "WOW! cable internet — for busier homes",
    download: "1.2",
    unit: "Gig",
    price: "105",
    period: "/mo",
    qualifier: "This is what you'll pay · AutoPay discount available",
    stepUp: "plus taxes, fees & surcharges",
    accent: "blue",
    bestFor: "Busy homes with lots of devices online at once",
    perks: [
      "1,200 Mbps down · 48 Mbps up",
      "22 ms typical latency",
      "Unlimited data — no data caps",
    ],
    // Source: WOW!'s FCC Broadband Facts label — Unique Plan Identifier
    // F0018579375MP24DATA12105AA. Internet 1.2 Gig, 1200 Mbps down / 48 up,
    // 22 ms typical latency, $105/mo fixed (non-introductory) rate, unlimited data,
    // professional install $99.00 / self-install activation $10.00, $4/mo paper
    // statement fee. (This label also corroborates the site-wide $4 Paperless figure.)
    source: "https://broadband-labels.wowway.com/F0018579375MP24DATA12105AA.html",
    observedAt: OBSERVED_AT,
  },
  {
    id: "fiber",
    tier: "WOW! Fiber",
    tagline: "Symmetrical fiber, up to 5 Gig where available",
    download: "5",
    unit: "Gig",
    price: "40",
    period: "/mo",
    priceFrom: true,
    qualifier: "starting price · varies by speed & address · AutoPay discount available",
    stepUp: "plus taxes, fees & surcharges",
    accent: "orange",
    bestFor: "Gamers, creators and homes that want uploads to match downloads",
    perks: [
      "Uploads as fast as downloads",
      "Unlimited data — no data caps",
      "Free professional installation — a $100 value (limited time)",
      "Speeds up to 5 Gig where fiber reaches you",
    ],
    // "Free Professional Installation ($100 value)" is stated on WOW!'s fiber
    // page (SRC.fiberDeals, verified 2026-08-19).
    source: SRC.fiberDeals,
    observedAt: OBSERVED_AT,
  },
];

export const fiberSpeeds = ["100 Mbps", "500 Mbps", "1 Gig", "3 Gig", "5 Gig"];

export type Feature = {
  icon: string;
  title: string;
  body: string;
};

// "Why WOW!" — only claims WOW! actually makes on its own pages: no contracts,
// self-install, price lock, whole-home WiFi, money-back, and unlimited data
// ("Unlimited Data / No data caps," stated on WOW!'s homepage, SRC.home).
export const features: Feature[] = [
  {
    icon: "contract",
    title: "No contracts",
    body: "Every plan is month-to-month. Change it or cancel anytime, with no early-termination fees buried in the fine print.",
  },
  {
    icon: "bolt",
    title: "Self-install kit included",
    body: "For most plans, WOW! ships a free plug-and-play kit to your door, so you're not waiting on a technician. Prefer a pro? Professional installation is available too.",
  },
  {
    icon: "lock",
    title: "Price Lock for Life",
    body: "For an extra $5 a month, your rate stays the same for as long as you keep the same speed. No yearly increases to worry about.",
  },
  {
    icon: "mesh",
    title: "Whole-Home WiFi",
    body: "Add WOW!'s Whole-Home WiFi for $9.99/mo and a managed eero-style mesh covers every room with a strong, steady signal.",
  },
  {
    icon: "shield",
    title: "30-day money-back",
    body: "Give it a real try. If WOW! isn't right for you in the first month, the satisfaction guarantee has you covered.",
  },
  {
    icon: "infinity",
    title: "Unlimited data",
    body: "Every WOW! internet plan comes with unlimited data and no data caps — stream, game and work from home as much as you want.",
  },
];

export type Product = {
  id: string;
  /** Service line — drives which standalone section (§2.3) the card renders in. */
  line: "tv" | "phone";
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  /** Small starting-price note under the card, when confirmed. */
  priceNote?: string;
  /** Small label shown above the §3 lockup (e.g. "Bundle savings"). */
  priceLabel?: string;
  /** §3 lockup data — real price or null-price fallback. */
  lockup?: { price?: string; period?: string; qualifier?: string; nullNote?: string; priceFrom?: boolean };
  /** Partner trademark attribution line (§7.5), when applicable. */
  trademark?: string;
  /** Image basename in /img (defaults to bundle-<id>); set to reuse an image. */
  image?: string;
  accent: "blue" | "orange" | "gold" | "cyan";
  source: string;
  observedAt: string;
};

// Other service lines, §2.3 order after Internet: TV, then Mobile, then Home
// Phone. WOW! offers TWO real TV options, both built below:
//   1. WOW! TV — its OWN digital cable product (via WOW! tv+ / Ultra TV box).
//   2. YouTube TV — a streaming partnership.
//
// TV CONTRADICTION RESOLVED (re-verified 2026-08-19, direct from wowway.com):
// the §6-matrix note that WOW! TV was decommissioned ~June 30 2026 is OUTDATED.
// WOW! TV cable is still ACTIVE — wowway.com maintains per-market channel lineups,
// references "Digital Cable customers", a live WOW! tv+ product page, tv+ boxes at
// $10/box/mo, Cloud DVR (50/100/200-hr), OnDemand and premium channels. New-customer
// marketing steers to YouTube TV, but WOW! TV cable is a real offering. Package
// PRICES and channel counts are address-gated (offers.wowway.com per market) and
// not publicly published, so this card uses the §2.3 null-price fallback — no
// invented numbers.
// Rendered as standalone per-line sections (§2.3): a TV section (wow-tv + tv)
// and a Home Phone section (phone + phone-plus). Mobile is its own section too,
// built from the `mobile` object below (not this array).
export const products: Product[] = [
  {
    id: "wow-tv",
    line: "tv",
    eyebrow: "TV — WOW! cable",
    title: "WOW! TV, delivered on the WOW! tv+ box",
    body: "WOW!'s own digital cable TV, on the WOW! tv+ (Ultra TV) box. Choose a Small, Medium or Large channel package, add Cloud DVR (50, 100 or 200 hours), and watch OnDemand plus premium channels like HBO, Starz and Cinemax. Available where WOW! cable serves your address.",
    bullets: ["Small / Medium / Large channel packages", "WOW! tv+ box: $10/box per month", "Cloud DVR — 50, 100 or 200 hours"],
    priceLabel: "Package pricing",
    lockup: { nullNote: "Call for today's package pricing at your address" },
    image: "bundle-tv",
    accent: "blue",
    source: SRC.tv,
    observedAt: OBSERVED_AT,
  },
  {
    id: "tv",
    line: "tv",
    eyebrow: "TV — YouTube TV partnership",
    title: "Or stream live TV with YouTube TV",
    body: "Prefer streaming? WOW! also partners with YouTube TV. Bundle it with WOW! Internet and get $10/mo off YouTube TV for 12 months. NFL Sunday Ticket is available (now $240 for the season with the YouTube TV Base Plan, through 10/28/26).",
    bullets: ["100+ live channels on any screen", "NFL Sunday Ticket — $240/season through 10/28/26", "No box — stream on any device"],
    priceLabel: "Bundle savings",
    lockup: { price: "10", period: "/mo", qualifier: "off YouTube TV for 12 months when you bundle" },
    trademark: "YouTube TV is a trademark of Google LLC.",
    image: "bundle-tv",
    accent: "orange",
    source: SRC.home,
    observedAt: OBSERVED_AT,
  },
  {
    id: "phone",
    line: "phone",
    eyebrow: "Home Phone — base",
    title: "WOW! Home Phone",
    body: "A dependable landline with the calling features you actually use: unlimited local calling plus 100 minutes of long distance ($0.05/min after), caller ID, call forwarding, three-way calling and robocall blocking at no extra cost.",
    bullets: ["Unlimited local calling + 100 min long distance", "Caller ID, call forwarding & 3-way calling", "Robocall blocking included"],
    priceLabel: "Bundled price",
    lockup: { price: "9", period: "/mo", qualifier: "with WOW! Internet · plus taxes & fees" },
    image: "bundle-phone",
    accent: "cyan",
    source: SRC.phoneHome,
    observedAt: OBSERVED_AT,
  },
  {
    id: "phone-plus",
    line: "phone",
    eyebrow: "Home Phone — Plus",
    title: "WOW! Home Phone Plus",
    body: "Everything in WOW! Home Phone, but with unlimited long-distance calling instead of a 100-minute allotment — ideal if you call out of state often. WOW! doesn't publish this tier's price online, so an agent will confirm it for your address when you call.",
    bullets: ["Unlimited long-distance calling", "All base Home Phone features", "Robocall blocking & voicemail included"],
    priceLabel: "Pricing",
    lockup: { nullNote: "Get your exact price when you call" },
    image: "bundle-phone",
    accent: "cyan",
    source: SRC.phoneHome,
    observedAt: OBSERVED_AT,
  },
];

/* ---- WOW! Mobile (§2.3 — its own standalone section) --------------------- */
// Confirmed on wowway.com/phone/mobile: 1GB/3GB/8GB/Unlimited tiers, starting at
// $15/mo per line, no contract, $10/mo bundle discount, unlimited talk & text,
// 24/7 care, powered by Reach Mobile on the nation's largest 5G network. Per-tier
// pricing beyond the $15 entry is NOT published there (it routes to
// wow.reachmobile.com), so those use the §2.3 null-price fallback — no invented
// per-tier numbers.
// Per-tier prices confirmed first-party on wow.reachmobile.com (the portal
// wowway.com/phone/mobile links to as "View Mobile Plans") on 2026-08-19:
// Basic 1GB $15, Moderate 3GB $25, People's Choice 8GB $35, All-in Unlimited $45,
// each "per line per month" and labeled "Pricing shown includes discount
// available to eligible and verified WOW! residential internet customers" — i.e.
// the bundled (with-WOW!-Internet) rate; standalone lines are $10/mo more.
export type MobileTier = { label: string; price: string; bestFor: string }; // price "" = gated
export const mobile = {
  tiers: [
    { label: "1 GB", price: "15", bestFor: "Just enough for texts, calls and the occasional browse" },
    { label: "3 GB", price: "25", bestFor: "Plenty for one phone, day to day" },
    { label: "8 GB", price: "35", bestFor: "For the days you're streaming a lot" },
    { label: "Unlimited", price: "45", bestFor: "Never think about data again" },
  ] as MobileTier[],
  network: "Powered by Reach Mobile on the nation's largest 5G network",
  // Human null-price line, kept for any future tier whose price isn't published.
  nullLine: "Get your exact price when you call",
  // These two sit on every card (universally relevant); the rest stay shared below.
  included: ["Unlimited talk & text", "No contract"],
  features: [
    "$10/mo per-line discount for WOW! Internet customers",
    "24/7 customer care",
  ],
  note: "Prices shown are per line and already include the $10/mo discount for WOW! Internet customers; standalone lines are $10/mo more. Confirmed on wow.reachmobile.com.",
  source: SRC.mobile,
  perTierSource: "https://wow.reachmobile.com",
  observedAt: OBSERVED_AT,
};

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
    body: "WOW! ships a self-install kit for most plans; professional installation is available for a fee (free on new fiber orders, limited time). Your install is scheduled with WOW! on the same call.",
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
    a: "No — this site is operated by an independent authorized dealer of WOW! (WideOpenWest). We help you compare WOW! plans and connect you with a trained sales agent to get set up, but WOW! is a separate company that owns its brand and trademarks. Your service agreement and billing relationship are with WOW!, not with this dealer.",
  },
  {
    // Archetype 3 — Pricing / fees (real AutoPay + Paperless Billing terms).
    q: "What does the monthly price include, and are there extra fees?",
    a: "The price shown is WOW!'s base monthly rate for that speed with continuous subscription; taxes, fees and surcharges are additional. You may get a monthly discount for enrolling in AutoPay, and enrolling in Paperless Billing avoids WOW!'s $4/mo Paper Statement Fee. Optional Price Lock for Life ($5/mo) keeps your rate the same for as long as you keep the same speed. Exact pricing is confirmed for your address when you call. Pricing shown is as of " + PRICING_AS_OF + ".",
  },
  {
    // Archetype 4 — Installation (self-install default; pro install fee; free on fiber, limited time).
    q: "How does installation work?",
    a: "WOW! ships a self-install kit for most internet plans — it plugs in and sets up through a guided app, with no technician visit needed. If you'd rather have a professional handle it, professional installation is available for a fee — on the Internet 1.2 Gig plan, WOW!'s Broadband Facts label lists $99.00 for a professional install and $10.00 for self-install activation — and WOW! is currently offering free professional installation on new fiber orders (limited time). Your install is scheduled with WOW! on the same call when you order.",
  },
  {
    // Archetype 5 — Contract / data. WOW! states both "no contracts" and
    // "Unlimited Data / No data caps" on its own pages (SRC.home, SRC.internet).
    q: "Is there an annual contract or a data cap?",
    a: "No on both. WOW! internet plans are month-to-month with no annual contract and no early-termination fee, and every plan includes unlimited data with no data caps — so you can stream, game and work from home without worrying about overage. An agent can confirm the terms for your address when you call.",
  },
  {
    // Archetype 6 — Equipment.
    q: "What equipment do I need, and can I use my own?",
    a: "Most plans include the equipment you need, and WOW!'s optional Whole-Home WiFi ($9.99/mo) adds a managed eero-style mesh to blanket your home in signal. Whether equipment is included or carries a monthly fee depends on the plan and speed; an agent will confirm the equipment and any fee for your plan when you call.",
  },
  {
    // Archetype 7 — Support routing (§10). OPERATOR TODO: the master spec (§1/§10)
    // requires routing existing-customer support calls AWAY from the sales line to
    // keep them out of conversion data. The specific WOW!-direct routing/number was
    // removed per the operator's instruction — RESTORE a confirmed routing here once
    // the operator decides where support traffic should go, if anywhere.
    q: "I'm already a WOW! customer — can you help with my bill, an outage, or cancelling?",
    a: "Our line handles new WOW! orders only. Help with an existing WOW! account — billing, outages, account changes or cancellations — is handled by WOW!'s own customer support, not by this dealer. You'll find the right contact on your WOW! bill or in your online WOW! account.",
  },
  {
    // Optional — What happens when I call (3-step, hours, recording disclosure).
    q: "What happens when I call?",
    a: "You'll reach a trained sales agent on our order line (" + siteConfig.hoursDisplay + "). They confirm what's serviceable at your exact address, quote today's WOW! promotions, and — if you choose to order — place the order and schedule your installation with WOW!. Calls may be recorded for quality and training.",
  },
  {
    // Optional — Speeds.
    q: "How fast can WOW! internet go?",
    a: "WOW! offers cable internet up to 2 Gig and, where available, fiber up to 5 Gig with symmetrical upload and download speeds. An agent will show you the fastest tier your address supports.",
  },
];

/* ---- Value-added services (§2.4) — WOW!'s real, named add-ons ------------- */
export type AddOn = {
  icon: string;
  name: string;
  body: string;
  price: string;
};

export const addOns: AddOn[] = [
  {
    icon: "mesh",
    name: "Whole-Home WiFi",
    // $9.99/mo (two eero devices), $5.99/mo per additional eero, and requires a
    // WOW! modem ($14/mo) or your own compatible modem — stated on SRC.wholeHomeWifi
    // (verified 2026-08-19).
    body: "A managed eero-style mesh (two eero devices) that blankets every room in a strong, steady signal. Extra eero devices are $5.99/mo each, and Whole-Home WiFi needs a WOW! modem ($14/mo) or your own compatible modem.",
    price: "$9.99/mo",
  },
  {
    icon: "wifi",
    name: "Modem & equipment",
    body: "The equipment you need to get online is included with qualifying speeds, so there's no separate box to buy.",
    price: "Included with qualifying speeds",
  },
  {
    icon: "bolt",
    name: "Self-install kit",
    body: "A plug-and-play kit ships to your door for most plans, so you can get set up without a technician visit.",
    price: "Included",
  },
  {
    icon: "lock",
    name: "Price Lock for Life",
    body: "Keeps your monthly rate the same for as long as you keep the same speed. No yearly increases.",
    price: "$5/mo",
  },
  {
    icon: "shield",
    name: "Free professional install (fiber)",
    body: "New fiber orders currently include free professional installation — a $100 value. Limited-time offer, subject to change.",
    price: "Free on fiber",
  },
  {
    icon: "tv",
    name: "TV through YouTube TV",
    body: "Bundle YouTube TV with WOW! Internet for $10/mo off YouTube TV for 12 months. NFL Sunday Ticket available.",
    price: "Bundle & save",
  },
];

/* ---- Honest fine-print grid (§2.5) — sourced facts per plan --------------- */
export type FineFactRow = { label: string; values: [string, string, string] };

export const fineFactTiers = ["Internet 300 Mbps", "Internet 1.2 Gig", "WOW! Fiber"];

// Middle column (Internet 1.2 Gig) figures are sourced to WOW!'s FCC Broadband
// Facts label (UPI F0018579375MP24DATA12105AA). Cells without a confirmed source
// read "Ask when you call" rather than guessing.
export const fineFacts: FineFactRow[] = [
  { label: "Monthly price", values: ["$25/mo", "$105/mo", "From $40/mo"] },
  { label: "AutoPay discount", values: ["Available", "Available", "Available"] },
  { label: "Paperless Billing", values: ["$4/mo fee if not enrolled", "$4/mo fee if not enrolled", "$4/mo fee if not enrolled"] },
  { label: "Price after enrollment", values: ["Base monthly rate", "Base monthly rate", "Base monthly rate"] },
  { label: "One-time fee — self-install activation", values: ["Ask when you call", "$10.00", "Ask when you call"] },
  { label: "One-time fee — professional install", values: ["Ask when you call", "$99.00", "Free (limited time)"] },
  { label: "Equipment / modem", values: ["Included w/ qualifying speeds", "Included w/ qualifying speeds", "Included w/ qualifying speeds"] },
  { label: "Whole-Home WiFi", values: ["$9.99/mo add-on", "$9.99/mo add-on", "$9.99/mo add-on"] },
  { label: "Typical speeds (down / up)", values: ["Up to 300 Mbps", "1,200 / 48 Mbps", "Up to 5 Gig"] },
  { label: "Typical latency", values: ["Ask when you call", "22 ms", "Ask when you call"] },
  { label: "Data", values: ["Ask when you call", "Unlimited", "Ask when you call"] },
  { label: "Contract", values: ["No annual contract", "No annual contract", "No annual contract"] },
];

/* ---- Pricing / promo disclaimers (§7.4 / §9.4) — WOW!-sourced fine print -- */
export const disclaimers: string[] = [
  "Pricing shown is WOW!'s base monthly rate for new residential customers with continuous subscription; availability, speeds and pricing vary by address and are confirmed by phone. (wowway.com/internet)",
  "AutoPay: you may be eligible for a monthly discount when you enroll in AutoPay. The discount applies only after enrollment and may take up to one billing cycle to appear on your bill.",
  "Paperless Billing: enrolling in Paperless Billing eliminates WOW!'s $4/mo Paper Statement Fee.",
  "Installation: WOW! ships a self-install kit for most plans. On the Internet 1.2 Gig plan, WOW!'s Broadband Facts label lists a $10.00 self-install activation fee and a $99.00 professional installation fee. New fiber orders currently include free professional installation — limited-time offer, subject to change.",
  "VISA® Prepaid Reward Card offers, where available, require purchasing a qualifying speed, a valid email address, and maintaining service in good standing for at least 90 days.",
  "Taxes, fees and surcharges are additional, and late payment fees may apply under WOW!'s terms. Plans, prices and promotions are set by WOW!, subject to change, and confirmed at the time of your order. Pricing as of " + PRICING_AS_OF + ".",
];
