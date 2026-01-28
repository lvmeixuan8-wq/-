import React, { useState } from 'react';
import { NavItem } from '../types';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { 
    label: 'About', 
    path: '/about', 
    subItems: [
      { label: 'Character Story', path: '/about/story' },
      { label: 'Office Life', path: '/about/office' },
      { label: 'Daily Outfits', path: '/about/outfits' }
    ]
  },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4">
      {/* Glassmorphism Container */}
      <div className="max-w-6xl mx-auto backdrop-blur-md bg-white/40 border border-white/50 shadow-sm rounded-[24px] px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary tracking-tight flex items-center gap-2">
           <span className="w-4 h-4 rounded-full bg-primary block"></span>
           RBOG
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className="relative group"
              onMouseEnter={() => item.subItems && setActiveSubMenu(item.label)}
              onMouseLeave={() => item.subItems && setActiveSubMenu(null)}
            >
              <Link 
                to={item.path}
                className={`text-lg font-bold transition-colors duration-200 flex items-center gap-1
                  ${location.pathname === item.path ? 'text-primary' : 'text-secondary hover:text-primary'}
                `}
              >
                {item.label}
                {item.subItems && <ChevronDown size={16} />}
              </Link>
              
              {/* Dropdown */}
              <AnimatePresence>
                {item.subItems && activeSubMenu === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48"
                  >
                    <div className="bg-white/90 backdrop-blur-xl rounded-[20px] p-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white">
                      {item.subItems.map(sub => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          className="block px-4 py-2 rounded-[12px] hover:bg-background text-secondary font-semibold text-sm transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-secondary p-2 rounded-full hover:bg-white/50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-white/90 backdrop-blur-xl rounded-[24px] shadow-lg overflow-hidden border border-white"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link 
                    to={item.path}
                    className="text-xl font-bold text-secondary block mb-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <div className="pl-4 flex flex-col gap-2 border-l-2 border-primary/20">
                      {item.subItems.map(sub => (
                         <Link 
                           key={sub.label}
                           to={sub.path}
                           className="text-secondary/80 font-medium"
                           onClick={() => setIsOpen(false)}
                         >
                           {sub.label}
                         </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;