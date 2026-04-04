"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, GitMerge, Cpu, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "1. Architecture Audit", desc: "We analyze your current bottlenecks, map your data silos, and identify exact workflows where manual hours are being wasted." },
  { icon: Cpu, title: "2. System Design", desc: "Our architects blueprint a custom solution—from AI agent prompting structures to database schemas—ensuring maximum scalability." },
  { icon: GitMerge, title: "3. Development & Integration", desc: "We build the frontend interfaces and wire up the backend automations, integrating seamlessly with your existing tech stack." },
  { icon: Rocket, title: "4. Deployment & Scale", desc: "We launch the system, monitor the data pipelines, and hand over the keys to a completely automated, high-converting engine." }
];

export default function Process() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 85%", "end 60%"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="w-full py-20 md:py-32 bg-slate-50 relative z-10 cursor-none scroll-mt-20">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative mt-10 md:mt-0">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 cursor-none"
          >
            <span className="text-xs md:text-sm font-bold text-blue-600 tracking-wider uppercase">Our Methodology</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            From First Call to <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Live System in 30 Days.</span>
          </motion.h2>
        </div>

        <div ref={timelineRef} className="relative w-full max-w-5xl mx-auto">
          {/* Scroll-draw timeline line */}
          <div className="absolute top-0 bottom-0 left-3 md:left-1/2 w-[3px] md:w-2 bg-slate-100 md:-translate-x-1/2 rounded-full z-0 overflow-hidden">
            <motion.div
              style={{ scaleY: lineScaleY, originY: 0 }}
              className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-500 to-indigo-600 rounded-full"
            />
          </div>

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative flex items-center justify-between w-full mb-7 md:mb-24 last:mb-0">
                
                {/* THE FIX: Removed margin="-100px" so icons animate immediately. Tightened left-4 alignment */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="absolute left-3 md:left-1/2 w-7 h-7 md:w-14 md:h-14 -translate-x-1/2 z-[40]"
                >
                  {/* Pulse ring */}
                  <motion.div
                    initial={{ scale: 1, opacity: 0.6 }}
                    whileInView={{ scale: 2.2, opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full bg-blue-400/40"
                  />
                  <div className="w-full h-full bg-white border-2 md:border-4 border-blue-100 rounded-full flex items-center justify-center shadow-md md:shadow-lg text-blue-600">
                    <step.icon size={12} strokeWidth={2.5} className="md:hidden" />
                    <step.icon size={22} strokeWidth={2.5} className="hidden md:block" />
                  </div>
                </motion.div>

                {/* THE FIX: Tightened mobile padding (pl-12) to match the new line position */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -30 : 30, y: 20 }} 
                  whileInView={{ opacity: 1, x: 0, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`w-full md:w-[45%] pl-9 md:pl-0 z-20 ${isEven ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12 md:text-left"}`}
                >
                  <div className="bg-white p-3.5 md:p-8 rounded-xl md:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 group cursor-none">
                    <h3 className="text-sm md:text-2xl font-bold text-slate-900 mb-1 md:mb-3 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-base text-slate-500 font-medium leading-relaxed">
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