import { Reveal } from "./ui/Reveal";
import { SplitHeading } from "./ui/SplitHeading";
import { Icon, type IconName } from "@/lib/icons";
import { products } from "@/lib/content";
import { siteConfig } from "@/lib/site.config";

const ICONS: Record<string, IconName> = { "wow-tv": "tv", tv: "tv", mobile: "mobile", phone: "phone", "phone-plus": "phone" };

export function Products() {
  return (
    <section className="section bundles-lux" id="bundles">
      <span className="bx-hair top" aria-hidden="true" />
      <span className="bx-rules" aria-hidden="true" />
      <span className="bx-hair bot" aria-hidden="true" />

      <div className="container">
        <div className="section-head bx-head">
          <Reveal>
            <span className="kicker">More ways to connect</span>
          </Reveal>
          <SplitHeading segments={[{ text: "Add TV, mobile" }, { text: "and home phone", flow: true }]} />
          <Reveal delay={0.1}>
            <p>
              Put everything on one bill and save when you combine services. Mix and match what your
              household actually uses.
            </p>
          </Reveal>
        </div>

        <div className="bcards">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={0.05 * i}>
              <article className="bcard" data-accent={p.accent}>
                <span className="bc-edge" aria-hidden="true" />
                <div className="bc-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/img/${p.image ?? `bundle-${p.id}`}.jpeg`}
                    alt={p.title}
                    width={2752}
                    height={1536}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="bc-ic">
                    <Icon name={ICONS[p.id] ?? "tv"} size={22} />
                  </span>
                </div>
                <div className="bc-body">
                  <span className="bc-eyebrow">{p.eyebrow}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  {p.priceNote && <p className="bc-price">{p.priceNote}</p>}
                </div>
                <ul className="bc-chips">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {p.trademark && <p className="bc-tm">{p.trademark}</p>}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="bcards-cta">
            <a href={siteConfig.phoneHref} className="btn btn-primary btn-shine btn-lg" data-call-cta>
              Call now <Icon name="phone" size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
