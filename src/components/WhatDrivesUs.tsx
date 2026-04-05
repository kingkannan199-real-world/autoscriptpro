"use client";

import { useEffect, useState, useRef } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Sparkles, Target, ShieldCheck, Award, RefreshCw, Users } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const values = [
  {
    title: "Innovation First",
    desc: "We stay at the forefront of automation and AI technology. We don't just follow industry trends; we engineer them to bring cutting-edge solutions directly to your business.",
    icon: Sparkles,
    color: "text-blue-600",
    iconBg: "bg-blue-50 border-blue-100",
    bgGlow: "from-blue-100/50 to-transparent",
  },
  {
    title: "Client Success",
    desc: "Your growth is our priority. We measure our success strictly by the tangible ROI we deliver.",
    icon: Target,
    color: "text-emerald-600",
    iconBg: "bg-emerald-50 border-emerald-100",
    bgGlow: "from-emerald-100/50 to-transparent",
  },
  {
    title: "Transparency",
    desc: "Clear communication, honest timelines, and straightforward pricing. No surprises.",
    icon: ShieldCheck,
    color: "text-amber-600",
    iconBg: "bg-amber-50 border-amber-100",
    bgGlow: "from-amber-100/50 to-transparent",
  },
  {
    title: "Quality Excellence",
    desc: "We build systems that are scalable, secure, and maintainable for the long term.",
    icon: Award,
    color: "text-purple-600",
    iconBg: "bg-purple-50 border-purple-100",
    bgGlow: "from-purple-100/50 to-transparent",
  },
  {
    title: "Continuous Learning",
    desc: "Technology evolves rapidly. We constantly update our tech stack to provide elite solutions.",
    icon: RefreshCw,
    color: "text-cyan-600",
    iconBg: "bg-cyan-50 border-cyan-100",
    bgGlow: "from-cyan-100/50 to-transparent",
  },
  {
    title: "Partnership Mindset",
    desc: "We're not just outside vendors — we're technical partners invested directly in your startup's success.",
    icon: Users,
    color: "text-rose-600",
    iconBg: "bg-rose-50 border-rose-100",
    bgGlow: "from-rose-100/50 to-transparent",
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhatDrivesUs() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-advance every 4.5s on mobile
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % values.length);
    }, 4500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const goTo = (i: number) => {
    setCurrent(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 6000); // resume after 6s
  };

  return (
    <section className="w-full py-20 md:py-28 bg-slate-900 relative z-10 border-t border-slate-800 scroll-mt-20 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-900/50 border border-blue-700/50"
          >
            <span className="text-sm font-bold text-blue-400 tracking-wider uppercase">Our Core Values</span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
          >
            What Drives{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Us.</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto font-medium"
          >
            The engineering principles and partnership standards that guide every line of code we write and every system we deploy.
          </motion.p>
        </div>

        {/* ── DESKTOP: 3-col grid ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-60px" }} className="h-full"
            >
              <SpotlightCard className="h-full group">
                <div className="relative h-full w-full bg-white flex flex-col p-10 rounded-[23px] overflow-hidden z-10">
                  <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${value.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-14 h-14 rounded-2xl ${value.iconBg} flex items-center justify-center mb-6 border group-hover:shadow-md transition-all duration-300 ${value.color}`}>
                      <value.icon className="w-7 h-7" strokeWidth={2} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                        {value.title}
                      </h3>
                      <p className="text-slate-500 text-base leading-relaxed font-medium">{value.desc}</p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* ── MOBILE: auto-carousel ── */}
        <div className="md:hidden">
          {/* Card */}
          <div className="relative overflow-hidden" style={{ minHeight: 260 }}>
            <AnimatePresence mode="wait">
              {values.map((value, i) =>
                i === current ? (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <SpotlightCard className="w-full group">
                      <div className="relative w-full bg-white flex flex-col p-6 rounded-[23px] overflow-hidden z-10">
                        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${value.bgGlow} opacity-40 pointer-events-none`} />
                        <div className="relative z-10">
                          <div className={`w-11 h-11 rounded-xl ${value.iconBg} flex items-center justify-center mb-4 border ${value.color}`}>
                            <value.icon className="w-5 h-5" strokeWidth={2} />
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{value.title}</h3>
                          <p className="text-slate-500 text-sm leading-relaxed font-medium">{value.desc}</p>
                        </div>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>

          {/* Dot indicators only */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {values.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2 bg-blue-400"
                    : "w-2 h-2 bg-slate-600 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
