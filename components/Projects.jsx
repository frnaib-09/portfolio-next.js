import React from 'react'
import SecTitle from '@/components/SecTitle';
import { RiShareBoxFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";


const Projects = () => {
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
          <div className="grid grid-cols-12 gap-5 items-center justify-between">
            <div className="col-span-12 md:col-span-6 relative group">
              <img
                src="/images/ecobazar.png"
                alt=""
                className="rounded-4xl hover:brightness-70 duration-150 ease"
              />
              <div className="links absolute top-4 right-4 flex gap-4 opacity-0 -translate-x-40 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <a href="https://github.com/frnaib-09/Eco-bazar.git">
                  <FaGithub className="quicklinks" />
                </a>
                <a href="https://frnaib-09.github.io/Eco-bazar/">
                  <RiShareBoxFill className="quicklinks delay-75" />
                </a>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="flex flex-col gap-4 text-justify text-sm leading-7 text-white sm:text-base sm:leading-8">
                EcoBazar is a full-stack e-commerce platform designed to provide
                a seamless online shopping experience. It includes product and
                category management, user authentication, shopping cart
                functionality, order management, and customer and admin
                dashboards. Built with Laravel, the project focuses on
                structured backend development, database management, and
                responsive user interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects