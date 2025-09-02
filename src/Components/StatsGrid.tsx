// components/StatsGrid.tsx
import React from "react";
import { ChevronRight } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  color: "blue" | "green" | "yellow" | "purple";
  icon: React.ElementType;
}

const StatsGrid: React.FC<{ stats: Stat[] }> = ({ stats }) => {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 border-blue-200",
    green: "bg-green-50 text-green-600 border-green-200",
    yellow: "bg-yellow-50 text-yellow-600 border-yellow-200",
    purple: "bg-purple-50 text-purple-600 border-purple-200",
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div
            key={i}
            className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 hover:shadow-md hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className={`p-2 sm:p-3 rounded-lg border ${colorClasses[stat.color]}`}>
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StatsGrid;
