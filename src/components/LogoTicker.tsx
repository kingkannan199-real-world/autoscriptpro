"use client";

import { motion } from "framer-motion";

const technologies = [
  "Next.js", "React", "Node.js", "Python", "TypeScript", 
  "AWS", "OpenAI", "TensorFlow", "PostgreSQL", "TailwindCSS",
  "Next.js", "React", "Node.js", "Python", "TypeScript", // Duplicated for infinite scroll
];

export default function LogoTicker() {
  return (
    <div className="w-full py-12 bg-white border-t border-b border-slate-100 overflow-hidden cursor-none">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 mb-6">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
          Powered By Enterprise Technologies
        </p>
      </div>
      <div className="relative flex max-w-[100vw] overflow-hidden">
        {/* Left/Right Fade Masks */}
        <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex whitespace-nowrap items-center gap-12 md:gap-24 pl-12 md:pl-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {technologies.map((tech, index) => (
            <span key={index} className="text-xl md:text-3xl font-extrabold text-slate-200 uppercase tracking-tighter">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}