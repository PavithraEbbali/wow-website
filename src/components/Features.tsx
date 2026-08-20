import { Reveal } from "./ui/Reveal";
import { SplitHeading } from "./ui/SplitHeading";
import { Icon, type IconName } from "@/lib/icons";
import { features } from "@/lib/content";

/**
 * "Why WOW!" — a plain card grid of the perks. No scroll-scrub or radial hub;
 * each perk is stated in its own card. The only motion is a subtle hover lift.
 * Content is the WOW! feature copy; colours are strictly the brand palette.
 */
export function Features() {
  return (
    <section className="section why-cards" id="why">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="kicker">Why WOW!</span>
          </Reveal>
          <SplitHeading segments={[{ text: "What you actually get" }, { text: "with WOW!", flow: true }]} />
          <Reveal delay={0.1}>
            <p>
              Straightforward, start to finish. Just fast, dependable internet and the things that
              actually matter when you&apos;re online all day.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <div className="why-band">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/why-lifestyle.jpeg"
              alt="A family each streaming, gaming and working online at the same time"
              width={2752}
              height={1536}
              loading="lazy"
              decoding="async"
            />
            <div className="why-band-cap">
              <b>Everyone online at once.</b>
              <span>Stream, game, work and call — all at the same time, no slowdowns.</span>
            </div>
          </div>
        </Reveal>

        <div className="why-grid">
          {features.map((f) => (
            <article key={f.title} className="why-card">
              <span className="wc-ic">
                <Icon name={f.icon as IconName} size={24} />
              </span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
