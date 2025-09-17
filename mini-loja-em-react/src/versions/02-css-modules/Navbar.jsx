import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.navbar}>
      <h1 className={styles.logo}>E-Commerce</h1>
      <nav className={styles.navItems}>
        <button
          onClick={toggleTheme}
          className={styles.themeToggleBtn}
          aria-label="Alternar tema claro/escuro"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <div className={styles.cartBadge}>
          🛒<span className={styles.cartCount}>3</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;