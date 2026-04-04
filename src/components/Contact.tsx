"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MessageSquare, Send, Loader2, CheckCircle, Clock, Shield, Zap } from "lucide-react";
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
  const [honeypot, setHoneypot] = useState("");
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: phone,
          service: formData.service,
          message: formData.message,
          _honeypot: honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitState("success");
      setFormData({ name: "", email: "", company: "", service: "", message: "" });
      setPhone("");
      setTimeout(() => setSubmitState("idle"), 3000);

    } catch (error) {
      setSubmitState("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
      setTimeout(() => setSubmitState("idle"), 5000);
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
            Tell Us Your Bottleneck —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              We'll Map the Automation in 48 Hours.
            </span>
          </motion.h2>

          {/* Trust signals row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-2"
          >
            {[
              { icon: Zap, text: "Reply within 2 hours" },
              { icon: Shield, text: "NDA on every project" },
              { icon: Clock, text: "Mon–Sat, 9AM–7PM IST" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full">
                <Icon size={12} className="text-blue-600 shrink-0" />
                <span className="text-xs font-bold text-slate-600">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-4 flex flex-col gap-5 md:gap-6">

            {/* What happens next block */}
            <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-10 pointer-events-none" />
              <h3 className="text-base md:text-lg font-extrabold text-white mb-6 relative z-10">What Happens After You Submit</h3>
              <div className="flex flex-col gap-5 relative z-10">
                {[
                  {
                    step: "01",
                    title: "We Review Your Brief",
                    desc: "Within 2 hours on business days, our team reads every detail you send.",
                    color: "bg-blue-600",
                  },
                  {
                    step: "02",
                    title: "Free 30-Min Strategy Call",
                    desc: "We jump on a call, map your workflow gap, and show you exactly what we'd build.",
                    color: "bg-indigo-500",
                  },
                  {
                    step: "03",
                    title: "Custom Proposal + Pricing",
                    desc: "You get a clear scope, INR milestone plan, and timeline — before any commitment.",
                    color: "bg-violet-500",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className={`w-8 h-8 ${item.color} rounded-xl flex items-center justify-center shrink-0 shadow-lg`}>
                      <span className="text-[10px] font-extrabold text-white">{item.step}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white mb-0.5">{item.title}</p>
                      <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact cards */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group cursor-none">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 text-blue-600 shrink-0">
                <Mail size={17} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Email</p>
                <p className="text-sm font-bold text-slate-900">autoscriptpro@gmail.com</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group cursor-none">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 text-blue-600 shrink-0">
                <Phone size={17} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Call / WhatsApp</p>
                <p className="text-sm font-bold text-slate-900">+91 72006 96059</p>
              </div>
            </div>

            <a
              href="https://wa.me/917200696059?text=Hi%20AutoScriptPro,%20I'm%20interested%20in%20scaling%20my%20business%20with%20AI%20and%20Automation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold rounded-2xl transition-colors duration-200 cursor-none text-sm shadow-lg shadow-green-500/20 pointer-events-auto"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp Now
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
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" inputMode="email" placeholder="raju@company.com" className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm md:text-base" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-bold text-slate-700">Company Name</label>
                  <input name="company" value={formData.company} onChange={handleChange} type="text" placeholder="Your Company" className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm md:text-base" />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-bold text-slate-700">Phone Number</label>
                  <input type="tel" inputMode="tel" value={phone} onChange={handlePhoneChange} placeholder="+91 98765 43210" className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm md:text-base" />
                </div>
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-xs md:text-sm font-bold text-slate-700">Service Interest</label>
                <select name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm md:text-base appearance-none bg-white">
                  <option value="" disabled>Select a service...</option>
                  <option value="ai-agents">Automation & AI Agents</option>
                  <option value="web-dev">Web & Custom Development</option>
                  <option value="data-insights">Data Analysis & Insights</option>
                  <option value="database">Database Solutions</option>
                  <option value="campaigns">WhatsApp & Email Campaigns</option>
                  <option value="custom">Custom Workflow Solution</option>
                </select>
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-xs md:text-sm font-bold text-slate-700">Message *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={3} placeholder="Tell us about your bottleneck..." className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm md:text-base resize-none"></textarea>
              </div>

              {/* Honeypot — hidden from real users, bots fill it */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <input
                  type="text"
                  name="_honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
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
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex items-center gap-2"
                    >
                      {errorMessage || "Error. Please try again."}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="flex items-center gap-2"
                    >
                      Book Free Consultation
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