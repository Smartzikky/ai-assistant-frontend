import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDarkMode } from '../contexts/DarkModeContext';

const HomePage = () => {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className={`min-h-screen px-4 py-12 transition duration-300 ease-in-out ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <section className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Welcome to <span className="text-indigo-600 dark:text-yellow-400">Smart AI Companion</span>
        </h1>
        <p className="text-lg sm:text-xl mb-10 leading-relaxed">
          Your intelligent assistant for navigating the worlds of Health, Agriculture, Finance, and General Knowledge.
        </p>
        <div className="flex justify-center gap-4" data-aos="zoom-in" data-aos-delay="200">
          <a href="/health" className="px-6 py-3 rounded bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-500 transition">
            Explore Health
          </a>
          <a href="/general" className="px-6 py-3 rounded border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-gray-900 transition">
            General Topics
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
