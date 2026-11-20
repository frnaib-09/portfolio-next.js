import { Geist, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/motion/Cursor";
import BackToTop from "@/components/BackToTop";
import MotionDirector from "@/components/motion/MotionDirector";
import { SITE, SITE_URL } from "@/lib/site";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-syne",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE.title,
  description: SITE.description,
  keywords: SITE.keywords,
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [{ url: SITE.image, alt: SITE.name }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [SITE.image],
  },
  // Paste the Google Search Console HTML-tag code into the
  // NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION env var on Netlify.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE_URL,
  image: `${SITE_URL}${SITE.image}`,
  jobTitle: "Full-Stack Web Developer",
  email: `mailto:${SITE.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Presidency University" },
  worksFor: { "@type": "Organization", name: "Volostack Digital Solutions" },
  knowsAbout: [
    "Laravel",
    "PHP",
    "MySQL",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Web Development",
  ],
  sameAs: SITE.sameAs,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn("font-sans", geist.variable, syne.variable, mono.variable)}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <div id="scroll-progress" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
        <Preloader />
        <Navbar />
        {children}
        <BackToTop />
        <Cursor />
        <MotionDirector />
      </body>
    </html>
  );
}
