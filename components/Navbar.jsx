import React from "react";
import NavMid from "./NavMid";

const Navbar = () => {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed bottom-3 left-1/2 z-100 max-w-[92vw] -translate-x-1/2 rounded-full border border-white/10 bg-black/45 p-1.5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl sm:bottom-5 lg:bottom-auto lg:left-auto lg:right-6 lg:top-1/2 lg:translate-x-0 lg:-translate-y-1/2 lg:p-2"
    >
      <NavMid />
    </nav>
  );
};

export default Navbar;
