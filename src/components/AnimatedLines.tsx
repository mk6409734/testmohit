import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children?: ReactNode;
}

export default function AnimatedBorderCard({ children }: CardProps) {
  const anim = {
    animate: {
      opacity: [0, 0.8, 1, 0.8,0],
      x: [0, 200],
      transition: {
        duration: 8.6,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-[300px] h-[420px] bg-darktext rounded-xl overflow-hidden">
      {/* --- Top Left --- */}
      <motion.div
        variants={anim}
        animate="animate"
        className="absolute top-4 left-4 w-14 h-[2px] bg-white/70 rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"
      />

      {/* --- Bottom Left --- */}
      <motion.div
        variants={anim}
        animate="animate"
        className="absolute bottom-4 left-4 w-14 h-[2px] bg-white/70 rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"
      />

     

     

      {/* Content */}
      <div className="relative z-10 p-6 text-white">{children}</div>
    </div>
  );
}
