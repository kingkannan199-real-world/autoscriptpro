"use client";

import { motion, Variants } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import CountUp from "./CountUp";

const stats = [
  {
    displayValue: (
      <>
        <CountUp end={60} suffix="" duration={1800} />
        <span className="text-3xl md:text-4xl text-blue-400 mx-0.5">-</span>
        <CountUp end={80} suffix="%" duration={2200} />
      </>
    ),
    label: "Reduction in manual work",
    desc: "Free up your engineering and sales teams to focus on actual growth.",
  },
  {
    displayValue: <><CountUp end={10} suffix="x" duration={1800} /></>,
    label: "Faster lead response",
    desc: "AI agents engage and qualify prospects instantly, 24/7.",
  },
  {
    displayValue: (
      <>
        <CountUp end={2} suffix="" duration={1400} />
        <span className="text-3xl md:text-4xl text-blue-400 mx-0.5">-</span>
        <CountUp end={4} suffix="x" duration={2000} />
      </>
    ),
    label: "Higher campaign conversions",
    desc: "Hyper-personalized messaging at scale across WhatsApp and Email.",
  },
  {
    displayValue: <span>Real&#8209;time</span>,
    label: "Business visibility",
    desc: "Live, actionable data dashboards tracking every metric.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export default function Impact() {
  return (
    <section id="impact" className="w-full py-20 md:py-32 bg-slate-50 relative z-10 overflow-hidden border-t border-slate-200">
      
      {/* Light Mode Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-100 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 tracking-tight"
          >
            The Numbers That Prove <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Automation Works.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium"
          >
            We don't just build software. We build systems that directly impact your bottom line and scale your operations automatically.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-full"
            >
              <SpotlightCard className="h-full group hover:-translate-y-1 transition-transform duration-500">
                <div className="relative h-full w-full bg-white flex flex-col items-center justify-center p-6 md:p-8 rounded-[23px] z-10 text-center shadow-sm group-hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-400 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-sm">
                    {stat.displayValue}
                  </h3>
                  <p className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{stat.label}</p>
                  <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">{stat.desc}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}