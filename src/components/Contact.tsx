"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  return (
    // ---> Added id="contact" right here <---
    <section id="contact" className="w-full py-28 bg-slate-50 relative z-10 border-t border-slate-200 overflow-hidden cursor-none">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Let's Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Automation Journey</span>
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
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 text-blue-600">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Email Us</h3>
              <p className="text-slate-500 font-medium mb-2">autoscriptpro@gmail.com</p>
              <p className="text-xs text-slate-400">We typically respond within 24 hours</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 text-blue-600">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us</h3>
              <p className="text-slate-500 font-medium mb-2">+91 72006 96059</p>
              <p className="text-xs text-slate-400">Mon-Fri, 9am-6pm IST</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700 shadow-lg text-white group">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-lg font-bold mb-1">Live Chat</h3>
              <p className="text-slate-300 font-medium text-sm mb-4">Chat with our AI Architect right now to get instant answers.</p>
              <button className="text-sm font-bold text-blue-400 hover:text-white transition-colors flex items-center gap-2 cursor-none">
                Start Chat →
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Intake Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 bg-white p-10 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-xl relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send Us A Message</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name *</label>
                  <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address *</label>
                  <input type="email" placeholder="john@company.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Company Name</label>
                  <input type="text" placeholder="Your Company" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input type="tel" placeholder="+91 72006 96059" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Service Interest</label>
                {/* Changed to defaultValue="" to fix React warnings */}
                <select defaultValue="" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium text-slate-900 appearance-none">
                  <option value="" disabled>Select a service...</option>
                  <option value="ai-agents">Automation & AI Agents</option>
                  <option value="web-dev">Web & Custom Development</option>
                  <option value="data-insights">Data Analysis & Insights</option>
                  <option value="custom">Other / Custom Solutions</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message *</label>
                <textarea rows={4} placeholder="Tell us about your project and what you're looking to achieve..." className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400 resize-none"></textarea>
              </div>

              <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-slate-900 transition-colors shadow-lg shadow-blue-600/20 hover:shadow-xl hover:-translate-y-0.5 duration-300 flex items-center justify-center gap-2 cursor-none">
                Send Message
                <Send size={18} />
              </button>

              <p className="text-xs text-center text-slate-500 mt-4">
                By submitting this form, you agree to our privacy policy. We respect your privacy and will never share your information.
              </p>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}