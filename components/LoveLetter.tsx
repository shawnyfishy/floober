import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X } from 'lucide-react';

const LoveLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="min-h-[80vh] w-full flex items-center justify-center py-16 px-4 relative bg-rose-50/30">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center w-full max-w-2xl"
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.button
              key="envelope"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="group relative flex flex-col items-center justify-center p-10 md:p-16 bg-white rounded-xl shadow-lg border-2 border-rose-100 w-full max-w-[280px] md:max-w-sm mx-auto cursor-pointer touch-manipulation"
            >
              {/* Pulsing effect behind */}
              <div className="absolute inset-0 bg-rose-200 rounded-xl opacity-20 animate-pulse-slow blur-xl -z-10" />
              
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Mail className="w-16 h-16 md:w-20 md:h-20 text-rose-400 mb-4 md:mb-6 group-hover:text-rose-500 transition-colors" />
              </motion.div>
              
              <h3 className="font-serif text-2xl md:text-3xl text-rose-900 mb-2">A Letter For You</h3>
              <p className="text-rose-400 font-body tracking-wider text-xs md:text-sm uppercase">Tap to open</p>
            </motion.button>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, scale: 0.9, y: 50, rotateX: 90 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50, rotateX: 90 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              className="relative bg-[#fffcf5] p-6 md:p-16 rounded-lg shadow-2xl mx-auto transform perspective-1000 origin-bottom w-full"
              style={{ 
                  backgroundImage: 'radial-gradient(#f3e5f5 1px, transparent 1px)', 
                  backgroundSize: '30px 30px',
                  boxShadow: '0 20px 50px -10px rgba(244, 63, 94, 0.2)'
              }}
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 md:top-6 md:right-6 text-rose-300 hover:text-rose-500 transition-colors p-3 hover:bg-rose-50 rounded-full z-10"
                aria-label="Close letter"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="font-serif text-rose-900 space-y-4 md:space-y-6 text-left leading-relaxed text-base md:text-xl pt-4 md:pt-0">
                <h3 className="font-script text-3xl md:text-5xl mb-4 md:mb-8 text-rose-600">Dearest Rhea,</h3>
                <p>
                  I've been trying to find the perfect words to tell you how much you mean to me, but sometimes words just aren't enough.
                </p>
                <p>
                  From the moment we met, you've brought a light into my life that I never knew I was missing. Your laugh is my favorite melody, and your happiness is my greatest goal.
                </p>
                <p>
                   Thank you for being my partner, my best friend, and my greatest adventure. I can't wait to see what the future holds for us.
                </p>
                <div className="pt-6 md:pt-8 flex justify-end">
                    <div className="text-right">
                        <p className="font-script text-2xl md:text-4xl text-rose-600">Forever Yours</p>
                    </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default LoveLetter;