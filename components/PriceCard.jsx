    import React from 'react'
    import { Rocket, BriefcaseBusiness, Gem, ShoppingCart } from 'lucide-react'

    const planIcons = [Rocket, BriefcaseBusiness, Gem, ShoppingCart]

    const PriceCard = () => {
        const pricingPlans = [
          {
            name: "Starter",
            price: "$79.99",
            description:
              "Perfect for personal brands, portfolios, and small websites.",
            features: [
              "Single-Page Website",
              "Responsive Design",
              "Modern UI Design",
              "Contact Form Integration",
              "Basic SEO Setup",
              "7 Days Support",
            ],
            button: "Get Started",
            featured: false,
          },
          {
            name: "Business",
            price: "$149.99",
            description:
              "Everything you need to establish your business online.",
            features: [
              "Up to 5 Pages",
              "Custom UI Design",
              "Responsive Layout",
              "Contact Form Integration",
              "Basic SEO Setup",
              "Website Deployment",
              "14 Days Support",
            ],
            button: "Upgrade Your Website",
          },
          {
            name: "Business Plus",
            price: "$169.99",
            description:
              "Enhanced functionality and interactions for growing businesses.",
            features: [
              "Everything in Business",
              "Advanced UI Interactions",
              "Smooth Animations",
              "Blog or CMS Integration",
              "Analytics Integration",
              "Performance Optimization",
              "30 Days Support",
            ],

            button: "Choose Plan",
            featured: true,
            MostPopular: true,
          },
          {
            name: "E-commerce",
            price: "$299.99",
            description:
              "Launch your online store and start selling your products.",
            features: [
              "Product Catalog",
              "Product Details Pages",
              "Shopping Cart",
              "Checkout Integration",
              "Order Management",
              "Payment Gateway Integration",
              "30 Days Support",
            ],
            button: "Let's Talk",
            featured: false,
          },
        ];
        return (
            <>
                {pricingPlans.map((plan, index) => {
                    const PlanIcon = planIcons[index] ?? Rocket
                    return (
                    <div
                        key={plan.name}
                        data-tilt="5"
                        className={`card glow-card group flex flex-col ${plan.featured ? "z-10 bg-orange/[0.07]! shadow-[0_30px_80px_-30px_rgba(255,102,2,0.45)] lg:scale-[1.04]" : ""}`}
                    >
                        {plan.featured && <span className="spin-border" aria-hidden="true" />}
                        {plan.featured && (
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-orange/30 blur-[70px]"
                            />
                        )}
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-8 -right-2 font-display text-[8rem] font-extrabold leading-none text-white/[0.03] transition-colors duration-500 group-hover:text-orange/[0.08]"
                        >
                            0{index + 1}
                        </span>
                        {plan.MostPopular && (
                            <span className="absolute -right-9 top-7 z-10 w-36 rotate-45 bg-orange py-1 text-center font-mono text-[10px] font-medium uppercase tracking-widest text-black shadow-lg">
                                Popular
                            </span>
                        )}
                        <div className="relative flex items-center gap-3">
                            <span className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-500 ease-expo group-hover:-rotate-8 group-hover:scale-110 ${plan.featured ? "border-orange bg-orange text-black" : "border-orange/25 bg-orange/10 text-orange group-hover:bg-orange group-hover:text-black"}`}>
                                <PlanIcon size={19} strokeWidth={1.8} aria-hidden="true" />
                            </span>
                            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-orange">
                                {plan.name}
                            </h3>
                        </div>
                        <p className="mt-6 whitespace-nowrap font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[1.65rem] xl:text-3xl">
                            <span data-count={plan.price.replace("$", "")} data-decimals="2" data-prefix="$">
                                {plan.price}
                            </span>
                        </p>
                        <p className="mt-4 text-sm leading-6 text-white/55">{plan.description}</p>
                        <div className="my-6 h-px bg-linear-to-r from-white/15 to-transparent" aria-hidden="true" />
                        <ul data-reveal="pop" className="relative mb-8 space-y-3 text-sm text-white/80">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-orange" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#contact"
                            className={`mt-auto block rounded-full py-3 px-4 text-center text-sm font-semibold transition-all duration-500 ease-expo ${
                                plan.featured
                                    ? "shine relative bg-orange text-black hover:bg-white"
                                    : "border border-white/15 text-white hover:border-orange hover:bg-orange hover:text-black"
                            }`}
                        >
                            {plan.button}
                        </a>
                    </div>
                    )
                })}
            </>
        )
    }

    export default PriceCard
