"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Database, GitMerge } from "lucide-react";

const caseStudies = [
  // ... (Keep your existing caseStudies array data exactly the same)
  {
    icon: Database,
    client: "Healthcare Supply Chain",
    location: "Chennai, TN",
    title: "Pharmaceutical Inventory Optimization",
    tech: "Next.js • Spring Boot",
    metric: "100%",
    metricLabel: "Real-Time Stock Accuracy",
    desc: "Engineered a custom dashboard to automate inventory tracking and eliminate manual stock discrepancies, drastically reducing operational bleed."
  },
  {
    icon: GitMerge,
    client: "Local Tech Startup",
    location: "Tamil Nadu",
    title: "Autonomous Multi-Agent System",
    tech: "LLMs • RAG • API Routing",
    metric: "40+ Hours",
    metricLabel: "Manual Research Saved / Week",
    desc: "Deployed an interconnected AI architecture routing complex research tasks across Perplexity and GPT, acting as a tireless backend intelligence team."
  },
  {
    icon: Activity,
    client: "Civic Tech Initiative",
    location: "Chennai, TN",
    title: "High-Speed Issue Tracking Portal",
    tech: "Full-Stack Automation",
    metric: "60%",
    metricLabel: "Drop in Resolution Time",
    desc: "Architected a scalable, automated complaint routing system that categorizes and assigns public issues instantly, replacing a completely manual workflow."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function CaseStudies() {
  return (
    // Reduced py-28 to py-16 on mobile
    <section id="impact" className="w-full py-16 md:py-28 bg-white relative z-10 border-t border-slate-100 cursor-none scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 cursor-none"
          >
            <span className="text-xs md:text-sm font-bold text-blue-600 tracking-wider uppercase">Proven Impact</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 tracking-tight"
          >
            Real Deployments. <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Measurable ROI.</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          // Tightened gap-8 to gap-5 on mobile
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              // Tightened p-8 to p-6 on mobile
              className="bg-slate-50 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between"
            >
              <div className="relative z-10 mb-6 md:mb-8">
                <div className="flex items-center justify-between mb-5 md:mb-8">
                  {/* Smaller icons */}
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg md:rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600">
                    <study.icon size={20} strokeWidth={2} />
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">{study.client}</p>
                    <p className="text-[10px] md:text-xs font-medium text-slate-500">{study.location}</p>
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">
                  {study.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 leading-relaxed mb-4 md:mb-6">
                  {study.desc}
                </p>
                <div className="inline-block px-2 py-1 md:px-3 md:py-1 bg-white border border-slate-200 rounded-md text-[10px] md:text-xs font-bold text-slate-500">
                  {study.tech}
                </div>
              </div>

              <div className="relative z-10 pt-4 md:pt-6 border-t border-slate-200">
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-1">
                  {study.metric}
                </div>
                <div className="text-xs md:text-sm font-bold text-blue-600">
                  {study.metricLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}