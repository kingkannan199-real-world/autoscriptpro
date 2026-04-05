"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [inContactSection, setInContactSection] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
      // Hide when contact section is visible
      const contact = document.getElementById("contact");
      if (contact) {
        const rect = contact.getBoundingClientRect();
        setInContactSection(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onChatToggle = (e: Event) => {
      setChatOpen((e as CustomEvent<{ open: boolean }>).detail.open);
    };
    window.addEventListener("aria-chat-toggle", onChatToggle);
    return () => window.removeEventListener("aria-chat-toggle", onChatToggle);
  }, []);

  return (
    <AnimatePresence>
      {visible && !chatOpen && !inContactSection && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="fixed bottom-[136px] right-5 md:bottom-8 md:right-auto md:left-8 z-[201]"
        >
          {/* Tooltip — positioned to the side */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="absolute hidden md:block left-[72px] bottom-2 bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg whitespace-nowrap pointer-events-none"
              >
                Chat on WhatsApp 🇮🇳
                <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[6px] border-r-slate-900" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <a
            href="https://wa.me/917200696059?text=Hi%20AutoScriptPro,%20I%27m%20interested%20in%20your%20services.%20Can%20we%20talk?"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="relative w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
            style={{ transformOrigin: "center center" }}
          >
            {/* Pulse ring animation */}
            <span className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ backgroundColor: "#25D366" }} />
            
            {/* Soft glow */}
            <span className="absolute inset-0 rounded-full" style={{ boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }} />

            {/* Official WhatsApp logo */}
            <img
              src="/whatsapp.svg"
              alt="WhatsApp"
              className="w-full h-full rounded-full relative z-10"
              draggable={false}
            />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
