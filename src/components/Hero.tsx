import { Icon } from "@/lib/icons";
import { siteConfig } from "@/lib/site.config";
import { plans } from "@/lib/content";
import { Lockup } from "./ui/Lockup";

/**
 * Hero (§2.2) — one unified dark card spanning the hero, two columns.
 *
 * LEFT: disclosure eyebrow, H1, one-sentence description, the reused §3 price
 * lockup (ui/Lockup), the primary tap-to-call CTA (number visible), then the
 * staffed-hours line, new-orders-only support routing, and the trust chips.
 * RIGHT: a real residential lifestyle photo.
 *
 * Headline/value-prop and the lead price come from wowway.com (re-scraped
 * 2026-08-19): WOW! leads with "Internet 300 Mbps for just $25" / "More speed.
 * Less spend." — restated here in the template's own voice per §5.2. The number
 * and its conditions trace to the sourced heroPlan object in content.ts.
 *
 * No live internet-plan promo exists on wowway.com today (the only dollar-amount
 * promo is the YouTube-TV NFL Sunday Ticket offer, a TV add-on), so the promo
 * badge is omitted rather than invented.
 *
 * Static — no continuous glow/spin/pulse (the card uses no looping animation).
 */
const HERO_CHIPS = ["No annual contract", "Self-install kit included", "Up to 5 Gig fiber", "Price Lock available"];

// Lead internet offer, straight from content.ts (Internet 300 Mbps at $25/mo).
const heroPlan = plans[0];

export function Hero() {
  return (
    <section className="hero-cardhero" id="top">
      <div className="container">
        <div className="herocard">
          <div className="herocard-left">
            <span className="hc-eyebrow">
              <span className="hc-dot" aria-hidden="true" />
              <b>Independent Authorized {siteConfig.agreementNoun}</b> of WOW!
            </span>

            <h1 className="hc-title">
              Fast, reliable internet for <span className="hc-grad">your home</span>
            </h1>

            <p className="hc-sub">
              No annual contract, switch or cancel anytime, and a self-install kit is included. Add
              Whole-Home WiFi if you want a strong signal in every room.
            </p>

            <p className="hc-plan">
              WOW! Internet · {heroPlan.download} {heroPlan.unit}
            </p>
            <Lockup plan={heroPlan} className="lockup--dark" />

            <a className="hc-cta" href={siteConfig.phoneHref} data-call-cta>
              <Icon name="phone" size={18} /> Call {siteConfig.phoneDisplay}
            </a>

            <p className="hc-hours">
              <span className="hc-dot" aria-hidden="true" /> Agents available {siteConfig.hoursDisplay}
            </p>
            {/*
              Support-routing microcopy removed per operator instruction (2026-08-19).
              OPERATOR TODO: §1 and §10 require routing existing-customer support calls
              AWAY from this sales line to keep billing/outage calls out of conversion
              data. With this line gone, those callers reach the sales line with no
              redirect. Restore a confirmed support-routing line here once the operator
              decides where that traffic should go (the FAQ archetype-7 answer is also
              pending that decision — see content.ts faqs).
            */}

            <ul className="hc-chips" aria-label="Plan highlights">
              {HERO_CHIPS.map((c) => (
                <li key={c}>
                  <Icon name="check-circle" size={16} /> {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="herocard-right">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/why-lifestyle.jpeg"
              alt="A family at home using WOW! internet across their devices"
              width={2752}
              height={1536}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
