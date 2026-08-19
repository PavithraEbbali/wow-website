/**
 * SINGLE SOURCE OF TRUTH for anything you may want to swap before launch.
 * Change these values once and they update across the header, footer, CTAs,
 * legal pages and structured data.
 *
 * NOTE: This is an INDEPENDENT AUTHORIZED DEALER site. It is not operated by,
 * and does not claim to be, WideOpenWest / WOW!. All required disclosures live
 * in the top bar, footer and legal pages. Calls are answered by trained sales
 * agents in a call center; the copy never implies a store or a field crew.
 *
 * ⚠️ LAUNCH BLOCKERS (must be replaced with real values before spending ad $):
 *   - phoneDisplay / phoneHref  → a REAL toll-free number, unique to this site.
 *   - entityLegalName / entityAddress / email → the real operating LLC.
 *   - siteUrl → the real production domain.
 *   - gtagId / gtagCallLabel → the real Google Ads conversion IDs.
 */

export const siteConfig = {
  // ---- Identity -----------------------------------------------------------
  brandName: "WOW!",
  brandLegalName: "WideOpenWest, Inc.",
  // Trademark owner for the WOW! marks (footer attribution, §7.5).
  trademarkOwner: "WideOpenWest Finance, LLC",
  // The relationship noun MUST match the signed agreement verbatim
  // ("dealer" | "retailer" | "agent"). Carriers audit this word.
  agreementNoun: "Dealer",
  dealerLabel: "Authorized Dealer",
  // The independent retailer operating THIS website.
  // ⚠️ Replace with the real legal entity name before launch.
  entityLegalName: "[Your Company, LLC]",
  entityAddress: "[Registered business address]",
  siteName: "WOW! Authorized Dealer",

  // ---- Contact (PLACEHOLDERS — replace with your real details) ------------
  // ⚠️ Fictional-use number range (555-01xx) so nothing dials a real line by
  // mistake. A real, unique toll-free number is a launch requirement.
  phoneDisplay: "1-800-555-0100",
  phoneHref: "tel:+18005550100",
  hoursDisplay: "Mon–Sun, 8am–11pm ET",
  email: "orders@your-dealer-domain.com",

  // WOW!'s own published support line — for routing existing-customer calls
  // (billing/outage/account) AWAY from the new-orders sales line.
  carrierSupportDisplay: "1-866-496-9669",
  carrierSupportHref: "tel:+18664969669",

  // ---- Deployment ---------------------------------------------------------
  // Used for canonical URLs, sitemap and Open Graph. Replace with your domain.
  siteUrl: "https://www.your-dealer-domain.com",

  // ---- Conversion tracking (Google Ads) -----------------------------------
  // ⚠️ Replace AW-XXXXXXXXXX + CALL_LABEL with the real Ads conversion IDs.
  // Tracking fires on every [data-call-cta] click. Until the real ID is set,
  // the gtag loader is inert (no requests) but the wiring is in place.
  gtagId: "AW-XXXXXXXXXX",
  gtagCallLabel: "CALL_LABEL",

  // ---- Coverage -----------------------------------------------------------
  states: [
    "Alabama",
    "Florida",
    "Georgia",
    "Illinois",
    "Michigan",
    "Ohio",
    "South Carolina",
    "Tennessee",
  ],
  statesShort: ["AL", "FL", "GA", "IL", "MI", "OH", "SC", "TN"],

  // ---- Social (optional; safe placeholders) -------------------------------
  social: {
    facebook: "",
    instagram: "",
    x: "",
    youtube: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** True once a real Google Ads conversion ID has been set (enables the gtag loader). */
export const trackingEnabled = !siteConfig.gtagId.includes("XXXX");
