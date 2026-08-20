import { Logo } from "./Logo";
import { Icon } from "@/lib/icons";
import { siteConfig } from "@/lib/site.config";
import { legalNav } from "@/lib/legalDocs";

const EXPLORE = [
  { href: "/#plans", label: "Internet" },
  { href: "/#tv", label: "TV" },
  { href: "/#mobile", label: "Mobile" },
  { href: "/#phone", label: "Home Phone" },
  { href: "/#why", label: "Why WOW!" },
  { href: "/#coverage", label: "Coverage" },
  { href: "/#faq", label: "FAQ" },
];

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" aria-label="WOW! Authorized Dealer — home" className="footer-logo-link">
              <Logo className="logo" />
            </a>
            <p className="dealer-line">
              Independent <span>Authorized {siteConfig.agreementNoun}</span> of WOW!
            </p>
            <p>
              {siteConfig.entityLegalName} helps households across the WOW! footprint compare plans and
              connect with a trained sales agent, who quotes today&apos;s WOW! offers and places your
              order. We are not WOW!.
            </p>
            <div className="footer-contact">
              <a href={siteConfig.phoneHref} data-call-cta>
                <Icon name="phone" size={16} /> {siteConfig.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`}>
                <Icon name="mail" size={16} /> {siteConfig.email}
              </a>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#91a8bc", fontSize: "0.86rem" }}>
                <Icon name="clock" size={16} /> {siteConfig.hoursDisplay}
              </span>
              <span style={{ display: "inline-flex", alignItems: "flex-start", gap: "0.5rem", color: "#91a8bc", fontSize: "0.86rem" }}>
                <Icon name="pin" size={16} /> {siteConfig.entityLegalName} · {siteConfig.entityAddress}
              </span>
            </div>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                {EXPLORE.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Policies</h4>
              <ul>
                {legalNav.map((l) => (
                  <li key={l.slug}>
                    <a href={`/legal/${l.slug}/`}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-disclosure">
          <p>
            <strong style={{ color: "#c9dae8" }}>Independent dealer notice:</strong>{" "}
            {siteConfig.entityLegalName} is an independent authorized {siteConfig.agreementNoun} of WOW!
            services. {siteConfig.entityLegalName} is not WOW! and does not own the WOW! trademarks.
            This website is not operated by WOW! and is not WOW!&apos;s own website. Your service
            agreement and billing relationship are with WOW!, not with this dealer. Calls are answered
            by trained sales agents; this dealer may receive a commission from WOW! for activations.
          </p>
          <p>
            WOW! and related marks are trademarks of {siteConfig.trademarkOwner}, used under
            authorization. eero is a trademark of Amazon.com, Inc. or its affiliates. YouTube TV is a
            trademark of Google LLC. All other names are trademarks of their respective owners, used
            for identification only. Plans, speeds, channels, equipment and pricing are set by WOW!,
            may change without notice, and are subject to availability, credit approval, applicable
            taxes and fees, and the terms of your WOW! service agreement.
          </p>
        </div>

        <div className="footer-legal-row">
          {legalNav.map((l) => (
            <a key={l.slug} href={`/legal/${l.slug}/`}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <span>
            © {YEAR} {siteConfig.entityLegalName}. All rights reserved. Independent authorized{" "}
            {siteConfig.agreementNoun} of WOW! services.
          </span>
          <a href="#top" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#a9c0d3" }}>
            Back to top <Icon name="arrow" size={15} style={{ transform: "rotate(-90deg)" }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
