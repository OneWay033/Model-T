import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ onClick, to, children, className, type = 'button' }) => {
  const navigate = useNavigate();

  // If `to` prop is provided, use it for navigation
  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button 
      onClick={handleClick} 
      className={`py-2 px-4 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition duration-300 ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
