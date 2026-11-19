import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJquery,
  SiPhp,
  SiSqlite,
  SiDjango,
  SiNetlify,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaLaravel,
  FaPython,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa6';
import { TbBrandMysql } from 'react-icons/tb';
import { BadgeCheck, CloudCog, Code2, Database, ShieldCheck, Workflow } from 'lucide-react';
import SecTitle from '@/components/SecTitle';
import LogoLoop from '@/components/LogoLoop';

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive, polished interfaces for the web.",
    icon: Code2,
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#fff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "jQuery", icon: SiJquery, color: "#0769AD" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    ],
  },
  {
    title: "Backend",
    description: "Creating application logic and working with data.",
    icon: Database,
    skills: [
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Django", icon: SiDjango, color: "#44A675" },
      { name: "MySQL", icon: TbBrandMysql, color: "#4479A1" },
      { name: "SQLite", icon: SiSqlite, color: "#74AADB" },
    ],
  },
  {
    title: "DevOps",
    description: "Version control and deploying projects to the web.",
    icon: CloudCog,
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#fff" },
      { name: "Vercel", label: "▲", color: "#fff" },
      { name: "Netlify", icon: SiNetlify, color: "#fff" },
      { name: "GitHub Pages", icon: FaGithub, color: "#fff" },
    ],
  },
  {
    title: "Others",
    description: "The everyday tools and practices behind my workflow.",
    icon: Workflow,
    skills: [
      { name: "Responsive Design", label: "RWD", color: "#FF6602" },
      { name: "UI Implementation", label: "UI", color: "#FF6602" },
      { name: "Component-Based Development", label: "<>", color: "#FF6602" },
    ],
  },
  {
    title: "Security",
    description: "Applying practical security checks while building web apps.",
    icon: ShieldCheck,
    skills: [
      { name: "Input Validation", label: "✓", color: "#44A675" },
      { name: "Authentication Basics", label: "AUTH", color: "#44A675" },
      { name: "OWASP Awareness", label: "OWASP", color: "#44A675" },
    ],
  },
  {
    title: "Testing",
    description: "Checking features and user flows across the interface.",
    icon: BadgeCheck,
    skills: [
      { name: "Manual Testing", label: "✓", color: "#74AADB" },
      { name: "Functional Testing", label: "✓", color: "#74AADB" },
      { name: "Responsive Testing", label: "RWD", color: "#74AADB" },
    ],
  },
];

const skillLogos = skillGroups.flatMap(({ skills }) =>
  skills.map(({ name, icon: SkillIcon, label, color }) => ({
    title: name,
    ariaLabel: name,
    node: SkillIcon ? (
      <SkillIcon size={28} color={color} aria-hidden="true" />
    ) : (
      <span className="text-lg font-bold" style={{ color }} aria-hidden="true">
        {label}
      </span>
    ),
  }))
);

const Skills = () => (
  <section id="skills" className="basics overflow-hidden bg-black/70">
    <div
      aria-hidden="true"
      data-scrub-x="0,-35"
      className="pointer-events-none absolute -z-10 left-0 top-40 select-none whitespace-nowrap font-display text-[20vw] font-extrabold uppercase leading-none text-outline opacity-[0.05]"
    >
      Toolkit &mdash; Toolkit &mdash; Toolkit
    </div>
    <div className="container">
      <SecTitle index="03" head2="expertise" head1="The Stack " headspan="I Use" />

      <div className="mb-10 rounded-2xl py-4 sm:mb-12">
        <LogoLoop
          logos={skillLogos}
          speed={70}
          logoHeight={28}
          gap={36}
          fadeOut
          fadeOutWidth={0.08}
          ariaLabel="Technologies and skills"
        />
      </div>

      {/* Even 3 x 2 grid: every card shares one structure and row height */}
      <div
        data-reveal="stagger"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-5"
      >
        {skillGroups.map(({ title, description, icon: GroupIcon, skills }, index) => (
          <article
            key={title}
            data-tilt="4"
            className="glow-card group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-[background-color,translate] duration-500 ease-expo hover:-translate-y-1.5 hover:bg-white/[0.07] sm:p-7"
          >
            {/* Header */}
            <div className="relative flex items-start justify-between gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange/25 bg-orange/10 text-orange transition-all duration-500 ease-expo group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-orange group-hover:text-black">
                <GroupIcon size={23} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <span className="font-mono text-[11px] tracking-[0.25em] text-white/35 transition-colors duration-500 group-hover:text-orange">
                0{index + 1}
              </span>
            </div>

            <h3 className="relative mt-6 font-display text-2xl font-bold tracking-tight text-white sm:text-[1.7rem]">
              {title}
            </h3>
            <p className="relative mt-2 text-sm leading-6 text-white/55">{description}</p>

            {/* Skills */}
            <ul data-reveal="pop" className="relative mt-6 flex flex-wrap gap-2" aria-label={`${title} skills`}>
              {skills.map(({ name, icon: SkillIcon, label, color }) => (
                <li
                  key={name}
                  style={{ "--c": color }}
                  className="brand-chip inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[13px] text-white/85 hover:-translate-y-0.5"
                >
                  {SkillIcon ? (
                    <SkillIcon size={16} color={color} aria-hidden="true" />
                  ) : (
                    <span className="min-w-4 text-center text-[11px] font-bold" style={{ color }} aria-hidden="true">
                      {label}
                    </span>
                  )}
                  <span>{name}</span>
                </li>
              ))}
            </ul>

            {/* Footer: count + strip of the skills' brand colours */}
            <div className="relative mt-auto pt-8">
              <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                <span>{String(skills.length).padStart(2, "0")} skills</span>
                <span className="text-orange opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Expertise
                </span>
              </div>
              <div className="flex h-1 gap-1 overflow-hidden rounded-full" aria-hidden="true">
                {skills.map(({ name, color }) => (
                  <span
                    key={name}
                    className="flex-1 rounded-full opacity-40 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: color }}
                  />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
