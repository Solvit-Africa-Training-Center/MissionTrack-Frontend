// components/Sidebar.tsx
import React, { useState } from "react";
import { LogOut, Menu } from "lucide-react";
import { useAuth } from "../context/AuthContext";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  sidebarItems: { id: string; label: string; icon: React.ElementType }[];
  quickLinks: { title: string; icon: React.ElementType; color: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  sidebarItems,
  quickLinks,
}) => {
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="sm:hidden flex items-center justify-between bg-white shadow px-4 py-3 border-b border-gray-200">
        <h2 className="text-lg font-bold text-gray-800">Mission Portal</h2>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-gray-600 hover:text-gray-900"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar container */}
      <div
        className={`fixed sm:static top-0 left-0 h-full w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col transform transition-transform duration-300 z-40
        ${open ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
      >
        {/* Logo (hidden on mobile, shown in sidebar) */}
        <div className="p-6 border-b border-gray-200 hidden sm:block">
          <h2 className="text-xl font-bold text-gray-800">Mission Portal</h2>
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setOpen(false); // close drawer on mobile
                }}
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
        <div className="mt-6 px-6">
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
    </>
  );
};

export default Sidebar;
