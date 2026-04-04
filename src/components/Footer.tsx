"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, Github, Linkedin, Twitter, ArrowRight, Clock } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Impact", href: "#impact" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Automation & AI Agents",
  "Web & Custom Development",
  "Data Analysis & Insights",
  "Database Solutions",
  "WhatsApp & Email Campaigns",
  "Custom Workflows",
];

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter / X" },
  { icon: Mail, href: "mailto:autoscriptpro@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 relative z-10 overflow-hidden cursor-none">

      {/* Top gradient divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-600/40 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

        {/* Column 1 — Brand */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 cursor-pointer w-fit"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-lg">A</div>
            <span className="text-lg font-extrabold text-white tracking-tight">
              AutoScriptPro<span className="text-blue-500">.</span>
            </span>
          </div>

          <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-[220px]">
            We engineer autonomous systems that eliminate manual work and accelerate your growth.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 cursor-none"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Location badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800/60 border border-slate-700/50 rounded-full w-fit">
            <span className="text-lg leading-none">🇮🇳</span>
            <span className="text-xs font-bold text-slate-400 tracking-wide">Engineered in Chennai</span>
          </div>

          {/* Business hours */}
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Clock size={12} className="text-slate-600 shrink-0" />
            <span>Mon–Sat, 9AM–7PM <span className="text-slate-400 font-bold">IST</span></span>
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-extrabold text-white uppercase tracking-widest">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm font-medium text-slate-500 hover:text-blue-400 transition-colors flex items-center gap-2 group cursor-none"
                >
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-blue-500" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Services */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-extrabold text-white uppercase tracking-widest">Services</h4>
          <ul className="flex flex-col gap-3">
            {services.map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  className="text-sm font-medium text-slate-500 hover:text-blue-400 transition-colors cursor-none"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Contact + CTA */}
        <div className="flex flex-col gap-6">
          <h4 className="text-sm font-extrabold text-white uppercase tracking-widest">Get In Touch</h4>

          <div className="flex flex-col gap-4">
            <a href="mailto:autoscriptpro@gmail.com" className="flex items-center gap-3 group cursor-none">
              <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shrink-0">
                <Mail size={14} />
              </div>
              <span className="text-sm text-slate-500 group-hover:text-slate-200 transition-colors font-medium">autoscriptpro@gmail.com</span>
            </a>

            <a href="tel:+917200696059" className="flex items-center gap-3 group cursor-none">
              <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shrink-0">
                <Phone size={14} />
              </div>
              <span className="text-sm text-slate-500 group-hover:text-slate-200 transition-colors font-medium">+91 72006 96059</span>
            </a>

            <a
              href="https://wa.me/917200696059?text=Hi%20AutoScriptPro,%20I'm%20interested%20in%20scaling%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group cursor-none"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300 shrink-0">
                <MessageSquare size={14} />
              </div>
              <span className="text-sm text-slate-500 group-hover:text-emerald-400 transition-colors font-medium">Chat on WhatsApp</span>
            </a>
          </div>

          {/* Mini CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-2 w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-colors cursor-none"
          >
            Book Free Consultation
            <ArrowRight size={15} />
          </motion.a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600 font-medium">
            © {new Date().getFullYear()} AutoScriptPro. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-600 font-medium">
            <a href="/privacy-policy" className="hover:text-slate-400 transition-colors cursor-none">Privacy Policy</a>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <a href="/terms" className="hover:text-slate-400 transition-colors cursor-none">Terms & Conditions</a>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span>Built with <span className="text-blue-500 font-bold">Next.js</span> · <span className="text-blue-500 font-bold">Chennai, India</span></span>
          </div>
        </div>
      </div>

    </footer>
  );
}
