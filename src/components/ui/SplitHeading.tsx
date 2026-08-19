"use client";

import { motion, useReducedMotion } from "framer-motion";

type Segment = { text: string; flow?: boolean };

/**
 * Heading with a single one-shot entrance reveal (§4-compliant). The whole
 * heading fades/rises once as it scrolls into view — NO per-word or per-letter
 * splitting (that family is banned and breaks textContent). `flow` segments get
 * the brand gradient. textContent keeps real spaces between segments.
 */
export function SplitHeading({
  segments,
  className,
  as = "h2",
}: {
  segments: Segment[];
  className?: string;
  as?: "h1" | "h2";
}) {
  const reduce = useReducedMotion();
  const Tag = as;
  const MotionTag = as === "h1" ? motion.h1 : motion.h2;

  const content = segments.map((s, i) => (
    <span key={i} className={s.flow ? "gradient-text" : undefined}>
      {s.text}
      {i < segments.length - 1 ? " " : ""}
    </span>
  ));

  if (reduce) {
    return <Tag className={className}>{content}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {content}
    </MotionTag>
  );
}
