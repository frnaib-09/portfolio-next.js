import React from 'react'
import NavMid from './NavMid'

const Navbar = () => {
  return (
    <nav aria-label="Main navigation" className="fixed bottom-3 left-1/2 z-[100] max-w-[calc(100vw-1rem)] -translate-x-1/2 rounded-full border border-white/15 bg-black/40 px-1 py-1 backdrop-blur-sm sm:bottom-5 lg:bottom-auto lg:left-auto lg:right-10 lg:top-1/2 lg:translate-x-0 lg:-translate-y-1/2 lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
      <NavMid />
    </nav>
  );
}

export default Navbar
