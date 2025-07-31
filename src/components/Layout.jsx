import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {isHome && <Hero />}
      <main className="flex-grow px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
