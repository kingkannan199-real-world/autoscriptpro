"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles, Target, ShieldCheck, Award, RefreshCw, Users } from "lucide-react";
import SpotlightCard from "./SpotlightCard"; // <-- Imported Physics Engine

const values = [
  { 
    title: "Innovation First", 
    desc: "We stay at the forefront of automation and AI technology. We don't just follow industry trends; we engineer them to bring cutting-edge solutions directly to your business.", 
    icon: Sparkles,
    color: "text-blue-600",
    bgGlow: "from-blue-100/50 to-transparent"
  },
  { 
    title: "Client Success", 
    desc: "Your growth is our priority. We measure our success strictly by the tangible ROI we deliver.", 
    icon: Target,
    color: "text-emerald-600",
    bgGlow: "from-emerald-100/50 to-transparent"
  },
  { 
    title: "Transparency", 
    desc: "Clear communication, honest timelines, and straightforward pricing. No surprises.", 
    icon: ShieldCheck,
    color: "text-amber-600",
    bgGlow: "from-amber-100/50 to-transparent"
  },
  { 
    title: "Quality Excellence", 
    desc: "We build systems that are scalable, secure, and maintainable for the long term.", 
    icon: Award,
    color: "text-purple-600",
    bgGlow: "from-purple-100/50 to-transparent"
  },
  { 
    title: "Continuous Learning", 
    desc: "Technology evolves rapidly. We constantly update our tech stack to provide elite solutions.", 
    icon: RefreshCw,
    color: "text-cyan-600",
    bgGlow: "from-cyan-100/50 to-transparent"
  },
  { 
    title: "Partnership Mindset", 
    desc: "We're not just outside vendors—we're technical partners invested directly in your startup's success.", 
    icon: Users,
    color: "text-rose-600",
    bgGlow: "from-rose-100/50 to-transparent"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

export default function WhatDrivesUs() {
  return (
    <section className="w-full py-20 md:py-28 bg-white relative z-10 border-t border-slate-100 cursor-none scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 cursor-none"
          >
            <span className="text-sm font-bold text-blue-600 tracking-wider uppercase">Our Core Values</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            What Drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Us.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
          >
            The engineering principles and partnership standards that guide every line of code we write and every system we deploy.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((value, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 0.98 }} 
              className="h-full"
            >
              {/* Added SpotlightCard Wrapper */}
              <SpotlightCard className="h-full group cursor-none">
                
                {/* Replaced standard border with perfectly nested rounded-[23px] inner card */}
                <div className="relative h-full w-full bg-white flex flex-col p-6 md:p-10 rounded-[23px] overflow-hidden z-10">
                  <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${value.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all duration-300 ${value.color}`}>
                      <value.icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                        {value.title}
                      </h3>
                      <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                </div>

              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}