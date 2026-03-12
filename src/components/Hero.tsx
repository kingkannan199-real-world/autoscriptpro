"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton"; 

// FIX: Strictly typing this as a 4-number tuple for Framer Motion
const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: customEase } },
};

export default function Hero() {
// ... the rest of the file stays exactly the same
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // FIX 1: Bumped pt-20 to pt-36 on mobile, kept md:pt-20 for desktop
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-white overflow-hidden pt-36 md:pt-20 cursor-none">
      
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-60" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10 flex flex-col items-center text-center"
      >
        
        {/* FIX 2: Responsive text sizing (text-[10px] on mobile to text-sm on desktop) and added max-w to prevent edge-touching */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-slate-50 border border-slate-200 text-[10px] sm:text-xs md:text-sm font-bold text-slate-600 mb-6 md:mb-8 shadow-sm cursor-none max-w-[85vw] mx-auto text-center leading-tight">
          <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-blue-600"></span>
          </span>
          <span className="truncate whitespace-normal">Engineered in Chennai. Built for the World.</span>
        </motion.div>

        {/* FIX 3: Tighter tracking and leading on mobile for the giant H1 */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter md:tracking-tight mb-6 md:mb-8 leading-[1.05] md:leading-[1.1] max-w-4xl">
          Scale Your Startup With <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            Autonomous Systems.
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-base md:text-xl text-slate-500 max-w-2xl font-medium mb-10 leading-relaxed px-2">
          From immersive frontend architectures to custom AI agents, we engineer the digital infrastructure that eliminates manual work and accelerates your growth.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 w-full md:w-auto">
          <MagneticButton 
            onClick={scrollToContact}
            className="group w-full md:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-xl md:rounded-full hover:bg-blue-600 transition-colors shadow-xl hover:shadow-blue-600/20 duration-300 flex items-center justify-center gap-3 cursor-none text-base md:text-lg"
          >
            Get Your Free Custom Architecture
            <ArrowRight className="group-hover:translate-x-1 transition-transform shrink-0" size={18} />
          </MagneticButton>
        </motion.div>

      </motion.div>
    </section>
  );
}