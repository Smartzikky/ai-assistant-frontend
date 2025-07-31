import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { Toaster } from 'react-hot-toast';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
      <Toaster position="top-right" />
    </DarkModeProvider>
  </React.StrictMode>
);

reportWebVitals();
