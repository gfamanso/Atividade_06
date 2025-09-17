import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './styles.css'; // <-- Importa o arquivo de estilo global

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <h1 className="logo">E-Commerce</h1>
      <nav className="nav-items">
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          aria-label="Alternar tema claro/escuro"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <div className="cart-badge">
          🛒<span className="cart-count">3</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;