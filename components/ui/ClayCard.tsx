import React from 'react';
import { motion } from 'framer-motion';

interface ClayCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

// 3D Claymorphism styles:
// Light source top-left: Light shadow bottom-right, White highlight top-left
const ClayCard: React.FC<ClayCardProps> = ({ children, className = '', onClick, hoverEffect = false }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverEffect ? { y: -5 } : {}}
      className={`
        bg-paper 
        rounded-[32px] 
        shadow-[12px_12px_24px_#d1cfc9,-12px_-12px_24px_#ffffff] 
        ${className}
      `}
      style={{
        // Optional subtle inner border/shadow for extra depth
        border: '1px solid rgba(255,255,255,0.4)',
      }}
    >
      {children}
    </motion.div>
  );
};

export default ClayCard;