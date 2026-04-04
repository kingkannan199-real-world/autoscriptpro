"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Rocket, Clock, Star, Globe } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Founder & CEO",
    company: "MedTrack Solutions",
    location: "Chennai, TN",
    avatar: "AM",
    avatarGradient: "from-sky-500 to-blue-600",
    accentFrom: "#0ea5e9",
    accentTo: "#2563eb",
    tag: "Healthcare · Automation",
    rating: 5,
    text: "AutoScriptPro completely transformed how we manage pharmaceutical inventory. What used to take our team 3 hours every morning now runs automatically overnight. The dashboard they built is honestly better than anything I've seen from enterprise vendors — at a fraction of the cost.",
    metric: "3hrs → 0",
    metricLabel: "Daily manual work eliminated",
  },
  {
    name: "Priya Sundaram",
    role: "Co-Founder",
    company: "GrowthStack AI",
    location: "Bengaluru, KA",
    avatar: "PS",
    avatarGradient: "from-violet-500 to-indigo-600",
    accentFrom: "#7c3aed",
    accentTo: "#4f46e5",
    tag: "SaaS · Multi-Agent AI",
    rating: 5,
    text: "We came to AutoScriptPro with a vague idea about AI research automation. They turned it into a production-ready multi-agent system in under 3 weeks. Our team now handles 5x the workload with the same headcount. These guys think like engineers and business people at the same time.",
    metric: "5x",
    metricLabel: "Output with same team size",
  },
  {
    name: "Ravi Krishnamurthy",
    role: "VP Operations",
    company: "Civic Connect",
    location: "Chennai, TN",
    avatar: "RK",
    avatarGradient: "from-emerald-500 to-teal-600",
    accentFrom: "#10b981",
    accentTo: "#0d9488",
    tag: "Civic Tech · Portal",
    rating: 5,
    text: "The issue tracking portal they built went from concept to deployment in 2 weeks. The automated routing alone dropped our average resolution time by 60%. The team communicates clearly, delivers on time, and the code quality is exceptional. Couldn't recommend them more highly.",
    metric: "60%",
    metricLabel: "Drop in resolution time",
  },
  {
    name: "Sneha Patel",
    role: "Growth Lead",
    company: "CartLoop Commerce",
    location: "Mumbai, MH",
    avatar: "SP",
    avatarGradient: "from-rose-500 to-pink-600",
    accentFrom: "#f43f5e",
    accentTo: "#ec4899",
    tag: "E-Commerce · CRM",
    rating: 5,
    text: "Our re-engagement campaigns were completely manual before. AutoScriptPro built us a predictive CRM that does all of it automatically. Re-engagement went up 3.5x in the first month. Genuinely life-changing for our small team — I wish we had found them sooner.",
    metric: "3.5x",
    metricLabel: "Customer re-engagement rate",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="w-full py-20 md:py-32 bg-white relative z-10 overflow-hidden cursor-none border-t border-slate-100 bg-[radial-gradient(circle,_#dbeafe_1.5px,_transparent_1.5px)] [background-size:28px_28px]">

      {/* Soft ambient glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] pointer-events-none opacity-80" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[100px] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 cursor-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs md:text-sm font-bold text-blue-600 tracking-wider uppercase">Client Results</span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            Real Founders.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Real Results.
            </span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-500 font-medium max-w-xl mx-auto"
          >
            Don't take our word for it — hear directly from the teams whose operations we've transformed.
          </motion.p>
        </div>

        {/* Main layout — card + avatar selector */}
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">

          {/* Avatar selector — side panel on desktop, hidden on mobile */}
          <div className="hidden lg:flex flex-col gap-3 w-56 shrink-0 pt-2">
            {testimonials.map((item, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`flex items-center gap-3 p-3 rounded-2xl text-left transition-all duration-300 cursor-none group ${
                  i === current
                    ? "bg-white shadow-md border border-slate-200"
                    : "hover:bg-slate-50 border border-transparent"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.avatarGradient} flex items-center justify-center text-white font-extrabold text-sm shrink-0 shadow-sm`}>
                  {item.avatar}
                </div>
                <div className="overflow-hidden">
                  <p className={`text-sm font-bold truncate transition-colors ${i === current ? "text-slate-900" : "text-slate-500 group-hover:text-slate-700"}`}>{item.name}</p>
                  <p className="text-xs text-slate-400 font-medium truncate">{item.company}</p>
                </div>
                {i === current && (
                  <div className="ml-auto w-1.5 h-6 rounded-full shrink-0"
                    style={{ background: `linear-gradient(to bottom, ${item.accentFrom}, ${item.accentTo})` }} />
                )}
              </button>
            ))}
          </div>

          {/* Main quote card */}
          <div className="flex-1 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <SpotlightCard className="w-full">
                  <div className="relative bg-white rounded-[22px] overflow-hidden">

                    {/* Colored top stripe */}
                    <div className="h-1.5 w-full"
                      style={{ background: `linear-gradient(90deg, ${t.accentFrom}, ${t.accentTo})` }} />

                    {/* Subtle corner glow */}
                    <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[60px] pointer-events-none opacity-20"
                      style={{ background: t.accentFrom }} />

                    <div className="p-7 md:p-10">

                      {/* Top row: avatar + stars + tag */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-7">
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.avatarGradient} flex items-center justify-center text-white font-extrabold text-lg shadow-lg shrink-0`}
                            style={{ boxShadow: `0 8px 20px ${t.accentFrom}40` }}>
                            {t.avatar}
                          </div>
                          <div>
                            <p className="text-base font-extrabold text-slate-900">{t.name}</p>
                            <p className="text-sm text-slate-500 font-medium">{t.role}</p>
                            <p className="text-sm font-bold" style={{ color: t.accentFrom }}>{t.company}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-start sm:items-end gap-2">
                          <Stars count={t.rating} />
                          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 uppercase tracking-widest">
                            {t.tag}
                          </span>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="relative">
                        <Quote size={32} className="absolute -top-1 -left-1 opacity-10 text-slate-400" />
                        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium pl-4">
                          "{t.text}"
                        </p>
                      </div>

                      {/* Metric + location */}
                      <div className="mt-7 pt-6 border-t border-slate-100 flex items-end justify-between">
                        <div>
                          <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text"
                            style={{ backgroundImage: `linear-gradient(135deg, ${t.accentFrom}, ${t.accentTo})` }}>
                            {t.metric}
                          </div>
                          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                            {t.metricLabel}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-slate-400">📍 {t.location}</div>
                        </div>
                      </div>

                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            </AnimatePresence>

            {/* Mobile controls */}
            <div className="flex items-center justify-between mt-6 lg:hidden">
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} className="cursor-none transition-all duration-300 rounded-full"
                    style={{ width: i === current ? 24 : 8, height: 8, background: i === current ? t.accentFrom : "#e2e8f0" }} />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button onClick={prev} className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:border-blue-300 hover:text-blue-600 transition-all cursor-none shadow-sm">
                  <ChevronLeft size={17} />
                </button>
                <button onClick={next} className="w-10 h-10 rounded-full text-white flex items-center justify-center transition-all cursor-none shadow-md"
                  style={{ background: `linear-gradient(135deg, ${t.accentFrom}, ${t.accentTo})` }}>
                  <ChevronRight size={17} />
                </button>
              </div>
            </div>

            {/* Desktop prev/next */}
            <div className="hidden lg:flex items-center justify-end gap-2 mt-5">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:border-blue-300 hover:text-blue-600 transition-all cursor-none shadow-sm">
                <ChevronLeft size={17} />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full text-white flex items-center justify-center transition-all cursor-none shadow-md"
                style={{ background: `linear-gradient(135deg, ${t.accentFrom}, ${t.accentTo})` }}>
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            {
              value: "20+",
              label: "Projects Delivered",
              desc: "Across India & global markets",
              icon: Rocket,
              from: "#0ea5e9", to: "#2563eb",
              bgFrom: "#eff6ff", bgTo: "#f0f9ff",
            },
            {
              value: "100%",
              label: "On-Time Delivery",
              desc: "Every milestone, every time",
              icon: Clock,
              from: "#10b981", to: "#0d9488",
              bgFrom: "#f0fdf4", bgTo: "#f0fdfa",
            },
            {
              value: "4.9★",
              label: "Client Rating",
              desc: "Average across all projects",
              icon: Star,
              from: "#f59e0b", to: "#f97316",
              bgFrom: "#fffbeb", bgTo: "#fff7ed",
            },
            {
              value: "6",
              label: "Countries Served",
              desc: "Chennai-built, world-deployed",
              icon: Globe,
              from: "#7c3aed", to: "#6d28d9",
              bgFrom: "#faf5ff", bgTo: "#f5f3ff",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              style={{ background: `linear-gradient(135deg, ${stat.bgFrom}, ${stat.bgTo})` }}
            >
              {/* Colored top stripe */}
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${stat.from}, ${stat.to})` }} />

              <div className="p-5 md:p-6">
                {/* Icon */}
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                  style={{ background: `linear-gradient(135deg, ${stat.from}20, ${stat.to}30)`, border: `1px solid ${stat.from}30` }}>
                  <stat.icon size={16} style={{ color: stat.from }} strokeWidth={2.5} />
                </div>

                {/* Value */}
                <div className="text-3xl md:text-4xl font-black mb-1 text-transparent bg-clip-text leading-none"
                  style={{ backgroundImage: `linear-gradient(135deg, ${stat.from}, ${stat.to})` }}>
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-xs font-extrabold text-slate-700 uppercase tracking-wider mt-1.5 mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-[11px] text-slate-400 font-medium leading-snug">
                  {stat.desc}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
