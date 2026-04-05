import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';
import { content } from '../data/content';

export default function Pricing() {
  const { title, description, price, period, features, button } = content.pricing;

  return (
    <section id="pricing" className="py-20 md:py-32 px-4 sm:px-6 bg-white dark:bg-stone-950 transition-colors duration-300">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 md:mb-6 text-stone-900 dark:text-white tracking-tight">{title}</h2>
          <p className="text-lg md:text-xl text-stone-500 dark:text-stone-400 max-w-2xl mx-auto">{description}</p>
        </motion.div>

        <motion.div variants={fadeUp} className="max-w-md mx-auto bg-[#FAF9F7] dark:bg-stone-900 rounded-[2.5rem] p-8 md:p-12 border border-stone-200 dark:border-stone-800 shadow-lg text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-nari-primary to-transparent"></div>
          
          <div className="mb-8">
            <span className="text-6xl font-serif text-stone-900 dark:text-white">{price}</span>
            <span className="text-xl text-stone-500 dark:text-stone-400 ml-2">{period}</span>
          </div>

          <ul className="space-y-4 mb-10 text-left">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-stone-700 dark:text-stone-300">
                <Check size={20} className="text-nari-primary mr-3 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          <a href="https://nariself.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-nari-primary dark:hover:bg-nari-primary dark:hover:text-white transition-colors shadow-md flex items-center justify-center w-full">
            {button}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
