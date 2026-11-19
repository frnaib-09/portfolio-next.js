"use client";

import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaFacebook, FaLinkedin, FaQuoteLeft } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoMailOpen, IoLogoWhatsapp } from "react-icons/io5";
import { RiLinksFill } from "react-icons/ri";

const testimonials = [
  {
    cmnt: "Really impressed with the final result! The website looks modern, clean, and works smoothly on all devices.",
    author: "Alex Morgan",
    location: "New York, USA",
  },
  {
    cmnt: "Working with him was a great experience. He understood my requirements and delivered exactly what I needed.",
    author: "Daniel Smith",
    location: "London, UK",
  },
  {
    cmnt: "Excellent work and great attention to detail. The design looks professional, and the overall experience is seamless.",
    author: "Sophia Williams",
    location: "Toronto, Canada",
  },
  {
    cmnt: "He did a fantastic job turning my ideas into a functional website. Communication was clear throughout the project.",
    author: "James Wilson",
    location: "Sydney, Australia",
  },
  {
    cmnt: "Very professional and easy to work with. The website exceeded my expectations in both design and performance.",
    author: "Olivia Brown",
    location: "Berlin, Germany",
  },
  {
    cmnt: "I really liked the clean code and modern design approach. Everything was well organized and worked as expected.",
    author: "Ethan Davis",
    location: "Dubai, UAE",
  },
  {
    cmnt: "Great service from start to finish. He paid attention to every detail and made sure the website was user-friendly.",
    author: "Isabella Taylor",
    location: "Singapore",
  },
  {
    cmnt: "He understood my vision perfectly and transformed it into a beautiful website. I'm very happy with the results.",
    author: "Noah Anderson",
    location: "Chicago, USA",
  },
  {
    cmnt: "The website looks amazing on both desktop and mobile. Great communication, quality work, and timely delivery.",
    author: "Mia Thomas",
    location: "Melbourne, Australia",
  },
  {
    cmnt: "A reliable and skilled developer who takes his work seriously. I'd definitely consider working with him again.",
    author: "Lucas Martin",
    location: "Amsterdam, Netherlands",
  },
];

