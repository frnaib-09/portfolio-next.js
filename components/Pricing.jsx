import React from "react";
import SecTitle from "@/components/SecTitle";
import PriceCard from "@/components/PriceCard";

const Pricing = () => {
  return (
    <section id="pricing" className="basics">
      <div className="container mx-auto px-4">
        <SecTitle
          head2="pricing"
          head1="The honorarium"
          headspan=" I Charge"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <PriceCard />
        </div>
          <div className="custom card mt-8">
            
          </div>
      </div>
    </section>
  );
};

export default Pricing;
