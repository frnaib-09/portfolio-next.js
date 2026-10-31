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
  <section id="skills" className="basics">
    <div className="container">
      <SecTitle head2="Skills" head1="The Stack " headspan="I Use" />

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

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:gap-6">
        {skillGroups.map(({ title, description, icon: GroupIcon, skills }, index) => (
          <article
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-200 hover:border-orange/50 hover:bg-white/[0.07] sm:p-7"
          >
            <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-orange/10 blur-3xl transition-opacity duration-200 group-hover:bg-orange/20" />

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[3px] text-orange">
                  0{index + 1} / Expertise
                </p>
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-white/60">{description}</p>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange/25 bg-orange/10 text-orange">
                <GroupIcon size={23} strokeWidth={1.7} aria-hidden="true" />
              </span>
            </div>

            <ul className="relative mt-6 flex flex-wrap gap-2.5" aria-label={`${title} skills`}>
              {skills.map(({ name, icon: SkillIcon, label, color }) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/85 transition-colors duration-200 hover:border-white/20 hover:bg-black/50"
                >
                  {SkillIcon ? (
                    <SkillIcon size={17} color={color} aria-hidden="true" />
                  ) : (
                    <span className="min-w-[17px] text-center text-xs font-bold" style={{ color }} aria-hidden="true">
                      {label}
                    </span>
                  )}
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
