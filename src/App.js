import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import SkeletonFallback from './components/SkeletonFallback';

// Lazy-loaded pages
const HomePage = lazy(() => import('./pages/HomePage'));
const HealthPage = lazy(() => import('./pages/HealthPage'));
const AgriculturePage = lazy(() => import('./pages/AgriculturePage'));
const FinancePage = lazy(() => import('./pages/FinancePage'));
const GeneralPage = lazy(() => import('./pages/GeneralPage'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SkeletonFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/health" element={<HealthPage />} />
            <Route path="/agriculture" element={<AgriculturePage />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/general" element={<GeneralPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
