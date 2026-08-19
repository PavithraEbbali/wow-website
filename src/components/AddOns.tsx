import { Reveal } from "./ui/Reveal";
import { SplitHeading } from "./ui/SplitHeading";
import { Icon, type IconName } from "@/lib/icons";
import { addOns } from "@/lib/content";
import { siteConfig } from "@/lib/site.config";

/**
 * Value-added services (§2.4) — WOW!'s real, named add-ons, one card per filled
 * slot. Closes with a single shared call CTA ("Ask about add-ons when you call").
 */
export function AddOns() {
  return (
    <section className="section addons" id="addons">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="kicker">Add-ons &amp; extras</span>
          </Reveal>
          <SplitHeading segments={[{ text: "Everything you can add" }, { text: "to your plan", flow: true }]} />
          <Reveal delay={0.1}>
            <p>
              The extras WOW! offers, from mesh Wi-Fi to price protection. Ask about any of them when
              you call.
            </p>
          </Reveal>
        </div>

        <div className="addon-grid">
          {addOns.map((a, i) => (
            <Reveal key={a.name} delay={0.05 * i}>
              <article className="addon-card">
                <span className="addon-ic">
                  <Icon name={a.icon as IconName} size={22} />
                </span>
                <div className="addon-body">
                  <h3>{a.name}</h3>
                  <p>{a.body}</p>
                </div>
                <span className="addon-price">{a.price}</span>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="addons-cta">
            <a href={siteConfig.phoneHref} className="btn btn-primary btn-shine btn-lg" data-call-cta>
              Ask about add-ons when you call <Icon name="phone" size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
