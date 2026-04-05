"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Shield, Star, Lock, Milestone, BadgeCheck, Target, Clock, RefreshCw, MessageSquare, Rocket } from "lucide-react";
import MagneticButton from "./MagneticButton";

const plans = [
  {
    name: "Starter",
    tag: "Quick Win",
    price: "₹6,000",
    priceNote: "starting at",
    description: "For solo founders and small teams who need one focused automation or micro-app — delivered fast.",
    color: "from-slate-500 to-slate-600",
    borderColor: "border-slate-200",
    popular: false,
    specs: [
      { icon: Target, label: "Scope", value: "1 focused deliverable" },
      { icon: Clock, label: "Timeline", value: "5–7 days" },
      { icon: RefreshCw, label: "Revisions", value: "1 round" },
      { icon: MessageSquare, label: "Support", value: "Email" },
      { icon: Rocket, label: "Post-Launch", value: "—" },
    ],
  },
  {
    name: "Growth",
    tag: "Most Popular 🔥",
    price: "₹15,000",
    priceNote: "starting at",
    description: "For funded startups that need a full system — multiple modules, AI integration, and real architecture.",
    color: "from-blue-600 to-indigo-600",
    borderColor: "border-blue-500",
    popular: true,
    specs: [
      { icon: Target, label: "Scope", value: "Up to 5 modules" },
      { icon: Clock, label: "Timeline", value: "10–14 days" },
      { icon: RefreshCw, label: "Revisions", value: "3 rounds" },
      { icon: MessageSquare, label: "Support", value: "Priority WhatsApp" },
      { icon: Rocket, label: "Post-Launch", value: "30-day monitoring" },
    ],
  },
  {
    name: "Scale",
    tag: "Enterprise Grade",
    price: "₹35,000",
    priceNote: "starting at",
    description: "For high-growth companies that need end-to-end platforms, multi-agent AI, and custom backend architecture.",
    color: "from-violet-600 to-purple-600",
    borderColor: "border-violet-200",
    popular: false,
    specs: [
      { icon: Target, label: "Scope", value: "End-to-end platform" },
      { icon: Clock, label: "Timeline", value: "4–6 weeks" },
      { icon: RefreshCw, label: "Revisions", value: "Unlimited" },
      { icon: MessageSquare, label: "Support", value: "Dedicated channel" },
      { icon: Rocket, label: "Post-Launch", value: "60-day partnership" },
    ],
  },
];

const trustBadges = [
  { icon: Shield, text: "No hidden charges" },
  { icon: Milestone, text: "Pay in milestones only" },
  { icon: Lock, text: "NDA-protected projects" },
  { icon: Star, text: "Free consultation included" },
  { icon: BadgeCheck, text: "100% satisfaction guarantee" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-20 md:py-32 bg-white relative z-10 overflow-hidden border-t border-slate-100 bg-[radial-gradient(circle,_#e0e7ff_1.5px,_transparent_1.5px)] [background-size:28px_28px]">

      {/* Ambient glow */}
      <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100"
          >
            <span className="text-xs md:text-sm font-bold text-blue-600 tracking-wider uppercase">Transparent Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            Simple, Honest{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">INR Pricing.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-500 font-medium max-w-2xl mx-auto"
          >
            No dollar pricing. No hidden fees. No open-ended hourly billing.
            Everything is milestone-based and quoted in INR before we start.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-14"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative flex flex-col rounded-[2rem] border-2 ${plan.borderColor} bg-white overflow-hidden ${plan.popular ? "shadow-blue-600/10 shadow-2xl md:-translate-y-3" : "shadow-sm hover:shadow-xl hover:-translate-y-1"} transition-all duration-300 group/card`}
            >
              {/* Popular top bar */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500" />
              )}

              {/* Corner glow on hover */}
              <div className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-[60px] pointer-events-none opacity-0 group-hover/card:opacity-30 transition-opacity duration-500 ${plan.popular ? "bg-blue-400" : "bg-slate-300"}`} />

              <div className="p-7 md:p-8 flex flex-col flex-grow relative z-10">

                {/* Tag */}
                <span className={`inline-block text-xs font-extrabold uppercase tracking-widest mb-3 ${plan.popular ? "text-blue-600" : "text-slate-500"}`}>
                  {plan.tag}
                </span>

                {/* Plan Name */}
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{plan.name}</h3>

                {/* Description */}
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-7 pb-7 border-b border-slate-100">
                  <div className="flex items-baseline gap-1.5">
                    <span className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${plan.color}`}>
                      {plan.price}
                    </span>
                    <span className="text-lg font-bold text-slate-400">+</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-2 block">{plan.priceNote}</span>
                </div>

                {/* Scope Specs */}
                <div className="flex flex-col gap-4 mb-8 flex-grow">
                  {plan.specs.map((spec) => (
                    <div key={spec.label} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${plan.color} bg-opacity-10 flex items-center justify-center shrink-0`}
                        style={{ background: plan.popular ? "rgba(59,130,246,0.08)" : "rgba(100,116,139,0.06)" }}
                      >
                        <spec.icon size={15} className={plan.popular ? "text-blue-600" : "text-slate-500"} strokeWidth={2.5} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none">{spec.label}</span>
                        <span className="text-sm font-bold text-slate-800 mt-0.5">{spec.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <MagneticButton
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className={`w-full py-3.5 font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 text-sm ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-slate-900 shadow-lg shadow-blue-600/20"
                      : "bg-slate-900 text-white hover:bg-blue-600"
                  }`}
                >
                  Book Free Consultation
                  <ArrowRight size={15} />
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-8"
        >
          {trustBadges.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full">
              <Icon size={14} className="text-blue-600 shrink-0" />
              <span className="text-xs font-bold text-slate-600">{text}</span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-center text-sm text-slate-400 font-medium mt-8"
        >
          Need something outside these packages?{" "}
          <a href="#contact" className="text-blue-600 font-bold hover:underline">
            Tell us your budget → we&apos;ll make it work.
          </a>
        </motion.p>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left"
        >
          <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0">
            <BadgeCheck size={28} className="text-emerald-600" />
          </div>
          <div>
            <h4 className="text-lg font-extrabold text-slate-900 mb-1">Our Delivery Guarantee</h4>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              If the final deliverable doesn&apos;t match the signed-off scope document, we&apos;ll revise it at zero additional cost until it does. Every project is NDA-protected and milestone-billed — you never pay for unfinished work.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
