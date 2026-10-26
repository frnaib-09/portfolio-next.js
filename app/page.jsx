
import Image from "next/image";
import Banner from "@/components/Banner";
import About from "@/components/About";
import MouseSpotlight from "@/components/MouseSpotlight"; 
import Projects from "@/components/Projects"

export default function Home() {
  
  return (
    <div>
      <Banner />
      <MouseSpotlight />
      <About />
      <Projects />
    </div>
  );
}
