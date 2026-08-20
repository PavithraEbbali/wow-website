import { PRICING_AS_OF } from "@/lib/content";

/**
 * §3 canonical price lockup — the SINGLE price component, reused by the Internet
 * plan cards, the hero card, and now the TV / Mobile / Home Phone sections.
 *
 * Takes a loose price object (a Plan satisfies it structurally). Handles a real
 * price, a "from $X" starting price, and the null-price ("call for pricing")
 * state. `fine` renders the internet "Pricing as of … · terms below" link —
 * pass `fine={false}` outside the internet plans (that link points at the
 * internet facts grid). Nothing here is hand-typed at the call site.
 */
export type LockupData = {
  price?: string; // falsy → null-price state
  period?: string; // default "/mo"
  qualifier?: string;
  stepUp?: string;
  priceFrom?: boolean;
  nullNote?: string;
};

export function Lockup({
  data,
  className,
  fine = true,
}: {
  data: LockupData;
  className?: string;
  fine?: boolean;
}) {
  const gated = !data.price;
  const period = data.period ?? "/mo";
  return (
    <div className={`lockup${className ? " " + className : ""}`}>
      {gated ? (
        <p className="lockup__callrate">{data.nullNote ?? "Call for today's rate at your address"}</p>
      ) : (
        <>
          <p className="lockup__row" aria-hidden="true">
            {data.priceFrom && <span className="lockup__from">from</span>}
            <span className="lockup__cur">$</span>
            <span className="lockup__int">{data.price}</span>
            <span className="lockup__per">{period}</span>
          </p>
          <p className="sr-only">{`${data.priceFrom ? "from " : ""}$${data.price} per month`}</p>
          {data.qualifier && <p className="lockup__qual">{data.qualifier}</p>}
          {data.stepUp && <p className="lockup__step">{data.stepUp}</p>}
        </>
      )}
      {fine && (
        <p className="lockup__fine">
          <a href="#plan-facts">Pricing as of {PRICING_AS_OF} · terms below</a>
        </p>
      )}
    </div>
  );
}
