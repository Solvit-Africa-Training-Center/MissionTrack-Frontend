// components/Header.tsx
import React from "react";
import { Bell } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Mission Request Management System
          </h1>
          <p className="text-gray-600 mt-1">
            Here's your mission request overview for today.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-600 relative">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-3 bg-gray-50 rounded-lg px-3 py-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                {user?.email.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-700">{user?.email}</p>
              <p className="text-xs text-gray-500">Employee</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
