import React from "react";
import { useTheme } from "../hook/useTheme";

interface OverviewCardProps {
  title: string;
  value: number;
  color?: string; // optional (default gray)
}

const OverviewCard: React.FC<OverviewCardProps> = ({ title, value, color }) => {
  const {theme} = useTheme();
  return (
    <div className={` p-4 rounded shadow text-center ${theme === "light"?"bg-white text-black":"bg-gray-800 text-white"}`}>
      <p className="">{title}</p>
      <h2 className={`text-xl font-bold ${color || "text-gray-800"}`}>
        {value}
      </h2>
    </div>
  );
};

export default OverviewCard;
