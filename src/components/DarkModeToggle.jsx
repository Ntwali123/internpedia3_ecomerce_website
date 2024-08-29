import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from "react-icons/fa";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDarkMode;
  });

  useEffect(() => {
    console.log("Dark mode is", darkMode ? "enabled" : "disabled");
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    console.log("Dark mode state toggled to", !darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default DarkModeToggle;
