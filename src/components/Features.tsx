import React from 'react';
import { motion } from 'framer-motion';
import { Database, EyeOff, Fingerprint, Download } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';
import { content } from '../data/content';

export default function Features() {
  const { title, description, items } = content.features;

  return (
    <section id="features" className="py-20 md:py-32 px-4 sm:px-6">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 md:mb-6 text-stone-900 dark:text-white tracking-tight whitespace-pre-line">{title}</h2>
          <p className="text-lg md:text-xl text-stone-500 dark:text-stone-400 max-w-2xl mx-auto md:mx-0">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:auto-rows-[320px]">
          <motion.div variants={fadeUp} className="md:col-span-2 bg-white dark:bg-stone-900 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 border border-stone-200/60 dark:border-stone-800 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow min-h-[280px]">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-nari-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-nari-primary/10 transition-colors"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-stone-100 dark:bg-stone-800 rounded-2xl flex items-center justify-center text-stone-800 dark:text-stone-200 mb-6">
                <Database size={24} className="md:w-7 md:h-7" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-serif mb-2 md:mb-3 text-stone-900 dark:text-white">{items[0].title}</h3>
                <p className="text-stone-500 dark:text-stone-400 text-base md:text-lg max-w-md">{items[0].description}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-1 bg-stone-900 dark:bg-stone-950 text-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 border border-stone-800 dark:border-stone-900 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow min-h-[240px]">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-stone-800 dark:bg-stone-900 rounded-2xl flex items-center justify-center text-nari-primary mb-6">
                <EyeOff size={24} className="md:w-7 md:h-7" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-serif mb-2 md:mb-3">{items[1].title}</h3>
                <p className="text-stone-400 text-sm md:text-base">{items[1].description}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-1 bg-white dark:bg-stone-900 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 border border-stone-200/60 dark:border-stone-800 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow min-h-[240px]">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-nari-primary/10 rounded-2xl flex items-center justify-center text-nari-primary mb-6">
                <Fingerprint size={24} className="md:w-7 md:h-7" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-serif mb-2 md:mb-3 dark:text-white">{items[2].title}</h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm md:text-base">{items[2].description}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-2 bg-[#F2EDE4] dark:bg-stone-800 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 border border-stone-200/60 dark:border-stone-700 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow min-h-[280px]">
            <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
              <div className="bg-white dark:bg-stone-900 px-4 py-2 rounded-lg shadow-sm font-mono text-sm text-stone-600 dark:text-stone-300 transform rotate-3">export.json</div>
              <div className="bg-white dark:bg-stone-900 px-4 py-2 rounded-lg shadow-sm font-mono text-sm text-stone-600 dark:text-stone-300 transform -rotate-2 -translate-x-4">cycle_data.csv</div>
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-stone-900 rounded-2xl flex items-center justify-center text-stone-800 dark:text-stone-200 mb-6 shadow-sm">
                <Download size={24} className="md:w-7 md:h-7" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-serif mb-2 md:mb-3 text-stone-900 dark:text-white">{items[3].title}</h3>
                <p className="text-stone-600 dark:text-stone-400 text-base md:text-lg max-w-md">{items[3].description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
