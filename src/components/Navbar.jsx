// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useDarkMode } from '../contexts/DarkModeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-yellow-300 hover:opacity-80 transition">
          Smart AI Companion
        </Link>

        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-4 text-sm font-medium">
            <Link to="/health" className="hover:underline text-gray-800 dark:text-gray-100">Health</Link>
            <Link to="/agriculture" className="hover:underline text-gray-800 dark:text-gray-100">Agriculture</Link>
            <Link to="/finance" className="hover:underline text-gray-800 dark:text-gray-100">Finance</Link>
            <Link to="/general" className="hover:underline text-gray-800 dark:text-gray-100">General</Link>
          </nav>

          <button
            onClick={toggleDarkMode}
            className="text-xl p-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:scale-105 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </header>
  );
}
