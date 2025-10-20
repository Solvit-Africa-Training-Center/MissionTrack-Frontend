import React from "react";
import { IoDocumentText } from "react-icons/io5";
import { CiWavePulse1 } from "react-icons/ci";
import { SiTicktick } from "react-icons/si";
import { FiDollarSign } from "react-icons/fi";

const Features: React.FC = () => {
  // Reusable card component
  const FeatureCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }> = ({ icon, title, description }) => (
    <div className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-start w-[250px] mx-auto hover:shadow-md hover:scale-105 transition-transform duration-300">
      <div className="flex items-start gap-4 flex-col">
        <div className="bg-blue-100 rounded-full p-2">{icon}</div>
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="text-sm mt-5 text-start text-gray-800">{description}</p>
        </div>
      </div>
    </div>
  );

  // Feature data
  const features = [
    {
      icon: <IoDocumentText size={50} className="text-[#4D8FFAE5]" />,
      title: "Easy Mission Request",
      description:
        "Submit mission requests digitally in minutes, eliminating paperwork and reducing errors.",
    },
    {
      icon: <CiWavePulse1 size={50} className="text-[#4D8FFAE5]" />,
      title: "Real-time Tracking",
      description:
        "Monitor your request status at every stage with instant notifications and updates.",
    },
    {
      icon: <SiTicktick size={50} className="text-[#4D8FFAE5]" />,
      title: "Manager Approval",
      description:
        "Approvals simplified for managers with clear visibility and fast decision-making.",
    },
    {
      icon: <FiDollarSign size={50} className="text-[#4D8FFAE5]" />,
      title: "Expense Monitoring",
      description:
        "Track expenses with ease, ensuring transparency and better financial control.",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-full  p-[120px] max-sm:p-10">  
        {/* Header */}
        <div className="flex justify-center text-center">
          <div>
            <h1 className="text-3xl font-bold">Powerful Features</h1>
            <p className="text-2xl text-gray-600 mt-5">
              Everything you need to manage mission requests and expenses in one platform
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
