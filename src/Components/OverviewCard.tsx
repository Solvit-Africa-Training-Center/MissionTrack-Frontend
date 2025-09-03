import React from "react";

interface OverviewCardProps {
  title: string;
  value: number;
  color?: string; // optional (default gray)
}

const OverviewCard: React.FC<OverviewCardProps> = ({ title, value, color }) => {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <p className="text-gray-700">{title}</p>
      <h2 className={`text-xl font-bold ${color || "text-gray-800"}`}>
        {value}
      </h2>
    </div>
  );
};

export default OverviewCard;
