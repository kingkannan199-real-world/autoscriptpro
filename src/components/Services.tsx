"use client";

import { motion } from "framer-motion";
import { 
  Clock, 
  Target, 
  TrendingDown, 
  Unplug, 
  Bot, 
  MessageSquare, 
  Code2, 
  BarChart3, 
  Database, 
  Workflow 
} from "lucide-react";

const painPoints = [
  { icon: Clock, title: "Time Drain", desc: "Repetitive tasks & manual processes eating up valuable hours." },
  { icon: Target, title: "Missed Opportunities", desc: "Slow responses & poor follow-ups losing you customers." },
  { icon: TrendingDown, title: "Data Without Direction", desc: "No actionable insights from your business data." },
  { icon: Unplug, title: "Disconnected Tools", desc: "Systems not talking to each other, creating silos." }
];

const solutions = [
  { icon: Bot, title: "Automation & AI Agents", desc: "Intelligent workflows, AI agents, and database automation that work 24/7." },
  { icon: MessageSquare, title: "WhatsApp & Email Campaigns", desc: "Bulk messaging, automated follow-ups, and CRM automation." },
  { icon: Code2, title: "Web & Custom Development", desc: "Landing pages, dashboards, and automation-ready systems." },
  { icon: BarChart3, title: "Data Analysis & Insights", desc: "Interactive dashboards, reports, and business intelligence." },
  { icon: Database, title: "Database Solutions", desc: "Scalable database design, optimization, and integration." },
  { icon: Workflow, title: "Custom Solutions", desc: "Tailor-made automation for any workflow or industry." }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Services() {
  return (
    // ---> Added id="services" right here for the Navbar <---
    <section id="services" className="w-full py-28 bg-white relative z-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- PAIN POINTS SECTION --- */}
        <div className="mb-32 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-16 tracking-tight"
          >
            Is Your Business Slowed Down <br className="hidden md:block"/> by <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Manual Work?</span>
          </motion.h2>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {painPoints.map((point, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 group cursor-none"
              >
                <div className="w-14 h-14 bg-white shadow-sm text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                  <point.icon size={26} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-wide">{point.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{point.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- SOLUTIONS SECTION --- */}
        <div className="text-center pt-16 border-t border-slate-100">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 cursor-none"
          >
            <span className="text-sm font-bold text-blue-600 tracking-wider uppercase cursor-none">AutoScriptPro Solutions</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-16 tracking-tight"
          >
            What We Do <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Best</span>
          </motion.h2>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {solutions.map((sol, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white text-left p-10 rounded-3xl border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.15)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group cursor-none"
              >
                {/* Advanced hover glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative z-10">
                  
                  {/* --- THE "WOW" HOLOGRAPHIC TECH CORE --- */}
                  <div className="relative w-16 h-16 mb-8 group-hover:-translate-y-2 transition-transform duration-500">
                    
                    {/* Outer ambient glow that pulses on hover */}
                    <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500" />
                    
                    {/* The Dark Container Shell */}
                    <div className="relative flex items-center justify-center w-full h-full bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-700/50 group-hover:border-transparent transition-colors duration-500">
                      
                      {/* 1. The Spinning Conic Light Beam */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_70%,#3b82f6_80%,#8b5cf6_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      
                      {/* 2. The Inner Dark Core (Hides the center of the spinning beam) */}
                      <div className="absolute inset-[2px] bg-slate-900 rounded-[14px] flex items-center justify-center overflow-hidden">
                        
                        {/* 3. Subtle internal grid pattern */}
                        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:4px_4px]" />
                        
                        {/* 4. The Holographic Icon */}
                        <sol.icon 
                          size={28} 
                          strokeWidth={1.5} 
                          className="text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all duration-300 relative z-10 group-hover:scale-110" 
                        />
                      </div>
                    </div>
                  </div>
                  {/* ------------------------------------------- */}

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-700 transition-colors duration-300">{sol.title}</h3>
                  <p className="text-slate-500 text-base leading-relaxed font-medium mb-2">{sol.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-blue-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-none inline-flex items-center gap-2">
              Book Your Free Architecture Call
              <Workflow size={18} />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}