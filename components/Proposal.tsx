import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import Footer from './Footer';
import img1 from '@/images/IMG_6305.png';
import img2 from '@/images/IMG_6306.png';

const Proposal: React.FC = () => {
    const [accepted, setAccepted] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleYes = () => {
        setAccepted(true);

        // Trigger confetti
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 50 };

        const randomInRange = (min: number, max: number) => {
            return Math.random() * (max - min) + min;
        }

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    };

    const handleNo = () => {
        setShowError(true);
        // Hide error after 2 seconds
        setTimeout(() => setShowError(false), 2000);
    };

    return (
        <section className="min-h-screen w-full flex flex-col relative bg-gradient-to-t from-rose-100/50 to-white/50 overflow-hidden">
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-12">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full"
                >
                    <AnimatePresence mode="wait">
                        {!accepted ? (
                            <motion.div
                                key="question"
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-8 md:space-y-12 max-w-4xl mx-auto"
                            >
                                <h2 className="font-script text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-rose-600 mb-4 md:mb-8 drop-shadow-sm leading-tight">
                                    The Question
                                </h2>

                                <p className="font-serif text-xl sm:text-2xl md:text-4xl text-rose-900 leading-relaxed max-w-2xl mx-auto px-2">
                                    Rhea, you make every day brighter. <br />
                                    <span className="italic text-rose-500 mt-2 md:mt-4 block">Will you be my Valentine?</span>
                                </p>

                                <div className="pt-4 md:pt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full max-w-xs md:max-w-none mx-auto">
                                    <motion.button
                                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(244, 63, 94, 0.5)" }}
                                        whileTap={{ scale: 0.95 }}
                                        animate={{
                                            boxShadow: ["0 0 0 0 rgba(244, 63, 94, 0.4)", "0 0 0 20px rgba(244, 63, 94, 0)"],
                                        }}
                                        transition={{
                                            boxShadow: { duration: 2, repeat: Infinity }
                                        }}
                                        onClick={handleYes}
                                        className="w-full md:w-auto bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-serif text-xl md:text-3xl px-8 py-4 md:px-16 md:py-6 rounded-full shadow-xl transition-all duration-300 transform z-10 whitespace-nowrap"
                                    >
                                        Yes, I will! ❤️
                                    </motion.button>

                                    <div className="relative w-full md:w-auto">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={handleNo}
                                            className="w-full md:w-auto bg-white/80 backdrop-blur-sm text-rose-400 border-2 border-rose-200 hover:border-rose-300 hover:bg-rose-50 font-serif text-lg md:text-2xl px-8 py-4 md:px-12 md:py-5 rounded-full shadow-sm transition-all duration-300 whitespace-nowrap"
                                        >
                                            No
                                        </motion.button>
                                        <AnimatePresence>
                                            {showError && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, x: "-50%" }}
                                                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                                                    exit={{ opacity: 0, y: -10, x: "-50%" }}
                                                    className="absolute left-1/2 -bottom-16 md:-bottom-20 bg-red-500 text-white px-4 py-2 md:px-6 rounded-lg shadow-xl font-bold whitespace-nowrap z-50 pointer-events-none text-sm md:text-base"
                                                >
                                                    NOT ALLOWED!!!!! 😠
                                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-red-500"></div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ type: "spring", duration: 0.8 }}
                                className="space-y-6 md:space-y-8 relative w-full max-w-7xl mx-auto"
                            >
                                {/* Left Image */}
                                <motion.div
                                    initial={{ opacity: 0, x: -50, rotate: -10 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        rotate: [-10, -15, -10],
                                        y: [0, -10, 0]
                                    }}
                                    transition={{
                                        opacity: { duration: 0.8, delay: 0.2 },
                                        x: { duration: 0.8, delay: 0.2 },
                                        rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                        y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="hidden lg:block absolute top-1/2 left-8 w-64 h-80 bg-white p-2 shadow-xl -translate-y-1/2 rounded-lg rotate-[-10deg]"
                                >
                                    <img src={img1} alt="Us 1" className="w-full h-full object-cover rounded" />
                                </motion.div>

                                {/* Right Image */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50, rotate: 10 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        rotate: [10, 15, 10],
                                        y: [0, -10, 0]
                                    }}
                                    transition={{
                                        opacity: { duration: 0.8, delay: 0.4 },
                                        x: { duration: 0.8, delay: 0.4 },
                                        rotate: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                                        y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                                    }}
                                    className="hidden lg:block absolute top-1/2 right-8 w-64 h-80 bg-white p-2 shadow-xl -translate-y-1/2 rounded-lg rotate-[10deg]"
                                >
                                    <img src={img2} alt="Us 2" className="w-full h-full object-cover rounded" />
                                </motion.div>

                                <h2 className="font-script text-5xl sm:text-7xl md:text-9xl text-rose-600 mb-4 md:mb-8 drop-shadow-sm leading-tight">
                                    She Said YES!
                                </h2>
                                <p className="font-serif text-xl sm:text-3xl md:text-4xl text-rose-800 px-4">
                                    You've made me the happiest person alive!
                                </p>
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-6xl md:text-8xl py-4 block"
                                >
                                    🥰 🌹 💑
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
            <Footer />
        </section>
    );
};

export default Proposal;