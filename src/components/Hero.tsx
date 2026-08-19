import { Icon } from "@/lib/icons";
import { siteConfig } from "@/lib/site.config";

/**
 * Hero (§2.2) — offer-led, static, phone-first.
 *
 * Rebuilt to the compliance spec: no cursor parallax, no GSAP scrub, no
 * per-word headline builds, no drifting blobs (all §4-banned). A compressed
 * static background image + scrim only. The primary CTA is a tap-to-call button
 * with the number visible as text (data-call-cta), backed by staffed-hours
 * microcopy and new-orders-only support routing. Trust chips are verifiable,
 * carrier-backed facts only — no fabricated counts, no invented fee claims.
 *
 * Fully server-rendered: every word is in the static HTML, nothing is
 * animation-gated, so it's LCP-friendly and can never get stuck hidden.
 */
const HERO_CHIPS = ["No annual contract", "Unlimited data", "Up to 5 Gig fiber", "Price Lock available"];

export function Hero() {
  return (
    <section className="hero hero-light hero-static" id="top">
      <div className="hero-bg" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-photo-img hero-ground-img" src="/img/hero-ground.jpeg" alt="" fetchPriority="high" decoding="async" />
      </div>
      <div className="hero-veil" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-eyebrow">
            <span className="live-dot" />
            <b>Independent Authorized {siteConfig.agreementNoun}</b>&nbsp;· Order WOW! by phone
          </span>

          <h1 className="hero-title">
            Fast, reliable internet for your{" "}
            <span className="hero-accent-wrap">
              <span className="hero-accent">whole home</span>
              <svg className="hero-ul" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="heroUl" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#0072A8" />
                    <stop offset="0.5" stopColor="#FFC40C" />
                    <stop offset="1" stopColor="#F26124" />
                  </linearGradient>
                </defs>
                <path d="M6 12 C 70 4, 150 5, 214 10 S 284 16, 294 8" />
              </svg>
            </span>
          </h1>

          <p className="hero-sub">
            Compare WOW! fiber and cable plans and order in a single call — no contracts, no data
            caps, unlimited data on every plan. Trained sales agents confirm what&apos;s available at
            your exact address and quote today&apos;s WOW! pricing.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary btn-shine btn-lg hero-callbtn" href={siteConfig.phoneHref} data-call-cta>
              <Icon name="phone" size={20} /> Call now: {siteConfig.phoneDisplay}
            </a>
            <a className="btn btn-ghost btn-lg" href="#plans">
              See plans <Icon name="arrow" size={18} className="arrow" />
            </a>
          </div>

          <p className="hero-hours">
            <span className="live-dot" /> Agents available {siteConfig.hoursDisplay}
          </p>
          <p className="hero-support">
            New orders only — for account, billing or outage support, contact WOW! directly at{" "}
            <a href={siteConfig.carrierSupportHref}>{siteConfig.carrierSupportDisplay}</a>.
          </p>

          <ul className="hero-chips" aria-label="Plan highlights">
            {HERO_CHIPS.map((c) => (
              <li key={c}>
                <Icon name="check-circle" size={16} /> {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <svg className="wave-sep" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path fill="#ffffff" d="M0,64 C240,20 480,20 720,44 C960,68 1200,92 1440,56 L1440,90 L0,90 Z" />
      </svg>
    </section>
  );
}
