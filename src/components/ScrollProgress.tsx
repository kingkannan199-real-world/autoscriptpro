"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[150] pointer-events-none">
      {/* Track */}
      <div className="h-[3px] w-full bg-slate-100/60" />

      {/* Filled bar */}
      <motion.div
        className="absolute top-0 left-0 h-[3px] w-full origin-left"
        style={{
          scaleX,
          background: "#2563eb",
          boxShadow: "0 0 10px 2px rgba(37,99,235,0.5)",
        }}
      >
        {/* Comet head — glowing dot at leading edge */}
        <div
          className="absolute top-1/2 -translate-y-1/2 right-0 w-5 h-5 rounded-full"
          style={{
            background: "radial-gradient(circle, #fff 0%, #2563eb 40%, transparent 70%)",
            boxShadow:
              "0 0 8px 3px rgba(37,99,235,0.9), 0 0 20px 6px rgba(37,99,235,0.4)",
            transform: "translateY(-50%) translateX(40%)",
          }}
        />
        {/* Comet tail glow */}
        <div
          className="absolute top-0 right-0 h-full w-24"
          style={{
            background:
              "linear-gradient(to left, rgba(37,99,235,0.35), transparent)",
          }}
        />
      </motion.div>
    </div>
  );
}