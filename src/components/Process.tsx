"use client";

import { motion } from "framer-motion";
import { Search, GitMerge, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Architecture Audit",
    desc: "We analyze your current bottlenecks, map your data silos, and identify exact workflows where manual hours are being wasted."
  },
  {
    icon: Cpu,
    title: "2. System Design",
    desc: "Our architects blueprint a custom solution—from AI agent prompting structures to database schemas—ensuring maximum scalability."
  },
  {
    icon: GitMerge,
    title: "3. Development & Integration",
    desc: "We build the frontend interfaces and wire up the backend automations, integrating seamlessly with your existing tech stack."
  },
  {
    icon: Rocket,
    title: "4. Deployment & Scale",
    desc: "We launch the system, monitor the data pipelines, and hand over the keys to a completely automated, high-converting engine."
  }
];

export default function Process() {
  return (
    // FIX: Alternating bg-slate-50 and responsive vertical padding
    <section id="process" className="w-full py-20 md:py-32 bg-slate-50 relative z-10 border-t border-slate-100 cursor-none scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 cursor-none"
          >
            <span className="text-xs md:text-sm font-bold text-blue-600 tracking-wider uppercase">Our Methodology</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            How We Build <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">The Future.</span>
          </motion.h2>
        </div>

        {/* --- THE TIMELINE --- */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 w-1 bg-gradient-to-b from-blue-100 via-blue-400 to-transparent md:-translate-x-1/2 rounded-full z-0" />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              // FIX: Tightened bottom margin for mobile timeline
              <div key={index} className="relative flex items-center justify-between w-full mb-10 md:mb-24 last:mb-0">
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="absolute left-[28px] md:left-1/2 w-12 h-12 md:w-14 md:h-14 bg-white border-4 border-blue-100 rounded-full flex items-center justify-center -translate-x-1/2 z-20 shadow-lg text-blue-600"
                >
                  <step.icon size={20} strokeWidth={2.5} className="md:w-6 md:h-6" />
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12 md:text-left"}`}
                >
                  {/* FIX: Tighter padding on mobile cards */}
                  <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 group cursor-none">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}