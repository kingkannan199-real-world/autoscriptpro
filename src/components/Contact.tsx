"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";
import { useState } from "react"; // Added React State

export default function Contact() {
  // State to hold the dynamically formatted phone number
  const [phone, setPhone] = useState("");

  // The Formatter Logic
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    // Isolate the user's raw input by stripping the country code if it's there
    let rawInput = val;
    if (rawInput.startsWith("+91 ")) {
      rawInput = rawInput.substring(4);
    } else if (rawInput.startsWith("+91")) {
      rawInput = rawInput.substring(3);
    }

    // Strip out absolutely everything that isn't a number
    let digits = rawInput.replace(/\D/g, "");

    // Hard-stop at 10 digits
    digits = digits.substring(0, 10);

    // Build the formatted string
    let formatted = "";
    if (digits.length > 0) {
      formatted = "+91 ";
      if (digits.length > 5) {
        // Add the space after the 5th digit
        formatted += digits.substring(0, 5) + " " + digits.substring(5);
      } else {
        formatted += digits;
      }
    }

    setPhone(formatted);
  };

  return (
    <section id="contact" className="w-full py-28 bg-white relative z-10 border-t border-slate-100 overflow-hidden cursor-none">
      
      {/* Subtle, Monolithic Brand Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
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
          
          {/* LEFT COLUMN: Contact Info */}
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

            {/* Solid Slate-900 Card to match primary CTA buttons */}
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

          {/* RIGHT COLUMN: The Intake Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send Us A Message</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name *</label>
                  <input type="text" placeholder="Raju" className="w-full px-5 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400 cursor-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address *</label>
                  <input type="email" placeholder="raju@company.com" className="w-full px-5 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400 cursor-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Company Name</label>
                  <input type="text" placeholder="Your Company" className="w-full px-5 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400 cursor-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  {/* Controlled input wired up to the custom handler */}
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="+91 98765 43210" 
                    className="w-full px-5 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400 cursor-none" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Service Interest</label>
                <select defaultValue="" className="w-full px-5 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium text-slate-900 appearance-none cursor-none">
                  <option value="" disabled>Select a service...</option>
                  <option value="ai-agents">Automation & AI Agents</option>
                  <option value="web-dev">Web & Custom Development</option>
                  <option value="data-insights">Data Analysis & Insights</option>
                  <option value="custom">Other / Custom Solutions</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message *</label>
                <textarea rows={4} placeholder="Tell us about your project and what you're looking to achieve..." className="w-full px-5 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400 resize-none cursor-none"></textarea>
              </div>

              <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-slate-900 transition-colors shadow-lg shadow-blue-600/20 hover:shadow-xl hover:-translate-y-0.5 duration-300 flex items-center justify-center gap-2 cursor-none">
                Submit Architecture Request
                <Send size={18} />
              </button>

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