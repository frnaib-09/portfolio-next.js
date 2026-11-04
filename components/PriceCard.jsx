    import React from 'react'

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
                {pricingPlans.map((plan, index) => (
                    <div key={index} className={`card ${plan.featured ? "border! border-orange/50!" : ""}`}>
                        {plan.MostPopular && (
                            <span className="absolute -right-9 top-7 z-10 w-36 rotate-45 bg-orange py-1 text-center text-xs font-semibold text-white shadow-lg">
                                Most Popular
                            </span>
                        )}
                        <h3 className={`text-lg font-bold mb-4 py-1 px-8 inline rounded-r-2xl absolute top-2 left-0 border border-white/10 bg-white/20 ${plan.featured ? "bg-orange! text-white! border-orange/50!" : ""}`}>{plan.name}</h3>
                        <p className="text-3xl font-bold mt-6 mb-4">{plan.price}</p>
                        <p className="text-gray-600 mb-4">{plan.description}</p>
                        <ul className="space-y-2 mb-6">
                            {plan.features.map((feature, featureIndex) => (
                                <li key={featureIndex}><span className="text-orange pr-2">✓</span>{feature}</li>
                            ))}
                        </ul>
                        <button className={`py-2 px-4 rounded-xl w-full ${plan.featured ? "bg-orange text-white transition-all duration-300 hover:bg-white hover:text-orange" : "bg-white/10 text-white hover:bg-white/20"}`}>
                            {plan.button}
                        </button>
                    </div>
                ))}
            </>
        )
    }

    export default PriceCard
