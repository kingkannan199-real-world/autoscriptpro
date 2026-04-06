import Groq from "groq-sdk";
import { NextRequest, NextResponse } from "next/server";

// ─── Company Knowledge Base (RAG Context) ──────────────────────────────────────
const COMPANY_KNOWLEDGE_BASE = `
AUTOSCRIPTPRO — OFFICIAL KNOWLEDGE BASE

COMPANY: AutoScriptPro — Premium Automation & AI Engineering Agency, Chennai, Tamil Nadu, India.
TARGET: Startups, growth-stage companies, SMBs (primarily India).
MISSION: Eliminate manual bottlenecks with intelligent automation for measurable ROI.

CONTACT: Email: reachout@autoscriptpro.in | Phone: +91 72006 96059 | WhatsApp: wa.me/917200696059

VALUES: Innovation First, Client Success, Transparency, Quality Excellence, Continuous Learning, Partnership Mindset.

SERVICES:
1. Automation & AI Agents — Intelligent workflows, multi-agent RAG systems, custom LLM integrations (GPT/Gemini/Claude), database automation, customer support bots, lead qualification agents.
2. WhatsApp & Email Campaigns — Bulk messaging, automated follow-ups, drip sequences, AI-powered personalization, CRM automation.
3. Web & Custom Development — Full-stack Next.js, React, Node.js. Landing pages, dashboards, SaaS platforms, admin panels.
4. Data Analysis & Insights — Interactive dashboards, Google Sheets automation, real-time BI, database design (PostgreSQL, MongoDB, Firebase).
5. Database Solutions — Scalable database design, optimization, integration.
6. Custom Solutions — Tailor-made automation for any workflow or industry.

PRICING (INR, Milestone-Based):
- Starter: From ₹6,000 | 1 deliverable | 5-7 days | 1 revision | Email support
- Growth (Most Popular): From ₹15,000 | Up to 5 modules | 10-14 days | 3 revisions | Priority WhatsApp | 30-day monitoring
- Scale: From ₹35,000 | End-to-end platform | 4-6 weeks | Unlimited revisions | Dedicated channel | 60-day partnership
- Range: ₹25,000 to ₹5,00,000+ depending on scope. No hidden fees. Free consultation included.

TRUST: No hidden charges | Pay in milestones only | NDA-protected | Free consultation | 100% satisfaction guarantee.

PROOF: 40+ hours/week saved | ₹50L+ saved for clients | 3.5x ROI in 90 days | 4.9★ rating | 2-6 week delivery.

CASE STUDIES:
1. Healthcare Supply Chain (Chennai) — Pharma Inventory Dashboard — Next.js, Spring Boot, PostgreSQL — 100% Stock Accuracy
2. Tech Startup (TN) — Multi-Agent AI System — LLMs, RAG, FastAPI — 40+ hrs/week saved
3. Civic Tech (Chennai) — Issue Tracking Portal — React, Node.js, AWS — 60% faster resolution
4. E-Commerce (Global) — Predictive CRM — Python, LangChain, Stripe — 3.5x re-engagement

TEAM: Led by Linkesh Raju (Lead AI & Full-Stack Architect, specializes in multi-agent RAG, LLM integrations, Next.js). Team includes Backend, Data, Frontend, and Growth specialists.

TECH: Python, Next.js, React, Node.js, Spring Boot, PostgreSQL, MongoDB, Firebase, n8n, Make, Zapier, LangChain, FastAPI, AWS, GPT, Gemini, Claude.

FAQ:
- Deployment: 5-7 days for standard, 4-6 weeks for complex custom architectures.
- Integration: Yes, custom API bridges & middleware for existing CRMs/databases.
- Post-deploy: Documentation, handover, 30-day monitoring, ongoing retainer available.
- Security: Zero-trust architecture, encrypted pipelines, no data leakage to public models.
`;

// ─── System Prompt (concise — guardrails + personality) ────────────────────────
const SYSTEM_PROMPT = `You are Astra, AutoScriptPro's AI Sales Strategist. You ONLY discuss AutoScriptPro-related topics.

STRICT RULES:
1. ONLY answer using the Company Knowledge Base provided below. Never make up information.
2. If a question is NOT about AutoScriptPro, its services, automation, AI, or business — politely decline: "I'm Astra, and I'm here to help with AutoScriptPro's services! Ask me about automation, AI agents, pricing, or our work. 😊"
3. NEVER answer general knowledge, trivia, math, coding help, personal advice, news, weather, sports, entertainment, or anything unrelated.
4. NEVER break character. You are Astra, not a general AI.
5. NEVER say "As an AI language model." You are Astra.

PERSONALITY: Warm, confident, sharp, persuasive but not pushy. Short punchy sentences. Under 60 words unless detailed question. 1-2 emojis max.

SALES FLOW: Acknowledge pain → Qualify (industry, needs, tools) → Share relevant case study/stat → Guide to free strategy call or contact section.

PRICING: Starter ₹6K+, Growth ₹15K+, Scale ₹35K+. For custom: "The free strategy call gives you an exact number."

LEAD GOALS: 1) Book consultation 2) Get email 3) Connect WhatsApp

If unsure about AutoScriptPro detail: "Great question — our lead architect can give the best answer. That's what the free strategy call is for! 🎯"

Keep responses conversational, short, with line breaks. Never send walls of text.

=== COMPANY KNOWLEDGE BASE ===
${COMPANY_KNOWLEDGE_BASE}
=== END KNOWLEDGE BASE ===`;

