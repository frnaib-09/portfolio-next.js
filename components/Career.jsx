
import React from "react";
import SecTitle from "@/components/SecTitle";
import {
  HiOutlineArrowUpRight,
  HiOutlineBriefcase,
} from "react-icons/hi2";

const Career = () => {
  const experiences = [
    {
      id: "01",
      company: "VoloStack Digital Solutions",
      role: "Founder & Full Stack Developer",
      duration: "Present",
      type: "Entrepreneurship",
      description:
        "Founded a digital solutions agency focused on building modern websites and web applications. Working across frontend development, backend architecture, and project management.",
      tech: ["Laravel", "PHP", "React", "Next.js", "MySQL"],
      current: true,
    },
    {
      id: "02",
      company: "Creative IT Institute",
      role: "Jr. Web Developer",
      duration: "2025",
      type: "Internship",
      description:
        "Gained practical experience in web development through hands-on projects, developing responsive interfaces and improving frontend development skills.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      current: false,
    },
    {
      id: "03",
      company: "Fiverr & Upwork Freelance Projects",
      role: "Freelance Web Developer",
      duration: "2024 — Present",
      type: "Independent Work",
      description:
        "Working on independent web development projects, creating business websites, portfolio platforms, and dynamic web applications with a focus on usability and clean code.",
      tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      current: false,
    },
    {
      id: "04",
      company: "LogicVeda Technologies",
      role: "Full Stack Developer",
      duration: "4 months",
      type: "Project Experience",
      description:
        "Building practical projects to explore modern web technologies, improve problem-solving abilities, and develop production-oriented development workflows.",
      tech: ["React", "Next.js", "Tailwind CSS", "Git"],
      current: false,
    },
  ];

  return (
    <section id="career" className="basics bg-black/90">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

          {/* Sticky Left Content */}
          <div className="md:sticky md:top-28 md:self-start">

            <SecTitle
              head2="Career"
              head1="My professional "
              headspan="journey"
            />

            <p className="mt-7 max-w-md text-sm leading-7 text-white/50">
              Every experience has been a step forward.
              Here's a look at my journey through web
              development, entrepreneurship, and building
              digital experiences.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange/20 bg-orange/10 text-orange">
                <HiOutlineBriefcase size={23} />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  Web Development
                </h3>
                <p className="mt-1 text-xs text-white/40">
                  Experience & Growth
                </p>
              </div>
            </div>

            <div className="mt-12 hidden md:block">
              <span className="text-xs uppercase tracking-[0.25em] text-white/30">
                Scroll to explore
              </span>
              <div className="mt-3 h-[1px] w-24 bg-orange/50" />
            </div>

          </div>

          {/* Right Experience Timeline */}
          <div className="relative">

            <div className="absolute left-[19px] top-5 bottom-10 w-px bg-white/10" />

            <div className="space-y-0">
              {experiences.map((item, index) => (
                <article
                  key={item.id}
                  className="group relative pb-14 pl-16"
                >

                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-[12px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      item.current
                        ? "border-orange bg-orange shadow-[0_0_15px_rgba(255,102,2,0.4)]"
                        : "border-white/20 bg-[#111]"
                    }`}
                  />

                  {/* Experience Number */}
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs font-medium tracking-[0.2em] text-orange">
                      EXPERIENCE / {item.id}
                    </span>

                    {item.current && (
                      <span className="flex items-center gap-2 text-xs text-orange">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                        Currently Working
                      </span>
                    )}
                  </div>

                  {/* Company */}
                  <div className="mb-3">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white transition-colors duration-300 group-hover:text-orange">
                      {item.company}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-white/70">
                      {item.role}
                    </p>
                  </div>

                  {/* Duration & Type */}
                  <div className="mb-5 flex flex-wrap items-center gap-3 text-xs text-white/40">
                    <span>{item.duration}</span>
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                    <span>{item.type}</span>
                  </div>

                  {/* Description */}
                  <p className="max-w-lg text-sm leading-7 text-white/50">
                    {item.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tech.map((technology) => (
                      <span
                        key={technology}
                        className="border border-white/10 px-3 py-1.5 text-xs text-white/50 transition-all duration-300 group-hover:border-orange/30 group-hover:text-white/80"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Divider */}
                  <div className="mt-10 h-px w-full bg-white/10 transition-colors duration-300 group-hover:bg-orange/30" />

                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Career;
