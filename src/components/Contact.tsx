"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MessageSquare, Send, Loader2, CheckCircle } from "lucide-react";
import { useState, useRef } from "react";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [phone, setPhone] = useState("");
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let rawInput = e.target.value;
    if (rawInput.startsWith("+91 ")) rawInput = rawInput.substring(4);
    else if (rawInput.startsWith("+91")) rawInput = rawInput.substring(3);

    let digits = rawInput.replace(/\D/g, "").substring(0, 10);
    setPhone(digits.length > 0 ? `+91 ${digits.length > 5 ? digits.substring(0, 5) + " " + digits.substring(5) : digits}` : "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState("loading");

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwDlOss2vGe8Vwl0ml5-eiQquOxWM19gc0WUMHb7aM9LWVxShhXmE1DJgCtrcTQYdh8Wg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: phone,
          service: formData.service,
          message: formData.message
        }),
      });

      setSubmitState("success");
      setFormData({ name: "", email: "", company: "", service: "", message: "" }); 
      setPhone("");
      
      setTimeout(() => setSubmitState("idle"), 3000);

    } catch (error) {
      setSubmitState("error");
      setTimeout(() => setSubmitState("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="w-full py-20 md:py-28 bg-white relative z-10 overflow-hidden cursor-none">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10 mt-8 md:mt-0">
        
        <div className="text-center mb-12 md:mb-20">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-flex items-center justify-center px-4 py-1.5 mb-4 md:mb-6 rounded-full bg-blue-50 border border-blue-100 cursor-none">
            <span className="text-xs md:text-sm font-bold text-blue-600 tracking-wider uppercase">Book Your Call</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 tracking-tight">
            Let's Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Journey</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-4 flex flex-col gap-4 md:gap-6">
            
            <div className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm flex items-center md:items-start md:flex-col gap-4 md:gap-0 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group cursor-none">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-xl flex items-center justify-center md:mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 text-blue-600 shrink-0">
                <Mail size={18} className="md:w-5 md:h-5" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-1">Email Us</h3>
                <p className="text-sm text-slate-500 font-medium">autoscriptpro@gmail.com</p>
              </div>
            </div>

            <div className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm flex items-center md:items-start md:flex-col gap-4 md:gap-0 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group cursor-none">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-xl flex items-center justify-center md:mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 text-blue-600 shrink-0">
                <Phone size={18} className="md:w-5 md:h-5" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-1">Call Us</h3>
                <p className="text-sm text-slate-500 font-medium">+91 72006 96059</p>
              </div>
            </div>

            {/* WHATSAPP DIRECT LINK CARD */}
            <a 
              href="https://wa.me/917200696059?text=Hi%20AutoScriptPro,%20I'm%20interested%20in%20scaling%20my%20business%20with%20AI%20and%20Automation." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 p-5 md:p-8 rounded-2xl md:rounded-3xl border border-slate-800 shadow-xl text-white group cursor-none relative overflow-hidden flex items-center md:items-start md:flex-col gap-4 md:gap-0 block hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 pointer-events-auto"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-500" />
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center md:mb-5 text-blue-400 group-hover:scale-110 transition-transform duration-300 shrink-0 relative z-10">
                <MessageSquare size={18} className="md:w-5 md:h-5" />
              </div>
              <div className="relative z-10">
                <h3 className="text-base md:text-lg font-bold mb-1">Live Chat</h3>
                <p className="text-xs md:text-sm text-slate-400 font-medium mb-0 md:mb-4 hidden md:block">Chat with our AI Architect right now.</p>
                <span className="text-xs md:text-sm font-bold text-blue-400 group-hover:text-white transition-colors flex items-center gap-2 mt-1 md:mt-0">
                  Open WhatsApp →
                </span>
              </div>
            </a>

          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-8 bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8">Send Us A Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-bold text-slate-700">Full Name *</label>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Raju" className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm md:text-base" />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-bold text-slate-700">Email Address *</label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="raju@company.com" className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm md:text-base" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-bold text-slate-700">Company Name</label>
                  <input name="company" value={formData.company} onChange={handleChange} type="text" placeholder="Your Company" className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm md:text-base" />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-bold text-slate-700">Phone Number</label>
                  <input type="tel" value={phone} onChange={handlePhoneChange} placeholder="+91 98765 43210" className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm md:text-base" />
                </div>
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-xs md:text-sm font-bold text-slate-700">Service Interest</label>
                <select name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm md:text-base appearance-none bg-white">
                  <option value="" disabled>Select a service...</option>
                  <option value="ai-agents">Automation & AI Agents</option>
                  <option value="web-dev">Web & Custom Development</option>
                  <option value="data-insights">Data Analysis & Insights</option>
                </select>
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-xs md:text-sm font-bold text-slate-700">Message *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={3} placeholder="Project details..." className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm md:text-base resize-none"></textarea>
              </div>
              
              {/* THE ANIMATED SUBMIT BUTTON */}
              <button 
                type="submit"
                disabled={submitState === "loading" || submitState === "success"}
                className={`w-full py-3 md:py-4 font-bold rounded-xl transition-all duration-500 flex items-center justify-center cursor-none mt-2 relative overflow-hidden ${
                  submitState === "success" 
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30" 
                    : submitState === "error"
                    ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                    : "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-slate-900 hover:shadow-xl"
                }`}
              >
                <AnimatePresence mode="wait">
                  {submitState === "loading" ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="flex items-center gap-2"
                    >
                      Sending...
                      <Loader2 size={18} className="animate-spin" />
                    </motion.div>
                  ) : submitState === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="flex items-center gap-2"
                    >
                      Request Received
                      <CheckCircle size={18} />
                    </motion.div>
                  ) : submitState === "error" ? (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, x: [0, -10, 10, -10, 10, 0] }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex items-center gap-2"
                    >
                      Error. Please try again.
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="flex items-center gap-2"
                    >
                      Submit Architecture Request
                      <Send size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}