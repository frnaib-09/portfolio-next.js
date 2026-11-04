
import Image from "next/image";
import Banner from "@/components/Banner";
import About from "@/components/About";
import MouseSpotlight from "@/components/MouseSpotlight"; 
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Pricing from "@/components/Pricing";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  
  return (
    <div>
      <Banner />
      <MouseSpotlight />
      <About />
      <Projects />
      <ScrollReveal><Skills /></ScrollReveal>
      <ScrollReveal><Pricing /></ScrollReveal>
      <ScrollReveal><Career /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>
    </div>
  );
}
