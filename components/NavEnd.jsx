import React from 'react'
import { IoPaperPlaneOutline } from "react-icons/io5";


const NavEnd = () => {
  return (
    <div>
      <button 
        className="group flex items-center gap-2 bg-linear-to-r from-primary to-cyan text-white px-6 py-3 rounded-xl hover:scale-[105%] transition-transform duration-150 ease-in-out"
      >
        Let's Connect
        <IoPaperPlaneOutline className="text-lg transition-transform duration-200 ease-in-out         group-hover:translate-x-1" />
      </button>
    </div>
  );
}

export default NavEnd