"use client";

import { motion } from "framer-motion";

export default function Navbar() {
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
        <nav className="hidden md:flex items-center gap-8">
          {["Services", "Process", "Impact", "Team"].map((item) => (
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
          
          {/* Mobile Menu Button (Hamburger icon) */}
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