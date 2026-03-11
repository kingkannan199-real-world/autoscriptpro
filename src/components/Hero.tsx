"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-screen bg-slate-50 overflow-hidden flex items-center justify-center font-sans">
      
      {/* 1. Animated Aurora Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-pulse duration-10000" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-pulse duration-7000 delay-1000" />
      <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-purple-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-pulse duration-10000 delay-2000" />

      {/* 2. Interactive Spotlight Tech Grid */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, #94a3b8 1px, transparent 1px),
            linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          // This mask creates the flashlight effect that follows the cursor
          maskImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
        }}
      />

      {/* 3. Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6"
        >
          Future-Proof Your Startup. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            We Build AI-Driven Apps.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium"
        >
          From immersive frontends to intelligent backend automations, we engineer digital experiences that capture leads and close deals 24/7.
        </motion.p>

        {/* High-Contrast Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-blue-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-none">
  Test Drive Our AI Agent
</button>
        </motion.div>
      </div>

      {/* The Local Anchor */}
      <div className="absolute bottom-8 left-0 right-0 text-center z-10">
        <p className="text-sm text-slate-500 tracking-widest uppercase font-bold">
          Engineered in Chennai. Built for the World.
        </p>
      </div>
    </section>
  );
}