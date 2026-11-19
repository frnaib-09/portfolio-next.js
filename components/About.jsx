'use client';

import React from "react";
import ProfileCard from '@/components/ProfileCard';
import SecTitle from "@/components/SecTitle";

// Figures taken from the content of this site (projects, skills and career sections).
const stats = [
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 5, suffix: "", label: "Featured projects" },
  { value: 4, suffix: "", label: "Career roles" },
  { value: 2024, suffix: "", label: "Building since" },
];

const About = () => {
  return (
    <section id="about" className="basics overflow-hidden bg-black/50">
      {/* Oversized background word */}
      <div
        aria-hidden="true"
        data-scrub-x="5,-25"
        className="pointer-events-none absolute -z-10 left-0 top-24 select-none whitespace-nowrap font-display text-[22vw] font-extrabold uppercase leading-none text-outline opacity-[0.06]"
      >
        About me &mdash; About me
      </div>

      <div className="container">
        <SecTitle
          index="01"
          head2={"about me"}
          head1={"behind the "}
          headspan={"interface"}
        />

        {/* About Content */}
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 md:grid-cols-2 md:gap-8 lg:gap-16">
          <div className="min-w-0">
            <div className="flex flex-col gap-6 text-white">
              <p
                data-scrub-words
                className="font-display text-xl font-semibold leading-snug tracking-tight sm:text-2xl lg:text-[1.75rem]"
              >
                I’m a results-driven Full-Stack Developer specializing in
                Laravel, PHP, MySQL, and modern frontend technologies. I build
                scalable, high-performance web applications with clean
                architecture, intuitive interfaces, and maintainable code.
              </p>

              <p data-scrub-words className="text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                Beyond development, I focus on solving complex problems,
                optimizing application performance, and translating business
                requirements into impactful digital solutions. Constantly
                expanding my expertise in React, Next.js, and modern web
                technologies, I’m driven by innovation, continuous learning, and
                a commitment to engineering excellence.
              </p>
            </div>

            {/* Stats */}
            <dl data-reveal="stagger" className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="group bg-black/70 p-5 transition-colors duration-500 hover:bg-black/40">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">{stat.label}</dt>
                  <dd className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white transition-colors duration-500 group-hover:text-orange sm:text-4xl">
                    <span data-count={stat.value} data-suffix={stat.suffix}>
                      {stat.value}
                      {stat.suffix}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* About Image */}

          <div
            data-reveal="up"
            style={{
              width: "100%",
              height: "600px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <ProfileCard
              name="Foyjur Rafee"
              title="Full Stack Developer"
              handle="code_with_foyjur"
              status="Online"
              contactText="Contact"
              avatarUrl="/images/foyjur.png"
              iconUrl="/assets/demo/iconpattern.png"
              holo={0.8}
              glare={0.5}
              tiltStrength={12}
              parallax={8}
              radius={16}
              enableTilt
              intro
              showUserInfo
              enableMobileTilt={false}
              theme="dark"
              onContactClick={() => console.log("Contact clicked")}
            />
          </div>
        </div>

        {/* NSDA Certification */}
        <div className="mt-16 grid grid-cols-1 items-center gap-8 sm:mt-20 sm:gap-10 md:mt-24 md:grid-cols-2 md:gap-8 lg:mt-28 lg:gap-16">
          {/* Certificate Image */}
          <div
            data-reveal="clip"
            className="flex min-w-0 items-center justify-center overflow-hidden rounded-2xl md:justify-start"
          >
            <img
              data-tilt="6"
              src="/images/nsda.png"
              alt="NSDA Web Development Certification"
              className="h-auto w-full max-w-sm object-contain sm:max-w-md md:max-w-full"
              loading="lazy"
            />
          </div>

          {/* Certification Heading */}
          <div className="min-w-0">
            <p className="mb-4 text-center font-mono text-xs uppercase tracking-[0.3em] text-white/40 md:text-left">
              Certification
            </p>
            <h3
              data-split
              className="text-center font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-4xl md:text-left lg:text-5xl xl:text-6xl"
            >
              <span className="text-orange">NSDA</span> Certified Web Developer
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
