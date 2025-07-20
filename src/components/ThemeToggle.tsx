"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    console.log('Theme toggle clicked, current theme:', theme);
    toggleTheme();
  };

  return (
    <motion.button
      onClick={handleToggle}
      className={`
        relative p-3 rounded-full transition-all duration-300 ease-in-out
        ${theme === 'dark' 
          ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${theme === 'dark' ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'}
        border-2 border-red-500
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Current theme: ${theme}. Click to switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
          scale: theme === 'dark' ? 1 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
