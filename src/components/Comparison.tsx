import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';
import { content } from '../data/content';

export default function Comparison() {
  const { title, description, nari, traditional } = content.comparison;

  return (
    <section id="comparison" className="py-20 md:py-32 px-4 sm:px-6 bg-[#FAF9F7] dark:bg-stone-900 transition-colors duration-300">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 md:mb-6 text-stone-900 dark:text-white tracking-tight">{title}</h2>
          <p className="text-lg md:text-xl text-stone-500 dark:text-stone-400 max-w-2xl mx-auto">{description}</p>
        </motion.div>

        <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Traditional Apps */}
          <div className="bg-white dark:bg-stone-800 rounded-[2rem] p-8 md:p-10 border border-stone-200 dark:border-stone-700 shadow-sm opacity-80">
            <h3 className="text-2xl font-serif mb-6 text-stone-500 dark:text-stone-400 text-center">{traditional.name}</h3>
            <ul className="space-y-4">
              {traditional.features.map((feature, index) => (
                <li key={index} className="flex items-center text-stone-600 dark:text-stone-400">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-4 shrink-0">
                    <X size={14} className="text-red-500 dark:text-red-400" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Nari */}
          <div className="bg-nari-primary text-white rounded-[2rem] p-8 md:p-10 shadow-xl relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <h3 className="text-3xl font-serif mb-6 text-center relative z-10">{nari.name}</h3>
            <ul className="space-y-4 relative z-10">
              {nari.features.map((feature, index) => (
                <li key={index} className="flex items-center text-white/90 font-medium text-lg">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 shrink-0">
                    <Check size={14} className="text-white" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
