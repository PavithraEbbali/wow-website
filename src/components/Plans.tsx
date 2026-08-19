import { Reveal } from "./ui/Reveal";
import { SplitHeading } from "./ui/SplitHeading";
import { Icon } from "@/lib/icons";
import { plans } from "@/lib/content";
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
              unlimited data, and you can add TV, mobile or whole-home Wi-Fi whenever you want.
            </p>
          </Reveal>
        </div>

        <div className="pcards">
          {plans.map((p, i) => (
            <Reveal key={p.id} delay={0.05 * i}>
              <article className={`pcard${p.featured ? " featured" : ""}`} data-accent={p.accent}>
                {p.featured && <span className="pc-flag">Most popular</span>}
                <div className="pc-head">
                  <h3>{p.tier}</h3>
                  <p className="pc-tag">{p.tagline}</p>
                </div>
                <div className="pc-speed">
                  <Icon name="gauge" size={18} />
                  <b>{p.download}</b>
                  <i>{p.unit}</i>
                </div>
                <div className="pc-price">
                  <span className="cur">$</span>
                  <b>{p.price}</b>
                  <i>{p.period}</i>
                </div>
                <p className="pc-qual">{p.qualifier}</p>
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
          <p className="plans-fineprint">
            Pricing shown is promotional and set by WOW!; it may vary by address and is subject to
            change, applicable taxes and fees. Add optional Price Lock for Life for $5/mo. Speed
            availability depends on your location — check your address for exact offers.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
