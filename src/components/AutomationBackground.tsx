"use client";

import { useEffect, useRef } from "react";

export default function AutomationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // High-DPI support for razor-sharp rendering
    const dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const spacing = 60; // Grid density
    const cols = Math.floor(width / spacing) + 1;
    const rows = Math.floor(height / spacing) + 1;

    let connections: Connection[] = [];

    // --- THE PHYSICS: STATIC FADING CONNECTIONS ---
    class Connection {
      startX: number;
      startY: number;
      endX: number;
      endY: number;
      life: number;
      maxLife: number;
      opacity: number;

      constructor() {
        // Pick a random grid point
        const col = Math.floor(Math.random() * cols);
        const row = Math.floor(Math.random() * rows);
        this.startX = col * spacing;
        this.startY = row * spacing;

        // Connect to an adjacent point (Up, Down, Left, or Right)
        const dir = Math.floor(Math.random() * 4);
        this.endX = this.startX;
        this.endY = this.startY;

        if (dir === 0) this.endY -= spacing;
        else if (dir === 1) this.endX += spacing;
        else if (dir === 2) this.endY += spacing;
        else this.endX -= spacing;

        this.life = 0;
        this.maxLife = 150 + Math.random() * 150; // Slow, breathing fade
        this.opacity = 0;
      }

      update() {
        this.life++;
        // Sine wave math to smoothly fade opacity from 0 -> 1 -> 0
        this.opacity = Math.sin((this.life / this.maxLife) * Math.PI) * 0.25; 
      }

      draw() {
        if (this.opacity <= 0) return;
        
        ctx!.beginPath();
        ctx!.moveTo(this.startX, this.startY);
        ctx!.lineTo(this.endX, this.endY);
        // Pure Enterprise Blue with dynamic, faint opacity
        ctx!.strokeStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx!.lineWidth = 1.5;
        ctx!.stroke();
      }
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw the Base Blueprint Dots (Extremely faint)
      ctx.fillStyle = "rgba(203, 213, 225, 0.4)"; // Faint slate-300
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          ctx.beginPath();
          ctx.arc(i * spacing, j * spacing, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Spawn new connections randomly
      // Keeps the screen active but extremely minimal (only max 20 active at a time)
      if (Math.random() < 0.1 && connections.length < 20) {
        connections.push(new Connection());
      }

      // 3. Update and draw connections
      connections.forEach(conn => {
        conn.update();
        conn.draw();
      });

      // Remove dead connections
      connections = connections.filter(conn => conn.life < conn.maxLife);

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-white pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      {/* Heavy radial mask so the grid completely disappears behind your Hero Text */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_0%,rgba(255,255,255,1)_100%)]" />
    </div>
  );
}