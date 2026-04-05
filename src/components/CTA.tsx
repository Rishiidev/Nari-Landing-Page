import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';
import OpenAppButton from './OpenAppButton';
import { content } from '../data/content';

export default function CTA() {
  const { title, description, button } = content.cta;

  return (
    <section className="py-24 md:py-40 px-4 sm:px-6 relative overflow-hidden bg-stone-900 dark:bg-black text-white transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-nari-primary/20 via-transparent to-transparent opacity-50"></div>
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 md:mb-8 tracking-tight">
          {title}
        </motion.h2>
        <motion.p variants={fadeUp} className="text-lg md:text-xl lg:text-2xl text-stone-400 mb-10 md:mb-12 max-w-2xl mx-auto font-light">
          {description}
        </motion.p>
        <motion.div variants={fadeUp}>
          <OpenAppButton className="bg-nari-primary text-white px-8 py-4 md:px-12 md:py-6 rounded-full font-medium text-lg md:text-xl hover:bg-[#A84B3E] transition-all shadow-[0_0_30px_-10px_rgba(192,92,79,0.5)] md:shadow-[0_0_40px_-10px_rgba(192,92,79,0.5)] flex items-center justify-center mx-auto group hover:-translate-y-1 w-full sm:w-auto">
            {button}
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform md:w-6 md:h-6" size={20} />
          </OpenAppButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
