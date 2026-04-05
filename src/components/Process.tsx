"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Search, GitMerge, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Architecture Audit",
    desc: "We analyze your current bottlenecks, map your data silos, and identify exact workflows where manual hours are being wasted.",
    color: "#3b82f6", // Blue
  },
  {
    icon: Cpu,
    title: "2. System Design",
    desc: "Our architects blueprint a custom solution—from AI agent prompting structures to database schemas—ensuring maximum scalability.",
    color: "#06b6d4", // Cyan
  },
  {
    icon: GitMerge,
    title: "3. Development & Integration",
    desc: "We build the frontend interfaces and wire up the backend automations, integrating seamlessly with your existing tech stack.",
    color: "#8b5cf6", // Violet
  },
  {
    icon: Rocket,
    title: "4. Deployment & Scale",
    desc: "We launch the system, monitor the data pipelines, and hand over the keys to a completely automated, high-converting engine.",
    color: "#10b981", // Emerald
  },
];

export default function Process() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [maxProgress, setMaxProgress] = useState(0);
  const [activeCards, setActiveCards] = useState<boolean[]>([false, false, false, false]);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 55%"],
  });

  const cardThresholds = [0.08, 0.33, 0.58, 0.83];

  // One-way progress — never decreases
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setMaxProgress((prev) => Math.max(prev, latest));
  });

  // Activate cards
  useEffect(() => {
    setActiveCards((prev) => {
      const next = [...prev];
      let changed = false;
      cardThresholds.forEach((threshold, i) => {
        if (maxProgress >= threshold && !next[i]) {
          next[i] = true;
          changed = true;
        }
      });
      return changed ? next : prev;
    });
  }, [maxProgress]);

  const fillPercent = Math.min(Math.max(maxProgress, 0), 1) * 100;

  // Dynamic gradient for the line — transitions through each step's color
  const lineGradient = `linear-gradient(to bottom, 
    ${steps[0].color} 0%, 
    ${steps[1].color} 33%, 
    ${steps[2].color} 66%, 
    ${steps[3].color} 100%
  )`;

  return (
    <section id="process" className="w-full py-20 md:py-32 bg-slate-50 relative z-10 scroll-mt-20">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative mt-10 md:mt-0">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100"
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

          {/* ── Grey track ── */}
          <div className="absolute top-0 bottom-0 left-3 md:left-1/2 w-[3px] md:w-[5px] bg-slate-200 md:-translate-x-1/2 rounded-full z-0" />

          {/* ── Flowing color fill — multi-color gradient, one-way ── */}
          <div
            className="absolute top-0 left-3 md:left-1/2 w-[3px] md:w-[5px] md:-translate-x-1/2 rounded-full z-[1]"
            style={{
              height: `${fillPercent}%`,
              background: lineGradient,
              boxShadow: "0 0 14px rgba(59,130,246,0.4), 0 0 28px rgba(99,102,241,0.2)",
              transition: "height 0.15s linear",
            }}
          >
            {/* Glowing tip */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full"
              style={{
                background: `radial-gradient(circle, ${steps[Math.min(Math.floor(maxProgress * 4), 3)].color}, ${steps[Math.min(Math.floor(maxProgress * 4), 3)].color}88)`,
                boxShadow: `0 0 16px ${steps[Math.min(Math.floor(maxProgress * 4), 3)].color}cc, 0 0 32px ${steps[Math.min(Math.floor(maxProgress * 4), 3)].color}66`,
              }}
            />
          </div>

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const isActive = activeCards[index];

            return (
              <div key={index} className="relative flex items-center justify-between w-full mb-7 md:mb-24 last:mb-0">
                
                {/* ── Step icon on the line ── */}
                <div className="absolute left-3 md:left-1/2 w-7 h-7 md:w-14 md:h-14 -translate-x-1/2 z-[40]">
                  
                  {/* Horizontal shockwave — starts at center line, spreads to both sides */}
                  {isActive && (
                    <>
                      <motion.div
                        initial={{ scaleX: 0, opacity: 0.8 }}
                        animate={{ scaleX: 40, opacity: 0 }}
                        transition={{ duration: 1.4, ease: "easeOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[3px] md:h-[4px] w-4 rounded-full z-[-1]"
                        style={{ background: `linear-gradient(90deg, transparent, ${step.color}88, ${step.color}, ${step.color}88, transparent)` }}
                      />
                      <motion.div
                        initial={{ scaleX: 0, opacity: 0.5 }}
                        animate={{ scaleX: 40, opacity: 0 }}
                        transition={{ duration: 1.6, ease: "easeOut", delay: 0.15 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[6px] md:h-[8px] w-4 rounded-full z-[-1] blur-[2px]"
                        style={{ background: `linear-gradient(90deg, transparent, ${step.color}44, ${step.color}66, ${step.color}44, transparent)` }}
                      />
                    </>
                  )}

                  {/* Icon spin on activation */}
                  <motion.div
                    className="w-full h-full rounded-full flex items-center justify-center transition-all duration-700"
                    animate={isActive ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      background: isActive ? `linear-gradient(135deg, ${step.color}, ${step.color}dd)` : "#ffffff",
                      border: isActive ? `3px solid ${step.color}44` : "3px solid #e2e8f0",
                      color: isActive ? "#ffffff" : "#94a3b8",
                      boxShadow: isActive
                        ? `0 0 24px ${step.color}55, 0 4px 16px ${step.color}33`
                        : "0 1px 3px rgba(0,0,0,0.06)",
                    }}
                  >
                    <step.icon size={12} strokeWidth={2.5} className="md:hidden" />
                    <step.icon size={22} strokeWidth={2.5} className="hidden md:block" />
                  </motion.div>
                </div>

                {/* ── Card with border-draw animation ── */}
                <div className={`w-full md:w-[45%] pl-9 md:pl-0 z-20 ${isEven ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12 md:text-left"}`}>
                  <div
                    className={`card-border-wrap ${isActive ? "active" : ""} ${isEven ? "from-right" : "from-left"}`}
                    style={{ "--card-color": step.color } as React.CSSProperties}
                  >
                    <div
                      className="bg-white p-3.5 md:p-8 rounded-xl md:rounded-[1.5rem] transition-all duration-700 relative z-10"
                      style={{
                        boxShadow: isActive
                          ? `0 8px 30px rgba(0,0,0,0.06)`
                          : "0 1px 3px rgba(0,0,0,0.04)",
                      }}
                    >
                      {/* Title — staggered fade */}
                      <motion.h3
                        className="text-sm md:text-2xl font-bold mb-1 md:mb-3 transition-colors duration-500"
                        initial={false}
                        animate={{
                          color: isActive ? step.color : "#0f172a",
                          opacity: isActive ? 1 : 0.9,
                        }}
                        transition={{ duration: 0.5

 }}
                      >
                        {step.title}
                      </motion.h3>
                      {/* Description — slightly delayed */}
                      <motion.p
                        className="text-xs md:text-base text-slate-500 font-medium leading-relaxed"
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0.7 }}
                        transition={{ duration: 0.5, delay: isActive ? 0.2 : 0 }}
                      >
                        {step.desc}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}