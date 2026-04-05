import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ServerOff, LockKeyhole } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';
import { content } from '../data/content';

export default function UnderTheHood() {
  const { badge, title, description, items } = content.underTheHood;

  return (
    <section id="under-the-hood" className="py-20 md:py-32 px-4 sm:px-6 bg-stone-900 dark:bg-stone-950 text-white relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nari-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 mb-6">
            <Shield size={14} className="text-nari-primary" />
            <span className="text-[11px] font-bold tracking-wider uppercase text-stone-300">{badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight">{title}</h2>
          <p className="text-lg md:text-xl text-stone-400 max-w-2xl">{description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <motion.div variants={fadeUp} className="bg-stone-800/50 dark:bg-stone-900/50 backdrop-blur-sm p-8 md:p-10 rounded-[2rem] border border-stone-700 dark:border-stone-800">
            <ServerOff className="w-10 h-10 text-nari-primary mb-6" />
            <h3 className="text-2xl font-serif mb-4">{items[0].title}</h3>
            <p className="text-stone-400 leading-relaxed">
              {items[0].description}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-stone-800/50 dark:bg-stone-900/50 backdrop-blur-sm p-8 md:p-10 rounded-[2rem] border border-stone-700 dark:border-stone-800">
            <LockKeyhole className="w-10 h-10 text-nari-primary mb-6" />
            <h3 className="text-2xl font-serif mb-4">{items[1].title}</h3>
            <p className="text-stone-400 leading-relaxed">
              {items[1].description}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
