"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

// High-ticket, realistic engineering notifications
const notifications = [
  {
    title: "System Deployed",
    time: "2 mins ago",
    desc: "Multi-agent RAG architecture for a local healthcare startup."
  },
  {
    title: "Strategy Call Booked",
    time: "15 mins ago",
    desc: "SaaS founder in Chennai scheduling a technical teardown."
  },
  {
    title: "Automation Live",
    time: "1 hour ago",
    desc: "New workflow saving a logistics client 120+ manual hrs/week."
  },
  {
    title: "Custom Backend Shipped",
    time: "3 hours ago",
    desc: "Spring Boot infrastructure deployed for an e-commerce brand."
  }
];

export default function SocialProofToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false);

  useEffect(() => {
    // If the user manually closes it, we stop the loop so we don't annoy them
    if (hasBeenDismissed) return;

    // Initial delay before the first toast shows up (8 seconds)
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    // The looping logic
    const intervalId = setInterval(() => {
      setIsVisible(false); // Hide the current one
      
      setTimeout(() => {
        // Move to the next notification
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setIsVisible(true); // Show the next one
      }, 1000); // Wait 1 second while hidden before swapping text
      
    }, 20000); // Every 20 seconds, cycle it

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalId);
    };
  }, [hasBeenDismissed]);

  // Auto-hide each toast after 6 seconds of being visible
  useEffect(() => {
    if (isVisible && !hasBeenDismissed) {
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 6000);
      return () => clearTimeout(hideTimer);
    }
  }, [isVisible, hasBeenDismissed]);

  const activeNotification = notifications[currentIndex];

  return (
    <div className="fixed bottom-6 left-6 z-[100] pointer-events-none flex flex-col items-start justify-end sm:bottom-8 sm:left-8">
      <AnimatePresence>
        {isVisible && !hasBeenDismissed && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="pointer-events-auto w-[320px] bg-white/90 backdrop-blur-xl border border-slate-200/60 p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden group"
          >
            {/* Subtle blue accent line on the left */}
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-600" />

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle2 size={20} className="text-blue-600" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                    {activeNotification.title}
                  </h4>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {activeNotification.time}
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-500 leading-relaxed">
                  {activeNotification.desc}
                </p>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => {
                  setIsVisible(false);
                  setHasBeenDismissed(true);
                }}
                className="flex-shrink-0 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-md hover:bg-slate-100"
              >
                <X size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}