// components/RecentActivity.tsx
import React from "react";
import { ChevronRight, Search, Filter } from "lucide-react";

interface Activity {
  title: string;
  time: string;
  color: string;
  icon: React.ElementType;
}

const RecentActivity: React.FC<{ activities: Activity[] }> = ({ activities }) => {
  return (
    <div className=" bg-white rounded-xl shadow-sm border border-gray-200 lg:col-span-2">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900">
          Recent Activity
        </h2>
        <div className="flex space-x-2">
          <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Activity List */}
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        {activities.map((a, i) => {
          const Icon = a.icon;
          return (
            <div
              key={i}
              className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {/* Icon */}
              <div
                className={`p-2 rounded-full bg-white shadow-sm ${a.color} flex-shrink-0`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
                  {a.title}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">{a.time}</p>
              </div>

              {/* Chevron */}
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-1 flex-shrink-0" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;
