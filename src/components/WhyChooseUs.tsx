"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, TrendingUp, Cpu } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="w-full py-28 bg-slate-50 relative z-10 border-t border-slate-200 cursor-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Why Businesses Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AutoScriptPro</span>
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

        {/* BENTO BOX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          
          {/* Card 1 (Large - Spans 2 columns on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-slate-900 rounded-[2rem] p-10 relative overflow-hidden group cursor-none border border-slate-800"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] group-hover:bg-blue-500/30 transition-colors duration-500" />
            <div className="relative z-10 flex flex-col h-full justify-center">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 backdrop-blur-sm border border-white/5">
                <Cpu size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Architecture, Not Templates</h3>
              <p className="text-slate-400 leading-relaxed max-w-lg">
                We engineer bespoke systems tailored to your exact operational bottlenecks. Whether it's complex RAG pipelines, custom LLM integrations, or robust Spring Boot backends, we build infrastructure that scales with you.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-[2rem] p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-200 group cursor-none hover:border-blue-300 transition-colors duration-300"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
              <Zap size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Rapid Deployment</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We move fast. By utilizing modern frameworks and agile methodologies, we take you from strategy call to deployed automation in record time.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-[2rem] p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-200 group cursor-none hover:border-blue-300 transition-colors duration-300"
          >
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Pure ROI Focus</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              If it doesn't save you hours of manual work or generate new leads, we don't build it. Every line of code is mapped to your bottom line.
            </p>
          </motion.div>

          {/* Card 4 (Large - Spans 2 columns on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] p-10 relative overflow-hidden group cursor-none text-white shadow-xl shadow-blue-900/20"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full justify-center">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 text-white backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise-Grade Security</h3>
              <p className="text-blue-100 leading-relaxed max-w-lg">
                Your data is your most valuable asset. We implement zero-trust architectures, secure API handling, and scalable databases to ensure your automated workflows are locked down and fully compliant.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}