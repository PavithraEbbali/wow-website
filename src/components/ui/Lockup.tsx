import { PRICING_AS_OF, type Plan } from "@/lib/content";

/**
 * §3 canonical price lockup — the SINGLE price component, reused by the Plans
 * cards and the hero price card (no parallel price markup anywhere else).
 *
 * Every figure is read from the sourced `plan` object in content.ts; nothing
 * here is hand-typed. Handles three cases:
 *   - normal price (baseline row + qualifier + step-up)
 *   - "from $X" starting price (priceFrom)
 *   - null price (address-gated) → "Call for today's rate" in place of the row
 *
 * `className` (e.g. "lockup--dark") only restyles; it never changes the numbers.
 */
export function Lockup({ plan, className }: { plan: Plan; className?: string }) {
  const gated = !plan.price;
  return (
    <div className={`lockup${className ? " " + className : ""}`}>
      {gated ? (
        <p className="lockup__callrate">{plan.nullNote ?? "Call for today's rate at your address"}</p>
      ) : (
        <>
          <p className="lockup__row" aria-hidden="true">
            {plan.priceFrom && <span className="lockup__from">from</span>}
            <span className="lockup__cur">$</span>
            <span className="lockup__int">{plan.price}</span>
            <span className="lockup__per">{plan.period}</span>
          </p>
          <p className="sr-only">{`${plan.priceFrom ? "from " : ""}$${plan.price} per month`}</p>
          <p className="lockup__qual">{plan.qualifier}</p>
          <p className="lockup__step">{plan.stepUp}</p>
        </>
      )}
      <p className="lockup__fine">
        <a href="#plan-facts">Pricing as of {PRICING_AS_OF} · terms below</a>
      </p>
    </div>
  );
}
