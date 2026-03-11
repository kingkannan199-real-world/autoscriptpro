"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import MagneticButton from "./MagneticButton"; // <-- Imported the magnet logic

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-white overflow-hidden pt-20 cursor-none">
      
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] opacity-80 pointer-events-none" />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm font-bold text-slate-600 mb-8 shadow-sm cursor-none"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
          </span>
          Engineered in Chennai. Built for the World.
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1] max-w-4xl"
        >
          Scale Your Startup With <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            Autonomous Systems.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl font-medium mb-10 leading-relaxed"
        >
          From immersive frontend architectures to custom AI agents, we engineer the digital infrastructure that eliminates manual work and accelerates your growth.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          {/* --- MAGNETIC BUTTON APPLIED HERE --- */}
          <MagneticButton 
            onClick={scrollToContact}
            className="group px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-blue-600 transition-colors shadow-xl hover:shadow-blue-600/20 duration-300 flex items-center gap-3 cursor-none text-lg"
          >
            Get Your Free Custom Architecture
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </MagneticButton>
          
          <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
            <CheckCircle2 size={16} className="text-emerald-500" />
            100% Free. No pushy sales.
          </div>
        </motion.div>

      </div>
    </section>
  );
}