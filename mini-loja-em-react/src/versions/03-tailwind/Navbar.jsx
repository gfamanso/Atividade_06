import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full z-10 flex justify-between items-center px-4 py-4 bg-white dark:bg-zinc-800 shadow-md transition-colors duration-200">
      <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">E-Commerce</h1>
      <nav className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="text-2xl transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
          aria-label="Alternar tema claro/escuro"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <div className="relative text-2xl text-gray-900 dark:text-gray-100">
          🛒
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            3
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;