"use client";

import { motion, Variants } from "framer-motion";
import { 
  Clock, Target, TrendingDown, Unplug, 
  Bot, MessageSquare, Code2, BarChart3, Database, Workflow 
} from "lucide-react";
import MagneticButton from "./MagneticButton"; 

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } } // Sped up stagger for mobile
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Services() {
  return (
    // Tightened vertical padding on mobile (py-16 instead of py-28)
    <section className="w-full py-16 md:py-28 bg-white relative z-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        
        <div className="mb-20 md:mb-32 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-10 md:mb-16 tracking-tight"
          >
            Is Your Business Slowed Down <br className="hidden md:block"/> by <span className="text-slate-400">Manual Work?</span>
          </motion.h2>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            // Reduced gap on mobile (gap-4 instead of gap-8)
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
          >
            {painPoints.map((point, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                // Tighter padding inside the cards
                className="bg-slate-50 p-5 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group cursor-none text-left md:text-center flex items-start md:items-center md:flex-col gap-4 md:gap-0"
              >
                {/* Shrunk icons on mobile, shifted layout to horizontal row for extreme compactness */}
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-white shadow-sm text-slate-600 rounded-xl md:rounded-2xl flex items-center justify-center md:mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <point.icon size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-3">{point.title}</h3>
                  <p className="text-slate-500 text-sm md:leading-relaxed font-medium">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div id="services" className="text-center pt-12 md:pt-16 border-t border-slate-100 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 cursor-none"
          >
            <span className="text-xs md:text-sm font-bold text-blue-600 tracking-wider uppercase">AutoScriptPro Solutions</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-10 md:mb-16 tracking-tight"
          >
            What We Do <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Best</span>
          </motion.h2>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            // Reduced gap to gap-5 on mobile
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
          >
            {solutions.map((sol, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                // Tighter padding inside solutions cards
                className="bg-white text-left p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group cursor-none"
              >
                <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-2xl md:blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Smaller icon block on mobile */}
                  <div className="relative w-12 h-12 md:w-16 md:h-16 mb-5 md:mb-8">
                    <div className="absolute inset-0 bg-blue-500 rounded-xl md:rounded-2xl blur-lg md:blur-xl opacity-0 group-hover:opacity-40 transition-all" />
                    <div className="relative flex items-center justify-center w-full h-full bg-slate-900 rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-slate-700/50">
                      <div className="absolute inset-[2px] bg-slate-900 rounded-[10px] md:rounded-[14px] flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:4px_4px]" />
                        <sol.icon 
                          size={24} 
                          strokeWidth={1.5} 
                          className="text-blue-400 relative z-10" 
                        />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">{sol.title}</h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">{sol.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-20 flex flex-col items-center justify-center"
          >
            <MagneticButton 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-xl md:rounded-full hover:bg-blue-600 transition-colors shadow-xl flex items-center justify-center gap-2 cursor-none text-base md:text-lg"
            >
              Book Your Free Architecture Call
              <Workflow size={18} />
            </MagneticButton>
          </motion.div>
        </div>

      </div>
    </section>
  );
}