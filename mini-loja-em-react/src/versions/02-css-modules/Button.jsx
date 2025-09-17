import React from 'react';
import styles from './Button.module.css';

const Button = ({ variant = 'solid', children, ...props }) => {
  // Concatena as classes dinamicamente
  const buttonClass = `${styles.button} ${styles[variant]}`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;