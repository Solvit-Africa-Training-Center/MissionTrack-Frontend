// components/Header.tsx
import React from "react";
import { Bell } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
        {/* Title + Subtitle */}
        <div className="text-center sm:text-left">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Mission Request Management System
          </h1>
          <p className="text-gray-600 mt-1 text-sm sm:text-base">
            Here's your mission request overview for today.
          </p>
        </div>

        {/* Right section: notifications + user */}
        <div className="flex items-center justify-center sm:justify-end space-x-3 sm:space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-600 relative">
            <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></span>
          </button>

          {user ? (
            <div className="flex items-center space-x-2 sm:space-x-3 bg-gray-50 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm font-medium">
                  {user.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-xs sm:text-sm font-medium text-gray-700 truncate max-w-[100px] sm:max-w-none">
                  {user}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500">Employee</p>
              </div>
            </div>
          ) : (
            <div className="text-gray-500 italic text-sm">Not logged in</div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
