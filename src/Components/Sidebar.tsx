// components/Sidebar.tsx
import React from "react";
import { LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  sidebarItems: { id: string; label: string; icon: React.ElementType }[];
  quickLinks: { title: string; icon: React.ElementType; color: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, sidebarItems, quickLinks }) => {
  const { logout } = useAuth();

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Mission Portal</h2>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                activeTab === item.id
                  ? "bg-blue-50 border-r-2 border-blue-500 text-blue-600"
                  : "text-gray-600"
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Quick Links */}
      <div className="mt-8 px-6">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
          Quick Actions
        </h3>
        <div className="space-y-2">
          {quickLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <button
                key={i}
                className="w-full flex items-center p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <div className={`p-2 rounded-md ${link.color} mr-3`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-gray-700">{link.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Logout */}
      <div className="mt-auto p-6">
        <button
          onClick={logout}
          className="flex items-center w-full px-4 py-3 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
