import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

const StyledNavbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.navbarBg};
  border-bottom: 1px solid ${props => props.theme.borderColor};
  z-index: 1000;
  transition: background-color 0.2s ease, border-color 0.2s ease;
`;

const NavItems = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const ThemeToggleBtn = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.textColor}; // Garante que o ícone tenha a cor do tema
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const CartBadge = styled.div`
  position: relative;
  font-size: 1.5rem;
  color: ${props => props.theme.textColor}; // Garante que o carrinho tenha a cor do tema
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${props => props.theme.primaryColor};
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 50%;
`;

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledNavbar>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: theme.textColor }}>E-Commerce</h1>
      <NavItems>
        <ThemeToggleBtn onClick={toggleTheme} aria-label="Alternar tema claro/escuro">
          {theme === 'light' ? '🌙' : '☀️'}
        </ThemeToggleBtn>
        <CartBadge>
          🛒<CartCount>3</CartCount>
        </CartBadge>
      </NavItems>
    </StyledNavbar>
  );
};

export default Navbar;