import { Icon, type IconName } from "@/lib/icons";

/**
 * Trust strip — verifiable, carrier-backed facts only (no fabricated customer
 * counts, no invented fee claims). Static row, not an infinite marquee (§4).
 */
const ITEMS: { icon: IconName; label: string }[] = [
  { icon: "contract", label: "No annual contracts" },
  { icon: "infinity", label: "Unlimited data" },
  { icon: "mesh", label: "Whole-home Wi-Fi (eero)" },
  { icon: "shield", label: "30-day money-back" },
  { icon: "lock", label: "Price Lock for Life ($5/mo)" },
  { icon: "gauge", label: "Speeds up to 5 Gig" },
];

export function TrustBar() {
  return (
    <div className="trust" aria-label="Why customers choose WOW!">
      <ul className="trust-row">
        {ITEMS.map((it) => (
          <li className="trust-item" key={it.label}>
            <Icon name={it.icon} size={20} />
            {it.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
