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
      
      // Proximity trigger: Active when mouse is within 250px
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
      // THE FIX: p-[1px] creates the razor-thin 1mm border. rounded-3xl gives the high curves.
      className={`relative h-full w-full overflow-hidden rounded-3xl p-[1px] bg-slate-100 transition-shadow hover:shadow-md ${className}`}
    >
      {/* THE RAINBOW BLUE LASER */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
          // Fancy rainbow in shades of blue/purple
          background: `conic-gradient(from 90deg at 50% 50%, #0284c7, #3b82f6, #6366f1, #8b5cf6, #38bdf8, #0284c7)`,
          // Mask makes it only appear near the mouse
          maskImage: `radial-gradient(250px circle at ${position.x}px ${position.y}px, black, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(250px circle at ${position.x}px ${position.y}px, black, transparent 70%)`,
        }}
      />
      
      {/* CARD CONTENT INJECTED HERE */}
      {children}
    </div>
  );
}