"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Database, GitMerge } from "lucide-react";

const caseStudies = [
  {
    icon: Database,
    client: "Healthcare Supply Chain",
    location: "Chennai, TN",
    title: "Pharmaceutical Inventory Optimization",
    tech: "Next.js • Spring Boot",
    metric: "100%", // <-- Swapped the INR for a massive operational metric
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
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function CaseStudies() {
  return (
    <section id="impact" className="w-full py-28 bg-white relative z-10 border-t border-slate-100 cursor-none scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 cursor-none"
          >
            <span className="text-sm font-bold text-blue-600 tracking-wider uppercase">Proven Impact</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Real Deployments. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Measurable ROI.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
          >
            We don't build toys. We engineer robust, autonomous systems that solve expensive operational bottlenecks for growing companies.
          </motion.p>
        </div>

        {/* The Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 mb-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    <study.icon size={22} strokeWidth={2} />
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{study.client}</p>
                    <p className="text-xs font-medium text-slate-500">{study.location}</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 leading-relaxed mb-6">
                  {study.desc}
                </p>
                <div className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-bold text-slate-500">
                  {study.tech}
                </div>
              </div>

              <div className="relative z-10 pt-6 border-t border-slate-200 group-hover:border-blue-100 transition-colors duration-300">
                <div className="text-3xl font-extrabold text-slate-900 mb-1">
                  {study.metric}
                </div>
                <div className="text-sm font-bold text-blue-600">
                  {study.metricLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group cursor-none">
            View full architectural teardowns
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}