import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 min-h-screen bg-black/80 px-4 py-16 text-secondary sm:px-6 sm:py-20 md:px-10 md:py-24 lg:py-28"
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="relative mb-12 w-fit text-base font-normal uppercase tracking-[5px] text-orange after:absolute after:-bottom-4 after:left-0 after:h-1 after:w-14 after:bg-white sm:mb-16 sm:text-xl sm:tracking-[8px] md:mb-20 md:text-2xl md:tracking-[10px]">
          About Me
        </h2>

        {/* Main Heading */}
        <h1 className="mb-8 text-3xl font-semibold uppercase leading-tight text-orange sm:mb-10 sm:text-4xl md:mb-12 md:text-5xl lg:text-6xl xl:text-7xl">
          Behind the <span className="text-white">Interface</span>
        </h1>

        {/* About Content */}
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 md:grid-cols-2 md:gap-8 lg:gap-16">
          <div className="min-w-0">
            <div className="flex flex-col gap-4 text-justify text-sm leading-7 text-white sm:text-base sm:leading-8">
              <p>
                I’m a results-driven Full-Stack Developer specializing in
                Laravel, PHP, MySQL, and modern frontend technologies. I build
                scalable, high-performance web applications with clean
                architecture, intuitive interfaces, and maintainable code.
              </p>

              <p>
                Beyond development, I focus on solving complex problems,
                optimizing application performance, and translating business
                requirements into impactful digital solutions. Constantly
                expanding my expertise in React, Next.js, and modern web
                technologies, I’m driven by innovation, continuous learning, and
                a commitment to engineering excellence.
              </p>
            </div>
          </div>

          {/* About Image */}
          <div className="mx-auto mt-2 w-full max-w-md min-w-0 md:mt-0 md:max-w-none">
            <img
              src="/images/about.jpg"
              alt="Developer workspace and creative process"
              className="h-auto w-full rounded-sm object-cover"
              loading="lazy"
            />

            <p className="mt-4 text-xs font-normal italic uppercase tracking-[2px] text-gray-400 sm:mt-5 sm:text-sm sm:tracking-[4px]">
              Less noise, more build ups.
            </p>
          </div>
        </div>

        {/* NSDA Certification */}
        <div className="mt-16 grid grid-cols-1 items-center gap-8 sm:mt-20 sm:gap-10 md:mt-24 md:grid-cols-2 md:gap-8 lg:mt-28 lg:gap-16">
          {/* Certificate Image */}
          <div className="flex min-w-0 items-center justify-center md:justify-start">
            <img
              src="/images/nsda.png"
              alt="NSDA Web Development Certification"
              className="h-auto w-full max-w-sm object-contain sm:max-w-md md:max-w-full"
              loading="lazy"
            />
          </div>

          {/* Certification Heading */}
          <div className="min-w-0">
            <h2 className="text-center text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl md:text-left md:text-4xl lg:text-6xl">
              <span className="text-orange">NSDA</span> Certified Web Developer
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
