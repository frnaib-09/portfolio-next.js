"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Endless text band whose speed and direction follow scroll velocity.
 * Two rows run in opposite directions; scrolling up reverses them.
 */
const Row = ({ words, outline, rowRef }) => (
  <div className="overflow-hidden whitespace-nowrap py-2">
    <div ref={rowRef} className="inline-flex will-change-transform">
      {[0, 1].map((copy) => (
        <span key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
          {words.map((word) => (
            <span key={word} className="flex items-center">
              <span
                className={`font-display text-[clamp(2.75rem,8vw,7.5rem)] font-extrabold uppercase leading-none tracking-tight ${
                  outline ? "text-outline" : "text-white"
                }`}
              >
                {word}
              </span>
              <span className="mx-6 text-[clamp(1.5rem,4vw,3.5rem)] text-orange sm:mx-10">✦</span>
            </span>
          ))}
        </span>
      ))}
    </div>
  </div>
);

const VelocityMarquee = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rows = [
      { el: topRef.current, dir: -1, x: 0 },
      { el: bottomRef.current, dir: 1, x: -50 },
    ];
    const wrap = gsap.utils.wrap(-50, 0);
    let direction = 1;
    let boost = 0;

    const st = ScrollTrigger.create({
      trigger: topRef.current.closest("section"),
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        direction = self.direction;
        boost = Math.min(Math.abs(self.getVelocity()) / 120, 18);
      },
    });

    const tick = (_, deltaTime) => {
      if (!st.isActive) return; // idle while off-screen
      const dt = Math.min(deltaTime, 50) / 16.67;
      boost *= 0.92;
      rows.forEach((row) => {
        row.x = wrap(row.x + row.dir * direction * (0.05 + boost * 0.05) * dt);
        gsap.set(row.el, { xPercent: row.x });
      });
    };
    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      st.kill();
    };
  }, []);

  return (
    <section aria-label="Open to new projects" className="relative z-10 overflow-hidden border-y border-white/10 bg-black py-10 sm:py-14">
      <div className="-rotate-2 scale-105" aria-hidden="true">
        <Row rowRef={topRef} words={["Let's build", "Something bold", "Open for work"]} />
        <Row rowRef={bottomRef} outline words={["Laravel", "Next.js", "React", "Clean code"]} />
      </div>
      <p className="sr-only">Let&apos;s build something bold. Open for work.</p>
    </section>
  );
};

export default VelocityMarquee;
