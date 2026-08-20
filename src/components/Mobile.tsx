import { Reveal } from "./ui/Reveal";
import { SplitHeading } from "./ui/SplitHeading";
import { Icon } from "@/lib/icons";
import { mobile } from "@/lib/content";
import { siteConfig } from "@/lib/site.config";

/**
 * WOW! Mobile — standalone service-line section (§2.3). Four always-visible plan
 * cards (1GB/3GB/8GB/Unlimited), all static (no tabs/pinning that hide plans
 * behind interaction). Only 1 GB's $15/mo is publicly confirmed (wowway.com);
 * the other three use the §3 null-price fallback. Shared features sit once below
 * the grid to avoid repeating on every card.
 */
export function Mobile() {
  return (
    <section className="section mobile-lux" id="mobile">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="kicker">WOW! Mobile</span>
          </Reveal>
          <SplitHeading segments={[{ text: "WOW! Mobile" }, { text: "plans", flow: true }]} />
          <Reveal delay={0.1}>
            <p>
              {mobile.network}. Four simple data tiers, unlimited talk &amp; text on every plan, and
              no contract — keep your own phone or bring a new one.
            </p>
          </Reveal>
        </div>

        <div className="mob-grid">
          {mobile.tiers.map((t, i) => (
            <Reveal key={t.label} delay={0.05 * i}>
              <article className="mob-plan" data-entry={t.price ? "true" : undefined}>
                <span className="mob-plan-ic">
                  <Icon name="mobile" size={22} />
                </span>
                <h3>{t.label} Data Plan</h3>
                <p className="mob-plan-best">{t.bestFor}</p>
                <div className="mob-plan-price">
                  {t.price ? (
                    <>
                      <span className="mob-plan-amt">
                        <i>$</i>
                        {t.price}
                        <em>/mo</em>
                      </span>
                      <span className="mob-plan-sub">per line</span>
                    </>
                  ) : (
                    <span className="mob-plan-callrate">{mobile.nullLine}</span>
                  )}
                </div>
                <ul className="mob-plan-feats">
                  {mobile.included.map((f) => (
                    <li key={f}>
                      <Icon name="check-circle" size={15} /> {f}
                    </li>
                  ))}
                </ul>
                <a href={siteConfig.phoneHref} className="btn btn-lg mob-plan-cta" data-call-cta>
                  Call now <Icon name="phone" size={17} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <ul className="mob-feats">
            {mobile.features.map((f) => (
              <li key={f}>
                <Icon name="check-circle" size={18} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mob-note">{mobile.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
