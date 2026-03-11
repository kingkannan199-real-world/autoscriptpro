"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import MagneticButton from "./MagneticButton"; // <-- Imported the magnet logic

export default function Navbar() {
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <motion.header 
      initial={{ y: -100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-8 left-1/2 z-[100] w-[90%] max-w-5xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-full px-4 md:px-6 py-2"
    >
      <div className="flex items-center justify-between h-12 md:h-14">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2 cursor-none">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-lg">A</div>
          <span className="text-lg font-extrabold text-slate-900 tracking-tight">AutoScriptPro<span className="text-blue-600">.</span></span>
        </div>

        {/* --- DRIBBBLE MICRO-INTERACTION NAV --- */}
        <nav 
          className="hidden md:flex items-center gap-2 relative"
          onMouseLeave={() => setHoveredLink(null)} 
        >
          {/* Services Dropdown */}
          <div 
            className="relative px-4 py-2 cursor-none"
            onMouseEnter={() => {
              setIsServicesHovered(true);
              setHoveredLink("Services");
            }}
            onMouseLeave={() => setIsServicesHovered(false)}
          >
            {hoveredLink === "Services" && (
              <motion.div layoutId="nav-pill" className="absolute inset-0 bg-slate-100/80 rounded-full -z-10" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
            )}
            <div className="flex items-center gap-1 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors cursor-none z-10 relative">
              Services <ChevronDown size={14} className={`transition-transform ${isServicesHovered ? "rotate-180" : ""}`} />
            </div>

            <AnimatePresence>
              {isServicesHovered && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 mt-2"
                >
                  <a href="#services" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-sm font-bold text-slate-900">Automation & AI</a>
                  <a href="#services" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-sm font-bold text-slate-900">Web Development</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Regular Links */}
          {["Process", "Impact", "Team"].map((item) => (
            <div 
              key={item} 
              className="relative px-4 py-2 cursor-none"
              onMouseEnter={() => setHoveredLink(item)}
            >
              {hoveredLink === item && (
                <motion.div layoutId="nav-pill" className="absolute inset-0 bg-slate-100/80 rounded-full -z-10" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
              )}
              <a href={`#${item.toLowerCase()}`} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors relative z-10 cursor-none">
                {item}
              </a>
            </div>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* --- MAGNETIC BUTTON APPLIED HERE --- */}
          <MagneticButton 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:flex px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg duration-300 items-center justify-center cursor-none"
          >
            Get Started
          </MagneticButton>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-none">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="absolute top-[115%] left-0 w-full bg-white/95 backdrop-blur-3xl border border-slate-200 shadow-2xl rounded-3xl overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {["Services", "Process", "Impact", "Team"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-900 hover:bg-slate-50 px-4 py-3 rounded-xl transition-colors">{item}</a>
              ))}
              <div className="pt-2 mt-2 border-t border-slate-100">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-md">Get Started</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}