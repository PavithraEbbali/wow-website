import { Reveal } from "./ui/Reveal";
import { SplitHeading } from "./ui/SplitHeading";
import { Lockup } from "./ui/Lockup";
import { Icon } from "@/lib/icons";
import { products } from "@/lib/content";
import { siteConfig } from "@/lib/site.config";

const ALT: Record<string, string> = {
  phone: "A home phone resting on a kitchen counter",
  "phone-plus": "Making a long-distance call at home on a landline",
};

/**
 * Home Phone (§2.3) — stacked full-width photo cards. Each row pairs a real
 * lifestyle PHOTO panel (left) with the §3 price lockup overlaid on it — the
 * $9/mo base rate and the "get your exact price" line stay large and legible
 * over a dark gradient, so the photo restores warmth without shrinking the
 * price. Details sit on the right. Horizontal, stacked shape is deliberately
 * distinct from the Television section's 2-up grid.
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
                <div className="phone-media-col">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/img/${p.image}.jpeg`}
                    alt={ALT[p.id] ?? ""}
                    width={1280}
                    height={860}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="phone-price-overlay">
                    {p.priceLabel && <span className="phone-pricelabel">{p.priceLabel}</span>}
                    {p.lockup && <Lockup data={p.lockup} fine={false} className="lockup--dark lockup--lg" />}
                  </div>
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
