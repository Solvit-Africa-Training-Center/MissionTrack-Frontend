import React from "react";
import { useTheme } from "../hook/useTheme";

// Example list of activities
const activities = [
  {
    title: "Mission To London approved",
    time: "2 hours ago",
    color: "bg-green-400",   // dot color
    background: "bg-green-100", // row background
  },
  {
    title: "new request Submitted",
    time: "5 hours ago",
    color: "bg-blue-500",
    background: "bg-blue-100",
  },
  {
    title: "Budget Review Pending",
    time: "1 day ago",
    color: "bg-orange-400",
    background: "bg-orange-100",
  },
];

const RecentActivities: React.FC = () => {
  const {theme}=useTheme();
  return (
    <div className={`rounded-xl shadow-sm p-5 ${theme === "light"?"bg-white text-black":"bg-gray-800 text-white"}`} >
      <h3 className="font-bold text-gray-800 mb-4">Recent Activities</h3>

      <div className={`space-y-3 ${theme === "light"?"bg-white text-black":"bg-gray-800 text-white"}`}>
        {activities.map((activity, index) => (
         
             <div
            key={index}
            className={`flex items-start gap-3 rounded-lg px-4 py-3 ${activity.background}`}
          >
            {/* Colored dot */}
            <span className={`w-3 h-3 rounded-full mt-1 ${activity.color}`} />

            {/* Activity text */}
            <div>
              <p className="font-medium text-gray-800">{activity.title}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
         
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
