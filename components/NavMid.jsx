"use client";

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  UserRound,
  FolderKanban,
  Layers,
  CircleDollarSign,
  BriefcaseBusiness,
  Send,
} from "lucide-react";

const navItems = [
  { icon: UserRound, title: "About", id: "about" },
  { icon: FolderKanban, title: "Projects", id: "projects" },
  { icon: Layers, title: "Skills", id: "skills" },
  { icon: CircleDollarSign, title: "Pricing", id: "pricing" },
  { icon: BriefcaseBusiness, title: "Career", id: "career" },
  { icon: Send, title: "Contact", id: "contact" },
];

const NavMid = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [indicator, setIndicator] = useState({ x: 0, y: 0, size: 0, visible: false });
  const listRef = useRef(null);
  const linkRefs = useRef({});

  // Track which section is in view.
  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (!sections.length) return;

    const visibleSections = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleSections.set(entry.target.id, entry);
          else visibleSections.delete(entry.target.id);
        });

        const current = [...visibleSections.values()].sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio,
        )[0];
        // Nothing tracked in view (e.g. the hero): no active item.
        setActiveSection(current ? current.target.id : null);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Move the sliding highlight onto the active link.
  const placeIndicator = useCallback(() => {
    const link = activeSection && linkRefs.current[activeSection];
    if (!link) {
      setIndicator((prev) => ({ ...prev, visible: false }));
      return;
    }
    setIndicator({
      x: link.offsetLeft,
      y: link.offsetTop,
      size: link.offsetWidth,
      visible: true,
    });
  }, [activeSection]);

  useLayoutEffect(() => {
    placeIndicator();
  }, [placeIndicator]);

  useEffect(() => {
    window.addEventListener("resize", placeIndicator);
    return () => window.removeEventListener("resize", placeIndicator);
  }, [placeIndicator]);

  return (
    <ul
      ref={listRef}
      className="relative flex flex-row items-center justify-center gap-1 sm:gap-1.5 lg:flex-col lg:gap-2"
    >
      {/* Sliding active highlight */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 rounded-full bg-orange shadow-[0_0_24px_rgba(255,102,2,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] transition-[translate,opacity,scale] duration-700 ease-expo"
        style={{
          width: indicator.size,
          height: indicator.size,
          translate: `${indicator.x}px ${indicator.y}px`,
          opacity: indicator.visible ? 1 : 0,
          scale: indicator.visible ? "1" : "0.4",
        }}
      />

      {navItems.map((item, index) => {
        const isActive = activeSection === item.id;
        const Icon = item.icon;

        return (
          <li key={item.id}>
            <a
              ref={(el) => {
                linkRefs.current[item.id] = el;
              }}
              href={`#${item.id}`}
              aria-label={item.title}
              aria-current={isActive ? "location" : undefined}
              data-magnetic="0.35"
              className={`group relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-500 ease-expo sm:h-11 sm:w-11 ${
                isActive ? "text-black" : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon
                size={19}
                strokeWidth={isActive ? 2.2 : 1.7}
                aria-hidden="true"
                className="relative transition-transform duration-500 ease-expo group-hover:scale-115 group-active:scale-90"
              />

              {/* Hover label (desktop) */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-full top-1/2 mr-4 hidden -translate-y-1/2 translate-x-2 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-black/70 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white opacity-0 shadow-lg backdrop-blur-md transition-[opacity,translate] duration-500 ease-expo group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 lg:flex"
              >
                <span className="text-orange">{String(index + 1).padStart(2, "0")}</span>
                {item.title}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavMid;
