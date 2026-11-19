import Banner from "@/components/Banner";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Pricing from "@/components/Pricing";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import VelocityMarquee from "@/components/motion/VelocityMarquee";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Projects />
      <Skills />
      <Pricing />
      <Career />
      <VelocityMarquee />
      <Contact />
    </main>
  );
}
