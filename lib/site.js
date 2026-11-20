// Central SEO config. If the live URL changes (e.g. a custom domain),
// set NEXT_PUBLIC_SITE_URL in Vercel, or edit the fallback below.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://foyjurrafee.vercel.app"
).replace(/\/$/, "");

export const SITE = {
  name: "Foyjur Rafee",
  title: "Foyjur Rafee – Full-Stack Web Developer in Dhaka, Bangladesh",
  description:
    "Foyjur Rafee is a full-stack web developer in Dhaka, Bangladesh, building fast, scalable web apps with Laravel, PHP, React, Next.js and Node.js. Available for projects worldwide.",
  image: "/images/foyjur.jpg",
  email: "code.with.foyjur@gmail.com",
  sameAs: [
    "https://github.com/frnaib-09",
    "https://linkedin.com/in/foyjur-rafee-9aa8513b1/",
    "https://facebook.com/foyjur.rafee.99/",
    "https://instagram.com/code_with_foyjur/",
  ],
  keywords: [
    "Foyjur Rafee",
    "Foyjur",
    "web developer Dhaka",
    "full-stack developer Bangladesh",
    "Laravel developer",
    "Next.js developer",
    "React developer",
    "Volostack",
  ],
};
