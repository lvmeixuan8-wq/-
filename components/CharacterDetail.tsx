import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ClayCard from './ui/ClayCard';
import ClayButton from './ui/ClayButton';
import ProgressBar from './ui/ProgressBar';
import { Mood, Attribute } from '../types';
import { Coffee, Briefcase, Heart, Smile, Frown, Brain } from 'lucide-react';

const MOODS: Record<Mood, { img: string; label: string; icon: any; color: string }> = {
  happy: { 
    img: 'https://picsum.photos/seed/happygirl1/400/400', 
    label: 'Feeling Productive!', 
    icon: Smile,
    color: 'text-green-500'
  },
  tired: { 
    img: 'https://brave.wzznft.com/i/2026/01/28/vzmepq.jpg', 
    label: 'Needs more coffee...', 
    icon: Frown,
    color: 'text-blue-500'
  },
  thinking: { 
    img: 'https://brave.wzznft.com/i/2026/01/28/vu9gqz.jpg', 
    label: 'Brainstorming mode', 
    icon: Brain,
    color: 'text-yellow-500'
  }
};

const ATTRIBUTES: Attribute[] = [
  { label: 'Coffee Intake', value: 95 },
  { label: 'Work Ethic', value: 88 },
  { label: 'Cuteness', value: 100 },
  { label: 'Patience', value: 40 },
];

const CharacterDetail: React.FC = () => {
  const [currentMood, setCurrentMood] = useState<Mood>('happy');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-28 pb-12 px-4 max-w-6xl mx-auto"
    >
      
      {/* 1. Top Section: Three Views (Clay Cards) */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
            <div className="h-1 flex-1 bg-secondary/10 rounded-full"></div>
            <h2 className="text-2xl font-bold text-secondary uppercase tracking-widest">Model Views</h2>
            <div className="h-1 flex-1 bg-secondary/10 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* View 1 */}
            <ClayCard className="p-4 aspect-[3/4] flex items-center justify-center overflow-hidden" hoverEffect>
                <img src="https://picsum.photos/seed/frontview/300/400" alt="Front View" className="rounded-2xl w-full h-full object-cover grayscale-[20%]" />
            </ClayCard>
            {/* View 2 */}
            <ClayCard className="p-4 aspect-[3/4] flex items-center justify-center overflow-hidden" hoverEffect>
                <img src="https://picsum.photos/seed/sideview/300/400" alt="Side View" className="rounded-2xl w-full h-full object-cover grayscale-[20%]" />
            </ClayCard>
            {/* View 3 */}
            <ClayCard className="p-4 aspect-[3/4] flex items-center justify-center overflow-hidden" hoverEffect>
                <img src="https://picsum.photos/seed/backview/300/400" alt="Back View" className="rounded-2xl w-full h-full object-cover grayscale-[20%]" />
            </ClayCard>
        </div>
      </section>

      {/* 2. Middle Section: Office State & Interactive Mood */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: The Interactive Character Card (Office Context) */}
        <div className="lg:col-span-7">
          <ClayCard className="h-full p-8 relative overflow-hidden min-h-[500px] flex flex-col items-center justify-between">
            {/* Background Hint (Office) */}
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/officebg/800/600')] bg-cover bg-center opacity-10"></div>
            
            <div className="relative z-10 w-full flex justify-between items-start">
               <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-secondary shadow-sm">
                 Status: Office
               </div>
               <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full font-bold text-secondary shadow-sm">
                 {React.createElement(MOODS[currentMood].icon, { className: MOODS[currentMood].color })}
               </div>
            </div>

            {/* Breathing Character Image */}
            <div className="relative z-10 my-8">
               <AnimatePresence mode='wait'>
                 <motion.img
                   key={currentMood}
                   src={MOODS[currentMood].img}
                   alt={currentMood}
                   initial={{ scale: 0.8, opacity: 0 }}
                   animate={{ 
                     scale: 1, 
                     opacity: 1,
                     y: [0, -10, 0] // Breathing animation
                   }}
                   exit={{ scale: 0.9, opacity: 0 }}
                   transition={{ 
                     y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                     opacity: { duration: 0.3 }
                   }}
                   className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-8 border-white shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                 />
               </AnimatePresence>
               
               {/* Mood Label */}
               <motion.div 
                 key={`${currentMood}-text`}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="text-center mt-6"
               >
                 <h3 className="text-2xl font-bold text-secondary">{MOODS[currentMood].label}</h3>
               </motion.div>
            </div>

            {/* Mood Switcher Buttons */}
            <div className="relative z-10 flex gap-4 flex-wrap justify-center">
               <ClayButton 
                 variant={currentMood === 'happy' ? 'primary' : 'white'} 
                 onClick={() => setCurrentMood('happy')}
                 className="!py-2 !px-6 !text-sm"
               >
                 Happy
               </ClayButton>
               <ClayButton 
                 variant={currentMood === 'tired' ? 'primary' : 'white'} 
                 onClick={() => setCurrentMood('tired')}
                 className="!py-2 !px-6 !text-sm"
               >
                 Tired
               </ClayButton>
               <ClayButton 
                 variant={currentMood === 'thinking' ? 'primary' : 'white'} 
                 onClick={() => setCurrentMood('thinking')}
                 className="!py-2 !px-6 !text-sm"
               >
                 Thinking
               </ClayButton>
            </div>

          </ClayCard>
        </div>

        {/* Right Col: Attributes & Info */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Attributes Card */}
          <ClayCard className="p-8">
             <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
               <Briefcase size={20} className="text-primary"/> 
               Character Stats
             </h3>
             <div className="space-y-6">
               {ATTRIBUTES.map((attr) => (
                 <ProgressBar key={attr.label} label={attr.label} value={attr.value} />
               ))}
             </div>
          </ClayCard>

          {/* Bio Card */}
          <ClayCard className="p-8 bg-[#C63527] !bg-primary text-white">
             <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <Heart size={24} className="text-white" fill="currentColor"/>
                </div>
                <div>
                   <h3 className="text-xl font-bold mb-2">About Red Beret</h3>
                   <p className="text-white/90 leading-relaxed font-medium">
                     She loves organizing files almost as much as she loves losing her stapler. A dedicated professional with a penchant for dramatic sighs and perfectly matched outfits.
                   </p>
                </div>
             </div>
          </ClayCard>

        </div>
      </div>
    </motion.div>
  );
};

export default CharacterDetail;