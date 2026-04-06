// @ts-nocheck
"use client";

import React, { useEffect, useState } from "react";
import anime from "animejs";

export default function NeuralGrid() {
  const [grid, setGrid] = useState({ cols: 0, rows: 0, total: 0 });
  const DOT_SIZE = 40;

  useEffect(() => {
    const handleResize = () => {
      const cols = Math.floor(window.innerWidth / DOT_SIZE);
      const rows = Math.floor(window.innerHeight / DOT_SIZE);
      setGrid({ cols, rows, total: cols * rows });
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (grid.total === 0) return;

    // The Click Handler
    const handleClick = (e: MouseEvent) => {
      const col = Math.floor(e.clientX / DOT_SIZE);
      const row = Math.floor(e.clientY / DOT_SIZE);
      const clickedIndex = row * grid.cols + col;
      fireRipple(clickedIndex);
    };

    // The reusable ripple physics
    const fireRipple = (index: number) => {
      anime({
        targets: ".neural-dot",
        backgroundColor: [
          { value: "#3b82f6", easing: "easeOutSine", duration: 300 }, // Bright blue
          { value: "#cbd5e1", easing: "easeInOutQuad", duration: 600 } // Back to light slate
        ],
        scale: [
          { value: 2.5, easing: "easeOutSine", duration: 300 },
          { value: 1, easing: "easeInOutQuad", duration: 600 }
        ],
        delay: anime.stagger(45, {
          grid: [grid.cols, grid.rows],
          from: index
        })
      });
    };

    window.addEventListener("click", handleClick);

    // --- NEW: THE AUTONOMOUS HEARTBEAT ---
    // Fires a random ripple every 4 seconds automatically
    const idlePulse = setInterval(() => {
      const randomDot = Math.floor(Math.random() * grid.total);
      fireRipple(randomDot);
    }, 4000);

    return () => {
      window.removeEventListener("click", handleClick);
      clearInterval(idlePulse); // Cleanup the interval
    };
  }, [grid]);

  return (
    <div 
      className="absolute inset-0 z-0 flex flex-wrap justify-center items-center overflow-hidden pointer-events-none"
      style={{ alignContent: 'flex-start' }}
    >
      {Array.from({ length: grid.total }).map((_, i) => (
        <div key={i} className="flex items-center justify-center" style={{ width: DOT_SIZE, height: DOT_SIZE }}>
          {/* Default dot is a light slate color for the white theme */}
          <div className="neural-dot w-1 h-1 bg-slate-300 rounded-full opacity-60" />
        </div>
      ))}
    </div>
  );
}