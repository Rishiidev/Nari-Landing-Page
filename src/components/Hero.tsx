import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';
import AppMockup from './AppMockup';
import OpenAppButton from './OpenAppButton';
import { content } from '../data/content';

export default function Hero() {
  const { badge, title, description, primaryButton, secondaryButton, trustText } = content.hero;

  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] md:h-[600px] bg-gradient-to-b from-nari-primary/10 via-nari-primary/5 to-transparent blur-3xl -z-10 rounded-full opacity-70"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div 
          className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center space-x-2 bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-stone-200 dark:border-stone-800 shadow-sm mb-6 sm:mb-8">
            <Sparkles size={14} className="text-nari-primary" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-stone-600 dark:text-stone-300">{badge}</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.05] mb-6 text-stone-900 dark:text-white tracking-tight">
            {title.line1}<br />
            <span className="text-nari-primary italic pr-2 sm:pr-4">{title.line2}</span><br />
            {title.line3}
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-stone-500 dark:text-stone-400 mb-8 sm:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
            {description}
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <OpenAppButton className="bg-nari-primary text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:bg-[#A84B3E] transition-all shadow-lg shadow-nari-primary/30 flex items-center justify-center group hover:-translate-y-1 w-full sm:w-auto">
              {primaryButton}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </OpenAppButton>
            <a href="https://github.com/rishiidev/nari" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:bg-stone-50 dark:hover:bg-stone-800 transition-all shadow-sm border border-stone-200 dark:border-stone-800 flex items-center justify-center hover:-translate-y-1 w-full sm:w-auto">
              {secondaryButton}
            </a>
          </motion.div>
          
          <motion.div variants={fadeUp} className="mt-8 sm:mt-10 flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 text-xs sm:text-sm text-stone-400 dark:text-stone-500 font-medium">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-[#FAF9F7] dark:border-stone-950 bg-stone-${200 + (i*100)} dark:bg-stone-${600 - (i*100)}`}></div>
              ))}
            </div>
            <p>{trustText}</p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="relative lg:ml-auto w-full max-w-md mx-auto mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <AppMockup />
        </motion.div>
      </div>
    </section>
  );
}
