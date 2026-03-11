"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    // Changed to bg-white for a monolithic start
    <section className="relative w-full h-screen bg-white overflow-hidden flex items-center justify-center font-sans">
      
      {/* Purified Animated Blobs - Only Blue & Indigo */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse duration-10000" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse duration-7000 delay-1000" />
      <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-blue-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse duration-10000 delay-2000" />

      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
          Future-Proof Your Startup. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">We Build AI-Driven Apps.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-medium">
          From immersive frontends to intelligent backend automations, we engineer digital experiences that capture leads and close deals 24/7.
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col items-center justify-center">
          <a href="#contact" className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-blue-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-none inline-flex items-center gap-2">
            Get Your Free Custom Architecture
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-500">
            <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            100% Free. No pushy sales.
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center z-10">
        <p className="text-sm text-slate-400 tracking-widest uppercase font-bold">Engineered in Chennai. Built for the World.</p>
      </div>
    </section>
  );
}