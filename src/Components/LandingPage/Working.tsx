import React from "react";
import { IoDocumentText } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-lg bg-white shadow-sm flex flex-col items-center gap-4 w-[250px] mx-auto">
      <div>{icon}</div>
      <div>
        <h1 className="text-xl text-center font-semibold">{title}</h1>
        <p className="text-sm mt-5 text-center text-gray-800">{description}</p>
      </div>
    </div>
  );
};

const Working: React.FC = () => {
  const steps = [
    {
      icon: <IoDocumentText size={50} className="text-primaryColor-500" />,
      title: "Request",
      description:
        "Employee submits a mission request with all necessary details through the digital form.",
    },
    {
      icon: <FaCheck size={50} className="text-accent-500" />,
      title: "Approval",
      description:
        "Manager reviews the request and approves or denies with optional feedback.",
    },
    {
      icon: <RiMoneyDollarCircleLine size={50} className="text-green-500" />,
      title: "Finance",
      description:
        "Finance department processes approved requests and allocates necessary funds.",
    },
    {
      icon: <BsGraphUp size={50} className="text-[#FFB361]" />,
      title: "Tracking",
      description:
        "Expenses are tracked in real-time as the employee completes their mission.",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-full px-[120px] max-sm:px-10">
        {/* Header */}
        <div className="flex justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold">How it works</h1>
            <p className="text-2xl text-gray-600 p-5">
              A simple four-step process from mission request to expense
              tracking
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;
