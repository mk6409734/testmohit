// "use client" if using Next.js app-router
import { useMemo } from "react";
import { motion } from "framer-motion";

/**
 * ThunderLines
 * Props:
 *  - count: number of parallel lines (default 6)
 *  - direction: "vertical" | "horizontal" (default "vertical")
 *  - areaClass: extra classes for container size/position (eg "absolute inset-0")
 */
export default function ThunderLines({
  count = 6,
  direction = "vertical",
  areaClass = "absolute inset-0",
}) {
  // precompute random delays so they stay stable between renders
  const delays = useMemo(() => {
    // base spacing so not all fire at once
    const base = 0.18;
    return Array.from({ length: count }, (_, i) => {
      // slight randomization per line
      return +(i * base + Math.random() * 0.6).toFixed(2);
    });
  }, [count]);

  const isVertical = direction === "vertical";

  // motion variants for each line
  const lineVariant = {
    hidden: { scaleY: 0, opacity: 0 },
    show: (customDelay = 0) => ({
      scaleY: [0, 1, 0.9, 0],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 0.9,
        ease: "easeInOut",
        delay: customDelay,
        repeat: Infinity,
        repeatDelay: 1.2 + Math.random() * 1.8, // small randomness between repeats
      },
    }),
  };

  return (
    <div className={`pointer-events-none ${areaClass} overflow-hidden`}>
      <div
        className={`relative w-full h-full flex ${
          isVertical
            ? "items-stretch justify-center"
            : "items-center justify-stretch"
        }`}
      >
        {Array.from({ length: count }).map((_, i) => {
          // position: evenly spaced across the width/height
          const posPercent = ((i + 0.5) / count) * 100;
          const style = isVertical
            ? { left: `${posPercent}%`, transform: "translateX(-50%)" }
            : { top: `${posPercent}%`, transform: "translateY(-50%)" };

          // line dimensions
          const verticalStyles = {
            position: "absolute",
            width: "2px",
            height: "70%", // controls how tall each line is inside header
            borderRadius: "999px",
            ...style,
          };

          const horizontalStyles = {
            position: "absolute",
            height: "2px",
            width: "70%",
            borderRadius: "999px",
            ...style,
          };

          return (
            <motion.div
              key={i}
              custom={delays[i]}
              variants={lineVariant}
              initial="hidden"
              animate="show"
              style={isVertical ? verticalStyles : horizontalStyles}
              className={`
                z-10
                bg-gradient-to-b from-white/90 via-[#b9e6ff] to-[#7fdfff]
                opacity-0
                transform-origin-center
                filter drop-shadow-[0_0_12px_rgba(127,219,255,0.9)]
                ${isVertical ? "" : ""}
              `}
            />
          );
        })}
      </div>
    </div>
  );
}
