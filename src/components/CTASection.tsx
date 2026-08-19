import { SplitHeading } from "./ui/SplitHeading";
import { Reveal } from "./ui/Reveal";
import { Icon, type IconName } from "@/lib/icons";
import { siteConfig } from "@/lib/site.config";

const POINTS: { icon: IconName; text: string }[] = [
  { icon: "contract", text: "No contracts, cancel anytime" },
  { icon: "bolt", text: "Self-install kit available" },
  { icon: "chat", text: "Trained sales agents on the order line" },
];

export function CTASection() {
  return (
    <section className="section cta" id="order">
      <div className="cta-bg" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/cta-bg.jpeg" alt="" width={2752} height={1536} loading="lazy" decoding="async" />
      </div>
      <span className="cta-orb one" aria-hidden="true" />
      <span className="cta-orb two" aria-hidden="true" />
      <span className="cta-ring" aria-hidden="true" />

      <div className="container cta-inner">
        <Reveal>
          <span className="kicker cta-kicker">Let&apos;s get you connected</span>
        </Reveal>

        <SplitHeading
          className="cta-title"
          segments={[{ text: "Ready for internet that makes you say" }, { text: "WOW!", flow: true }]}
        />

        <Reveal delay={0.08}>
          <p className="cta-lead">
            Call our order line and a trained sales agent will confirm exactly what&apos;s available
            at your address and quote today&apos;s WOW! pricing. No obligation to order.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="cta-actions">
            <a href={siteConfig.phoneHref} className="btn btn-primary btn-shine btn-lg cta-call" data-call-cta>
              <Icon name="phone" size={20} /> Call {siteConfig.phoneDisplay}
            </a>
            <a href="#plans" className="btn btn-ghost btn-lg">
              Explore plans <Icon name="arrow" size={18} className="arrow" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="cta-hours">
            <span className="live-dot" /> Specialists available {siteConfig.hoursDisplay}
          </p>
        </Reveal>

        <ul className="cta-points">
          {POINTS.map((p, i) => (
            <Reveal as="li" key={p.text} delay={0.1 + i * 0.09}>
              <span className="cta-point">
                <span className="cp-ic">
                  <Icon name={p.icon} size={20} />
                </span>
                {p.text}
              </span>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.3}>
          <p className="cta-coverage">
            Proudly serving{" "}
            {siteConfig.statesShort.map((s, i) => (
              <span key={s}>
                {s}
                {i < siteConfig.statesShort.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
