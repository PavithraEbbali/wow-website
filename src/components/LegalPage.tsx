import { Reveal } from "./ui/Reveal";
import { SplitHeading } from "./ui/SplitHeading";
import { Icon } from "@/lib/icons";
import { legalDocs, legalNav, LEGAL_UPDATED, type LegalBlock } from "@/lib/legalDocs";
import { breadcrumbLd, jsonLdScript } from "@/lib/jsonld";

function Block({ block }: { block: LegalBlock }) {
  if (typeof block === "string") return <p>{block}</p>;
  return (
    <ul className="bullet">
      {block.list.map((item, i) => (
        <Reveal as="li" key={i} delay={i * 0.04} y={14}>
          {item}
        </Reveal>
      ))}
    </ul>
  );
}

export function LegalPage({ slug, extra }: { slug: string; extra?: React.ReactNode }) {
  const doc = legalDocs[slug];
  if (!doc) return null;

  return (
    <>
      <section className="legal-hero">
        <span className="legal-hero-orb" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <span className="legal-kicker">Policy</span>
          </Reveal>
          <SplitHeading as="h1" segments={[{ text: doc.title }]} />
          <Reveal delay={0.1}>
            <p>{doc.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="legal-body">
        <div className="container">
          <Reveal>
            <p className="updated">
              <Icon name="clock" size={15} style={{ display: "inline", verticalAlign: "-2px", marginRight: 6 }} />
              Last updated: {LEGAL_UPDATED}
            </p>
          </Reveal>

          <nav className="legal-toc" aria-label="On this page">
            <h2>On this page</h2>
            <ol>
              {doc.sections.map((s, i) => (
                <Reveal as="li" key={s.id} delay={i * 0.05} y={12}>
                  <a href={`#${s.id}`}>{s.heading}</a>
                </Reveal>
              ))}
            </ol>
          </nav>

          {doc.sections.map((s) => (
            <Reveal key={s.id}>
              <div className="legal-section">
                <span className="legal-section-bar" aria-hidden="true" />
                <h2 id={s.id}>{s.heading}</h2>
                {s.body.map((b, i) => (
                  <Block key={i} block={b} />
                ))}
              </div>
            </Reveal>
          ))}

          {extra && <Reveal>{extra}</Reveal>}

          <Reveal>
            <div className="legal-note">
              This page is provided as a general, good-faith template for an independent authorized
              dealer and is for information only — it is not legal advice. Please have your own legal
              counsel review and tailor these policies before you rely on them.
            </div>
          </Reveal>

          <div className="legal-back">
            <Reveal>
              <p style={{ fontWeight: 700, color: "var(--navy)", marginBottom: "0.8rem" }}>Other policies</p>
            </Reveal>
            <div className="footer-legal-row" style={{ marginTop: 0 }}>
              {legalNav
                .filter((l) => l.slug !== slug)
                .map((l, i) => (
                  <Reveal as="span" key={l.slug} delay={i * 0.04} y={10}>
                    <a href={`/legal/${l.slug}/`} style={{ color: "var(--blue)" }}>
                      {l.label}
                    </a>
                  </Reveal>
                ))}
            </div>
            <Reveal delay={0.1}>
              <a className="btn btn-outline" href="/" style={{ marginTop: "1.6rem" }}>
                <Icon name="arrow" size={18} style={{ transform: "rotate(180deg)" }} /> Back to home
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: doc.title, path: `/legal/${slug}/` },
          ])
        )}
      />
    </>
  );
}
