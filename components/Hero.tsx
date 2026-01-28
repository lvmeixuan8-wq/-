import React from 'react';
import { motion } from 'framer-motion';
import ClayButton from './ui/ClayButton';
import ClayCard from './ui/ClayCard';
import { ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen pt-24 pb-10 px-4 flex items-center justify-center overflow-hidden relative">
      
      {/* Decorative Background Blobs */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-[-10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Character Image (Clay Style) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center order-2 lg:order-1"
        >
          {/* Main Character Placeholder (Standing) */}
           <div className="relative">
             <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-[300px] h-[400px] md:w-[400px] md:h-[520px] bg-white rounded-[40px] shadow-[20px_20px_40px_rgba(0,0,0,0.1),-10px_-10px_30px_#ffffff] flex items-center justify-center overflow-hidden border-4 border-white"
             >
                {/* Simulated Character Image */}
                <img 
                  src="https://brave.wzznft.com/i/2026/01/28/vu9gqz.jpg" 
                  alt="Red Beret Girl Standing" 
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                  className="absolute top-10 right-10 bg-primary/20 p-2 rounded-full"
                >
                  <Star className="text-primary fill-primary" size={24} />
                </motion.div>
             </motion.div>

             {/* Floor Shadow */}
             <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[60%] h-8 bg-black/10 blur-xl rounded-full" />
           </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 space-y-8"
        >
          <div className="space-y-4">
             <motion.span 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="inline-block px-4 py-1 bg-white rounded-full text-accent font-bold text-sm shadow-sm"
             >
               HELLO, I'M RED BERET GIRL!
             </motion.span>
             <h1 className="text-5xl md:text-7xl font-bold text-secondary leading-tight">
               Organizing Life, <br/>
               <span className="text-primary">One Coffee</span> at a Time.
             </h1>
             <p className="text-lg text-secondary/70 max-w-md mx-auto lg:mx-0 font-medium">
               Welcome to my digital desk. Explore my office adventures, daily outfits, and the chaotic cute energy I bring to the workplace.
             </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <ClayButton onClick={() => navigate('/about')}>
              Meet Me <ArrowRight size={20} />
            </ClayButton>
            <ClayButton variant="white" onClick={() => navigate('/portfolio')}>
              My Portfolio
            </ClayButton>
          </div>

          {/* Mini Stats Card */}
          <ClayCard className="p-6 w-full max-w-sm mt-8 !rounded-[24px]">
             <div className="flex justify-between items-center text-center">
                <div>
                   <div className="text-2xl font-bold text-primary">365</div>
                   <div className="text-xs font-bold text-secondary/60 uppercase">Days Worked</div>
                </div>
                <div className="w-px h-8 bg-secondary/10"></div>
                <div>
                   <div className="text-2xl font-bold text-primary">∞</div>
                   <div className="text-xs font-bold text-secondary/60 uppercase">Coffees</div>
                </div>
                <div className="w-px h-8 bg-secondary/10"></div>
                <div>
                   <div className="text-2xl font-bold text-primary">100%</div>
                   <div className="text-xs font-bold text-secondary/60 uppercase">Cute</div>
                </div>
             </div>
          </ClayCard>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;