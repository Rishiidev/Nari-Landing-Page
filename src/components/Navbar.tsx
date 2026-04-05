import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Github, Menu, X, Download, Sun, Moon } from 'lucide-react';
import PWAGuide from './PWAGuide';
import OpenAppButton from './OpenAppButton';
import { usePWAInstall } from '../hooks/usePWAInstall';

export default function Navbar({ isDarkMode, toggleDarkMode }: { isDarkMode?: boolean, toggleDarkMode?: () => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPWAGuideOpen, setIsPWAGuideOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const { isInstallable, promptInstall } = usePWAInstall();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleInstallClick = async () => {
    if (isInstallable) {
      await promptInstall();
    } else {
      setIsPWAGuideOpen(true);
    }
  };

  return (
    <>
      <motion.nav 
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F7]/70 dark:bg-stone-950/70 backdrop-blur-xl border-b border-stone-200/50 dark:border-stone-800/50 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-stone-900 dark:text-white">Nari</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 bg-white/50 dark:bg-stone-900/50 px-6 py-2 rounded-full border border-stone-200/50 dark:border-stone-700/50">
            <a href="#features" className="text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors">How it Works</a>
            <a href="#under-the-hood" className="text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors">Security</a>
            <a href="#comparison" className="text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors">Compare</a>
            <a href="#faq" className="text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors">FAQ</a>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4">
            {toggleDarkMode && (
              <button 
                onClick={toggleDarkMode}
                className="p-2 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-nari-primary/50"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button 
              onClick={handleInstallClick}
              className="hidden sm:flex items-center text-sm font-medium text-nari-primary hover:text-[#A84B3E] transition-colors focus:outline-none focus:ring-2 focus:ring-nari-primary/50 rounded-md px-2 py-1"
            >
              <Download size={18} className="mr-1.5" />
              Install App
            </button>
            <OpenAppButton className="hidden sm:flex bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-nari-primary dark:hover:bg-nari-primary dark:hover:text-white transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-300 items-center justify-center focus:outline-none focus:ring-2 focus:ring-nari-primary/50 focus:ring-offset-2 dark:focus:ring-offset-stone-950">
              Open App
            </OpenAppButton>
            <button 
              className="md:hidden p-2 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-nari-primary/50 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl border-b border-stone-200/50 dark:border-stone-800/50 shadow-lg md:hidden"
            >
              <div className="flex flex-col px-6 py-6 space-y-6">
                <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-stone-600 dark:text-stone-300">Features</a>
                <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-stone-600 dark:text-stone-300">How it Works</a>
                <a href="#under-the-hood" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-stone-600 dark:text-stone-300">Security</a>
                <a href="#comparison" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-stone-600 dark:text-stone-300">Compare</a>
                <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-stone-600 dark:text-stone-300">FAQ</a>
                <div className="pt-6 border-t border-stone-100 dark:border-stone-800 flex flex-col space-y-4">
                  <button 
                    onClick={() => { setIsMobileMenuOpen(false); handleInstallClick(); }}
                    className="flex items-center justify-center text-lg font-medium text-nari-primary bg-nari-primary/10 px-6 py-3 rounded-full w-full"
                  >
                    <Download size={20} className="mr-3" />
                    Install App
                  </button>
                  <OpenAppButton className="bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-6 py-3 rounded-full text-base font-medium hover:bg-nari-primary dark:hover:bg-nari-primary dark:hover:text-white transition-colors shadow-md w-full text-center block">
                    Open App
                  </OpenAppButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <PWAGuide isOpen={isPWAGuideOpen} onClose={() => setIsPWAGuideOpen(false)} />
    </>
  );
}
