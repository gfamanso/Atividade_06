import React from 'react';

const Button = ({ variant = 'solid', children, ...props }) => {
  const baseClasses = 'px-5 py-2 rounded-md font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-zinc-900';
  
  const variantClasses = {
    solid: 'bg-blue-600 text-white border border-blue-600 hover:bg-blue-700',
    outline: 'bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900',
    ghost: 'bg-transparent text-blue-600 border border-transparent hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900',
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${props.disabled ? disabledClasses : ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;