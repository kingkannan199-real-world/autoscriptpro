"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Zap } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed) setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 left-0 right-0 z-[9999] bg-slate-900 border-b border-slate-700/60 shadow-xl"
        >
          <div className="relative px-4 py-2.5 flex items-center justify-center gap-3">

            {/* Centered content */}
            <div className="flex items-center gap-2 sm:gap-3">
              <p className="text-xs sm:text-sm font-semibold text-slate-300">
                <span className="text-white font-bold">AutoScriptPro</span>
                <span className="hidden sm:inline"> · Free 30-min strategy call. No commitment. Just clarity.</span>
                <span className="sm:hidden"> — Free strategy call</span>
              </p>
              <button
                onClick={scrollToContact}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-full transition-colors duration-200 whitespace-nowrap"
              >
                <Zap size={11} className="shrink-0" />
                Book Free Consultation
                <ArrowRight size={11} className="shrink-0" />
              </button>
            </div>

            {/* Close — absolute right so it doesn't affect centering */}
            <button
              onClick={() => setDismissed(true)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white transition-colors rounded-full hover:bg-slate-700"
              aria-label="Dismiss"
            >
              <X size={13} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
