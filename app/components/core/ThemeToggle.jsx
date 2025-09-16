'use client';
import localforage from 'localforage';
import { Aperture, Contrast } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await localforage.getItem('theme');
      const finalTheme = savedTheme === 'dark' ? true : false;

      if (finalTheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      setDarkMode(finalTheme);
    };

    loadTheme();
  }, []);

  // Toggle theme
  const toggleTheme = async () => {
    const newTheme = !darkMode;

    if (newTheme) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }

    setDarkMode(newTheme);
    await localforage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-600
                 bg-white dark:bg-gray-800 shadow-sm
                 hover:scale-110 hover:rotate-12 transition-all duration-300"
      title={`Switch to ${darkMode ? 'Light' : 'Dark'} mode`}
    >
      {darkMode ? (
        <Contrast className="text-yellow-500 w-6 h-6" />
      ) : (
        <Aperture className="text-indigo-600 w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
