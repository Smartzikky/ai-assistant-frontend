import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HealthPage from './pages/HealthPage';
import AgriculturePage from './pages/AgriculturePage';
import FinancePage from './pages/FinancePage';
import GeneralPage from './pages/GeneralPage';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['health', 'agriculture', 'finance', 'general'];

  return (
    <Router>
      {/* --- Header with Nav --- */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-white text-xl sm:text-2xl font-bold tracking-wide">
            SMART AI Companion
          </h1>

          <div className="hidden md:flex space-x-6">
            {navLinks.map(path => (
              <NavLink
                key={path}
                to={`/${path}`}
                className={({ isActive }) =>
                  `text-white text-lg font-medium transition duration-300 ease-in-out transform
                  hover:scale-105 hover:-translate-y-1 hover:text-yellow-300
                  ${isActive ? 'border-b-2 border-yellow-400 pb-1' : ''}`
                }
              >
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </NavLink>
            ))}
          </div>

          {/* Hamburger Menu */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-indigo-700 px-4 py-2 space-y-2">
            {navLinks.map(path => (
              <NavLink
                key={path}
                to={`/${path}`}
                onClick={() => setMenuOpen(false)}
                className="block text-white text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:text-yellow-300"
              >
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      {/* --- Hero Section (Reduced) --- */}
      <section
  className="py-6 text-center bg-cover bg-center relative"
  style={{
    backgroundImage: "url('/img/hero-bg.jpg')",
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>

  {/* Hero Content */}
  <div className="relative z-10">
    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
      Welcome to SMART AI Companion
    </h2>
    <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
      Your SMART Companion for Healthcare, Agriculture, Finance, and General guidance powered by AI.
    </p>

    {/* Hero Image */}
    <img
      src="/img/Smart AI.png"
      alt="SMART AI Companion"
      className="mx-auto mt-4 rounded shadow w-half max-w-md"
    />
  </div>
</section>

{/* --- Pages with side banners --- */}
  <div className="animate bg-gradient-to-r from-green-200 to-blue-100 flex max-w-7xl mx-auto px-4 pb-24">

  {/* Left Banner */}
  <aside className="hidden lg:block w-64 p-2 sticky top-24 space-y-4">
  <div className="bg-blue-100 rounded-lg p-6 w-half h-half flex flex-col justify-center items-center text-center">
  <h1 className="text-lg font-semibold text-blue-800 mb-2">
    <a
      href="https://3mtt.nitda.gov.ng"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Register Here
    </a>
  </h1>
  <p className="text-sm text-blue-900 max-w-[90%]">
    Did you know? You can register for the next batch (Cohort 4) for the 3MTT Nigeria program. Don&apos;t be left out!
  </p>
</div>
<div className="bg-blue-100 rounded-lg p-6 w-half h-half flex flex-col justify-center items-center text-center">
  <h1 className="text-lg font-semibold text-blue-800 mb-2">
    <a
      href="https://3mtt.nitda.gov.ng/deeptech/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Register Here
    </a>
  </h1>
  <p className="text-sm text-blue-900 max-w-[90%]">
   Advance your skills in Data Science and AI to
Empower Nigeria's Future in Technology 
  </p>
</div>
</aside>

      {/* --- Pages with bottom padding to avoid footer overlap --- */}
      <main className="max-w-4xl mx-auto mt-6 px-6 pb-24">
        <Routes>
          <Route path="/health" element={<HealthPage />} />
          <Route path="/agriculture" element={<AgriculturePage />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/general" element={<GeneralPage />} />
          <Route path="*" element={<HealthPage />} /> {/* fallback */}
        </Routes>
      </main>

{/* Right Banner */}
  <aside className="hidden lg:block w-64 p-2 sticky top-24 space-y-4">
    <div className="bg-green-100 rounded-lg p-6 w-half h-half flex flex-col justify-center items-center text-center">
  <h1 className="text-lg font-semibold text-blue-800 mb-2">
    <a
      href="https://3mtt.nitda.gov.ng"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Register Here
    </a>
  </h1>
  <p className="text-sm text-blue-900 max-w-[90%]">
    Did you know? You can register for the next batch (Cohort 4) for the 3MTT Nigeria program. Don&apos;t be left out!
  </p>
</div>

<div className="bg-green-100 rounded-lg p-6 w-half h-half flex flex-col justify-center items-center text-center">
  <h1 className="text-lg font-semibold text-blue-800 mb-2">
    <a
      href="https://3mtt.nitda.gov.ng/deeptech/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Register Here
    </a>
  </h1>
  <p className="text-sm text-blue-900 max-w-[90%]">
   Advance your skills in Data Science and AI to
Empower Nigeria's Future in Technology
  </p>
</div>
    
</aside>
</div>

      {/* --- Sticky Footer --- */}
      <footer className="bg-indigo-600 text-white text-center py-2 fixed bottom-0 left-0 w-full">
       Copyright © {new Date().getFullYear()} Developed by Ikpe Isaac. All rights reserved.
      </footer>
    </Router>
  );
}
