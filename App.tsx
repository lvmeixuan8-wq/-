import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CharacterDetail from './components/CharacterDetail';

// Wrapper to handle scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background text-secondary font-sans selection:bg-primary selection:text-white">
        <ScrollToTop />
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            {/* Mapping about pages to the detailed view for demo purposes */}
            <Route path="/about" element={<CharacterDetail />} />
            <Route path="/about/story" element={<CharacterDetail />} />
            <Route path="/about/office" element={<CharacterDetail />} />
            <Route path="/about/outfits" element={<CharacterDetail />} />
            
            {/* Placeholders for other routes */}
            <Route path="/portfolio" element={
              <div className="pt-32 text-center text-2xl font-bold opacity-50">Portfolio Coming Soon...</div>
            } />
            <Route path="/contact" element={
              <div className="pt-32 text-center text-2xl font-bold opacity-50">Contact Me</div>
            } />
          </Routes>
        </main>

        <footer className="py-8 text-center text-secondary/40 font-bold text-sm">
           © 2024 Red Beret Office Girl. Designed with Claymorphism.
        </footer>
      </div>
    </Router>
  );
};

export default App;