import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';
import { content } from '../data/content';

export default function Testimonials() {
  const { title, items } = content.testimonials;

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 bg-[#FAF9F7] dark:bg-stone-900 transition-colors duration-300">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 md:mb-6 text-stone-900 dark:text-white tracking-tight">{title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((testimonial, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-white dark:bg-stone-800 p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-stone-200/60 dark:border-stone-700 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="flex space-x-1 mb-6 md:mb-8">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-nari-primary fill-nari-primary" />)}
              </div>
              <p className="text-base md:text-lg text-stone-700 dark:text-stone-300 mb-8 leading-relaxed font-medium flex-grow">"{testimonial.quote}"</p>
              
              <div className="flex items-center space-x-3 mt-auto">
                <div className="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-700 flex items-center justify-center text-xs font-bold text-stone-500 dark:text-stone-400">
                  {testimonial.author.charAt(0)}
                </div>
                <p className="text-stone-500 dark:text-stone-400 font-medium tracking-wide uppercase text-[10px] md:text-xs">{testimonial.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
