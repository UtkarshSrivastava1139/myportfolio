"use client";

import { useTheme } from "@/contexts/ThemeContext";

const ThemeTestCard = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="fixed top-20 right-4 z-50">
      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-lg">
        <h3 className="text-gray-900 dark:text-white font-bold mb-2">Theme Test</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          Current theme: <span className="font-semibold">{theme}</span>
        </p>
        <button
          onClick={toggleTheme}
          className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeTestCard;
