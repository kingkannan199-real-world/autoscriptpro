"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Clock, IndianRupee, ArrowRight, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function ROICalculator() {
  const [teamSize, setTeamSize] = useState(5);
  const [hoursManual, setHoursManual] = useState(15);
  const [hourlyCost, setHourlyCost] = useState(500);

  const savings = useMemo(() => {
    const weeklyHoursSaved = hoursManual * 0.7; // assume 70% automation
    const weeklySaving = weeklyHoursSaved * hourlyCost * teamSize;
    const monthlySaving = weeklySaving * 4.33;
    const annualSaving = monthlySaving * 12;
    return {
      weeklyHours: Math.round(weeklyHoursSaved * teamSize),
      monthly: Math.round(monthlySaving),
      annual: Math.round(annualSaving),
    };
  }, [teamSize, hoursManual, hourlyCost]);

  const formatINR = (n: number) => {
    if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)}Cr`;
    if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
    if (n >= 1000) return `₹${(n / 1000).toFixed(1)}K`;
    return `₹${n}`;
  };

  return (
    <section className="w-full py-20 md:py-28 bg-slate-50 relative z-10 border-t border-slate-200 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[350px] h-[350px] bg-indigo-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100"
          >
            <Calculator size={14} className="text-blue-600 mr-2" />
            <span className="text-xs md:text-sm font-bold text-blue-600 tracking-wider uppercase">ROI Calculator</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            See Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Savings Potential.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-500 font-medium max-w-xl mx-auto"
          >
            Drag the sliders. See how much revenue your team is leaving on the table with manual processes.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {/* Sliders card */}
          <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-7 md:p-10">
            <h3 className="text-lg font-extrabold text-slate-900 mb-8 flex items-center gap-2">
              <Sparkles size={18} className="text-blue-600" />
              Configure Your Team
            </h3>

            {/* Team Size */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-slate-700">Team Size</label>
                <span className="text-sm font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{teamSize} people</span>
              </div>
              <input
                type="range"
                min={1}
                max={50}
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-slate-200 accent-blue-600"
              />
              <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
                <span>1</span>
                <span>50</span>
              </div>
            </div>

            {/* Hours on manual tasks */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-slate-700">Manual Hours / Person / Week</label>
                <span className="text-sm font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{hoursManual} hrs</span>
              </div>
              <input
                type="range"
                min={1}
                max={40}
                value={hoursManual}
                onChange={(e) => setHoursManual(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-slate-200 accent-blue-600"
              />
              <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
                <span>1 hr</span>
                <span>40 hrs</span>
              </div>
            </div>

            {/* Hourly cost */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-slate-700">Avg. Hourly Cost (₹)</label>
                <span className="text-sm font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">₹{hourlyCost}/hr</span>
              </div>
              <input
                type="range"
                min={100}
                max={5000}
                step={50}
                value={hourlyCost}
                onChange={(e) => setHourlyCost(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-slate-200 accent-blue-600"
              />
              <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
                <span>₹100/hr</span>
                <span>₹5,000/hr</span>
              </div>
            </div>
          </div>

          {/* Results card */}
          <div className="bg-slate-900 rounded-[2rem] border border-slate-800 shadow-xl p-7 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-lg font-extrabold text-white mb-8 flex items-center gap-2 relative z-10">
              <TrendingUp size={18} className="text-emerald-400" />
              Your Estimated Savings
            </h3>

            <div className="space-y-6 relative z-10">
              {/* Weekly hours */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Clock size={16} className="text-blue-400" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hours Recovered / Week</p>
                </div>
                <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {savings.weeklyHours}hrs
                </p>
              </div>

              {/* Monthly savings */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                    <IndianRupee size={16} className="text-emerald-400" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Monthly Savings</p>
                </div>
                <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  {formatINR(savings.monthly)}
                </p>
              </div>

              {/* Annual savings */}
              <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-500/20 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-amber-600/20 rounded-lg flex items-center justify-center">
                    <TrendingUp size={16} className="text-amber-400" />
                  </div>
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-widest">Annual ROI Potential</p>
                </div>
                <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  {formatINR(savings.annual)}
                </p>
              </div>
            </div>

            <div className="mt-6 relative z-10">
              <MagneticButton
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full py-3.5 bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors text-sm shadow-lg shadow-blue-600/20"
              >
                Recover This Revenue Now
                <ArrowRight size={15} />
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-slate-400 font-medium mt-6">
          * Estimates based on 70% automation efficiency. Actual savings vary by workflow complexity.
        </p>
      </div>
    </section>
  );
}
