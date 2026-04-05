import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UnderTheHood from './components/UnderTheHood';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-[#FAF9F7] dark:bg-stone-950 text-stone-800 dark:text-stone-200 font-sans selection:bg-nari-primary/20 overflow-x-hidden transition-colors duration-300">
      {/* Scroll Progress Indicator */}
      <motion.div 
        style={{ scaleX: scrollYProgress }} 
        className="fixed top-0 left-0 right-0 h-1 bg-nari-primary origin-left z-[60]" 
      />
      
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
      <Hero />
      <Features />
      <HowItWorks />
      <UnderTheHood />
      <Comparison />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
