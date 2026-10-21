import React from 'react'
import { GoHome } from "react-icons/go";
import { FaIdCard } from "react-icons/fa";
import { SlChart } from "react-icons/sl";
import { LuFolderCode } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";



const NavMid = () => {
    const navItems = [
      {
        icon: <GoHome />,
        title: "Home",
        url: "/",
      },
      {
        icon: <FaIdCard />,
        title: "About",
        url: "#about",
      },
      {
        icon: <SlChart />,
        title: "Skills",
        url: "#skills",
      },
      {
        icon: <LuFolderCode />,
        title: "Projects",
        url: "#projects",
      },
      {
        icon: <FaRegComment />,
        title: "Testimonials",
        url: "#testimonials",
      },
      {
        icon: <FaRegHandshake />,
        title: "Contact",
        url: "#contact",
      },
    ];
  return (
    <div>
      <ul className="flex flex-row items-center justify-center gap-0.5 sm:gap-2 lg:flex-col lg:gap-8">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              key={item.url}
              href={item.url}
              title={item.title}
              className="group relative flex items-center gap-2 rounded-full p-2 text-white hover:text-orange transition-colors duration-300 ease-out hover:bg-white/10 sm:p-3 lg:p-3"
            >
              <span className="shrink-0 text-xl  transition-transform duration-300 ease-out group-hover:scale-110">
                {item.icon}
              </span>

              <span className="absolute right-full top-1/2 mr-2 hidden -translate-y-1/2 max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-out group-hover:max-w-50 group-hover:opacity-100 group-hover:translate-x-1 lg:block">
                {item.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavMid
