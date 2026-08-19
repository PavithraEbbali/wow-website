import { siteConfig, trackingEnabled } from "@/lib/site.config";

/**
 * Conversion tracking + US CPRA consent posture (§8.6).
 *
 * - Consent Mode v2: granted by default; a Global Privacy Control signal or a
 *   stored "Do Not Sell or Share" opt-out flips it to denied.
 * - A single delegated click listener fires the Ads call conversion on EVERY
 *   [data-call-cta] anchor (top bar, header, hero, cards, steps, FAQ, footer,
 *   sticky bar).
 *
 * The consent + listener code is always present (harmless no-ops if gtag never
 * loads). The gtag library itself only loads once a REAL Ads ID replaces the
 * AW-XXXXXXXXXX placeholder in site.config.ts — so no dead request ships before
 * launch, but the wiring is complete and testable.
 */
const consentBoot = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  var optedOut = navigator.globalPrivacyControl === true
                 || (function(){ try { return localStorage.getItem('cpra_optout') === '1'; } catch(e){ return false; } })();
  var state = optedOut ? 'denied' : 'granted';
  gtag('consent','default',{ad_storage:state,ad_user_data:state,ad_personalization:state,analytics_storage:state});
  gtag('js', new Date());
  gtag('config','${siteConfig.gtagId}');
`;

const callListener = `
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[data-call-cta]');
    if (a && typeof gtag === 'function') {
      gtag('event','conversion',{send_to:'${siteConfig.gtagId}/${siteConfig.gtagCallLabel}'});
    }
  });
`;

export function Tracking() {
  return (
    <>
      {trackingEnabled && (
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gtagId}`} />
      )}
      <script dangerouslySetInnerHTML={{ __html: consentBoot }} />
      <script dangerouslySetInnerHTML={{ __html: callListener }} />
    </>
  );
}
