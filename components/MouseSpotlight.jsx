"use client";

import { useEffect, useState } from "react";

const MouseSpotlight = () => {
  const [mouse, setMouse] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-9999 hidden transition-[background] duration-100 sm:block"
      style={{
        background: `radial-gradient(
          circle 220px at ${mouse.x}px ${mouse.y}px,
          rgba(255,255,255,0.12),
          transparent 80%
        )`,
      }}
    />
  );
};

export default MouseSpotlight;
