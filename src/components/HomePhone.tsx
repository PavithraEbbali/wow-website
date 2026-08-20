import { Reveal } from "./ui/Reveal";
import { SplitHeading } from "./ui/SplitHeading";
import { Lockup } from "./ui/Lockup";
import { Icon } from "@/lib/icons";
import { products } from "@/lib/content";
import { siteConfig } from "@/lib/site.config";

/**
 * Home Phone (§2.3) — stacked full-width "ticket" rows, each with a dark price
 * panel on the left (the §3 lockup: $9/mo base, null-price for Plus) and the
 * details on the right. The horizontal, stacked shape is deliberately distinct
 * from the Television section's 2-up card grid.
 */
export function HomePhone() {
  const cards = products.filter((p) => p.line === "phone");
  return (
    <section className="section phone-sec" id="phone">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="kicker">Home Phone</span>
          </Reveal>
          <SplitHeading segments={[{ text: "WOW! Home Phone" }, { text: "plans", flow: true }]} />
          <Reveal delay={0.1}>
            <p>
              A dependable landline on one bill with your internet. Start with the base plan, or add
              unlimited long distance with Home Phone Plus.
            </p>
          </Reveal>
        </div>

        <div className="phone-stack">
          {cards.map((p, i) => (
            <Reveal key={p.id} delay={0.06 * i}>
              <article className="phone-row" data-accent={p.accent}>
                <div className="phone-price-col">
                  {p.priceLabel && <span className="phone-pricelabel">{p.priceLabel}</span>}
                  {p.lockup && <Lockup data={p.lockup} fine={false} className="lockup--dark lockup--lg" />}
                </div>
                <div className="phone-detail-col">
                  <span className="phone-eyebrow">{p.eyebrow}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <ul className="phone-bullets">
                    {p.bullets.map((b) => (
                      <li key={b}>
                        <Icon name="check-circle" size={16} /> {b}
                      </li>
                    ))}
                  </ul>
                  <a href={siteConfig.phoneHref} className="btn btn-lg phone-cta" data-call-cta>
                    Call now <Icon name="phone" size={17} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
