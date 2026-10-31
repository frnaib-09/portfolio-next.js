'use client';

import React from "react";
import ProfileCard from '@/components/ProfileCard';
import SecTitle from "@/components/SecTitle";

const About = () => {
  return (
    <section id="about" className="basics">
      <div className="container">
        <SecTitle
          head2={"about me"}
          head1={"behind the "}
          headspan={"interface"}
        />

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

          <div style={{ width: "100%", height: "600px", justifyContent: "center", alignItems: "center", display: "flex" }}>
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
