import React from 'react';
import { motion } from 'framer-motion';

interface ClayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white';
  children: React.ReactNode;
}

const ClayButton: React.FC<ClayButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  let bgClass = '';
  let textClass = '';
  let shadowClass = '';

  switch (variant) {
    case 'primary':
      bgClass = 'bg-primary';
      textClass = 'text-white';
      // Darker red shadow for primary
      shadowClass = 'shadow-[6px_6px_12px_#a62c21,-6px_-6px_12px_#e63e2d]';
      break;
    case 'secondary':
      bgClass = 'bg-secondary';
      textClass = 'text-white';
      shadowClass = 'shadow-[6px_6px_12px_#2b2d30,-6px_-6px_12px_#595d62]';
      break;
    case 'white':
      bgClass = 'bg-paper';
      textClass = 'text-secondary';
      shadowClass = 'shadow-[6px_6px_12px_#d1cfc9,-6px_-6px_12px_#ffffff]';
      break;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`
        ${bgClass} ${textClass} ${shadowClass}
        font-bold py-3 px-8 
        rounded-[20px] 
        text-lg
        flex items-center justify-center gap-2
        outline-none
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default ClayButton;