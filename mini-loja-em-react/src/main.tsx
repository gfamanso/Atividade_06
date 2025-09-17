// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Note a extensão .tsx
import { ThemeProvider } from './contexts/ThemeContext.jsx'; // A extensão pode variar, dependendo do arquivo que você criou
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);