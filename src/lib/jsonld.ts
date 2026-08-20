/**
 * Structured data (schema.org JSON-LD). Powers rich results and helps
 * SEO / AEO / GEO by describing the business, offers and FAQs to crawlers
 * and answer engines. Injected as <script type="application/ld+json">.
 */
import { siteConfig } from "./site.config";
import { faqs, plans } from "./content";

const url = siteConfig.siteUrl;

// Organization = the OPERATOR entity (never the carrier, never LocalBusiness —
// there are no premises). Carrier appears only as a brand on the Offers.
export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${url}/#dealer`,
  name: siteConfig.entityLegalName,
  legalName: siteConfig.entityLegalName,
  url,
  email: siteConfig.email,
  telephone: siteConfig.phoneDisplay,
  address: { "@type": "PostalAddress", streetAddress: siteConfig.entityAddress },
  description:
    "Independent authorized dealer helping households compare and order WOW! Internet, TV, Mobile and Home Phone services by phone.",
  areaServed: siteConfig.states.map((s) => ({ "@type": "State", name: s })),
  disambiguatingDescription: `Independent authorized ${siteConfig.agreementNoun.toLowerCase()} of WOW! services. Not WOW!. WOW! and related marks are trademarks of ${siteConfig.trademarkOwner}.`,
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${url}/#website`,
  url,
  name: siteConfig.siteName,
  inLanguage: "en-US",
  publisher: { "@id": `${url}/#dealer` },
};

export const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const offersLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "WOW! Internet Plans",
  brand: { "@type": "Brand", name: siteConfig.brandName },
  description:
    "High-speed WOW! internet plans with no contracts, unlimited data and Whole-Home WiFi, ordered through an authorized dealer.",
  // Null/gated-price plans omit the Offer entirely (§8.3 — an Offer without a
  // price is schema-invalid).
  offers: plans
    .filter((p) => p.price)
    .map((p) => ({
      "@type": "Offer",
      name: p.tier,
      price: p.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: p.price,
        priceCurrency: "USD",
        unitText: "MONTH",
      },
    })),
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${url}${it.path}`,
    })),
  };
}

export function jsonLdScript(data: unknown) {
  return { __html: JSON.stringify(data) };
}
