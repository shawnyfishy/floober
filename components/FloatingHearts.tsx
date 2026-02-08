import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; duration: number; delay: number; scale: number }[]>([]);

  useEffect(() => {
    // Generate static random values on mount to avoid hydration mismatch
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position
      duration: Math.random() * 5 + 10, // Slow float between 10-15s
      delay: Math.random() * 5,
      scale: Math.random() * 0.5 + 0.5,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 0.8, 0] }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            left: `${heart.left}%`,
            fontSize: `${heart.scale * 2}rem`,
            color: 'rgba(251, 113, 133, 0.2)', // Soft pink with low opacity
          }}
        >
          ❤
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;