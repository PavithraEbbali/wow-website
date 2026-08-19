import { siteConfig } from "@/lib/site.config";

/**
 * Sticky mobile call bar (§2.10). Fixed to the bottom on phones, visible at all
 * times (not scroll-gated), full-width tap-to-call with the number visible.
 * Hidden ≥760px via CSS. Matching body padding is applied in globals.css.
 */
export function StickyCallBar() {
  return (
    <a className="sticky-callbar" href={siteConfig.phoneHref} data-call-cta aria-label={`Call now ${siteConfig.phoneDisplay}`}>
      <span aria-hidden="true">📞</span>
      Call now: {siteConfig.phoneDisplay}
    </a>
  );
}
