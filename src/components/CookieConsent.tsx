"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const KEY = "wow_cookie_consent";

/**
 * Lightweight cookie-consent banner. Remembers the visitor's choice in
 * localStorage so it only appears once. Non-essential tooling should be gated
 * on an "accepted" result.
 */
export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) {
        const t = setTimeout(() => setShow(true), 900);
        return () => clearTimeout(t);
      }
    } catch {
      /* ignore */
    }
  }, []);

  function decide(value: "accepted" | "declined") {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setShow(false);
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="cookie"
          role="dialog"
          aria-label="Cookie consent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <h4>We value your privacy</h4>
          <p>
            We use cookies to run this site, remember your preferences and understand what&apos;s
            useful. You can accept all cookies or stick with only the essentials. Read our{" "}
            <a href="/legal/cookies/">Cookies Policy</a>.
          </p>
          <div className="cookie-actions">
            <button className="btn btn-primary" onClick={() => decide("accepted")}>
              Accept all
            </button>
            <button className="btn btn-outline" onClick={() => decide("declined")}>
              Essentials only
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
