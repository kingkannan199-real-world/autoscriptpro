"use client";

import { motion } from "framer-motion";

const values = [
  { title: "Innovation First", desc: "We stay at the forefront of automation and AI technology, bringing cutting-edge solutions to your business." },
  { title: "Client Success", desc: "Your growth is our priority. We measure our success by the tangible results we deliver to you." },
  { title: "Transparency", desc: "Clear communication, honest timelines, and straightforward pricing. No surprises, just results." },
  { title: "Quality Excellence", desc: "We build systems that are reliable, scalable, and maintainable for the long term." },
  { title: "Continuous Learning", desc: "Technology evolves rapidly. We continuously update our skills to provide the best solutions." },
  { title: "Partnership Mindset", desc: "We're not just vendors—we're partners in your business journey, invested in your success." }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function WhatDrivesUs() {
  return (
    <section className="w-full py-28 bg-white relative z-10 border-t border-slate-100 cursor-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
          >
            What Drives Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-lg text-slate-500 font-medium"
          >
            Our core values guide every decision and interaction
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((value, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {value.title}
              </h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}