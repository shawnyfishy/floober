import React from 'react';
import { motion } from 'framer-motion';
import { REASONS } from '../constants';

const Reasons: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40, rotateX: -10 },
    show: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 } 
    }
  };

  return (
    <section className="min-h-screen w-full flex flex-col justify-center py-16 md:py-24 px-4 bg-gradient-to-b from-rose-50/50 to-lavender-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-rose-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-purple-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-script text-center text-rose-800 mb-12 md:mb-20"
        >
          Why I Love You
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {REASONS.map((reason, idx) => (
            <motion.div
              key={reason.id}
              variants={item}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3 } 
              }}
              whileTap={{ scale: 0.98 }}
              className="h-full"
            >
              <div className="group relative bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-white/50 hover:shadow-xl hover:border-rose-200/50 transition-all duration-500 h-full flex flex-col items-center text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-rose-50/0 group-hover:to-rose-50/50 rounded-2xl transition-all duration-500" />
                
                <motion.div 
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  whileTap={{ rotate: 15, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-tr from-rose-100 to-rose-50 rounded-full flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6 text-rose-500 shadow-inner"
                >
                  <span className="transform translate-y-0.5">❤</span>
                </motion.div>
                
                <h3 className="relative font-serif text-xl md:text-2xl text-rose-900 mb-3 md:mb-4">{reason.title}</h3>
                <p className="relative text-gray-600 font-body leading-relaxed text-sm md:text-base">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reasons;