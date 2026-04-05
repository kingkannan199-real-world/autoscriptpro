"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <motion.header
      initial={{ y: -100, x: "-50%" }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-8 left-1/2 z-[100] w-[90%] max-w-5xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-full px-4 md:px-6 py-2 navbar-border-anim"
    >
      <div className="flex items-center justify-between h-12 md:h-14 relative" style={{ zIndex: 3 }}>
        
        {/* Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer pointer-events-auto group/logo"
        >
          <img
            src="/logo-icon.png"
            alt=""
            className="h-7 md:h-8 w-auto rounded-md group-hover/logo:scale-105 transition-transform duration-300"
            draggable={false}
          />
          <span className="text-[15px] md:text-lg font-extrabold tracking-tight leading-none flex">
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #202a62, #1c4b95)" }}>Auto</span>
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #1d8955, #f8b312)" }}>Script</span>
            <span className="bg-clip-text text-transparent ml-1" style={{ backgroundImage: "linear-gradient(90deg, #de4126, #d03121)" }}>Pro</span>
          </span>
        </div>

        {/* Nav Links */}
        <nav
          className="hidden md:flex items-center gap-1 relative"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {["Services", "Process", "Pricing", "Case Studies", "FAQ"].map((item) => (
            <div
              key={item}
              className="relative px-3 py-2"
              onMouseEnter={() => setHoveredLink(item)}
            >
              {hoveredLink === item && (
                <motion.div layoutId="nav-pill" className="absolute inset-0 bg-slate-100/80 rounded-full -z-10" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
              )}
              <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors relative z-10">
                {item}
              </a>
            </div>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <MagneticButton 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:flex px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg duration-300 items-center justify-center"
          >
            Book Free Consultation
          </MagneticButton>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors pointer-events-auto">
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
              {["Services", "Process", "Pricing", "Case Studies", "FAQ"].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-900 hover:bg-slate-50 px-4 py-3 rounded-xl transition-colors">{item}</a>
              ))}
              <div className="pt-2 mt-2 border-t border-slate-100">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-md">Book Free Consultation</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}