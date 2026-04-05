import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function AppMockup() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="w-full max-w-[280px] sm:max-w-[320px] mx-auto">
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full cursor-pointer"
      >
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="bg-[#FDFBF9] dark:bg-stone-900 rounded-[2.5rem] sm:rounded-[3rem] p-5 sm:p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] sm:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border-[6px] sm:border-[8px] border-white dark:border-stone-800 overflow-hidden relative transition-colors duration-300"
        >
          {/* Glass reflection */}
          <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-white/60 dark:from-white/10 to-transparent z-10 pointer-events-none rounded-t-[2rem] sm:rounded-t-[2.5rem]"></div>

          {/* Status Bar Mock */}
          <div className="flex justify-between items-center mb-6 sm:mb-8 px-1 sm:px-2 relative z-20">
            <span className="text-[10px] sm:text-[11px] font-semibold text-stone-800 dark:text-stone-200 tracking-wider">9:41</span>
            <div className="flex space-x-1 sm:space-x-1.5 items-center">
              <div className="w-3 sm:w-4 h-2 sm:h-2.5 bg-stone-800 dark:bg-stone-200 rounded-[2px] sm:rounded-[3px] opacity-80"></div>
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-stone-800 dark:bg-stone-200 rounded-full opacity-80"></div>
            </div>
          </div>

          {/* Header */}
          <div className="flex justify-between items-center mb-6 sm:mb-8 relative z-20">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-800 dark:text-white tracking-tight">Nari</h2>
              <p className="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400 font-medium mt-1">Nothing logged today</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-stone-800 flex items-center justify-center shadow-sm text-nari-primary border border-stone-100 dark:border-stone-700">
              <Calendar size={16} className="sm:w-[18px] sm:h-[18px]" />
            </div>
          </div>

          {/* Current Status Card */}
          <motion.div 
            style={{ z: 20 }}
            className="bg-white dark:bg-stone-800 rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6 mb-5 sm:mb-6 shadow-sm border border-stone-100 dark:border-stone-700 relative z-20 transition-colors duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-serif text-stone-800 dark:text-white mb-4 sm:mb-6">No logs yet</h3>
            
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[9px] sm:text-[10px] font-bold tracking-wider text-nari-primary uppercase mb-1">Next Period</p>
                <p className="text-sm sm:text-base font-medium text-stone-800 dark:text-stone-200">Apr 3, 2026</p>
              </div>
              <div className="text-right">
                <span className="text-3xl sm:text-4xl font-serif text-nari-primary leading-none">0</span>
                <span className="block text-[8px] sm:text-[9px] font-bold text-nari-primary uppercase tracking-wider mt-1">Days Away</span>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex space-x-2 sm:space-x-3 mb-6 sm:mb-8 relative z-20">
            <a href="https://nariself.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-nari-primary text-white py-3 sm:py-4 rounded-[1.25rem] sm:rounded-[1.5rem] text-xs sm:text-sm font-medium shadow-md shadow-nari-primary/20 hover:scale-[1.02] transition-transform text-center block">
              End Period
            </a>
            <a href="https://nariself.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white dark:bg-stone-800 text-stone-800 dark:text-white py-3 sm:py-4 rounded-[1.25rem] sm:rounded-[1.5rem] text-xs sm:text-sm font-medium shadow-sm border border-stone-100 dark:border-stone-700 hover:scale-[1.02] transition-transform text-center block">
              Log Data
            </a>
          </div>

          {/* Cycle Overview Ring Mock */}
          <div className="bg-white dark:bg-stone-800 rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6 shadow-sm border border-stone-100 dark:border-stone-700 flex flex-col items-center justify-center aspect-square relative z-20 transition-colors duration-300">
            <p className="absolute top-4 left-4 sm:top-5 sm:left-5 text-[10px] sm:text-xs font-semibold text-stone-800 dark:text-stone-200">Overview</p>
            <p className="absolute top-4 right-4 sm:top-5 sm:right-5 text-[8px] sm:text-[10px] font-bold text-nari-primary uppercase tracking-wider bg-nari-primary/10 px-2 py-1 rounded-full">Day 2</p>
            
            {/* SVG Ring */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mt-4">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 drop-shadow-sm">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" className="text-stone-100 dark:text-stone-700" strokeWidth="10" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#C05C4F" strokeWidth="10" strokeDasharray="25 251" strokeLinecap="round" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#A7C7E7" strokeWidth="10" strokeDasharray="60 251" strokeDashoffset="-30" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl sm:text-4xl font-serif text-stone-800 dark:text-white">2</span>
                <span className="text-[8px] sm:text-[9px] font-bold tracking-wider text-nari-primary uppercase mt-1">Menstrual</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
