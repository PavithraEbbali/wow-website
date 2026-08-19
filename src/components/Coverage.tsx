import { Reveal } from "./ui/Reveal";
import { SplitHeading } from "./ui/SplitHeading";
import { Icon } from "@/lib/icons";
import { siteConfig } from "@/lib/site.config";

/**
 * "Where we connect" — a simple two-column layout: copy + address CTA on the
 * left, a clean grid of the served states on the right. Minimal motion (a
 * reveal on entry and a hover lift). Brand palette only.
 */
export function Coverage() {
  const states = siteConfig.states.map((name, i) => ({ name, abbr: siteConfig.statesShort[i] }));

  return (
    <section className="section coverage" id="coverage">
      <div className="container coverage-grid">
        <div>
          <Reveal>
            <span className="kicker">Where we connect</span>
          </Reveal>
          <SplitHeading className="cov-h2" segments={[{ text: "Serving homes across" }, { text: "8 states", flow: true }]} />
          <Reveal delay={0.1}>
            <p style={{ color: "var(--muted)", fontSize: "var(--fs-lead)" }}>
              WOW! builds and maintains its own network in select communities. Coverage is
              neighborhood-specific, so the fastest way to know your options is a quick address check —
              it takes seconds.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <a href={siteConfig.phoneHref} className="btn btn-blue btn-shine btn-lg" data-call-cta>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Call to check your address <Icon name="phone" size={18} />
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="cov-note">
              Not in a covered area yet? Leave your details and we&apos;ll reach out the moment WOW!
              expands to your street.
            </p>
          </Reveal>
        </div>

        <ul className="cov-states" role="list">
          {states.map((s) => (
            <li key={s.abbr} className="cov-chip">
              <span className="cov-abbr">{s.abbr}</span>
              {s.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
