import React from "react";
import { useTheme } from "../context/themeContext";
const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <nav
        className={`p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <h1 className="text-xl font-bold">📚Books Library📚</h1>
          <button
            onClick={toggleTheme}
            className="mt-4 px-4 py-2 rounded-lg border border-gray-500 
                 bg-gray-200 dark:bg-gray-700 text-black dark:text-white
                 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
