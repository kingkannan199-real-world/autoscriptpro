"use client";

import React, { useRef, useState, useEffect } from "react";

export default function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return;
      const rect = divRef.current.getBoundingClientRect();
      const cardX = rect.left + rect.width / 2;
      const cardY = rect.top + rect.height / 2;

      const distX = Math.abs(e.clientX - cardX);
      const distY = Math.abs(e.clientY - cardY);
      const isNear =
        distX < rect.width / 2 + 250 && distY < rect.height / 2 + 250;

      setIsVisible(isNear);
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });

      // 3D tilt — only when directly over the card
      const isOver = distX < rect.width / 2 && distY < rect.height / 2;
      if (isOver) {
        const relX = (e.clientX - cardX) / (rect.width / 2);
        const relY = (e.clientY - cardY) / (rect.height / 2);
        setTilt({ x: relY * -6, y: relX * 6 });
      } else {
        setTilt({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  return (
    <div
      ref={divRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setTilt({ x: 0, y: 0 });
      }}
      className={`relative rounded-[24px] overflow-hidden bg-slate-200/50 ${className}`}
      style={{
        padding: "2px",
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.015 : 1})`,
        transition: isHovered
          ? "transform 0.12s ease-out"
          : "transform 0.45s cubic-bezier(0.16,1,0.3,1)",
        willChange: "transform",
      }}
    >
      {/* LASER BORDER SPOTLIGHT */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `conic-gradient(from 90deg at 50% 50%, #0284c7, #3b82f6, #6366f1, #8b5cf6, #38bdf8, #0284c7)`,
          maskImage: `radial-gradient(250px circle at ${position.x}px ${position.y}px, black, transparent 60%)`,
          WebkitMaskImage: `radial-gradient(250px circle at ${position.x}px ${position.y}px, black, transparent 60%)`,
        }}
      />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full h-full rounded-[22px] bg-white overflow-hidden">
        {children}
      </div>
    </div>
  );
}