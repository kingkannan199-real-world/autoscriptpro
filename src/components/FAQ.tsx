"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical architecture deployment take?",
    answer: "It depends on the complexity of your operational bottlenecks. Standard automation workflows and single-agent setups can be deployed in 2 to 3 weeks. Full-scale custom architectures with custom database integrations typically take 6 to 8 weeks."
  },
  {
    question: "Do you integrate with our existing tech stack?",
    answer: "Absolutely. We don't rip and replace unless necessary. Our team specializes in building custom API bridges and middleware that seamlessly connect your new AI agents and automations to your existing CRMs, databases, and software."
  },
  {
    question: "How does your pricing model work?",
    answer: "We offer transparent, milestone-based pricing mapped directly to the ROI our systems generate. After our initial strategy call, we provide a full technical blueprint and a flat-rate project cost calculated entirely in INR. No hidden fees, no open-ended hourly billing."
  },
  {
    question: "What happens after the system is deployed?",
    answer: "We don't just hand over the code and disappear. Every deployment includes comprehensive technical documentation, a team handover session, and a 30-day monitoring period. We also offer ongoing retainer packages for continuous system optimization."
  },
  {
    question: "Is my proprietary business data secure?",
    answer: "Security is our baseline, not a feature. We engineer zero-trust architectures, utilize encrypted data pipelines, and ensure our custom LLM integrations do not leak your proprietary data into public training models."
  }
];

export default function FAQ() {
  // Set the first FAQ to be open by default to invite interaction
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-28 bg-white relative z-10 border-t border-slate-100 cursor-none scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 cursor-none"
          >
            <span className="text-sm font-bold text-blue-600 tracking-wider uppercase">F.A.Q</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
          >
            Everything you need to know about partnering with AutoScriptPro to scale your operations.
          </motion.p>
        </div>

        {/* The Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-2xl transition-colors duration-300 ${
                  isOpen ? "bg-slate-50 border-blue-200" : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-none focus:outline-none group"
                >
                  <span className={`text-lg md:text-xl font-bold transition-colors duration-300 pr-8 ${
                    isOpen ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600"
                  }`}>
                    {isOpen ? <Minus size={20} strokeWidth={2.5} /> : <Plus size={20} strokeWidth={2.5} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-slate-500 font-medium leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}