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
      className="relative min-h-svh overflow-hidden bg-black/10 px-4 pb-28 pt-32 text-white sm:px-6 sm:pb-32 sm:pt-36 md:px-10 md:pt-48"
    >
      {/* Testimonial Card */}
      <div
        key={currentIndex}
        className="comments absolute right-56 top-80 hidden h-auto w-90 rounded-2xl  p-6 shadow-xl backdrop-blur-md md:block"
      >
        <FaQuoteLeft className="mb-4 text-orange/50 text-3xl" />

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

        <div className="mt-4 border-t border-white/20 pt-3">
          <h6 className="font-semibold">{currentTestimonial.author}</h6>

          <span className="text-sm opacity-70">
            {currentTestimonial.location}
          </span>
        </div>
      </div>

      {/* Background Image */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20 bg-[url('/images/foyjurbg.jpg')] bg-cover bg-center bg-no-repeat"
      />

      {/* Dark Overlay */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/50" />

      {/* Navbar */}
      <div className="fixed left-1/2 top-6 z-90 w-full -translate-x-1/2 px-5 md:top-10 md:px-16">
        <div
          className={`grid grid-cols-12 items-center rounded-2xl px-2 py-2 transition-all duration-700 ease-in-out ${
            anime
              ? "bg-black/20 backdrop-blur-xl"
              : "bg-transparent backdrop-blur-none"
          }`}
        >
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
                  className="text-2xl text-white transition-all duration-300 hover:-translate-y-1 hover:text-orange md:text-3xl"
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
            <h1 className="mt-40 text-[clamp(3.5rem,15vw,6rem)] font-semibold uppercase leading-[0.95] text-orange sm:text-7xl md:text-8xl lg:mt-0 lg:text-9xl">
              Foyjur
              <br />
              <span className="text-transparent [-webkit-text-stroke:1px_white]">
                Rafee
              </span>
            </h1>

            <span className="mt-6 text-xs tracking-widest sm:text-sm md:text-base lg:text-lg">
              &bull; Building Scalable Web Applications
            </span>
          </div>
        </div>
      </div>

      {/* Main Typewriter */}
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
