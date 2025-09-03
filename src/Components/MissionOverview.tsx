import React from "react";
import OverviewCard from "./OverviewCard";

const MissionOverview: React.FC = () => {
  // Example mission data
  const stats = [
    { title: "All Missions", value: 12,color: "text-blue-700" },
    { title: "Approved", value: 12, color: "text-green-600" },
    { title: "Pending", value: 12, color: "text-yellow-600" },
    { title: "Rejected", value: 12, color: "text-red-600" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <OverviewCard
          key={index}
          title={stat.title}
          value={stat.value}
          color={stat.color}
        />
      ))}
    </div>
  );
};

export default MissionOverview;
