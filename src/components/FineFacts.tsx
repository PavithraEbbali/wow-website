import { Reveal } from "./ui/Reveal";
import { SplitHeading } from "./ui/SplitHeading";
import { fineFacts, fineFactTiers, PRICING_AS_OF, PRICING_SOURCE } from "@/lib/content";
import { siteConfig } from "@/lib/site.config";

/**
 * Honest fine-print grid (§2.5) — FCC-Broadband-Facts-style facts per internet
 * tier, voluntarily mirrored so there's no bait-and-switch gap at WOW! sign-up.
 * "Ask when you call" is printed wherever a cell can't be sourced — never guessed.
 */
export function FineFacts() {
  return (
    <section className="section finefacts" id="plan-facts">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="kicker">The fine print</span>
          </Reveal>
          <SplitHeading segments={[{ text: "Plan facts," }, { text: "no surprises", flow: true }]} />
          <Reveal delay={0.1}>
            <p>
              The numbers that matter, side by side, the way WOW!&apos;s official Broadband Facts
              labels lay them out. Taxes, fees and surcharges are extra, and your exact figures are
              confirmed by phone for your address.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <div className="ff-scroll">
            <table className="ff-table">
              <thead>
                <tr>
                  <th scope="col">Internet plan</th>
                  {fineFactTiers.map((t) => (
                    <th scope="col" key={t}>
                      {t}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fineFacts.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {row.values.map((v, i) => (
                      <td key={i} data-label={fineFactTiers[i]}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="ff-foot">
            {/* Fine-print group: label link + sourcing line, muted/secondary. */}
            <p className="ff-source">
              <a
                className="ff-label"
                href="https://www.wowway.com/policies/broadband-labels"
                target="_blank"
                rel="noopener noreferrer"
              >
                See WOW!&apos;s official Broadband Facts label →
              </a>
              <span>
                Facts sourced from {PRICING_SOURCE}, {PRICING_AS_OF}. Confirm at your address by phone.
              </span>
            </p>
            {/* Exactly one small, secondary call link under the grid (§2.5). */}
            <a href={siteConfig.phoneHref} data-call-cta className="ff-call">
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
