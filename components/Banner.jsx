"use client";

import { useState } from "react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Banner = () => {
  const [mouse, setMouse] = useState({ x: -200, y: -200 });

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
  ];

  return (
    <section
      id="banner"
      onMouseMove={handleMouseMove}
      className="relative isolate min-h-[100svh] overflow-hidden bg-black px-4 pb-28 pt-32 text-white sm:px-6 sm:pb-32 sm:pt-36 md:px-10 md:pt-48"
    >
      {/* Grayscale background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[url('/images/foyjurbg.jpg')] bg-cover bg-center bg-no-repeat "
      />

      {/* Dark overlay */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/50" />

      {/* Mouse-following spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden transition-[background] duration-100 sm:block"
        style={{
          background: `radial-gradient(circle 220px at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.12), transparent 80%)`,
        }}
      />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Introduction */}
          <div className="md:col-span-8">
            <h1 className="text-[clamp(3.5rem,15vw,6rem)] mt-40 lg:mt-0 font-semibold uppercase leading-[0.95] sm:text-7xl md:text-8xl lg:text-9xl">
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

          {/* Social links */}
          <div className="flex items-center gap-5 text-2xl sm:gap-6 md:absolute md:right-10 md:top-10 md:gap-8 md:text-3xl">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="transition-transform duration-300 hover:-translate-y-1 hover:text-gray-400"
              >
                {item.icon}
              </a>
            ))}
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
