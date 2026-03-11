"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, TrendingUp, Cpu } from "lucide-react";

export default function WhyChooseUs() {
  return (
    // Clean bg-white to contrast with the bg-slate-50 from Impact
    <section className="w-full py-28 bg-white relative z-10 border-t border-slate-100 cursor-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Why Businesses Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">AutoScriptPro</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
          >
            We don't just sell software. We partner with you to build scalable, high-performance engines that drive your business forward.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {/* Card 1 - Pure White with Blue Accents */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="md:col-span-2 bg-white rounded-[2rem] p-10 relative overflow-hidden group cursor-none border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col h-full justify-center">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 border border-blue-100 group-hover:scale-110 transition-transform">
                <Cpu size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Custom Architecture, Not Templates</h3>
              <p className="text-slate-500 leading-relaxed max-w-lg font-medium">
                We engineer bespoke systems tailored to your exact bottlenecks. Whether it's complex RAG pipelines or robust Spring Boot backends, we build infrastructure that scales.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-200 group cursor-none hover:shadow-xl hover:border-blue-200 transition-all duration-300">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
              <Zap size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Rapid Deployment</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">We move fast. By utilizing modern frameworks and agile methodologies, we take you from strategy call to deployed automation in record time.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-200 group cursor-none hover:shadow-xl hover:border-blue-200 transition-all duration-300">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Pure ROI Focus</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">If it doesn't save you hours of manual work or generate leads, we don't build it. Every line of code is mapped to your bottom line.</p>
          </motion.div>

          {/* Card 4 - Purified from Dark Blue Gradient */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="md:col-span-2 bg-white rounded-[2rem] p-10 relative overflow-hidden group cursor-none border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col h-full justify-center">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 border border-blue-100 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise-Grade Security</h3>
              <p className="text-slate-500 leading-relaxed max-w-lg font-medium">
                Your data is your most valuable asset. We implement zero-trust architectures, secure API handling, and scalable databases to ensure workflows are fully compliant.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}