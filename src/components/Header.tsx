"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Icon } from "@/lib/icons";
import { siteConfig } from "@/lib/site.config";

const NAV = [
  { href: "#plans", label: "Plans & Pricing" },
  { href: "#bundles", label: "Bundles" },
  { href: "#why", label: "Why WOW!" },
  { href: "#coverage", label: "Coverage" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const onHome = pathname === "/";
  // On the homepage, hashes scroll smoothly; from any other page (e.g. a policy
  // page) they must first navigate back to the homepage section.
  const to = (hash: string) => (onHome ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top disclosure bar (§2.0) — kills "is this WOW!?" ambiguity; persistent. */}
      <div className="disclosure-bar">
        <div className="container">
          <span className="db-text">
            Independent Authorized {siteConfig.agreementNoun} of WOW!® — <b>Not WOW!.</b>
          </span>
          <a className="db-call" href={siteConfig.phoneHref} data-call-cta>
            <Icon name="phone" size={14} /> Call now: {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>

      <header className="site-header" data-scrolled={scrolled}>
        <div className="container bar">
          <a href={onHome ? "#top" : "/"} className="brand" aria-label="WOW! Authorized Dealer — home">
            <Logo className="logo" />
            <span className="dealer-tag">
              <b>Authorized</b>
              <span>Dealer</span>
            </span>
          </a>

          <nav className="nav-desktop" aria-label="Primary">
            {NAV.map((n) => (
              <a key={n.href} href={to(n.href)}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-call" href={siteConfig.phoneHref} data-call-cta>
              <small>Call now</small>
              <b>{siteConfig.phoneDisplay}</b>
            </a>
            <button
              className="menu-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? "close" : "menu"} size={22} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="mobile-panel"
              aria-label="Mobile"
              initial={reduce ? { opacity: 0 } : { x: "100%" }}
              animate={reduce ? { opacity: 1 } : { x: 0 }}
              exit={reduce ? { opacity: 0 } : { x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
            >
              {NAV.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={to(n.href)}
                  onClick={() => setOpen(false)}
                  initial={reduce ? undefined : { opacity: 0, x: 20 }}
                  animate={reduce ? undefined : { opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.05 }}
                >
                  {n.label}
                  <Icon name="arrow" size={18} />
                </motion.a>
              ))}
              <a
                className="btn btn-primary"
                href={siteConfig.phoneHref}
                onClick={() => setOpen(false)}
                data-call-cta
                style={{ marginTop: "1.2rem" }}
              >
                <Icon name="phone" size={18} /> {siteConfig.phoneDisplay}
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
