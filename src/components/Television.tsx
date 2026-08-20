import { Reveal } from "./ui/Reveal";
import { SplitHeading } from "./ui/SplitHeading";
import { Lockup } from "./ui/Lockup";
import { Icon, type IconName } from "@/lib/icons";
import { products } from "@/lib/content";
import { siteConfig } from "@/lib/site.config";

const ICONS: Record<string, IconName> = { "wow-tv": "tv", tv: "tv" };
const ALT: Record<string, string> = {
  "wow-tv": "A living room set up for watching WOW! TV",
  tv: "A household streaming live TV across their devices",
};

/**
 * Television (§2.3) — two options side by side. Each card leads with a photo
 * header, then an airy body whose FIRST focal point is the §3 price lockup
 * (WOW! cable's null-price call-out / YouTube TV's $10/mo bundle savings). The
 * photo supports the price rather than crowding it. 2-column layout deliberately
 * distinct from the Home Phone section.
 */
export function Television() {
  const cards = products.filter((p) => p.line === "tv");
  return (
    <section className="section tv-sec" id="tv">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="kicker">Television</span>
          </Reveal>
          <SplitHeading segments={[{ text: "Two ways" }, { text: "to watch", flow: true }]} />
          <Reveal delay={0.1}>
            <p>
              WOW!&apos;s own digital cable on the tv+ box, or streaming through the YouTube TV
              partnership — pick whichever fits your household.
            </p>
          </Reveal>
        </div>

        <div className="tv-grid">
          {cards.map((p, i) => (
            <Reveal key={p.id} delay={0.06 * i}>
              <article className="tv-card" data-accent={p.accent}>
                <div className="tv-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/img/${p.image}.jpeg`}
                    alt={ALT[p.id] ?? ""}
                    width={1280}
                    height={760}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="tv-body-wrap">
                  <span className="tv-ic">
                    <Icon name={ICONS[p.id] ?? "tv"} size={22} />
                  </span>
                  <span className="tv-eyebrow">{p.eyebrow}</span>
                  {p.priceLabel && <span className="tv-pricelabel">{p.priceLabel}</span>}
                  {p.lockup && <Lockup data={p.lockup} fine={false} className="lockup--dark lockup--lg" />}
                  <h3>{p.title}</h3>
                  <p className="tv-body">{p.body}</p>
                  <ul className="tv-bullets">
                    {p.bullets.map((b) => (
                      <li key={b}>
                        <Icon name="check-circle" size={15} /> {b}
                      </li>
                    ))}
                  </ul>
                  {p.trademark && <p className="tv-tm">{p.trademark}</p>}
                  <a href={siteConfig.phoneHref} className="btn btn-lg tv-cta" data-call-cta>
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
