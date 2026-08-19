"use client";

import { useEffect, useState } from "react";

/**
 * CPRA "Do Not Sell or Share" control (§7.2 / §8.6). Persists the choice in
 * localStorage ('cpra_optout') and calls gtag consent update so advertising
 * storage/sharing is denied. A Global Privacy Control signal is treated as an
 * opt-out automatically and reflected here.
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    // Some browsers expose GPC on navigator.
  }
}

export function CpraOptOut() {
  const [optedOut, setOptedOut] = useState(false);
  const [gpc, setGpc] = useState(false);

  useEffect(() => {
    const nav = navigator as Navigator & { globalPrivacyControl?: boolean };
    const gpcOn = nav.globalPrivacyControl === true;
    setGpc(gpcOn);
    let stored = false;
    try {
      stored = localStorage.getItem("cpra_optout") === "1";
    } catch {
      /* ignore */
    }
    setOptedOut(gpcOn || stored);
  }, []);

  function apply(next: boolean) {
    try {
      if (next) localStorage.setItem("cpra_optout", "1");
      else localStorage.removeItem("cpra_optout");
    } catch {
      /* ignore */
    }
    const state = next ? "denied" : "granted";
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state,
        analytics_storage: state,
      });
    }
    setOptedOut(next);
  }

  return (
    <div className="cpra-box">
      {gpc && (
        <p className="cpra-gpc">
          A Global Privacy Control signal was detected in your browser — you are already opted out
          automatically.
        </p>
      )}
      <label className="cpra-toggle">
        <input
          type="checkbox"
          checked={optedOut}
          disabled={gpc}
          onChange={(e) => apply(e.target.checked)}
        />
        <span>Do not sell or share my personal information for advertising on this device.</span>
      </label>
      <p className="cpra-status" role="status">
        {optedOut
          ? "You are opted out on this device. Advertising sharing is disabled."
          : "You are not opted out. Advertising sharing is enabled."}
      </p>
    </div>
  );
}
