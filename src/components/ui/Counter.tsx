"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Count-up number that animates once when scrolled into view.
 * Respects reduced motion (snaps straight to the final value).
 */
export function Counter({
  to,
  duration = 1600,
  prefix = "",
  suffix = "",
  separator = false,
}: {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  separator?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(to);
      return;
    }

    let rafId = 0;
    let started = false;
    const run = () => {
      if (started) return;
      started = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(eased * to));
        if (p < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    // Start immediately if the number is already in view (e.g. above the fold),
    // otherwise wait until it scrolls in.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      run();
      return () => cancelAnimationFrame(rafId);
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [to, duration]);

  const display = separator ? val.toLocaleString("en-US") : String(val);
  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
