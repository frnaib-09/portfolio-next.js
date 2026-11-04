import React from "react";
import SecTitle from "@/components/SecTitle";
import PriceCard from "@/components/PriceCard";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { RxArrowTopRight } from "react-icons/rx";

const Pricing = () => {
  return (
    <section id="pricing" className="basics bg-black/80">
      <div className="container mx-auto px-4">
        <SecTitle
          head2="pricing"
          head1="The honorarium"
          headspan=" I Charge"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-4">
          <PriceCard />
        </div>

        <div className="custom card group relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-6 transition-colors duration-300 hover:border-orange/30 sm:p-8 lg:p-10">
          {/* Decorative glow */}

          <div className="relative z-10">
            <span className="mb-4 inline-block rounded-full border border-orange/20 bg-orange/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-orange">
              Let's Collaborate
            </span>

            <h3 className="mb-3 text-xl font-semibold leading-snug text-white sm:text-2xl lg:text-3xl">
              Have an Unique Project?
            </h3>

            <h4 className="mb-4 text-base font-medium text-orange sm:text-lg">
              Let's Build Something Great Together!
            </h4>

            <p className="text-sm leading-7 text-white/60 sm:text-base">
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
              href="#contForm"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-orange px-5 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-orange"
            >
              Book an Appointment
              <RxArrowTopRight className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
