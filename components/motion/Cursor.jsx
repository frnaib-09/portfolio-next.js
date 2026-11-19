"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Follower cursor: a soft spotlight + a lagging ring that grows over
 * interactive elements and shows a label for [data-cursor="Label"].
 * The native cursor stays visible; this is decoration only.
 * Rendered only for fine pointers (see .cursor-layer in globals.css).
 */
const Cursor = () => {
  const ringRef = useRef(null);
  const glowRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    const ring = ringRef.current;
    const glow = glowRef.current;
    const label = labelRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const d = reduce ? 0 : 0.45;

    gsap.set([ring, glow], { xPercent: -50, yPercent: -50 });
    const ringX = gsap.quickTo(ring, "x", { duration: d, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: d, ease: "power3.out" });
    const glowX = gsap.quickTo(glow, "x", { duration: d * 2, ease: "power2.out" });
    const glowY = gsap.quickTo(glow, "y", { duration: d * 2, ease: "power2.out" });

    let visible = false;
    const move = (e) => {
      if (!visible) {
        visible = true;
        gsap.set([ring, glow], { x: e.clientX, y: e.clientY });
        gsap.to([ring, glow], { autoAlpha: 1, duration: 0.3 });
      }
      ringX(e.clientX);
      ringY(e.clientY);
      glowX(e.clientX);
      glowY(e.clientY);
    };

    const over = (e) => {
      const target = e.target.closest?.("a, button, [role='button'], input, textarea, [data-cursor]");
      const text = target?.closest("[data-cursor]")?.dataset.cursor;
      ring.dataset.state = text ? "label" : target ? "hover" : "";
      label.textContent = text || "";
    };

    const leave = () => {
      visible = false;
      gsap.to([ring, glow], { autoAlpha: 0, duration: 0.3 });
    };
    const down = () => ring.classList.add("is-down");
    const up = () => ring.classList.remove("is-down");

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  return (
    <div aria-hidden="true" className="cursor-layer">
      <div ref={glowRef} className="cursor-glow" />
      <div ref={ringRef} className="cursor-ring">
        <span ref={labelRef} className="cursor-label" />
      </div>
    </div>
  );
};

export default Cursor;
