"use client";

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-slate-950 border-t border-slate-800 text-slate-400 cursor-none relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-8">
        
        {/* Brand */}
        <div className="flex items-center gap-2 cursor-none">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-blue-500/20">
            A
          </div>
          <span className="text-2xl font-extrabold text-white tracking-tight">
            AutoScriptPro<span className="text-blue-500">.</span>
          </span>
        </div>

        {/* Tagline - Building that local startup trust! */}
        <p className="text-sm font-medium text-slate-500 tracking-wide">
          Engineered in Chennai. Built for scale.
        </p>

        {/* Divider */}
        <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-4" />

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} AutoScriptPro. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
}