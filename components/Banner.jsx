"use client";

import { useState } from "react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoMailOpen, IoLogoWhatsapp } from "react-icons/io5";
import { RiLinksFill } from "react-icons/ri";

const Banner = () => {
  const [mouse, setMouse] = useState({ x: -200, y: -200 });
  const [showSocials, setShowSocials] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://facebook.com/foyjur.rafee.99/",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/foyjur-rafee-9aa8513b1/",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/frnaib-09/",
    },
    {
      name: "Instagram",
      icon: <BsInstagram />,
      url: "https://instagram.com/code_with_foyjur/",
    },
    {
      name: "Mail",
      icon: <IoMailOpen />,
      url: "mailto:foyjurrafee99@gmail.com",
    },
    {
      name: "WhatsApp",
      icon: <IoLogoWhatsapp />,
      url: "https://wa.me/8801748838133",
    },
  ];

  return (
    <section
      id="banner"
      onMouseMove={handleMouseMove}
      className="relative isolate min-h-svh overflow-hidden bg-black px-4 pb-28 pt-32 text-white sm:px-6 sm:pb-32 sm:pt-36 md:px-10 md:pt-48"
    >
      {/* Background Image */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20 bg-[url('/images/foyjurbg.jpg')] bg-cover bg-center bg-no-repeat"
      />

      {/* Dark Overlay */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/50" />

      {/* Mouse Following Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden transition-[background] duration-100 sm:block"
        style={{
          background: `radial-gradient(circle 220px at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.12), transparent 80%)`,
        }}
      />

      {/* Navbar */}
      <div className="fixed top-6 left-1/2 z-50 w-full -translate-x-1/2 px-5 md:top-10 md:px-16">
        <div className="grid grid-cols-12 items-center">
          {/* Logo */}
          <div className="col-span-6 md:col-span-4">
            <a href="#banner" aria-label="Go to home">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-12 w-auto md:h-16"
              />
            </a>
          </div>

          {/* Menu & Social Links */}
          <div className="relative col-span-6 flex items-center justify-end gap-4 md:col-span-8 md:gap-8">
            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={
                showSocials ? "Close social links" : "Open social links"
              }
              aria-expanded={showSocials}
              onClick={() => setShowSocials((prev) => !prev)}
              className="relative z-10 text-white md:hidden"
            >
              <RiLinksFill
                className={`text-3xl transition-transform duration-300 hover:text-[#FF6602] ${
                  showSocials ? "rotate-45" : "rotate-0"
                }`}
              />
            </button>

            {/* Social Links Dropdown */}
            <div
              className={`
                absolute right-0 top-full mt-3
                flex flex-col items-center gap-5
                rounded-2xl border border-white/10
                bg-black/90 p-4 shadow-xl backdrop-blur-md
                origin-top-right
                transition-all duration-300 ease-out
                md:static md:mt-0 md:flex-row md:gap-6
                md:rounded-none md:border-0 md:bg-transparent
                md:p-0 md:shadow-none md:backdrop-blur-none
                md:origin-center
                ${
                  showSocials
                    ? "visible translate-y-0 scale-100 opacity-100"
                    : "invisible -translate-y-3 scale-95 opacity-0 pointer-events-none"
                }
                md:visible md:translate-y-0 md:scale-100
                md:opacity-100 md:pointer-events-auto
              `}
            >
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  title={item.name}
                  className="text-2xl text-white transition-all duration-300 hover:-translate-y-1 hover:text-[#FF6602] md:text-3xl"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <h1 className="mt-40 text-[clamp(3.5rem,15vw,6rem)] text-[#FF6602] font-semibold uppercase leading-[0.95] sm:text-7xl md:text-8xl lg:mt-0 lg:text-9xl">
              Foyjur
              <br />
              <span className="text-transparent [-webkit-text-stroke:1px_white]">
                Rafee
              </span>
            </h1>

            <p className="mt-6 text-xs tracking-widest sm:text-sm md:text-base lg:text-lg">
              &bull; Building Scalable Web Applications
            </p>
          </div>
        </div>
      </div>

      {/* Typewriter */}
      <div className="absolute bottom-24 left-0 w-full px-4 text-center text-xl font-bold uppercase sm:bottom-16 sm:text-3xl md:text-5xl">
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "Laravel Developer",
              "Problem Solver",
              "Innovative Thinker",
            ],
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 35,
          }}
        />
      </div>
    </section>
  );
};

export default Banner;
