import { Reveal } from "./ui/Reveal";
import { SplitHeading } from "./ui/SplitHeading";
import { Icon, type IconName } from "@/lib/icons";
import { steps } from "@/lib/content";

const STEP_ICONS: IconName[] = ["pin", "gauge", "bolt"];

/**
 * Getting started — a clean three-step numbered stepper. No scroll-scrub or
 * pinning; each step is a numbered node on a connecting rail with its title and
 * body below. Only motion is a staggered reveal on entry and a hover lift.
 * Content is the WOW! onboarding copy; colours are the brand palette.
 */
export function Steps() {
  return (
    <section className="section steps-simple" id="how">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="kicker">Getting started</span>
          </Reveal>
          <SplitHeading segments={[{ text: "Online in three" }, { text: "simple steps", flow: true }]} />
          <Reveal delay={0.1}>
            <p>From address check to first stream, we make switching to WOW! genuinely easy.</p>
          </Reveal>
        </div>

        <div className="steps-layout">
          <Reveal>
            <div className="steps-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/getting-started.jpeg"
                alt="A customer setting up their free WOW! self-install kit at home"
                width={2752}
                height={1536}
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <ol className="stepper stepper-vert">
              {steps.map((s, i) => (
                <li key={s.n} className="step-item">
                  <span className="step-rail" aria-hidden="true" />
                  <span className="step-num">
                    <b>{s.n}</b>
                    <span className="step-ic">
                      <Icon name={STEP_ICONS[i] ?? "sparkle"} size={18} />
                    </span>
                  </span>
                  <div className="step-txt">
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
