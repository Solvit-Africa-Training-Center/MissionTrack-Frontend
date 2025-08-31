// components/QuickLinksPanel.tsx
import React from "react";
import { ChevronRight, Download } from "lucide-react";

const QuickLinksPanel: React.FC<{ quickLinks: { title: string; icon: React.ElementType; color: string }[] }> = ({ quickLinks }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Quick Links</h2>
      </div>
      <div className="p-6">
        <div className="space-y-3">
          {quickLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <button
                key={i}
                className="w-full flex items-center p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
              >
                <div className={`p-2 rounded-md ${link.color} mr-4 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-gray-700">{link.title}</span>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
              </button>
            );
          })}
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Download Reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickLinksPanel;
