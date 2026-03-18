"use client";

import React, { useRef, useState, useEffect } from "react";

export default function SpotlightCard({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return;
      const rect = divRef.current.getBoundingClientRect();
      const cardX = rect.left + rect.width / 2;
      const cardY = rect.top + rect.height / 2;
      
      const isNear = Math.abs(e.clientX - cardX) < rect.width / 2 + 250 &&
                     Math.abs(e.clientY - cardY) < rect.height / 2 + 250;
      
      setIsVisible(isNear);
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  return (
    <div
      ref={divRef}
      className={`relative rounded-[24px] overflow-hidden bg-slate-200/50 ${className}`}
      style={{ padding: '1px' }} // Hard-locks the border to exactly 1px
    >
      {/* THE 1PX LASER MASK */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `conic-gradient(from 90deg at 50% 50%, #0284c7, #3b82f6, #6366f1, #8b5cf6, #38bdf8, #0284c7)`,
          maskImage: `radial-gradient(250px circle at ${position.x}px ${position.y}px, black, transparent 60%)`,
          WebkitMaskImage: `radial-gradient(250px circle at ${position.x}px ${position.y}px, black, transparent 60%)`,
        }}
      />
      
      {/* WRAPPER TO PROTECT CONTENT */}
      <div className="relative z-10 w-full h-full rounded-[23px] bg-white overflow-hidden">
        {children}
      </div>
    </div>
  );
}