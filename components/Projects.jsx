import React from "react";
import { ArrowUpRight, MoveRight } from "lucide-react";
import SecTitle from "@/components/SecTitle";

const items = [
  {
    name: "Eco Bazar",
    image: "/images/ecobazar.png",
    label: "E-commerce Website",
    link: "https://frnaib-09.github.io/Eco-bazar/",
  },
  {
    name: "Furniro",
    image: "/images/furniro.jpg",
    label: "E-commerce Website",
    link: "https://furniro-jet-ten.vercel.app",
  },
  {
    name: "GX Earn",
    image: "/images/gxearn.png",
    label: "CPA Web Application",
    link: "https://gxearn.com",
  },
  {
    name: "Doctor Portfolio",
    image: "/images/doc.png",
    label: "Doctor Portfolio Website",
    link: "https://doctor-portfolio-alpha-blue.vercel.app/",
  },
  {
    name: "Gapush Gupush",
    image: "/images/gapushgupush.png",
    label: "Restaurant Website",
    link: "https://frnaib-09.github.io/GAPUSH_GUPUSH/",
  },
];

const host = (url) => new URL(url).hostname.replace(/^www\./, "");

/**
 * Horizontal gallery. Without JS (or on small screens / reduced motion) it
 * is a native swipe carousel; MotionDirector upgrades it on desktop into a
 * pinned scene where vertical scrolling drives the cards sideways.
 */
const Projects = () => {
  return (
    <section id="projects" data-hscroll className="relative z-10 bg-black/60 text-white">
      <div
        data-hscroll-stage
        className="flex flex-col justify-center gap-8 overflow-hidden py-16 sm:py-20 md:gap-10 md:py-24"
      >
        {/* Header */}
        <div className="container flex flex-wrap items-end justify-between gap-6">
          <div className="[&>div]:mb-0">
            <SecTitle index="02" head2="contributions" head1="Projects I've " headspan="worked on" compact />
          </div>
          <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-white/50">
            <span className="hidden items-center gap-2 md:flex">
              Scroll <MoveRight size={14} className="text-orange" aria-hidden="true" />
            </span>
            <span className="text-white">
              <span data-hscroll-counter>01</span>
              <span className="text-white/35"> / {String(items.length).padStart(2, "0")}</span>
            </span>
          </div>
        </div>

        {/* Track */}
        <div
          data-hscroll-viewport
          className="no-scrollbar snap-x snap-mandatory overflow-x-auto overscroll-x-contain"
        >
          <div
            data-hscroll-track
            className="flex w-max items-start gap-5 px-4 sm:gap-8 lg:px-[max(1rem,calc((100vw-80rem)/2+1rem))]"
          >
            {items.map((item, index) => (
              <a
                key={item.link}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Visit"
                className={`group relative block w-[82vw] shrink-0 snap-start sm:w-[62vw] md:w-[min(46vw,72svh)] lg:w-[min(38vw,72svh)] xl:w-[min(34rem,72svh)] ${
                  index % 2 === 1 ? "md:mt-10" : ""
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0713] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)] transition-[border-color] duration-500 group-hover:border-orange/50">
                  <img
                    data-hscroll-img
                    src={item.image}
                    alt={`${item.name} — ${item.label}`}
                    loading="lazy"
                    draggable="false"
                    className="absolute inset-y-0 -left-[8%] h-full w-[116%] max-w-none object-cover grayscale-[0.35] transition-[scale,filter] duration-700 ease-expo group-hover:scale-[1.06] group-hover:grayscale-0"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-50"
                  />

                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 font-mono text-[11px] tracking-[0.2em] text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-all duration-500 ease-expo group-hover:rotate-45 group-hover:bg-orange">
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </span>

                  <span className="absolute bottom-4 left-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
                    {host(item.link)}
                  </span>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight transition-colors duration-500 group-hover:text-orange sm:text-3xl">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                      {item.label}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="mt-3 h-px w-12 shrink-0 origin-right scale-x-50 bg-orange transition-transform duration-500 ease-expo group-hover:scale-x-100"
                  />
                </div>
              </a>
            ))}

            {/* Closing card */}
            <a
              href="#contact"
              className="group relative flex aspect-[16/10] w-[82vw] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-white/20 p-6 transition-colors duration-500 hover:border-orange hover:bg-orange sm:w-[62vw] sm:p-8 md:w-[min(46vw,72svh)] lg:w-[min(38vw,72svh)] xl:w-[min(34rem,72svh)]"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/50 transition-colors group-hover:text-black/70">
                Next up
              </span>
              <span className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-tight text-white transition-colors group-hover:text-black sm:text-5xl">
                Your project
                <br />
                <span className="text-outline group-hover:[-webkit-text-stroke-color:#000]">could be here</span>
              </span>
              <span className="flex items-center gap-3 text-sm font-semibold text-orange transition-colors group-hover:text-black">
                Let&apos;s talk
                <ArrowUpRight size={18} className="transition-transform duration-500 ease-expo group-hover:rotate-45" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>

        {/* Progress */}
        <div className="container hidden md:block">
          <div className="h-px w-full bg-white/10">
            <div
              data-hscroll-progress
              className="h-px w-full origin-left bg-orange shadow-[0_0_10px_rgba(255,102,2,0.7)]"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
