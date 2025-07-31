// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../contexts/DarkModeContext';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 dark:text-yellow-300 hover:opacity-80 transition"
          onClick={closeMenu}
        >
          Smart AI Companion
        </Link>

        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleDarkMode}
            className="text-xl p-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={toggleMenu}
            className="text-2xl text-gray-800 dark:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/health" className="hover:underline text-gray-800 dark:text-gray-100">Health</Link>
          <Link to="/agriculture" className="hover:underline text-gray-800 dark:text-gray-100">Agriculture</Link>
          <Link to="/finance" className="hover:underline text-gray-800 dark:text-gray-100">Finance</Link>
          <Link to="/general" className="hover:underline text-gray-800 dark:text-gray-100">General</Link>
        </nav>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700 px-4 pb-4 pt-2 space-y-2">
          <Link to="/health" onClick={closeMenu} className="block text-gray-800 dark:text-gray-100">Health</Link>
          <Link to="/agriculture" onClick={closeMenu} className="block text-gray-800 dark:text-gray-100">Agriculture</Link>
          <Link to="/finance" onClick={closeMenu} className="block text-gray-800 dark:text-gray-100">Finance</Link>
          <Link to="/general" onClick={closeMenu} className="block text-gray-800 dark:text-gray-100">General</Link>
        </div>
      )}
    </header>
  );
}
