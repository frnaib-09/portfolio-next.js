"use client";

import React, { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import { FaIdCard, FaRegComment } from "react-icons/fa";
import { SlChart } from "react-icons/sl";
import { LuFolderCode } from "react-icons/lu";
import { FaRegHandshake } from "react-icons/fa6";

const NavMid = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    {
      icon: <GoHome />,
      title: "Home",
      url: "#banner",
      // Keep the observed section id in sync with the banner anchor.
      id: "banner",
    },
    {
      icon: <FaIdCard />,
      title: "About",
      url: "#about",
      id: "about",
    },
    {
      icon: <SlChart />,
      title: "Skills",
      url: "#skills",
      id: "skills",
    },
    {
      icon: <LuFolderCode />,
      title: "Projects",
      url: "#projects",
      id: "projects",
    },
    {
      icon: <FaRegComment />,
      title: "Testimonials",
      url: "#testimonials",
      id: "testimonials",
    },
    {
      icon: <FaRegHandshake />,
      title: "Contact",
      url: "#contact",
      id: "contact",
    },
  ];

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const visibleSections = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        const currentSection = [...visibleSections.values()].sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio,
        )[0];

        if (currentSection) {
          setActiveSection(currentSection.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <ul className="flex flex-row items-center justify-center gap-0.5 sm:gap-2 lg:flex-col lg:gap-8">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <li key={item.id}>
              <a
                href={item.url}
                title={item.title}
                aria-label={item.title}
                aria-current={isActive ? "location" : undefined}
                className={`group relative flex items-center gap-2 rounded-full p-2 transition-colors duration-300 ease-out hover:bg-white/10 sm:p-3 lg:p-3 ${
                  isActive ? "text-orange" : "text-white hover:text-orange"
                }`}
              >
                <span className="shrink-0 text-xl transition-transform duration-300 ease-out group-hover:scale-110">
                  {item.icon}
                </span>

                <span className="absolute right-full top-1/2 mr-2 hidden -translate-y-1/2 max-w-0 -translate-x-1 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-out group-hover:max-w-50 group-hover:translate-x-0 group-hover:opacity-100 lg:block">
                  {item.title}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMid;
