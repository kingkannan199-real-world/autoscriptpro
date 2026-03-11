"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Code, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Understand your bottlenecks and identify high-ROI automation opportunities.",
    icon: Search,
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Architect the optimal tech stack and solution tailored for your specific goals.",
    icon: Lightbulb,
  },
  {
    num: "03",
    title: "Implementation",
    desc: "Build, test, and deploy the system with precision and zero operational downtime.",
    icon: Code,
  },
  {
    num: "04",
    title: "Optimization",
    desc: "Monitor analytics, refine workflows, and scale the infrastructure as you grow.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="process" className="w-full py-28 bg-slate-50 relative z-10 overflow-hidden cursor-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-100/50 border border-blue-200 cursor-none"
          >
            <span className="text-sm font-bold text-blue-700 tracking-wider uppercase">How We Deliver</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            The AutoScriptPro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Methodology</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
          >
            Our proven engineering process ensures successful implementation, zero friction, and highly measurable outcomes.
          </motion.p>
        </div>

        {/* --- TIMELINE GRID --- */}
        <div className="relative">
          
          {/* The background connecting line (Desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-1 bg-slate-200 rounded-full z-0" />
          
          {/* The animated "filling" line */}
          <motion.div 
            initial={{ width: "0%" }}
            whileInView={{ width: "80%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="hidden lg:block absolute top-12 left-[10%] h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full z-0 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group flex flex-col items-center text-center cursor-none"
              >
                
                {/* The Timeline Node / Icon Container */}
                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center mb-8 relative group-hover:-translate-y-2 transition-transform duration-500 z-10">
                  
                  {/* Glowing ring on hover */}
                  <div className="absolute inset-[-4px] rounded-full border-2 border-transparent group-hover:border-blue-400 group-hover:scale-110 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  
                  <step.icon size={32} className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* The big step number positioned like a badge */}
                  <div className="absolute -bottom-2 -right-2 bg-slate-900 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white group-hover:bg-blue-600 transition-colors duration-300">
                    {step.num}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {step.desc}
                </p>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}