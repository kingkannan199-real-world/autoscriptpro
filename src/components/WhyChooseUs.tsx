"use client";

import { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Settings, Zap, TrendingUp, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const features = [
  {
    icon: Settings,
    title: "Custom Architecture, Not Templates",
    desc: "We engineer bespoke systems tailored to your exact operational bottlenecks. Whether it's complex RAG pipelines, custom LLM integrations, or robust backends, we build infrastructure that scales with you."
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    desc: "We move fast. By utilizing modern frameworks and agile methodologies, we take you from strategy call to deployed automation in record time."
  },
  {
    icon: TrendingUp,
    title: "Pure ROI Focus",
    desc: "If it doesn't save you hours of manual work or generate new leads, we don't build it. Every line of code is mapped to your bottom line."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    desc: "Your data is your most valuable asset. We implement zero-trust architectures, secure API handling, and scalable databases to ensure your automated workflows are locked down."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function WhyChooseUs() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.offsetWidth * 0.85 + 16; // 85vw + gap
    el.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.offsetWidth * 0.85 + 16;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  const prev = () => scrollToCard(Math.max(0, activeIndex - 1));
  const next = () => scrollToCard(Math.min(features.length - 1, activeIndex + 1));

  return (
    <section className="w-full py-20 md:py-32 bg-white relative z-10 border-t border-slate-100 bg-[linear-gradient(to_right,#eef2ff_1px,transparent_1px),linear-gradient(to_bottom,#eef2ff_1px,transparent_1px)] [background-size:32px_32px]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 tracking-tight"
          >
            What Makes Us Different From{" "}
            <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Every Other Dev Agency
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium"
          >
            We don't just sell software. We partner with you to build scalable, high-performance engines that drive your business forward.
          </motion.p>
        </div>

        {/* Desktop grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="hidden md:grid md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <SpotlightCard className="h-full group hover:-translate-y-1 transition-transform duration-500">
                <div className="relative h-full w-full bg-white p-10 rounded-[23px] overflow-hidden z-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-500">
                      <feature.icon className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors duration-500" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-base text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          {/* Cards scroll container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-5 px-5"
          >
            {features.map((feature, index) => (
              <div key={index} className="min-w-[85vw] snap-center">
                <SpotlightCard className="h-full group">
                  <div className="relative h-full w-full bg-white p-6 rounded-2xl overflow-hidden z-10">
                    <div className="relative z-10">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4 border border-blue-100">
                        <feature.icon className="w-5 h-5 text-blue-600" strokeWidth={2} />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2 tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>

          {/* Arrow buttons + dots */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
            >
              <ChevronLeft size={17} strokeWidth={2.5} />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToCard(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-5 h-2 bg-blue-600"
                      : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={activeIndex === features.length - 1}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
            >
              <ChevronRight size={17} strokeWidth={2.5} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
