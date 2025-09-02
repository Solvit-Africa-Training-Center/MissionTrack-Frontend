// components/QuickLinksPanel.tsx
import React from "react";
import { ChevronRight} from "lucide-react";

const QuickLinksPanel: React.FC<{
  quickLinks: { title: string; icon: React.ElementType; color: string }[];
}> = ({ quickLinks }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900">
          Quick Links
        </h2>
      </div>

      {/* Links */}
      <div className="p-4 sm:p-6">
        <div className="space-y-2 sm:space-y-3">
          {quickLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <button
                key={i}
                className="w-full flex items-center p-3 sm:p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
              >
                {/* Icon */}
                <div
                  className={`p-2 sm:p-3 rounded-md ${link.color} mr-3 sm:mr-4 group-hover:scale-105 transition-transform`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                {/* Label */}
                <span className="font-medium text-sm sm:text-base text-gray-700">
                  {link.title}
                </span>
                {/* Chevron */}
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 ml-auto" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuickLinksPanel;
