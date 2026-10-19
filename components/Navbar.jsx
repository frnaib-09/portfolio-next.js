import React from 'react'
import NavMid from './NavMid'

const Navbar = () => {
  return (
    <nav className="fixed z-100 top-1/2 right-10 -translate-y-1/2">
      <NavMid />
    </nav>
  );
}

export default Navbar