"use client";
import { useEffect } from "react";

export default function Sparkles() {
  useEffect(() => {
    const particles = [];
    for (let i = 0; i < 35; i++) {
      const p = document.createElement("div");
      p.className = "glitter-particle";
      const size = 3 + Math.random() * 5;
      p.style.left = Math.random() * 100 + "vw";
      p.style.top = "-10px";
      p.style.width = size + "px";
      p.style.height = size + "px";
      p.style.animationDuration = (5 + Math.random() * 7) + "s";
      p.style.animationDelay = (Math.random() * 8) + "s";
      document.body.appendChild(p);
      particles.push(p);
    }
    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return null;
}

