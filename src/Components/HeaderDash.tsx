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
      <div className="flex justify-between gap-4">
        <img src="src/assets/logo.svg" alt="" />
        <h1 className=" font-bold text-3xl mt-1 max-sm:text-2xl  text-transparent bg-clip-text">
          <span className="text-primaryColor-700">Mission</span> <span className="text-accent-700">Track</span>T
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
