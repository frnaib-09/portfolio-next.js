import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 min-h-screen bg-black/80 px-4 py-16 text-secondary sm:px-6 sm:py-20 md:px-10 md:py-28"
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="relative mb-16 w-fit text-lg font-normal uppercase tracking-[6px] text-orange after:absolute after:-bottom-5 after:left-0 after:h-1 after:w-14 after:bg-white sm:text-2xl sm:tracking-[10px] md:mb-20 md:text-2xl">
          About Me
        </h2>

        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
          {/* About Content */}
          <div className="min-w-0">
            <h1 className="py-4 text-4xl font-semibold uppercase leading-tight text-orange sm:text-5xl md:py-6 md:text-5xl lg:text-6xl xl:text-7xl">
              Behind the <span className="text-white">Interface</span>
            </h1>

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
          <div className="mx-auto mt-4 w-full max-w-md md:mt-0 md:max-w-none">
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
      </div>
    </section>
  );
};

export default About;
