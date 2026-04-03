"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, ArrowRight } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Message {
  role: "ai" | "user";
  text: string;
  quickReplies?: string[];
  showCTA?: boolean;
}

// ─── Conversation Engine ───────────────────────────────────────────────────────
function getBotResponse(userText: string, step: number): Message {
  const t = userText.toLowerCase().trim();

  switch (step) {
    case 0: {
      // What brings them here
      if (t.includes("automate") || t.includes("automation") || t.includes("workflow")) {
        return {
          role: "ai",
          text: "Smart — automation is the single fastest ROI move any business can make. We've helped clients cut 120+ manual hours a week.\n\nWhat's eating up the most time for your team right now?",
          quickReplies: ["Lead follow-ups", "Data entry & reports", "Customer support", "Internal operations"],
        };
      }
      if (t.includes("app") || t.includes("web") || t.includes("build") || t.includes("develop")) {
        return {
          role: "ai",
          text: "Perfect. We don't build templates — we architect systems that scale.\n\nWhat kind of system are you envisioning?",
          quickReplies: ["Web app / Dashboard", "AI-powered system", "API & Backend", "Full-stack platform"],
        };
      }
      if (t.includes("project") || t.includes("specific") || t.includes("idea")) {
        return {
          role: "ai",
          text: "A specific project is exactly what we love — no fluff, straight to the blueprint.\n\nWhat's the core problem you're trying to solve?",
          quickReplies: ["Save time & reduce cost", "Scale operations", "Better data & insights", "Grow revenue"],
        };
      }
      if (t.includes("ai") || t.includes("agent") || t.includes("llm")) {
        return {
          role: "ai",
          text: "AI agents are our bread and butter — RAG pipelines, multi-agent systems, custom LLM integrations. We've shipped production AI for healthcare, logistics, and SaaS.\n\nWhat would you want the AI to do for your business?",
          quickReplies: ["Answer customer queries", "Research & summarise", "Automate decisions", "Generate content"],
        };
      }
      // default / exploring
      return {
        role: "ai",
        text: "No pressure at all — the best decisions start with curiosity. 🧠\n\nLet me ask you this: if you had a world-class engineering team for one week, what would you fix first?",
        quickReplies: ["Automate repetitive tasks", "Build a product faster", "Fix data & reporting", "Launch an AI feature"],
      };
    }

    case 1: {
      // Qualifying — understand urgency
      return {
        role: "ai",
        text: "Got it. That's a high-leverage area — and one we've solved across multiple industries.\n\nWe typically deliver working systems in 2–6 weeks depending on scope. How urgent is this for you?",
        quickReplies: ["ASAP — this is costing us now", "Within a month", "Next quarter", "Still in planning mode"],
      };
    }

    case 2: {
      // Urgency response → ask for name
      if (t.includes("asap") || t.includes("costing") || t.includes("urgent") || t.includes("now")) {
        return {
          role: "ai",
          text: "Understood — urgent situations need fast architecture, not long sales cycles.\n\nWe've shipped critical automations in under 10 days before. I want to flag your case directly to our lead architect.\n\nWhat's your first name?",
        };
      }
      return {
        role: "ai",
        text: "Perfect — that gives us room to design something truly powerful, not just a quick patch.\n\nBefore I connect you with our team, I'd like to get a custom blueprint ready for your specific situation.\n\nWhat's your first name?",
      };
    }

    case 3: {
      // Name captured → ask for email
      const name = userText.split(" ")[0].trim();
      const greeting = name.length > 1 ? name.charAt(0).toUpperCase() + name.slice(1) : name;
      return {
        role: "ai",
        text: `Great to meet you, ${greeting}! 🤝\n\nOur architects build a tailored system brief for every serious inquiry — no generic decks, no wasted time.\n\nWhat's the best email to send yours to?`,
      };
    }

    case 4: {
      // Email captured → final CTA
      if (t.includes("@") && t.includes(".")) {
        return {
          role: "ai",
          text: `You're all set. ✅\n\nI've flagged your details for our lead architect — expect a personal response within 2 business hours.\n\nThe fastest way forward is a 20-minute strategy call. No sales pitch — just a direct technical breakdown of what we'd build for you.`,
          showCTA: true,
        };
      }
      return {
        role: "ai",
        text: "Hmm, that doesn't look quite right — could you double-check the email? I want to make sure the blueprint actually reaches you.",
      };
    }

    default: {
      return {
        role: "ai",
        text: "I've noted that down. Our architects will make sure it's factored into your custom brief. Is there anything else you'd like to share before we get started?",
        showCTA: true,
      };
    }
  }
}

