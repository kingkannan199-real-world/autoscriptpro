"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, ArrowRight, Loader2 } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Message {
  role: "ai" | "user";
  text: string;
}

interface GeminiMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

// ─── Quick Reply Suggestions ──────────────────────────────────────────────────
const INITIAL_QUICK_REPLIES = [
  "Automate my business",
  "Build a custom app",
  "I need AI agents",
  "Just exploring",
];

const GREETING = `Hey! 👋 I'm Astra, AutoScriptPro's AI Strategist.

Most businesses silently lose 30–50% of productivity to manual work they've normalised. I'm here to change that.

What brings you here today?`;

// ─── Component ─────────────────────────────────────────────────────────────────
export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const [showInitialReplies, setShowInitialReplies] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: GREETING },
  ]);

  // Store Gemini-format conversation history
  const geminiHistoryRef = useRef<GeminiMessage[]>([]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when chat opens + notify WhatsApp button
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 400);
    window.dispatchEvent(
      new CustomEvent("aria-chat-toggle", { detail: { open: isOpen } })
    );
  }, [isOpen]);

  // ─── Send message to Gemini API ──────────────────────────────────────────
  const sendToAI = async (userText: string) => {
    // Add user message to UI
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setInput("");
    setIsTyping(true);
    setShowInitialReplies(false);

    // Build Gemini history
    const newUserMsg: GeminiMessage = {
      role: "user",
      parts: [{ text: userText }],
    };

    const updatedHistory = [...geminiHistoryRef.current, newUserMsg];

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbzt38npBI7NFkoe1nenZ09Nn4oHhNtQ7aU8Yi-G5YX12pJalNa7gPKGj6QdzD-yCe3A/exec", {
        method: "POST",
        body: JSON.stringify({ messages: updatedHistory }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "API request failed");
      }

      const aiText =
        data.text ||
        "I had a brief hiccup — could you repeat that? I want to give you my best answer. 🙏";

      // Update Gemini history with both messages
      geminiHistoryRef.current = [
        ...updatedHistory,
        { role: "model", parts: [{ text: aiText }] },
      ];

      // Add AI response to UI
      setMessages((prev) => [...prev, { role: "ai", text: aiText }]);
    } catch {
      // Fallback response if API fails
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "I'm having a moment — my connection hiccupped. 😅\n\nMeanwhile, you can reach our team directly at reachout@autoscriptpro.in or WhatsApp us at +91 72006 96059. We respond within 2 hours!",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;
    sendToAI(input.trim());
  };

  const handleQuickReply = (reply: string) => {
    if (isTyping) return;
    sendToAI(reply);
  };

  // ─── Detect if message contains CTA-worthy content ───────────────────────
  const shouldShowCTA = (text: string) => {
    const ctaKeywords = [
      "strategy call",
      "book a call",
      "free consultation",
      "schedule",
      "contact section",
      "reach out",
      "get started",
      "next step",
    ];
    return ctaKeywords.some((kw) => text.toLowerCase().includes(kw));
  };

  const shouldShowWhatsApp = (text: string) => {
    const waKeywords = ["whatsapp", "wa.me", "72006"];
    return waKeywords.some((kw) => text.toLowerCase().includes(kw));
  };

  return (
    <>
      {/* ── Floating Trigger Button ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="fixed bottom-[72px] right-5 md:bottom-8 md:right-8 z-[200]"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full animate-ping bg-blue-500 opacity-20" />

            {/* Mobile — circle icon only */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative flex md:hidden items-center justify-center w-14 h-14 bg-slate-900 hover:bg-blue-600 text-white rounded-full shadow-[0_8px_30px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_40px_rgba(37,99,235,0.55)] transition-all duration-300"
            >
              <Sparkles size={22} className="text-blue-400" />
            </button>

            {/* Desktop — full pill button */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative hidden md:flex items-center gap-2.5 px-5 py-3.5 bg-slate-900 hover:bg-blue-600 text-white text-sm font-bold rounded-full shadow-[0_8px_30px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_40px_rgba(37,99,235,0.55)] transition-all duration-300"
            >
              <Sparkles size={16} className="text-blue-400" />
              Talk to Astra
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Chat Panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 60, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-[200] w-[370px] max-w-[calc(100vw-2rem)] bg-white rounded-[2rem] shadow-[0_32px_80px_-12px_rgba(0,0,0,0.18)] border border-slate-200 flex flex-col overflow-hidden"
            style={{ height: "min(600px, calc(100vh - 6rem))" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-slate-900 shrink-0">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-base shadow-lg shrink-0">
                  A
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-900" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold text-white leading-tight">
                    Astra
                  </p>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-600/30 border border-blue-500/40 rounded-full w-fit">
                    <Sparkles size={9} className="text-blue-400" />
                    <span className="text-[10px] font-bold text-blue-300 tracking-wide">
                      AI Agent
                    </span>
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <X size={15} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50/60">
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.role === "ai" && (
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shrink-0 mt-1 mr-2">
                        A
                      </div>
                    )}
                    <div className={`max-w-[78%] flex flex-col gap-2`}>
                      <div
                        className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                          msg.role === "user"
                            ? "bg-blue-600 text-white rounded-br-sm shadow-sm"
                            : "bg-white text-slate-800 border border-slate-200 rounded-bl-sm shadow-sm"
                        }`}
                      >
                        {msg.text}
                      </div>

                      {/* Dynamic CTA — shown when AI mentions booking */}
                      {msg.role === "ai" && shouldShowCTA(msg.text) && (
                        <motion.a
                          href="#contact"
                          onClick={() => setIsOpen(false)}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 hover:bg-blue-600 text-white text-sm font-bold rounded-2xl transition-colors shadow-md"
                        >
                          Book My Free Strategy Call
                          <ArrowRight size={15} />
                        </motion.a>
                      )}

                      {/* Dynamic WhatsApp CTA */}
                      {msg.role === "ai" && shouldShowWhatsApp(msg.text) && (
                        <motion.a
                          href="https://wa.me/917200696059?text=Hi%20AutoScriptPro,%20I%20just%20chatted%20with%20Astra%20and%20I'm%20interested!"
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-bold rounded-2xl transition-colors shadow-sm"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 shrink-0"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          Continue on WhatsApp
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                      A
                    </div>
                    <div className="px-4 py-3 bg-white border border-slate-200 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-2">
                      <Loader2
                        size={14}
                        className="text-blue-500 animate-spin"
                      />
                      <span className="text-xs text-slate-400 font-medium">
                        Astra is thinking...
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Initial Quick Replies */}
              <AnimatePresence>
                {showInitialReplies && !isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-wrap gap-2 pl-9"
                  >
                    {INITIAL_QUICK_REPLIES.map((reply) => (
                      <button
                        key={reply}
                        onClick={() => handleQuickReply(reply)}
                        className="px-3 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
                      >
                        {reply}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            {/* Input Bar */}
            <div className="px-4 py-3 bg-white border-t border-slate-100 shrink-0">
              <form
                onSubmit={handleSend}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  disabled={isTyping}
                  className="flex-1 bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 placeholder:text-slate-400 transition disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-slate-900 disabled:bg-slate-200 text-white flex items-center justify-center transition-colors duration-200 shrink-0"
                >
                  <Send size={15} />
                </button>
              </form>
              <p className="text-center text-[10px] text-slate-400 mt-2 font-medium">
                Powered by{" "}
                <span className="text-blue-500 font-bold">AutoScriptPro AI</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
