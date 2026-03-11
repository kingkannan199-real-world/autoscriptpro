"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Layers, Server, Cpu, Code2, Network } from "lucide-react";

const expertise = [
  {
    icon: BrainCircuit,
    title: "AI & LLM Architects",
    desc: "Designing intelligent agents, custom function-calling models, and generative architectures."
  },
  {
    icon: Layers,
    title: "Frontend & Spatial Engineers",
    desc: "Crafting hyper-converting, immersive Next.js and 3D web experiences."
  },
  {
    icon: Server,
    title: "System Design Specialists",
    desc: "Architecting scalable, high-throughput backends using Java, Spring Boot, and AWS."
  },
  {
    icon: Cpu,
    title: "Data & Automation Scientists",
    desc: "Turning raw data into automated, predictive pipelines using Python and advanced computer vision."
  },
  {
    icon: Network,
    title: "Workflow Integration",
    desc: "Seamlessly connecting fragmented tools into one unified, automated ecosystem."
  },
  {
    icon: Code2,
    title: "Full-Stack Developers",
    desc: "Engineering robust, end-to-end applications built for zero-downtime scaling."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Team() {
  return (
    <section id="team" className="w-full py-28 bg-white relative z-10 border-t border-slate-100 cursor-none overflow-hidden">
      
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 cursor-none"
          >
            <span className="text-sm font-bold text-blue-600 tracking-wider uppercase">The Engineering Core</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Specialists.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
          >
            A dedicated squad of computer science engineers, AI researchers, and system architects passionate about eliminating manual work.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {expertise.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:bg-white hover:shadow-[0_8px_30px_-4px_rgba(59,130,246,0.1)] hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 group cursor-none flex flex-col items-start text-left"
            >
              <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300">
                <item.icon size={24} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-700 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}