import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Share, PlusSquare, Smartphone } from 'lucide-react';

export default function PWAGuide({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-[2rem] p-6 md:p-8 max-w-md w-full shadow-2xl relative"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-stone-400 hover:text-stone-800 transition-colors">
              <X size={24} />
            </button>
            
            <div className="w-12 h-12 bg-nari-primary/10 rounded-2xl flex items-center justify-center text-nari-primary mb-6">
              <Smartphone size={24} />
            </div>
            
            <h3 className="text-2xl font-serif text-stone-900 mb-2">Install Nari</h3>
            <p className="text-stone-500 mb-6">Nari is a Progressive Web App. Install it on your home screen for offline access and a native app experience.</p>
            
            <div className="space-y-6">
              <div className="bg-[#FAF9F7] p-4 rounded-xl border border-stone-100">
                <h4 className="font-medium text-stone-900 mb-2 flex items-center">iOS (Safari)</h4>
                <ol className="text-sm text-stone-600 space-y-2">
                  <li className="flex items-center">1. Tap the <Share size={16} className="mx-1.5" /> Share button</li>
                  <li className="flex items-center">2. Scroll down and tap <PlusSquare size={16} className="mx-1.5" /> Add to Home Screen</li>
                </ol>
              </div>
              
              <div className="bg-[#FAF9F7] p-4 rounded-xl border border-stone-100">
                <h4 className="font-medium text-stone-900 mb-2">Android (Chrome)</h4>
                <ol className="text-sm text-stone-600 space-y-2">
                  <li>1. Tap the 3-dot menu icon in the top right</li>
                  <li>2. Tap "Install app" or "Add to Home screen"</li>
                </ol>
              </div>
            </div>
            
            <button onClick={onClose} className="w-full mt-8 bg-stone-900 text-white py-3 rounded-xl font-medium hover:bg-nari-primary transition-colors">
              Got it
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
