"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-slate-200/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* The Brand Logo */}
        <div className="flex items-center gap-2 cursor-none">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">
            A
          </div>
          <span className="text-xl font-extrabold text-slate-900 tracking-tight">
            AutoScriptPro<span className="text-blue-600">.</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 relative">
          
          {/* --- NEW INTERACTIVE SERVICES DROPDOWN --- */}
          <div 
            className="relative py-8" // Padding bridges the gap so the menu doesn't close when moving the mouse down
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
          >
            <a 
              href="#services" 
              className="flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors cursor-none"
            >
              Services
              <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesHovered ? "rotate-180 text-blue-600" : ""}`} />
            </a>

            <AnimatePresence>
              {isServicesHovered && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden cursor-none"
                >
                  <a href="#services" className="block px-4 py-3 hover:bg-slate-50 rounded-xl cursor-none group transition-colors">
                    <span className="block text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Automation & AI Agents</span>
                    <span className="block text-xs text-slate-500 mt-0.5">Custom LLMs & workflows</span>
                  </a>
                  <a href="#services" className="block px-4 py-3 hover:bg-slate-50 rounded-xl cursor-none group transition-colors">
                    <span className="block text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Web & Custom Dev</span>
                    <span className="block text-xs text-slate-500 mt-0.5">Next.js & Spring Boot</span>
                  </a>
                  <a href="#services" className="block px-4 py-3 hover:bg-slate-50 rounded-xl cursor-none group transition-colors">
                    <span className="block text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Data Analysis</span>
                    <span className="block text-xs text-slate-500 mt-0.5">Dashboards & pipelines</span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* --------------------------------------- */}

          {["Process", "Impact", "Team"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors cursor-none"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Call to Action Button */}
        <div className="flex items-center gap-4">
          <a 
            href="#contact"
            className="hidden md:flex px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-blue-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-none"
          >
            Get Started
          </a>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-900 cursor-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

      </div>
    </motion.header>
  );
}