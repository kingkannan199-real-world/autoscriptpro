import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothCursor from "../components/SmoothCursor";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import AIChatWidget from "../components/AIChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoScriptPro | Scale With Autonomous Systems",
  description: "We engineer bespoke AI agents, custom backends, and automation workflows that eliminate manual work and accelerate your growth. Engineered in Chennai. Built for the world.",
  keywords: [
    "AI Automation", 
    "Custom Software Architecture", 
    "AI Agents", 
    "Next.js Development", 
    "Spring Boot", 
    "Chennai Tech Agency", 
    "Workflow Automation"
  ],
  authors: [{ name: "AutoScriptPro Engineering" }],
  creator: "AutoScriptPro",
  openGraph: {
    type: "website",
    locale: "en_IN",
    // url: "https://autoscriptpro.com", <-- Keep this commented out until you buy your domain!
    title: "AutoScriptPro | Elite Automation & AI Architecture",
    description: "Stop burning capital on manual work. We build autonomous systems that recover hours and scale your bottom line.",
    siteName: "AutoScriptPro",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoScriptPro | Autonomous Systems Architecture",
    description: "Stop burning capital on manual work. We build autonomous systems that recover hours and scale your bottom line.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>
        <ScrollProgress />
        <SmoothCursor />
        <Navbar />
        {children}
        <AIChatWidget />
      </body>
    </html>
  );
}