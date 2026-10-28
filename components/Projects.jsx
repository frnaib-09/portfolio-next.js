import React from 'react'
import SecTitle from '@/components/SecTitle';
import AccordionGallery from "./AccordionGallery";



const Projects = () => {
  const items = [
    {
      image: "/images/ecobazar.png",
      label: "E-commerce Website",
      link: "https://frnaib-09.github.io/Eco-bazar/",
      target: "_blank",
    },
    {
      image: "/images/furniro.jpg",
      label: "E-commerce Website",
      link: "https://furniro-jet-ten.vercel.app",
      target: "_blank",
    },
    {
      image: "/images/doc.png",
      label: "Doctor Portfolio Website ",
      link: "https://doctor-portfolio-alpha-blue.vercel.app/",
      target: "_blank",
    },
    {
      image: "/images/gapushgupush.png",
      label: "Restaurent Website",
      link: "https://frnaib-09.github.io/GAPUSH_GUPUSH/",
      target: "_blank",
    },
    {
      image: "/images/ashikur.png",
      label: "UI|UX Designer Portfolio",
      link: "https://frnaib-09.github.io/Ashikur-Rahman/",
      target: "_blank",
    },
  ];
  return (
    <section
      id="projects"
      className="relative z-10 min-h-screen bg-black/80 px-4 py-16 text-secondary sm:px-6 sm:py-20 md:px-10 md:py-24 lg:py-28"
    >
      <div className="container">
        <SecTitle
          head2={"contributions"}
          head1={"Projects I've "}
          headspan={"worked on!"}
        />
        <div className="projectCards">
          <AccordionGallery
            items={items}
            defaultIndex={2}
            expandRatio={0.52}
            trigger="hover"
            accentColor="#ffffff"
            overlayColor="#060010"
            textColor="#ffffff"
            showLabels
            duration={0.6}
            ease="power3.out"
            parallax={0.5}
            tilt={8}
            stagger={0.06}
            height={460}
            gap={10}
            radius={16}
            orientation="horizontal"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects