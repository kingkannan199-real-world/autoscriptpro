"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Activity, Database, GitMerge, TrendingUp, Monitor } from "lucide-react";
import Image from "next/image";

const initialCaseStudies = [
  {
    id: "cs-1",
    icon: Database, client: "Healthcare Supply Chain", location: "Chennai, TN",
    title: "Pharmaceutical Inventory Optimization", tech: "Next.js • Spring Boot • PostgreSQL",
    metric: "100%", metricLabel: "Real-Time Stock Accuracy",
    desc: "Engineered a custom dashboard to automate inventory tracking and eliminate manual stock discrepancies, drastically reducing operational bleed.",
    screenshot: "/case-studies/healthcare.png",
    screenshotAlt: "Healthcare inventory dashboard showing real-time stock levels",
    screenshotGradient: "from-sky-500/20 to-blue-600/20",
  },
  {
    id: "cs-2",
    icon: GitMerge, client: "Local Tech Startup", location: "Tamil Nadu",
    title: "Autonomous Multi-Agent System", tech: "LLMs • RAG • Fast API",
    metric: "40+", metricLabel: "Hours Saved / Week",
    desc: "Deployed an interconnected AI architecture routing complex research tasks across Perplexity and GPT, acting as a tireless backend intelligence team.",
    screenshot: "/case-studies/ai-agents.png",
    screenshotAlt: "Multi-agent AI system architecture with connected nodes",
    screenshotGradient: "from-violet-500/20 to-indigo-600/20",
  },
  {
    id: "cs-3",
    icon: Activity, client: "Civic Tech Initiative", location: "Chennai, TN",
    title: "High-Speed Issue Tracking Portal", tech: "React • Node.js • AWS",
    metric: "60%", metricLabel: "Drop in Resolution Time",
    desc: "Architected a scalable, automated complaint routing system that categorizes and assigns public issues instantly, replacing a completely manual workflow.",
    screenshot: "/case-studies/civic-tech.png",
    screenshotAlt: "Issue tracking portal with kanban board and analytics",
    screenshotGradient: "from-emerald-500/20 to-teal-600/20",
  },
  {
    id: "cs-4",
    icon: TrendingUp, client: "E-Commerce Brand", location: "Global",
    title: "Predictive CRM & Sales Automation", tech: "Python • LangChain • Stripe API",
    metric: "3.5x", metricLabel: "Increase in Re-engagement",
    desc: "Built a predictive customer engine that analyzes buying patterns and automatically triggers hyper-personalized WhatsApp and Email sequences.",
    screenshot: "/case-studies/ecommerce.png",
    screenshotAlt: "CRM dashboard showing customer analytics and campaign metrics",
    screenshotGradient: "from-rose-500/20 to-pink-600/20",
  }
];

export default function CaseStudies() {
  const [studies, setStudies] = useState(initialCaseStudies);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => { handleNext(); }, 6000);
    return () => clearInterval(timer);
  }, [studies]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setStudies((prev) => {
      const newArr = [...prev];
      newArr.push(newArr.shift()!);
      return newArr;
    });
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setStudies((prev) => {
      const newArr = [...prev];
      newArr.unshift(newArr.pop()!);
      return newArr;
    });
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleCardClick = (index: number) => {
    if (index === 0 || isAnimating) return;
    setIsAnimating(true);
    setStudies((prev) => {
      const newArr = [...prev];
      const clicked = newArr.splice(index, 1)[0];
      newArr.unshift(clicked);
      return newArr;
    });
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <section id="case-studies" className="w-full py-20 md:py-32 bg-slate-50 relative z-10 overflow-hidden border-t border-slate-200">
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
        
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-flex items-center justify-center px-4 py-1.5 mb-4 md:mb-6 rounded-full bg-white border border-blue-100 shadow-sm">
            <span className="text-xs md:text-sm font-bold text-blue-600 tracking-wider uppercase">Proven Impact</span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 md:mb-6 tracking-tight">
            Real Clients. Real Numbers. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Verified ROI.</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-sm md:text-lg text-slate-500 font-medium mb-6 md:mb-10 leading-relaxed max-w-sm">
            See how we engineer custom automation architectures that eliminate manual bottlenecks.
          </motion.p>

          <div className="flex items-center gap-4">
            <button onClick={handlePrev} className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all duration-300 active:scale-95">
              <ArrowLeft size={20} strokeWidth={2.5} className="md:w-6 md:h-6" />
            </button>
            <button onClick={handleNext} className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 border border-blue-500 shadow-lg shadow-blue-600/20 flex items-center justify-center text-white hover:bg-slate-900 hover:border-slate-800 hover:shadow-xl transition-all duration-300 active:scale-95">
              <ArrowRight size={20} strokeWidth={2.5} className="md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-2/3 h-[400px] md:h-[500px] relative perspective-[1000px] mt-4 lg:mt-0">
          <AnimatePresence mode="popLayout">
            {studies.map((study, index) => {
              const isFront = index === 0;
              const yOffset = index * 16; 
              const scale = 1 - index * 0.05;
              const zIndex = studies.length - index;
              const opacity = 1 - index * 0.25;

              return (
                <motion.div
                  key={study.id}
                  layoutId={study.id}
                  onClick={() => handleCardClick(index)}
                  initial={{ opacity: 0, y: yOffset + 50, scale: scale - 0.1 }}
                  animate={{ opacity: opacity, y: yOffset, scale: scale }}
                  exit={{ opacity: 0, y: -100, scale: 1.1, filter: "blur(10px)" }}
                  transition={{ type: "spring", stiffness: 120, damping: 20, mass: 1 }}
                  style={{ zIndex, transformOrigin: "top center" }}
                  className={`absolute top-0 left-0 right-0 mx-auto w-full max-w-2xl bg-white rounded-[2rem] overflow-hidden transition-all duration-300 ${
                    isFront
                      ? "border-2 border-blue-400 shadow-[0_20px_60px_-10px_rgba(37,99,235,0.18)]"
                      : "border-2 border-slate-200 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.06)] hover:border-blue-200"
                  }`}
                >
                  {isFront && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-600" />}

                  <div className="p-5 md:p-8 h-full flex flex-col justify-between relative bg-white">
                    
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-3 md:mb-5">
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center border shadow-sm ${isFront ? 'bg-blue-50 border-blue-100 text-blue-600' : 'bg-slate-50 border-slate-100 text-slate-500'}`}>
                          <study.icon size={18} strokeWidth={2} className="md:w-6 md:h-6" />
                        </div>
                        <div>
                          <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">{study.client}</p>
                          <p className="text-[10px] md:text-xs font-medium text-slate-500">{study.location}</p>
                        </div>
                      </div>
                      
                      {isFront && (
                        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Live System</span>
                        </div>
                      )}
                    </div>

                    {/* Content + Screenshot side by side on desktop */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-3 md:mb-5 flex-1">
                      {/* Text content */}
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-lg md:text-2xl font-extrabold mb-2 md:mb-3 tracking-tight ${isFront ? 'text-slate-900' : 'text-slate-700'}`}>
                          {study.title}
                        </h3>
                        <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed line-clamp-3">
                          {study.desc}
                        </p>
                        <div className="mt-2 md:mt-3 inline-block px-2 py-1 md:px-3 md:py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[10px] md:text-xs font-bold text-slate-600">
                          {study.tech}
                        </div>
                      </div>

                      {/* Product screenshot — only on front card */}
                      {isFront && (
                        <div className={`hidden md:block w-[220px] h-[150px] rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-gradient-to-br ${study.screenshotGradient} shrink-0 relative group`}>
                          <Image
                            src={study.screenshot}
                            alt={study.screenshotAlt}
                            fill
                            className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                            sizes="220px"
                          />
                          {/* Overlay badge */}
                          <div className="absolute bottom-2 left-2 flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-md shadow-sm">
                            <Monitor size={10} className="text-blue-600" />
                            <span className="text-[9px] font-bold text-slate-700">Live Preview</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom metric row */}
                    <div className={`pt-3 md:pt-4 border-t ${isFront ? 'border-blue-100' : 'border-slate-100'} flex items-end justify-between`}>
                      <div>
                        <div className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 tracking-tighter mb-1">
                          {study.metric}
                        </div>
                        <div className="text-[10px] md:text-xs font-extrabold text-slate-900 uppercase tracking-widest">
                          {study.metricLabel}
                        </div>
                      </div>
                      
                      {isFront && (
                        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hidden md:flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-slate-900 transition-colors group">
                          View Blueprint <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      )}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}