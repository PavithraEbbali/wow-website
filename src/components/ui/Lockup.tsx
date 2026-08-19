import { PRICING_AS_OF, type Plan } from "@/lib/content";

/**
 * §3 canonical price lockup — the SINGLE price component, reused by the Plans
 * cards and the hero price card (no parallel price markup anywhere else).
 *
 * Every figure is read from the sourced `plan` object in content.ts; nothing
 * here is hand-typed. Anatomy: baseline price row (aria-hidden) + a visually
 * hidden plain-English price for screen readers, promo qualifier, step-up line,
 * and the fine-print link to the §2.5 grid.
 *
 * `className` (e.g. "lockup--dark") only restyles; it never changes the numbers.
 */
export function Lockup({ plan, className }: { plan: Plan; className?: string }) {
  return (
    <div className={`lockup${className ? " " + className : ""}`}>
      <p className="lockup__row" aria-hidden="true">
        <span className="lockup__cur">$</span>
        <span className="lockup__int">{plan.price}</span>
        <span className="lockup__per">{plan.period}</span>
      </p>
      <p className="sr-only">{`$${plan.price} per month`}</p>
      <p className="lockup__qual">{plan.qualifier}</p>
      <p className="lockup__step">{plan.stepUp}</p>
      <p className="lockup__fine">
        <a href="#plan-facts">Pricing as of {PRICING_AS_OF} · terms below</a>
      </p>
    </div>
  );
}
