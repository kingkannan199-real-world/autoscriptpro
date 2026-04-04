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
          className="fixed bottom-28 md:bottom-8 left-6 md:left-8 z-[199] flex items-center gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg whitespace-nowrap pointer-events-none"
              >
                Chat on WhatsApp 🇮🇳
                <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-slate-900" />
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
            className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.6)] transition-all duration-300 cursor-none"
            style={{ backgroundColor: "#25D366" }}
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ backgroundColor: "#25D366" }} />

            {/* WhatsApp SVG icon */}
            <svg viewBox="0 0 32 32" className="w-7 h-7" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.64 4.84 1.86 6.94L2 30l7.26-1.84A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5c-2.18 0-4.3-.57-6.17-1.65l-.44-.26-4.3 1.09 1.12-4.2-.29-.46A11.47 11.47 0 014.5 16C4.5 9.61 9.61 4.5 16 4.5S27.5 9.61 27.5 16 22.39 27.5 16 27.5zm6.28-8.64c-.34-.17-2.02-1-2.34-1.11-.31-.11-.54-.17-.77.17-.23.34-.88 1.11-1.08 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.7-2.01-1.9-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.85-1.05-2.53-.28-.67-.56-.58-.77-.59H9.8c-.2 0-.51.07-.78.37-.26.3-1 1-1 2.44s1.03 2.83 1.17 3.03c.14.2 2.02 3.08 4.9 4.32.69.3 1.22.47 1.64.6.69.22 1.31.19 1.81.11.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.6-.36z" />
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
