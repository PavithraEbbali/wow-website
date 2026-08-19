"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Icon } from "@/lib/icons";
import { faqs } from "@/lib/content";
import { siteConfig } from "@/lib/site.config";
import { SplitHeading } from "./ui/SplitHeading";
import { Reveal } from "./ui/Reveal";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section faq" id="faq">
      <div className="container faq-grid">
        <div>
          <span className="kicker">Good to know</span>
          <SplitHeading className="faq-h2" segments={[{ text: "Questions," }, { text: "answered", flow: true }]} />
          <p style={{ color: "var(--muted)", fontSize: "var(--fs-lead)" }}>
            Everything you might wonder about ordering WOW! through an independent authorized dealer.
            Still deciding? Our trained sales agents can help, {siteConfig.hoursDisplay}.
          </p>
          <a className="btn btn-outline btn-lg" href={siteConfig.phoneHref} data-call-cta style={{ marginTop: "1.4rem" }}>
            <Icon name="phone" size={18} /> {siteConfig.phoneDisplay}
          </a>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.06} y={18}>
                <div className="faq-item" data-open={isOpen}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {f.q}
                  <span className="chev">
                    <Icon name="plus" size={20} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                </div>
              </Reveal>
            );
          })}

          {/* Closing call card lives INSIDE the FAQ (§2.8) — FAQ is the last section. */}
          <div className="faq-callcard">
            <p>Still deciding? Talk to a trained sales agent.</p>
            <a className="btn btn-primary btn-shine" href={siteConfig.phoneHref} data-call-cta>
              <Icon name="phone" size={18} /> Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
