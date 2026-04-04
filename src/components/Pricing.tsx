"use client";

import { motion, Variants } from "framer-motion";
import { Check, Zap, ArrowRight, Shield, Star } from "lucide-react";
import MagneticButton from "./MagneticButton";

const plans = [
  {
    name: "Starter",
    tag: "For small businesses",
    price: "₹5,000",
    priceNote: "per project",
    description: "Perfect for solopreneurs and small teams looking to automate one core workflow.",
    color: "from-slate-500 to-slate-600",
    borderColor: "border-slate-200",
    features: [
      "1 automation workflow",
      "Landing page or dashboard",
      "WhatsApp / Email integration",
      "Basic data reporting",
      "7-day delivery",
      "1 revision round",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    tag: "Most Popular 🔥",
    price: "₹15,000",
    priceNote: "per project",
    description: "For funded startups and growing teams that need real automation systems built fast.",
    color: "from-blue-600 to-indigo-600",
    borderColor: "border-blue-500",
    features: [
      "Up to 5 automation workflows",
      "Custom web app or dashboard",
      "AI agent integration",
      "CRM & database setup",
      "WhatsApp / Email campaigns",
      "14-day delivery",
      "3 revision rounds",
      "Priority WhatsApp support",
      "30-day post-launch monitoring",
    ],
    cta: "Book Free Consultation",
    popular: true,
  },
  {
    name: "Scale",
    tag: "For serious growth",
    price: "₹35,000+",
    priceNote: "per project",
    description: "Full-scale AI architecture, custom backends, and end-to-end automation for high-growth companies.",
    color: "from-violet-600 to-purple-600",
    borderColor: "border-violet-200",
    features: [
      "Unlimited automation workflows",
      "Multi-agent AI systems (RAG, LLMs)",
      "Custom backend architecture",
      "Full-stack web platform",
      "Database design & optimisation",
      "API integrations (any stack)",
      "Predictive analytics & insights",
      "4–6 week delivery",
      "Unlimited revisions",
      "Dedicated WhatsApp channel",
      "60-day post-launch support",
    ],
    cta: "Let's Architect This",
    popular: false,
  },
];

const trustBadges = [
  { icon: Shield, text: "No hidden charges" },
  { icon: Zap, text: "Pay in milestones" },
  { icon: Star, text: "Free consultation included" },
  { icon: Check, text: "100% satisfaction guarantee" },
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
    <section id="pricing" className="w-full py-20 md:py-32 bg-white relative z-10 overflow-hidden cursor-none border-t border-slate-100 bg-[radial-gradient(circle,_#e0e7ff_1.5px,_transparent_1.5px)] [background-size:28px_28px]">

      {/* Ambient glow */}
      <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 cursor-none"
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
              className={`relative flex flex-col rounded-[2rem] border-2 ${plan.borderColor} bg-white overflow-hidden shadow-sm ${plan.popular ? "shadow-blue-600/10 shadow-2xl md:-translate-y-3" : "hover:shadow-lg"} transition-all duration-300`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500" />
              )}

              <div className="p-7 md:p-8 flex flex-col flex-grow">
                {/* Plan header */}
                <div className="mb-6">
                  <span className={`inline-block text-xs font-extrabold uppercase tracking-widest mb-3 ${plan.popular ? "text-blue-600" : "text-slate-500"}`}>
                    {plan.tag}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-1">{plan.name}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-7 pb-7 border-b border-slate-100">
                  <div className="flex items-end gap-2">
                    <span className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${plan.color}`}>
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1 block">{plan.priceNote}</span>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center shrink-0 mt-0.5 shadow-sm`}>
                        <Check size={11} className="text-white" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-slate-600 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <MagneticButton
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className={`w-full py-3.5 font-bold rounded-xl flex items-center justify-center gap-2 cursor-none transition-all duration-300 text-sm ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-slate-900 shadow-lg shadow-blue-600/20"
                      : "bg-slate-900 text-white hover:bg-blue-600"
                  }`}
                >
                  {plan.cta}
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

        {/* Custom quote note */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-center text-sm text-slate-400 font-medium mt-8"
        >
          Need something outside these packages?{" "}
          <a href="#contact" className="text-blue-600 font-bold hover:underline cursor-none">
            Tell us your budget → we'll make it work.
          </a>
        </motion.p>

      </div>
    </section>
  );
}
