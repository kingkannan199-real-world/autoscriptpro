"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { useState, useRef } from "react";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    let rawInput = val;
    if (rawInput.startsWith("+91 ")) {
      rawInput = rawInput.substring(4);
    } else if (rawInput.startsWith("+91")) {
      rawInput = rawInput.substring(3);
    }

    let digits = rawInput.replace(/\D/g, "");
    digits = digits.substring(0, 10);

    let formatted = "";
    if (digits.length > 0) {
      formatted = "+91 ";
      if (digits.length > 5) {
        formatted += digits.substring(0, 5) + " " + digits.substring(5);
      } else {
        formatted += digits;
      }
    }

    setPhone(formatted);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real app, you would fire your API/Email service here.
    
    // 1. Trigger the success UI
    setIsSubmitted(true);
    
    // 2. Wipe the form completely clean
    formRef.current?.reset();
    setPhone("");

    // Optional: Auto-dismiss the success message after 8 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 8000);
  };

  return (
    <section id="contact" className="w-full py-28 bg-white relative z-10 border-t border-slate-100 overflow-hidden cursor-none">
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 cursor-none"
          >
            <span className="text-sm font-bold text-blue-600 tracking-wider uppercase">Book Your Call</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Let's Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Automation Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
          >
            Schedule a free consultation to discuss your specific bottlenecks and map out a custom automation architecture.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 group cursor-none">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 text-blue-600">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Email Us</h3>
              <p className="text-slate-500 font-medium mb-2">autoscriptpro@gmail.com</p>
              <p className="text-xs text-slate-400 font-medium">We typically respond within 24 hours</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 group cursor-none">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 text-blue-600">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us</h3>
              <p className="text-slate-500 font-medium mb-2">+91 72006 96059</p>
              <p className="text-xs text-slate-400 font-medium">Mon-Fri, 9am-6pm IST</p>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl text-white group cursor-none relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-lg font-bold mb-1">Live Chat</h3>
                <p className="text-slate-400 font-medium text-sm mb-6">Chat with our AI Architect right now to get instant answers.</p>
                <button className="text-sm font-bold text-blue-400 hover:text-white transition-colors flex items-center gap-2 cursor-none">
                  Start Chat →
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
          >
            {/* --- PREMIUM SUCCESS OVERLAY --- */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, backdropFilter: "blur(0px)" }}
                  animate={{ opacity: 1, scale: 1, backdropFilter: "blur(12px)" }}
                  exit={{ opacity: 0, scale: 0.95, backdropFilter: "blur(0px)" }}
                  className="absolute inset-0 z-50 bg-white/80 flex flex-col items-center justify-center p-8 text-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15, delay: 0.1 }}
                    className="w-20 h-20 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-emerald-500 shadow-lg shadow-emerald-500/20"
                  >
                    <CheckCircle2 size={40} strokeWidth={2.5} />
                  </motion.div>
                  
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Architecture Request Secured.
                  </h3>
                  <p className="text-slate-500 font-medium max-w-md mx-auto mb-8 leading-relaxed">
                    Our lead engineers are actively reviewing your operational bottlenecks. We will reach out within 24 hours to schedule your technical teardown.
                  </p>
                  
                  <MagneticButton 
                    onClick={() => setIsSubmitted(false)}
                    className="px-8 py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-xl cursor-none"
                  >
                    Close Dashboard
                  </MagneticButton>
                </motion.div>
              )}
            </AnimatePresence>

            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send Us A Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name *</label>
                  <input required type="text" placeholder="Raju" className="w-full px-5 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400 cursor-text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address *</label>
                  <input required type="email" placeholder="raju@company.com" className="w-full px-5 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400 cursor-text" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Company Name</label>
                  <input type="text" placeholder="Your Company" className="w-full px-5 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400 cursor-text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="+91 98765 43210" 
                    className="w-full px-5 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400 cursor-text" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Service Interest</label>
                <select defaultValue="" required className="w-full px-5 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium text-slate-900 appearance-none cursor-pointer">
                  <option value="" disabled>Select a service...</option>
                  <option value="ai-agents">Automation & AI Agents</option>
                  <option value="web-dev">Web & Custom Development</option>
                  <option value="data-insights">Data Analysis & Insights</option>
                  <option value="custom">Other / Custom Solutions</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message *</label>
                <textarea required rows={4} placeholder="Tell us about your project and what you're looking to achieve..." className="w-full px-5 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400 resize-none cursor-text"></textarea>
              </div>

              {/* Note: In a real app, this button type should technically be "submit", but Framer Motion handles the click fine within a form */}
              <MagneticButton className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-slate-900 transition-colors shadow-lg shadow-blue-600/20 hover:shadow-xl duration-300 flex items-center justify-center gap-2 cursor-none">
                Submit Architecture Request
                <Send size={18} />
              </MagneticButton>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs font-medium text-slate-500">
                <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                100% secure. We never share your data.
              </div>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}