"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  // Hooks into the browser's native scroll position
  const { scrollYProgress } = useScroll();
  
  // Wraps the raw scroll data in a spring physics configuration
  // This makes the bar "glide" rather than snap instantly
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 z-[150] origin-left drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
      style={{ scaleX }}
    />
  );
}