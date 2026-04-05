import React from 'react';
import { Github, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 md:py-12 px-4 sm:px-6 bg-stone-900 border-t border-stone-800 text-stone-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="flex items-center space-x-2 mb-6 md:mb-0">
          <span className="font-serif text-2xl font-medium text-white tracking-tight">Nari</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="https://github.com/rishiidev/nari" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center">
            <Github size={16} className="mr-1.5 md:mr-2" />
            Source Code
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 md:mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs md:text-sm text-stone-600">
        <p>&copy; {new Date().getFullYear()} Nari. Built for privacy.</p>
        <p className="flex items-center">
          Made with <Heart size={14} className="mx-1 text-nari-primary fill-nari-primary" /> by rishiidev (Rishabh Sethiya)
        </p>
      </div>
    </footer>
  );
}
