import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  label: string;
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value }) => {
  return (
    <div className="w-full mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-bold text-secondary">{label}</span>
        <span className="text-sm font-bold text-primary">{value}%</span>
      </div>
      {/* Container - Inset Shadow for depth */}
      <div className="w-full bg-background rounded-full h-4 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]">
        {/* Fill - Pop out effect */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-primary h-4 rounded-full shadow-[2px_2px_4px_rgba(0,0,0,0.2)]"
        ></motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;