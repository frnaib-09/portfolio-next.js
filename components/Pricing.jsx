import React from "react";
import SecTitle from "@/components/SecTitle";
import PixelCard from "./PixelCard";

const pricingPlans = [
  {
    name: "Basic",
    price: "$79",
    description: "Perfect for small businesses and personal brands.",
    features: [
      "Responsive Website",
      "Up to 5 Pages",
      "Modern UI Design",
      "Contact Form Integration",
      "Basic SEO Setup",
      "7 Days Support",
    ],
    button: "Get Started",
    featured: false,
  },
  {
    name: "Professional",
    price: "$279",
    description: "Everything you need to grow your business online.",
    features: [
      "Everything in Basic",
      "Up to 10 Pages",
      "Custom UI/UX Design",
      "Laravel Backend Integration",
      "Database Integration",
      "Admin Dashboard",
      "30 Days Support",
    ],
    button: "Choose Plan",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$479",
    description: "Advanced solutions built around your business needs.",
    features: [
      "Everything in Professional",
      "Custom Web Application",
      "Advanced API Integration",
      "Payment Gateway Integration",
      "Performance Optimization",
      "Priority Support",
      "Custom Features",
    ],
    button: "Let's Talk",
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="basics py-20">
      <div className="container mx-auto px-4">
        <SecTitle
          head2="pricing"
          head1="The honorarium"
          headspan=" I Charge"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
          {pricingPlans.map((plan, index) => (
            <PixelCard
              key={plan.name}
              colors={["#f8fafc", "#f1f5f9", "#cbd5e1"]}
              glowColor={plan.featured ? "#FF6602" : "#cbd5e1"}
              shape="square"
              origin="center"
              gap={12}
              pixelSize={2}
              speed={35}
              revealDuration={600}
              spotlight={0.5}
              glow={0.5}
              opacity={0.35}
              fade={0.7}
              trigger="hover"
              radius={24}
              clickPulse
              intro
              theme="dark"
            >
              <div
                className="h-full min-h-140 p-7 md:p-8 flex flex-col rounded-3xl"
              >
                {plan.featured && (
                  <span className="text-xs font-semibold tracking-widest uppercase text-orange mb-4">
                    Most Popular
                  </span>
                )}

                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>

                <p className="text-sm text-gray-400 mt-3 leading-6">
                  {plan.description}
                </p>

                <div className="mt-7 mb-6">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-sm ml-2">/ project</span>
                </div>

                <div className="border-t mb-6" />

                <p className="text-sm font-semibold text-gray-200 mb-4">
                  What's included
                </p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <span className="text-orange font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-auto w-full py-3 px-5 rounded-full text-center text-sm font-semibold transition-all duration-300 ${
                    plan.featured
                      ? "bg-orange text-white hover:bg-white hover:text-black"
                      : "border border-white/20 text-white hover:bg-orange hover:border-orange"
                  }`}
                >
                  {plan.button}
                </a>
              </div>
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
