import React from "react";
import SecTitle from "@/components/SecTitle";
import PriceCard from "@/components/PriceCard";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { RxArrowTopRight } from "react-icons/rx";

const Pricing = () => {
  return (
    <section id="pricing" className="basics bg-black/80">
      <div className="container mx-auto">
        <SecTitle
          index="04"
          head2="pricing"
          head1="The honorarium"
          headspan=" I Charge"
        />

        <div data-reveal="stagger" className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <PriceCard />
        </div>

        <div data-reveal="up" className="custom glow-card group relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-6 sm:p-8 lg:p-12">
          {/* Animated colour mesh */}
          <span aria-hidden="true" className="mesh-blob -left-20 -top-24 h-72 w-72 bg-orange/50" />
          <span
            aria-hidden="true"
            className="mesh-blob -bottom-28 right-1/4 h-80 w-80 bg-[#ff2d55]/30"
            style={{ animationDelay: "-5s" }}
          />
          <span
            aria-hidden="true"
            className="mesh-blob right-0 top-0 h-60 w-60 bg-[#ffb070]/25"
            style={{ animationDelay: "-9s" }}
          />

          {/* Decorative oversized word */}
          <span
            aria-hidden="true"
            data-parallax="0.25"
            className="pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 select-none font-display text-[11rem] font-extrabold uppercase leading-none text-outline opacity-10 lg:block"
          >
            Custom
          </span>

          <div className="relative z-10">
            <span className="mb-6 inline-block rounded-full border border-orange/20 bg-orange/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.25em] text-orange">
              Let's Collaborate
            </span>

            <h3 className="mb-3 font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-5xl">
              Have a Unique Project?
            </h3>

            <h4 className="mb-4 text-base font-medium text-orange sm:text-lg">
              Let's Build Something Great Together!
            </h4>

            <p className="max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              Have a specific idea or unique requirements? Let's discuss your
              vision, explore the possibilities, and find the right solution
              that fits your goals and budget.
            </p>

            <div className="my-8 h-0.5 bg-linear-to-r from-orange/40 via-white/10 to-transparent sm:my-10" />

            <div className="mb-8 flex items-start gap-4 sm:gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange/20 bg-orange/10">
                <HiOutlineCalendarDateRange className="text-2xl text-orange" />
              </div>

              <div>
                <h5 className="mb-2 text-base font-medium text-white sm:text-lg">
                  Book a Free Consultation
                </h5>
                <p className="text-sm leading-6 text-white/50 sm:text-base">
                  Let's talk about your project, discuss your requirements,
                  and plan the next steps together.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              data-magnetic="0.15"
              className="group/btn relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-orange px-5 py-4 text-sm font-semibold text-black transition-colors duration-500 hover:text-orange sm:w-fit sm:px-10"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-0 translate-y-full rounded-full bg-white transition-transform duration-500 ease-expo group-hover/btn:translate-y-0"
              />
              <span className="relative">Book an Appointment</span>
              <RxArrowTopRight className="relative text-xl transition-transform duration-500 ease-expo group-hover/btn:rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
