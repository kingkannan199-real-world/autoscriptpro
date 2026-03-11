"use client";

import { motion } from "framer-motion";
import { 
  Clock, Target, TrendingDown, Unplug, 
  Bot, MessageSquare, Code2, BarChart3, Database, Workflow 
} from "lucide-react";
import MagneticButton from "./MagneticButton"; // <-- Imported the magnet logic

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
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Services() {
  return (
    <section className="w-full py-28 bg-white relative z-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- PAIN POINTS SECTION (Neutralized & Premium) --- */}
        <div className="mb-32 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-16 tracking-tight"
          >
            Is Your Business Slowed Down <br className="hidden md:block"/> by <span className="text-slate-400">Manual Work?</span>
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
                className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 hover:-translate-y-2 transition-all duration-500 group cursor-none"
              >
                <div className="w-14 h-14 bg-white shadow-sm text-slate-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                  <point.icon size={26} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-wide">{point.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{point.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- SOLUTIONS SECTION (Monolithic Blue Aesthetic) --- */}
        <div id="services" className="text-center pt-16 border-t border-slate-100 scroll-mt-28">
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
            What We Do <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Best</span>
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
                className="bg-white text-left p-6 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group cursor-none"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="relative w-16 h-16 mb-8 group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500" />
                    <div className="relative flex items-center justify-center w-full h-full bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-700/50 group-hover:border-blue-500/50 transition-colors duration-500">
                      
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_70%,#3b82f6_80%,#93c5fd_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      
                      <div className="absolute inset-[2px] bg-slate-900 rounded-[14px] flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:4px_4px]" />
                        <sol.icon 
                          size={28} 
                          strokeWidth={1.5} 
                          className="text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all duration-300 relative z-10 group-hover:scale-110" 
                        />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-300">{sol.title}</h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium mb-2">{sol.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 flex flex-col items-center justify-center"
          >
            {/* --- MAGNETIC BUTTON APPLIED HERE --- */}
            <MagneticButton 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-blue-600 transition-colors shadow-xl hover:shadow-blue-600/20 duration-300 flex items-center gap-2 cursor-none text-lg"
            >
              Book Your Free Architecture Call
              <Workflow size={18} />
            </MagneticButton>
            
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-500">
              <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              No commitment. Just a 30-minute technical teardown.
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}