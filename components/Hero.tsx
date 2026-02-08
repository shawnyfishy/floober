import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-rose-50 via-rose-50 to-white/50">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-50/20 to-rose-100/40 z-10 pointer-events-none" />

      <div className="z-20 text-center px-4 relative w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 md:mb-8"
        >
          <span className="inline-block py-1.5 px-4 md:py-2 md:px-6 rounded-full bg-white/60 backdrop-blur-sm border border-rose-100 text-rose-600 font-serif text-xs md:text-sm tracking-[0.2em] uppercase shadow-sm">
            For My Love
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-script text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] text-transparent bg-clip-text bg-gradient-to-br from-rose-500 to-rose-900 mb-6 md:mb-8 drop-shadow-sm leading-[1.1] pb-2"
        >
          Rhea
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-serif text-xl sm:text-2xl md:text-3xl text-rose-800/80 max-w-xs sm:max-w-lg mx-auto leading-relaxed"
        >
          Will you be my Valentine?
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 md:bottom-12 z-20"
      >
        <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-rose-400/70" />
      </motion.div>
    </section>
  );
};

export default Hero;