import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting (per-deployment; for production use Redis/Upstash)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 3; // max submissions
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT) {
    return true;
  }

  entry.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message, _honeypot } = body;

    // Honeypot check — if this hidden field is filled, it's a bot
    if (_honeypot) {
      // Return fake success to fool the bot
      return NextResponse.json({ success: true });
    }

    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!service || typeof service !== "string") {
      return NextResponse.json(
        { success: false, error: "Please select a service." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please provide a message (at least 10 characters)." },
        { status: 400 }
      );
    }

    // Forward to Google Apps Script
    const googleResponse = await fetch(
      "https://script.google.com/macros/s/AKfycbwDlOss2vGe8Vwl0ml5-eiQquOxWM19gc0WUMHb7aM9LWVxShhXmE1DJgCtrcTQYdh8Wg/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company?.trim() || "",
          phone: phone?.trim() || "",
          service,
          message: message.trim(),
          submittedAt: new Date().toISOString(),
        }),
      }
    );

    if (!googleResponse.ok) {
      throw new Error(`Google Script responded with status ${googleResponse.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try WhatsApp or email us directly." },
      { status: 500 }
    );
  }
}
