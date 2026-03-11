import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothCursor from "../components/SmoothCursor";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-white antialiased`}>
        <SmoothCursor />
        <Navbar /> 
        
        {/* --- THE FIX --- */}
        {/* Removed the pt-20 wrapper so the Hero gradient touches the top of the screen */}
        <main className="relative flex min-h-screen flex-col w-full">
          {children}
        </main>
        
      </body>
    </html>
  );
}