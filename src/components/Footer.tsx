"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 py-12 border-t border-slate-900 cursor-none relative z-10 overflow-hidden">
      
      {/* Subtle blue accent at the very bottom edge */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center font-bold text-white text-xs">A</div>
            <span className="text-lg font-extrabold text-white tracking-tight">AutoScriptPro<span className="text-blue-500">.</span></span>
          </div>
          <p className="text-sm text-slate-500 font-medium">
            Engineered in Chennai. Built for the World.
          </p>
        </div>

        {/* Socials & Legal */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white hover:-translate-y-1 transition-all cursor-none"><Github size={20} /></a>
            <a href="#" className="hover:text-blue-400 hover:-translate-y-1 transition-all cursor-none"><Linkedin size={20} /></a>
            <a href="mailto:autoscriptpro@gmail.com" className="hover:text-red-400 hover:-translate-y-1 transition-all cursor-none"><Mail size={20} /></a>
          </div>
          <p className="text-xs text-slate-600 font-medium">
            © {new Date().getFullYear()} AutoScriptPro. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}