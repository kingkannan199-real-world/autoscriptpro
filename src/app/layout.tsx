import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothCursor from "../components/SmoothCursor";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// This is what shows up in Google Search and WhatsApp link previews!
export const metadata: Metadata = {
  title: "AutoScriptPro | Premium AI & Automation Architecture",
  description: "Engineered in Chennai. We build custom AI agents, scalable web apps, and data pipelines to eliminate manual work for growing startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth"> 
      {/* Added scroll-smooth so the navbar links glide to the sections */}
      {/* Removed hardcoded cursor-none so our CSS can handle mobile safely */}
      <body className={`${inter.className} bg-slate-50`}>
        <SmoothCursor />
        <Navbar /> 
        
        {/* pt-20 pushes the page content down so the fixed navbar doesn't cover it */}
        <div className="pt-20"> 
          {children}
        </div>
      </body>
    </html>
  );
}