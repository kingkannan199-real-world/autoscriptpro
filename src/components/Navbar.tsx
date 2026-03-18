"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticButton from "./MagneticButton"; 

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // --- FIRECRACKER SCROLL ANIMATION (Point 9) ---
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* THE FIRECRACKER SCROLL LINE */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-blue-600 z-[1000]" 
        style={{ width: progressWidth }}
      >
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border-[3px] border-blue-400 rounded-full shadow-[0_0_15px_#3b82f6] animate-pulse" />
      </motion.div>

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

          {/* Nav Links */}
          <nav 
            className="hidden md:flex items-center gap-2 relative"
            onMouseLeave={() => setHoveredLink(null)} 
          >
            {["Services", "Process", "Impact", "Case Studies"].map((item) => (
              <div 
                key={item} 
                className="relative px-4 py-2 cursor-none"
                onMouseEnter={() => setHoveredLink(item)}
              >
                {hoveredLink === item && (
                  <motion.div layoutId="nav-pill" className="absolute inset-0 bg-slate-100/80 rounded-full -z-10" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                )}
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors relative z-10 cursor-none">
                  {item}
                </a>
              </div>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
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
                {["Services", "Process", "Impact", "Case Studies"].map((item) => (
                  <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-900 hover:bg-slate-50 px-4 py-3 rounded-xl transition-colors">{item}</a>
                ))}
                <div className="pt-2 mt-2 border-t border-slate-100">
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-md">Get Started</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}