const Banner = () => {
  const [showSocials, setShowSocials] = useState(false);
  const [anime, setAnime] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTestimonial = testimonials[currentIndex];

  

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

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setAnime(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatically change testimonial after typing finishes
  useEffect(() => {
    const typingSpeed = 40;
    const pauseDuration = 2500;

    const typingDuration = currentTestimonial.cmnt.length * typingSpeed;

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, typingDuration + pauseDuration);

    return () => clearTimeout(timer);
  }, [currentIndex, currentTestimonial.cmnt]);

  return (
    <section
      id="banner"
      data-hero-scene
      className="relative h-[220svh] overflow-clip text-white"
    >
      {/* Background Image (fixed, page-wide) */}
      <div
        aria-hidden="true"
        data-hero-bg
        className="fixed inset-0 -z-20 bg-[url('/images/foyjurbg.jpg')] bg-cover bg-center bg-no-repeat will-change-transform"
      />

      {/* Navbar */}
      <header
        data-hero-fade
        className="fixed left-1/2 top-6 z-90 w-full -translate-x-1/2 px-5 md:top-10 md:px-16"
      >
        <div
          className={`grid grid-cols-12 items-center rounded-2xl border px-2 py-2 transition-all duration-700 ease-expo ${
            anime
              ? "border-white/10 bg-black/40 px-4 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]"
              : "border-transparent bg-transparent backdrop-blur-none"
          }`}
        >
          {/* Logo */}
          <div className="col-span-6 md:col-span-4">
            <a href="#banner" aria-label="Go to home">
              <img
                src="/images/logo.png"
                alt="Logo"
                className={`w-auto transition-all duration-700 ease-expo ${
                  anime ? "h-10 md:h-12" : "h-12 md:h-16"
                }`}
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
                className={`text-3xl transition-transform duration-300 hover:text-orange ${
                  showSocials ? "rotate-45" : "rotate-0"
                }`}
              />
            </button>

            {/* Social Links Dropdown */}
            <div
              className={`
                absolute right-0 top-full mt-3
                flex origin-top flex-col items-center gap-5
                rounded-2xl border border-white/10 bg-black/50
                p-4 shadow-xl backdrop-blur-xl
                transition-all duration-300 ease-out
                md:static md:mt-0 md:origin-center md:flex-row md:gap-6
                md:rounded-none md:border-0 md:bg-transparent
                md:p-0 md:shadow-none md:backdrop-blur-none
                ${
                  showSocials
                    ? "visible scale-100 opacity-100"
                    : "invisible pointer-events-none scale-0 opacity-0"
                }
                md:visible md:scale-100 md:opacity-100 md:pointer-events-auto
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
                  data-magnetic="0.5"
                  className="text-2xl text-white transition-colors duration-300 hover:text-orange md:text-2xl lg:text-3xl"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Sticky stage: the opening scene plays while this stays pinned */}
      <div className="sticky top-0 h-svh overflow-hidden bg-black/20 px-4 pb-28 pt-32 sm:px-6 sm:pb-32 sm:pt-36 md:px-10 md:pt-48">
        {/* Dark Overlay + vignette */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,transparent_0%,rgba(0,0,0,0.55)_75%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-b from-transparent to-black/50"
        />
        {/* Dims in as the scene scrolls */}
        <div aria-hidden="true" data-hero-dim className="absolute inset-0 bg-black opacity-0" />

        {/* Testimonial Card */}
        <div
          data-hero-out="right"
          className="absolute right-56 top-80 z-10 hidden w-90 md:right-8 md:block md:w-72 lg:right-56 lg:w-90"
        >
          <div data-hero-fade>
            <div
              key={currentIndex}
              className="glow-card relative h-auto rounded-2xl border border-white/10 bg-black/35 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl md:p-4 lg:p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <FaQuoteLeft className="text-3xl text-orange/60" />
                <span className="font-mono text-[10px] tracking-[0.25em] text-white/40">
                  {String(currentIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>

              <div className="min-h-24 text-sm leading-relaxed">
                <Typewriter
                  key={`comment-${currentIndex}`}
                  options={{
                    strings: [currentTestimonial.cmnt],
                    autoStart: true,
                    loop: false,
                    delay: 40,
                    deleteSpeed: 25,
                  }}
                />
              </div>

              <div className="mt-4 border-t border-white/15 pt-3">
                <h6 className="font-semibold">{currentTestimonial.author}</h6>
                <span className="text-sm opacity-70">{currentTestimonial.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="container relative mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <div data-hero-out="up" className="mt-36 mb-6 lg:mt-0">
                <p
                  data-hero-fade
                  className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/30 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/80 backdrop-blur-md sm:text-xs"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-orange" />
                  </span>
                  Available for projects &mdash; Dhaka, BD
                </p>
              </div>

              <h1
                data-hero-title
                aria-label="Foyjur Rafee"
                className="whitespace-nowrap font-display text-[clamp(3rem,14vw,8.5rem)] font-extrabold uppercase leading-[0.9] tracking-tight text-orange"
              >
                <span className="block" data-hero-line="left">Foyjur</span>
                <span className="block text-outline" data-hero-line="right">Rafee</span>
              </h1>

              <div data-hero-out="up" className="mt-8">
                <p
                  data-hero-fade
                  className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-white/80 sm:text-sm"
                >
                  <span className="h-px w-12 bg-orange" aria-hidden="true" />
                  Building scalable web applications
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statement revealed by scrolling */}
        <div
          data-hero-statement
          className="pointer-events-none invisible absolute inset-0 flex items-center justify-center px-6 opacity-0"
        >
          <p className="max-w-5xl text-center font-display text-[clamp(1.75rem,5vw,4.5rem)] font-extrabold uppercase leading-[1.02] tracking-tight text-white">
            I turn ideas into <span className="text-orange">fast, scalable</span> &amp;{" "}
            <span className="text-outline">beautiful</span> web experiences.
          </p>
        </div>

        {/* Scroll hint */}
        <div data-hero-out="down" className="absolute bottom-10 left-6 hidden md:left-10 lg:block">
          <a
            href="#about"
            data-hero-fade
            className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-orange"
          >
            <span className="scroll-hint-line h-12 w-px bg-white/20" aria-hidden="true" />
            Scroll
          </a>
        </div>

        {/* Main Typewriter */}
        <div data-hero-out="down" className="absolute bottom-24 left-0 w-full px-4 sm:bottom-16">
          <div
            data-hero-fade
            className="text-center font-display text-xl font-bold uppercase tracking-tight sm:text-3xl md:text-5xl"
          >
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
        </div>
      </div>
    </section>
  );
};

export default Banner;
