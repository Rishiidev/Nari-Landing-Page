import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';
import { content } from '../data/content';

function FAQItem({ question, answer }: { question: string, answer: string, key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-stone-200/50 dark:border-stone-800/50 py-4 md:py-6">
      <button onClick={() => setIsOpen(!isOpen)} className="flex w-full justify-between items-center text-left focus:outline-none group">
        <span className="font-medium text-base md:text-lg text-stone-900 dark:text-stone-200 group-hover:text-nari-primary dark:group-hover:text-nari-primary transition-colors pr-4">{question}</span>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }} 
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-nari-primary shrink-0 bg-nari-primary/10 dark:bg-nari-primary/20 p-1.5 md:p-2 rounded-full"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <motion.div 
        initial={false} 
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} 
        className="overflow-hidden"
      >
        <p className="pt-4 text-sm md:text-base text-stone-500 dark:text-stone-400 leading-relaxed pr-8">{answer}</p>
      </motion.div>
    </div>
  );
}

export default function FAQ() {
  const { title, items } = content.faq;

  return (
    <section id="faq" className="py-20 md:py-32 px-4 sm:px-6 bg-white dark:bg-stone-950 transition-colors duration-300">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 md:mb-6 text-stone-900 dark:text-white tracking-tight">{title}</h2>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-2">
          {items.map((item, index) => (
            <FAQItem 
              key={index}
              question={item.question} 
              answer={item.answer} 
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
