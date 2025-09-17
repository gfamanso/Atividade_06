import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;
  font-size: 1rem;
  text-align: center;
  border: 1px solid transparent;

  &:focus-visible {
    outline: 2px solid ${props => props.theme.primaryColor};
    outline-offset: 4px;
  }

  /* Estilos para variantes */
  ${props => props.variant === 'solid' && `
    background-color: ${props.theme.primaryColor};
    color: white;
    border-color: ${props.theme.primaryColor};
    &:hover {
      background-color: ${props.theme.primaryColorHover};
    }
  `}

  /* Para a versão styled-components, estamos usando apenas 'solid' */

  /* Estilo para disabled */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: ${props => props.theme.disabledBg};
    color: ${props => props.theme.disabledText};
    border-color: ${props => props.theme.disabledBorder};
  }
`;

const Button = ({ variant = 'solid', children, ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;