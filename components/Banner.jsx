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
      className="relative isolate min-h-screen overflow-hidden bg-black px-6 pt-36 text-white md:px-10 md:pt-48"
    >
      {/* Grayscale background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[url('/images/foyjurbg.jpg')] bg-cover bg-center bg-no-repeat grayscale"
      />

      {/* Dark overlay */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/50" />

      {/* Mouse-following spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 transition-[background] duration-100"
        style={{
          background: `radial-gradient(circle 220px at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.12), transparent 80%)`,
        }}
      />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Introduction */}
          <div className="md:col-span-8">
            <h1 className="text-6xl font-semibold uppercase leading-[0.95] sm:text-7xl md:text-8xl lg:text-9xl">
              Foyjur
              <br />
              <span className="text-transparent [-webkit-text-stroke:1px_white]">
                Rafee
              </span>
            </h1>

            <p className="mt-6 text-sm tracking-widest sm:text-base md:text-lg">
              &bull; Building Scalable Web Applications
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6 text-2xl md:absolute md:right-10 md:top-10 md:gap-8 md:text-3xl">
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
      <div className="absolute bottom-12 left-0 w-full px-4 text-center text-2xl font-bold uppercase sm:text-3xl md:bottom-16 md:text-5xl">
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
