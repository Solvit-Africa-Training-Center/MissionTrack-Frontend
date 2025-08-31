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
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 lg:col-span-2">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        <div className="flex space-x-2">
          <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
            <Search className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="p-6 space-y-4">
        {activities.map((a, i) => {
          const Icon = a.icon;
          return (
            <div key={i} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className={`p-2 rounded-full bg-white shadow-sm ${a.color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{a.title}</p>
                <p className="text-sm text-gray-500">{a.time}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 mt-1" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;
