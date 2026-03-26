"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 z-[150] pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 relative origin-left drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
        style={{ scaleX }}
      >
        {/* The Glowing Fuse Spark */}
        <div className="absolute top-1/2 -right-1 h-3 w-4 -translate-y-1/2 bg-white rounded-full shadow-[0_0_12px_4px_rgba(59,130,246,0.9)] blur-[1px]" />
      </motion.div>
    </div>
  );
}