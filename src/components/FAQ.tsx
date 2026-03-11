"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. Simple automation workflows can be deployed in 1-2 weeks, while comprehensive multi-agent AI systems and custom architectures may take 6-12 weeks. We provide an exact, guaranteed timeline during our initial Strategy Call."
  },
  {
    question: "Do you work with small startups or just enterprises?",
    answer: "We partner with ambitious businesses of all sizes. Our modular architecture allows us to build lean, high-ROI systems for early-stage startups, and highly scalable, zero-downtime infrastructure for established enterprises."
  },
  {
    question: "Can you integrate with our existing tools and systems?",
    answer: "Absolutely. We specialize in connecting fragmented tools. Whether you use legacy CRMs, custom databases, or standard SaaS products (like Slack, WhatsApp, Stripe, or HubSpot), we build the API bridges to make them communicate seamlessly."
  },
  {
    question: "What if I need changes after the project is complete?",
    answer: "We don't just hand over the code and disappear. We offer ongoing optimization and support retainers to monitor analytics, refine AI prompts, and scale your infrastructure as your business volume grows."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open the first one

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-28 bg-white relative z-10 border-t border-slate-100 cursor-none">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-lg text-slate-500 font-medium"
          >
            Everything you need to know about working with AutoScriptPro.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-blue-500 bg-blue-50/30 shadow-md' : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-none"
              >
                <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${openIndex === index ? 'text-blue-700' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}