import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothCursor from "../components/SmoothCursor";
import Navbar from "../components/Navbar"; // Add this import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoScriptPro | Automation & AI Architecture",
  description: "Engineered in Chennai. Built for the World.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth"> 
      {/* Added scroll-smooth so the navbar links glide to the sections */}
      <body className={`${inter.className} cursor-none bg-slate-50`}>
        <SmoothCursor />
        <Navbar /> {/* Drop the Navbar right here at the top */}
        
        {/* We add pt-20 (padding-top) to push the page content down so the fixed navbar doesn't cover it */}
        <div className="pt-20"> 
          {children}
        </div>
      </body>
    </html>
  );
}