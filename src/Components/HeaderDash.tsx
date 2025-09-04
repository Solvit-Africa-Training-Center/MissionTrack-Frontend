import React from "react";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useTheme } from "../hook/useTheme";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const twTheme = (light: string, dark: string) =>
    theme === "light" ? light : dark;

  return (
    <header
      className={`flex items-center justify-between px-6 py-4 border-b ${twTheme(
        "bg-white border-gray-200",
        "bg-gray-800 border-gray-700"
      )}`}
    >
      <div>
        <h1 className="bg-gradient-to-r font-bold text-2xl max-sm:text-2xl from-[#4D8FFAE5] to-[#11A677E5] text-transparent bg-clip-text">
          Mission Track
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded-lg border text-sm font-medium hover:opacity-80 transition"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

        <Link to="/profile">
          <FiUser
            size={28}
            className={twTheme(
              "text-gray-700 hover:text-blue-500",
              "text-gray-200 hover:text-blue-400"
            )}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
