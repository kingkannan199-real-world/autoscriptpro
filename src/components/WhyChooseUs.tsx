"use client";

import { motion } from "framer-motion";
import { Settings, Zap, TrendingUp, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Custom Architecture, Not Templates",
    desc: "We engineer bespoke systems tailored to your exact operational bottlenecks. Whether it's complex RAG pipelines, custom LLM integrations, or robust Spring Boot backends, we build infrastructure that scales with you."
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    desc: "We move fast. By utilizing modern frameworks and agile methodologies, we take you from strategy call to deployed automation in record time."
  },
  {
    icon: TrendingUp,
    title: "Pure ROI Focus",
    desc: "If it doesn't save you hours of manual work or generate new leads, we don't build it. Every line of code is mapped to your bottom line."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    desc: "Your data is your most valuable asset. We implement zero-trust architectures, secure API handling, and scalable databases to ensure your automated workflows are locked down."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function WhyChooseUs() {
  return (
    <section className="w-full py-28 bg-white relative z-10 border-t border-slate-100 cursor-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Why Businesses Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">AutoScriptPro</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
          >
            We don't just sell software. We partner with you to build scalable, high-performance engines that drive your business forward.
          </motion.p>
        </div>

        {/* The Premium Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden cursor-none"
            >
              {/* Subtle Blue Hover Wash */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-500">
                  <feature.icon className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors duration-500" strokeWidth={2} />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}