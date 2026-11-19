"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

const RADIUS = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * Floating "back to top" button. Appears after the opening scene and shows
 * page progress as a ring. The ring is updated directly (no re-render per
 * scroll event); React state only flips visibility.
 */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const ringRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (ringRef.current) {
        ringRef.current.style.strokeDashoffset = String(CIRCUMFERENCE * (1 - progress));
      }
      setVisible(window.scrollY > window.innerHeight * 1.5);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior = reduce ? "auto" : "smooth";
    window.scrollTo({ top: 0, behavior });

    // If the smooth scroll gets interrupted before the top (and not by the
    // visitor), resume it once.
    let userScrolled = false;
    const markUser = () => {
      userScrolled = true;
    };
    const cleanup = () => {
      window.removeEventListener("wheel", markUser);
      window.removeEventListener("touchstart", markUser);
      window.removeEventListener("keydown", markUser);
      window.removeEventListener("scrollend", onEnd);
    };
    const onEnd = () => {
      cleanup();
      if (!userScrolled && window.scrollY > 2) window.scrollTo({ top: 0, behavior });
    };
    window.addEventListener("wheel", markUser, { passive: true });
    window.addEventListener("touchstart", markUser, { passive: true });
    window.addEventListener("keydown", markUser);
    window.addEventListener("scrollend", onEnd);
    setTimeout(cleanup, 4000);
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-20 right-4 z-100 flex h-13 w-13 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-[opacity,translate,scale,background-color,color] duration-500 ease-expo hover:bg-orange hover:text-black sm:bottom-24 lg:bottom-8 lg:right-8 ${
        visible ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-4 scale-75 opacity-0"
      }`}
    >
      {/* progress ring */}
      <svg viewBox="0 0 52 52" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
        <circle cx="26" cy="26" r={RADIUS} fill="none" stroke="rgb(255 255 255 / 0.1)" strokeWidth="2" />
        <circle
          ref={ringRef}
          cx="26"
          cy="26"
          r={RADIUS}
          fill="none"
          stroke="#ff6602"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
          className="transition-colors duration-500 group-hover:stroke-black/40"
        />
      </svg>
      <ArrowUp
        size={20}
        strokeWidth={2}
        aria-hidden="true"
        className="relative transition-transform duration-500 ease-expo group-hover:-translate-y-0.5"
      />
    </button>
  );
};

export default BackToTop;
