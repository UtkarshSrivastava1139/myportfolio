"use client";

import { useTheme } from "@/contexts/ThemeContext";

const ThemeDebugger = () => {
  const { theme } = useTheme();
  
  return (
    <div className="fixed bottom-4 left-4 bg-red-500 text-white p-2 rounded z-50 text-sm">
      Current Theme: {theme}
      <br />
      HTML Classes: {typeof document !== 'undefined' ? document.documentElement.className : 'SSR'}
    </div>
  );
};

export default ThemeDebugger;
