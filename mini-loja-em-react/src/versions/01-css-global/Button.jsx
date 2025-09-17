import React from 'react';
import './styles.css'; // Importa o arquivo de estilo global

const Button = ({ variant = 'solid', children, ...props }) => {
  // Concatena as classes como uma string
  const buttonClass = `button ${variant}`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;