// ─── Off-Topic Detection ───────────────────────────────────────────────────────
const OFF_TOPIC_PATTERNS = [
  /\b(who is|who was|what is the capital|tell me about|explain)\b.*\b(president|minister|country|planet|history|science|physics|chemistry|biology|math|geography|literature)\b/i,
  /\b(write|code|program|script|function|algorithm|leetcode|hackerrank)\b.*\b(python|java|c\+\+|javascript|html|css|rust|go|ruby|php|swift|kotlin)\b/i,
  /\b(movie|film|song|music|actor|actress|singer|celebrity|sports|cricket|football|basketball|netflix|anime|manga)\b/i,
  /\b(relationship|dating|girlfriend|boyfriend|love advice|mental health|therapy|workout|diet|recipe|cook)\b/i,
  /\b(weather|forecast|temperature|news|headline|stock market|crypto|bitcoin|ethereum)\b/i,
  /^(write me a|compose a|generate a|create a) (poem|story|essay|song|joke|letter|resume|cover letter)/i,
  /^(what is|calculate|solve|compute) \d+/i,
];

const ON_TOPIC_PATTERNS = [
  /\b(automate|automation|ai agent|chatbot|workflow|crm|whatsapp|email campaign|dashboard|web app|landing page|saas|api|database|analytics|lead|roi|startup|business|scale|n8n|make\.com|zapier|llm|rag|gpt|gemini|custom development|next\.?js|react|node|backend|frontend)\b/i,
  /\b(autoscript|astra|aria|pricing|plan|service|case study|team|contact|consultation|strategy call|quote|cost|timeline|delivery|guarantee|nda|milestone)\b/i,
  /\b(how do you|what do you|do you offer|can you help|your company|your team|your service|your pricing|your work)\b/i,
];

function isLikelyOffTopic(message: string): boolean {
  if (ON_TOPIC_PATTERNS.some((p) => p.test(message))) return false;
  if (OFF_TOPIC_PATTERNS.some((p) => p.test(message))) return true;
  return false;
}

const OFF_TOPIC_RESPONSES = [
  "I appreciate the curiosity! 😄 But I'm specialized in AutoScriptPro's services — automation, AI agents, web development, and more.\n\nWhat can I help you with in those areas?",
  "That's outside my area, but I'd love to help with AutoScriptPro! 😊 Ask me about our AI agents, pricing, or case studies!",
  "I'm Astra — AutoScriptPro's AI Strategist! I'm here to help you automate and scale your business. 💡\n\nWant to know what we can build for you?",
];

// ─── Types ─────────────────────────────────────────────────────────────────────
interface ChatMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

// ─── POST Handler ──────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey || apiKey === "your_groq_api_key_here") {
      return NextResponse.json(
        { error: "Groq API key not configured. Add GROQ_API_KEY to .env.local" },
        { status: 500 }
      );
    }

    const { messages } = (await req.json()) as { messages: ChatMessage[] };

    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: "No messages provided" },
        { status: 400 }
      );
    }

    const lastMessage = messages[messages.length - 1];
    const userText = lastMessage.parts[0]?.text || "";

    // ── Pre-filter: catch obviously off-topic messages ──
    if (isLikelyOffTopic(userText)) {
      const randomResponse =
        OFF_TOPIC_RESPONSES[Math.floor(Math.random() * OFF_TOPIC_RESPONSES.length)];
      return NextResponse.json({ text: randomResponse });
    }

    // ── Initialize Groq client ──
    const groq = new Groq({ apiKey });

    // ── Convert Gemini-format messages to OpenAI/Groq format ──
    const groqMessages: { role: "system" | "user" | "assistant"; content: string }[] = [
      { role: "system", content: SYSTEM_PROMPT },
    ];

    // Add conversation history (convert from Gemini format)
    const history = messages.slice(0, -1);
    for (const msg of history) {
      if (msg.parts && msg.parts.length > 0 && msg.parts[0].text) {
        groqMessages.push({
          role: msg.role === "model" ? "assistant" : "user",
          content: msg.parts[0].text,
        });
      }
    }

    // Add the current user message
    groqMessages.push({ role: "user", content: userText });

    // ── Call Groq API ──
    const chatCompletion = await groq.chat.completions.create({
      messages: groqMessages,
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 300,
      top_p: 0.9,
    });

    const responseText =
      chatCompletion.choices[0]?.message?.content ||
      "I had a brief hiccup — could you repeat that? I want to give you my best answer. 🙏";

    return NextResponse.json({ text: responseText });
  } catch (error: unknown) {
    console.error("Chat API error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: message, details: String(error) },
      { status: 500 }
    );
  }
}
