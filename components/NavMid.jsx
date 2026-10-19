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
        url: "/about",
      },
      {
        icon: <SlChart />,
        title: "Skills",
        url: "/skills",
      },
      {
        icon: <LuFolderCode />,
        title: "Projects",
        url: "/projects",
      },
      {
        icon: <FaRegComment />,
        title: "Testimonials",
        url: "/testimonials",
      },
      {
        icon: <FaRegHandshake />,
        title: "Contact",
        url: "/contact",
      },
    ];
  return (
    <div>
      <ul className="flex flex-row lg:flex-col justify-center gap-8">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              key={item.url}
              href={item.url}
              className="group flex items-center gap-2 rounded-full p-3 text-white transition-colors duration-300 ease-out hover:bg-white/10 relative"
            >
              <span className="shrink-0 text-xl transition-transform duration-300 ease-out group-hover:scale-110">
                {item.icon}
              </span>

              <span className="absolute top-1/2 right-full mr-2 -translate-y-1/2 max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-out group-hover:max-w-50 group-hover:opacity-100 group-hover:translate-x-1">
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