// ─── Component ─────────────────────────────────────────────────────────────────
export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Hey! 👋 I'm Aria, AutoScriptPro's Senior Sales Strategist.\n\nMost businesses are silently losing 30–50% of productivity to manual work they've normalised. I'm here to change that.\n\nWhat brings you here today?",
      quickReplies: [
        "Automate my business",
        "Build a custom app / system",
        "I have a specific project",
        "Exploring AI agents",
      ],
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 400);
  }, [isOpen]);

  const pushUserMessage = (text: string) => {
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setIsTyping(true);

    const currentStep = step;
    setStep((s) => s + 1);

    const delay = 900 + Math.random() * 600;
    setTimeout(() => {
      const response = getBotResponse(text, currentStep);
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, delay);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;
    pushUserMessage(input.trim());
  };

  const handleQuickReply = (reply: string) => {
    if (isTyping) return;
    pushUserMessage(reply);
  };

  const lastMessage = messages[messages.length - 1];
  const showQuickReplies =
    !isTyping &&
    lastMessage?.role === "ai" &&
    lastMessage?.quickReplies &&
    lastMessage.quickReplies.length > 0;

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
            className="fixed bottom-8 right-8 z-[200]"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full animate-ping bg-blue-500 opacity-20" />

            {/* Mobile — circle icon only */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative flex md:hidden items-center justify-center w-14 h-14 bg-slate-900 hover:bg-blue-600 text-white rounded-full shadow-[0_8px_30px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_40px_rgba(37,99,235,0.55)] transition-all duration-300 cursor-none"
            >
              <Sparkles size={22} className="text-blue-400" />
            </button>

            {/* Desktop — full pill button */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative hidden md:flex items-center gap-2.5 px-5 py-3.5 bg-slate-900 hover:bg-blue-600 text-white text-sm font-bold rounded-full shadow-[0_8px_30px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_40px_rgba(37,99,235,0.55)] transition-all duration-300 cursor-none"
            >
              <Sparkles size={16} className="text-blue-400" />
              Talk to Our Strategist
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
                  <p className="text-sm font-bold text-white leading-tight">Aria</p>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-600/30 border border-blue-500/40 rounded-full w-fit">
                    <Sparkles size={9} className="text-blue-400" />
                    <span className="text-[10px] font-bold text-blue-300 tracking-wide">AI Agent</span>
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-none"
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
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
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

                      {/* CTA Button */}
                      {msg.showCTA && (
                        <motion.a
                          href="#contact"
                          onClick={() => setIsOpen(false)}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 hover:bg-blue-600 text-white text-sm font-bold rounded-2xl transition-colors shadow-md cursor-none"
                        >
                          Book My Free Strategy Call
                          <ArrowRight size={15} />
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
                    <div className="px-4 py-3 bg-white border border-slate-200 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-1">
                      {[0, 1, 2].map((dot) => (
                        <motion.span
                          key={dot}
                          className="w-2 h-2 bg-slate-400 rounded-full block"
                          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                          transition={{ duration: 0.9, repeat: Infinity, delay: dot * 0.18 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Quick Replies */}
              <AnimatePresence>
                {showQuickReplies && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-wrap gap-2 pl-9"
                  >
                    {lastMessage.quickReplies!.map((reply) => (
                      <button
                        key={reply}
                        onClick={() => handleQuickReply(reply)}
                        className="px-3 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 cursor-none"
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
              <form onSubmit={handleSend} className="flex items-center gap-2">
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
                  className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-slate-900 disabled:bg-slate-200 text-white flex items-center justify-center transition-colors duration-200 cursor-none shrink-0"
                >
                  <Send size={15} />
                </button>
              </form>
              <p className="text-center text-[10px] text-slate-400 mt-2 font-medium">
                Powered by <span className="text-blue-500 font-bold">AutoScriptPro AI</span>
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
