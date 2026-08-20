import { Reveal } from "./ui/Reveal";
import { SplitHeading } from "./ui/SplitHeading";
import { Lockup } from "./ui/Lockup";
import { Icon } from "@/lib/icons";
import { plans, disclaimers } from "@/lib/content";
import { siteConfig } from "@/lib/site.config";

export function Plans() {
  return (
    <section className="section plans-lux" id="plans">
      <span className="plx-glow one" aria-hidden="true" />
      <span className="plx-glow two" aria-hidden="true" />
      <div className="plx-grid" aria-hidden="true" />

      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="kicker">Plans &amp; pricing</span>
          </Reveal>
          <SplitHeading segments={[{ text: "Simple plans," }, { text: "prices up front", flow: true }]} />
          <Reveal delay={0.1}>
            <p>
              Find the WOW! internet speed that fits your household. Every plan is month-to-month with
              unlimited data, and you can add TV, mobile or Whole-Home WiFi whenever you want.
            </p>
          </Reveal>
        </div>

        <div className="pcards">
          {plans.map((p, i) => (
            <Reveal key={p.id} delay={0.05 * i}>
              <article className="pcard" data-accent={p.accent}>
                <div className="pc-head">
                  <h3>{p.tier}</h3>
                  <p className="pc-tag">{p.tagline}</p>
                </div>
                <div className="pc-speed">
                  <Icon name="gauge" size={18} />
                  <b>{p.download}</b>
                  <i>{p.unit}</i>
                </div>
                <Lockup data={p} className="pc-lockup" />
                <p className="pc-best">
                  <b>Best for:</b> {p.bestFor}
                </p>
                <ul className="pc-perks">
                  {p.perks.map((pk) => (
                    <li key={pk}>
                      <Icon name="check-circle" size={17} />
                      <span>{pk}</span>
                    </li>
                  ))}
                </ul>
                <a href={siteConfig.phoneHref} className="btn btn-lg pc-cta" data-call-cta>
                  Call now <Icon name="phone" size={18} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          {/* Collapsed-by-default native disclosure — the full §7.4 terms stay in
              the DOM (crawlable + accessible), just not visually dominant. */}
          <details className="plans-terms">
            <summary>
              Terms &amp; conditions
              <Icon name="plus" size={16} aria-hidden="true" />
            </summary>
            <div className="plans-fineprint">
              {disclaimers.map((d, i) => (
                <p key={i}>{d}</p>
              ))}
            </div>
          </details>
        </Reveal>
      </div>
    </section>
  );
}
