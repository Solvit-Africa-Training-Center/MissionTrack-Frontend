import React from "react";
import { FaCheck } from "react-icons/fa";

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  title: string;
  description: string;
  price: string;
  features: PricingFeature[];
  popular?: boolean;
  highlighted?: boolean;
}

const plans: PricingPlan[] = [
  {
    title: "Basic",
    description: "Perfect for small teams and startups",
    price: "40,000",
    features: [
      { text: "Up to 15 mission requests per month" },
      { text: "Basic approval workflow" },
      { text: "Standard reporting" },
      { text: "Email support" },
    ],
  },
  {
    title: "Standard",
    description: "Ideal for growing organizations",
    price: "80,000",
    features: [
      { text: "Up to 40 mission requests per month" },
      { text: "Advanced reporting & analytics" },
      { text: "Custom approval workflows" },
      { text: "Priority support" },
    ],
    popular: true,
    highlighted: true,
  },
  {
    title: "Premium",
    description: "Best for large organizations",
    price: "120,000",
    features: [
      { text: "Unlimited mission requests" },
      { text: "Dedicated account manager" },
      { text: "Custom integrations" },
      { text: "24/7 premium support" },
    ],
  },
];

const PricingCard: React.FC<PricingPlan> = ({
  title,
  description,
  price,
  features,
  popular,
  highlighted,
}) => {
  return (
    <div
      className={`relative p-6 rounded-lg bg-white ${
        highlighted ? "shadow-md transform scale-105" : "shadow-sm"
      } flex flex-col items-center gap-6 w-[300px] mx-auto`}
    >
      {popular && (
        <div className="absolute top-4 right-4">
          <h1 className="bg-accent-500 text-sm px-2 py-1 rounded-lg text-white">
            Most Popular
          </h1>
        </div>
      )}

      <div className={`flex flex-col gap-5 items-start w-full ${popular ? "mt-8" : ""}`}>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-gray-800">{description}</p>
        <h1 className="text-2xl font-bold text-gray-800">
          RF <span className="text-3xl">{price}</span>
        </h1>

        {features.map((feature, index) => (
          <div key={index} className="flex gap-2">
            <FaCheck size={20} className="text-accent-500" />
            <p className="text-sm text-gray-800">{feature.text}</p>
          </div>
        ))}
      </div>

      <button
        className={`mt-20 rounded-lg px-20 py-1 border ${
          highlighted
            ? "bg-primaryColor-800 text-white border-accent-700"
            : "bg-white text-accent-700 border-accent-700"
        }`}
      >
        Get Started
      </button>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full px-[120px] max-sm:px-10 py-20">
        {/* Header */}
        <div className="flex justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Simple, Transparent Pricing</h1>
            <p className="text-2xl text-gray-600 mt-5">
              Choose the plan that fits your organization's needs.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
