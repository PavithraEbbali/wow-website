import { Reveal } from "./ui/Reveal";
import { SplitHeading } from "./ui/SplitHeading";
import { Icon, type IconName } from "@/lib/icons";
import { fiberSpeeds } from "@/lib/content";
import { siteConfig } from "@/lib/site.config";

/** Fiber benefit cards — content drawn from WOW!'s fiber messaging. */
const FIBER_CARDS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "infinity",
    title: "Symmetrical speeds",
    body: "Where fiber reaches your home, uploads run every bit as fast as downloads — effortless 4K uploads, cloud backups and sharing.",
  },
  {
    icon: "bolt",
    title: "Low-latency & lag-free",
    body: "Rock-steady connections for gaming and video calls that never freeze, even with the whole house online at once.",
  },
  {
    icon: "shield",
    title: "Future-proof capacity",
    body: "Fiber is built for whatever's next, so your connection has plenty of room to grow for years to come.",
  },
];

/**
 * WOW! Fiber — a simple card band. The interactive "symmetry instrument" is
 * gone; the value props are stated in three cards, with the speed tiers listed
 * as chips below. Content is WOW!'s fiber copy; colours are the brand palette.
 */
export function Fiber() {
  return (
    <section className="section fiber-cards" id="fiber">
      <div className="fiber-bg" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/fiber-family.jpeg" alt="" width={1260} height={1536} loading="lazy" decoding="async" />
      </div>
      <div className="container">
        <div className="fiber-head">
          <Reveal>
            <span className="kicker fiber-kicker">WOW! Fiber</span>
          </Reveal>
          <SplitHeading className="fiber-h2" segments={[{ text: "Symmetrical fiber, built for whatever’s next" }]} />
          <Reveal delay={0.1}>
            <p className="fiber-lead">
              Where fiber reaches your home, uploads run every bit as fast as downloads — the sweet
              spot for creators, remote teams and homes that never want to think about buffering again.
            </p>
          </Reveal>
        </div>

        <div className="fiber-grid">
          {FIBER_CARDS.map((c, i) => (
            <Reveal key={c.title} delay={0.05 * i}>
              <article className="fcard">
                <span className="fcard-ic">
                  <Icon name={c.icon} size={24} />
                </span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="fiber-tiers">
            <span className="ft-label">Speeds available</span>
            <ul className="ft-chips">
              {fiberSpeeds.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="fiber-offer">
            <Icon name="check-circle" size={18} />
            <span>
              <b>Free professional install</b> — a $100 value, included with every fiber order.
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="fiber-cta">
            <a href={siteConfig.phoneHref} className="btn btn-primary btn-shine btn-lg" data-call-cta>
              Call now <Icon name="phone" size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
