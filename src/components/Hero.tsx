"use client";

import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import AutomationBackground from "./AutomationBackground";
import GradientText from "./GradientText";

const cyclingWords = ["AI Agents.", "Automation.", "Custom Software.", "Autonomous Systems."];

const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delayChildren: 0.1, staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: customEase } },
};

// Auto-calculates slots: 10 on day 1 → 1 on last day of month
function getOpenSlots(): number {
  const now = new Date();
  const day = now.getDate(); // 1–31
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  // Linear: day 1 = 10 slots, last day = 1 slot
  const slots = Math.round(10 - ((day - 1) / (daysInMonth - 1)) * 9);
  return Math.max(1, Math.min(10, slots));
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [wordIndex, setWordIndex] = useState(0);
  const [slots] = useState(() => getOpenSlots());

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX - window.innerWidth / 2, y: clientY - window.innerHeight / 2 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[95vh] flex flex-col items-center justify-center bg-white overflow-hidden pt-36 md:pt-20 cursor-none"
    >
      <AutomationBackground mousePosition={mousePosition} />

      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-float-1 absolute top-[8%] left-[3%] w-[420px] h-[420px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="orb-float-2 absolute bottom-[5%] right-[4%] w-[380px] h-[380px] bg-indigo-600/10 rounded-full blur-[90px]" />
        <div className="orb-float-3 absolute top-[45%] right-[22%] w-[260px] h-[260px] bg-blue-400/8 rounded-full blur-[70px]" />
      </div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10 flex flex-col items-center text-center mt-10 md:mt-0">

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6 md:mb-8">
          {/* Live badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm cursor-none">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-blue-600"></span>
            </span>
            <span className="text-[11px] md:text-sm font-bold text-slate-600 whitespace-nowrap">Engineered in Chennai 🇮🇳 · Free Consultation</span>
          </div>
          {/* Urgency badge */}
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-amber-50 border border-amber-200 cursor-none">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-amber-500"></span>
            </span>
            <span className="text-[11px] md:text-xs font-extrabold text-amber-700 whitespace-nowrap">Only {slots} client slot{slots === 1 ? "" : "s"} open this month</span>
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter md:tracking-tight mb-6 md:mb-8 leading-[1.05] md:leading-[1.1] max-w-4xl">
          Scale Your Business With <br />
          <span className="inline-block relative">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600"
              >
                {cyclingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-base md:text-xl text-slate-500 max-w-2xl font-medium mb-10 leading-relaxed px-2">
          From immersive frontend architectures to custom AI agents, we engineer the digital infrastructure that eliminates manual work and accelerates your growth.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col items-center gap-6 w-full md:w-auto">
          <MagneticButton
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group w-full md:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-xl md:rounded-full hover:bg-blue-600 transition-colors shadow-xl hover:shadow-blue-600/20 duration-300 flex items-center justify-center gap-3 cursor-none text-base md:text-lg"
          >
            Book Free Consultation — Starting ₹5,000
            <ArrowRight className="group-hover:translate-x-1 transition-transform shrink-0" size={18} />
          </MagneticButton>

          <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            <span>✓ No hidden charges</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>✓ Pay in milestones</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>✓ Reply in 2hrs</span>
          </div>

          {/* Social proof strip */}
          <div className="w-full mt-3">
            {/* Mobile: 2×2 grid */}
            <div className="grid grid-cols-2 gap-3 sm:hidden">
              {[
                { value: "47+", label: "Projects Delivered" },
                { value: "₹50L+", label: "Saved for Clients" },
                { value: "100%", label: "On-Time Rate" },
                { value: "4.9★", label: "Avg. Client Rating" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center py-4 px-3 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1.5 text-center leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Desktop: single row strip */}
            <div className="hidden sm:flex items-center bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden divide-x divide-slate-100 w-full md:w-auto md:mx-auto">
              {[
                { value: "47+", label: "Projects Delivered" },
                { value: "₹50L+", label: "Saved for Clients" },
                { value: "100%", label: "On-Time Rate" },
                { value: "4.9★", label: "Avg. Client Rating" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center px-7 py-4 flex-1">
                  <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1.5 whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}