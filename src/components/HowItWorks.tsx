import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Heart, Activity } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';
import { content } from '../data/content';

export default function HowItWorks() {
  const { title, description, steps } = content.howItWorks;
  const icons = [Smartphone, Heart, Activity];

  return (
    <section id="how-it-works" className="py-20 md:py-32 px-4 sm:px-6 bg-white dark:bg-stone-950 relative overflow-hidden transition-colors duration-300">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 md:mb-6 text-stone-900 dark:text-white tracking-tight">{title}</h2>
          <p className="text-lg md:text-xl text-stone-500 dark:text-stone-400">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 relative">
          <div className="hidden md:block absolute top-[4.5rem] left-[16%] right-[16%] h-0.5 bg-stone-100 dark:bg-stone-800">
            <motion.div 
              className="h-full bg-nari-primary"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            />
          </div>

          <div className="md:hidden absolute top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-0.5 bg-stone-100 dark:bg-stone-800">
            <motion.div 
              className="w-full bg-nari-primary"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            />
          </div>

          {steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <motion.div key={index} variants={fadeUp} className="text-center relative z-10 bg-white dark:bg-stone-950 md:bg-transparent dark:md:bg-transparent py-4 md:py-0">
                <div className="w-28 h-28 md:w-36 md:h-36 mx-auto bg-white dark:bg-stone-900 rounded-full flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] md:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-stone-100 dark:border-stone-800 mb-6 md:mb-8 group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#FAF9F7] dark:bg-stone-800 flex items-center justify-center group-hover:bg-nari-primary/5 dark:group-hover:bg-nari-primary/10 transition-colors">
                    <Icon className="text-nari-primary w-8 h-8 md:w-9 md:h-9" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4 text-stone-900 dark:text-white">{step.title}</h3>
                <p className="text-stone-500 dark:text-stone-400 text-base md:text-lg px-4">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
