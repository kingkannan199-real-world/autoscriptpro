"use client";

import { motion, Variants } from "framer-motion";
// The exact enterprise & AI stack your agency deploys
const technologies = [
  "Next.js", 
  "Spring Boot", 
  "Firebase", 
  "OpenAI", 
  "React Three Fiber", 
  "Gemini", 
  "PostgreSQL",
  "Perplexity",
  "OpenCV",
  "TailwindCSS"
];

export default function TechMarquee() {
  return (
    <section className="py-12 border-b border-slate-100 bg-white overflow-hidden cursor-none">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 text-center">
        <p className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase">
          Engineered With Enterprise-Grade Infrastructure
        </p>
      </div>

      {/* The Fade Mask - This makes the edges fade to white seamlessly */}
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        
        <motion.div
          className="flex items-center gap-16 md:gap-24 w-max"
          // We move from 0% to -50% to create the infinite loop
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        >
          {/* We render the array twice so it loops perfectly without jumping */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div 
              key={index} 
              className="text-xl md:text-2xl font-extrabold text-slate-300 tracking-tight flex-shrink-0 hover:text-blue-500 transition-colors duration-300"
            >
              {tech}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}