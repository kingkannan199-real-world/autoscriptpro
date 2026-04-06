"use client";

import { motion, Variants } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

const rows = [
  {
    icon: "⚡",
    topic: "Repetitive daily tasks",
    without: "Done manually, 3–6 hrs/day",
    with: "Fully automated, 0 human hours",
  },
  {
    icon: "🎯",
    topic: "Lead follow-up",
    without: "Missed calls, delayed replies",
    with: "Instant WhatsApp + email response",
  },
  {
    icon: "📈",
    topic: "Data & reports",
    without: "Spreadsheets built every Monday",
    with: "Live dashboard, auto-updated",
  },
  {
    icon: "🛡️",
    topic: "New employee onboarding",
    without: "Week-long manual process",
    with: "Automated workflow, day one ready",
  },
  {
    icon: "🤖",
    topic: "Customer support",
    without: "One person answering the same 10 questions",
    with: "AI agent handles 80% of queries 24/7",
  },
  {
    icon: "🚀",
    topic: "Scaling operations",
    without: "Hire more people to handle more volume",
    with: "Systems scale, headcount stays the same",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function ComparisonSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-slate-50 relative z-10 overflow-hidden border-t border-slate-100">

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-100 rounded-full blur-[100px] opacity-50 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-5 rounded-full bg-blue-50 border border-blue-100"
          >
            <span className="text-xs md:text-sm font-bold text-blue-600 tracking-wider uppercase">The Real Cost of Doing Nothing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            Your Business{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Without Us</span>
            {" "}vs{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">With Us</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-500 font-medium max-w-2xl mx-auto"
          >
            Every day you operate manually is money and time you can't get back.
          </motion.p>
        </div>

        {/* Table header — desktop only */}
        <div className="hidden md:grid grid-cols-[1fr_1fr_1fr] gap-4 mb-3 px-1">
          <div className="text-xs font-extrabold text-slate-400 uppercase tracking-widest pl-2">Area</div>
          <div className="flex items-center justify-center gap-1.5 bg-amber-50 border border-amber-100 rounded-xl py-2 px-3">
            <X size={13} className="text-amber-500 shrink-0" />
            <span className="text-xs font-extrabold text-amber-600 uppercase tracking-wider">Without AutoScriptPro</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-blue-50 border border-blue-100 rounded-xl py-2 px-3">
            <Check size={13} className="text-blue-600 shrink-0" />
            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider">With AutoScriptPro</span>
          </div>
        </div>

        {/* Rows */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-2 md:gap-3"
        >
          {rows.map((row, i) => (
            <motion.div
              key={i}
              variants={rowVariants}
            >
              {/* Desktop — 3-column row */}
              <div className="hidden md:grid grid-cols-[1fr_1fr_1fr] gap-4 items-center">
                <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
                  <span className="text-sm font-bold text-slate-700">{row.icon} {row.topic}</span>
                </div>
                <div className="bg-amber-50/70 border border-amber-100 rounded-xl px-4 py-3 flex items-start gap-2">
                  <X size={13} className="text-amber-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-amber-800 font-medium leading-snug">{row.without}</span>
                </div>
                <div className="bg-blue-50/60 border border-blue-100 rounded-xl px-4 py-3 flex items-start gap-2">
                  <Check size={13} className="text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-blue-800 font-semibold leading-snug">{row.with}</span>
                </div>
              </div>

              {/* Mobile — Side-by-side Before | After row */}
              <div
                className="md:hidden rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100 relative"
                style={{ background: "linear-gradient(180deg, #FFFDF7 0%, #F8FAFF 100%)" }}
              >
                {/* Topic header with emoji */}
                <div className="px-4 pt-3.5 pb-2.5 flex items-center gap-2 border-b border-slate-100/80">
                  <span className="text-base">{row.icon}</span>
                  <span className="text-[13px] font-extrabold text-slate-900">{row.topic}</span>
                </div>

                {/* Side-by-side comparison */}
                <div className="grid grid-cols-2 divide-x divide-slate-100">
                  {/* Without */}
                  <div className="px-3.5 py-3 bg-amber-50/50 flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                        <X size={8} className="text-amber-500" strokeWidth={3} />
                      </div>
                      <span className="text-[9px] font-extrabold text-amber-500 uppercase tracking-wider">Without</span>
                    </div>
                    <span className="text-[11px] text-amber-800 font-medium leading-snug">{row.without}</span>
                  </div>

                  {/* With */}
                  <div className="px-3.5 py-3 bg-blue-50/50 flex flex-col gap-1.5 relative overflow-hidden">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <Check size={8} className="text-blue-600" strokeWidth={3} />
                      </div>
                      <span className="text-[9px] font-extrabold text-blue-600 uppercase tracking-wider">With Us</span>
                    </div>
                    <span className="text-[11px] text-blue-800 font-bold leading-snug">{row.with}</span>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="mt-12 md:mt-16 flex flex-col items-center gap-3"
        >
          <MagneticButton
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-blue-600 transition-colors shadow-xl hover:shadow-blue-600/20 duration-300 flex items-center gap-3 text-base md:text-lg"
          >
            Stop the Drain — Book Free Call
            <ArrowRight size={18} />
          </MagneticButton>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">No commitment · Free 30-min strategy call · INR pricing</p>
        </motion.div>

      </div>
    </section>
  );
}
