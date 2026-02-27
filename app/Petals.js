"use client";
import { useEffect } from "react";

export default function Petals() {
  useEffect(() => {
    for (let i = 0; i < 18; i++) {
      const p = document.createElement("img");
      p.src = "/sparkles/gold-sparkle.png";
      p.className = "petal";
      p.style.left = Math.random() * window.innerWidth + "px";
      p.style.animationDelay = (Math.random() * 6) + "s";
      p.style.opacity = Math.random() * 0.8 + 0.2;
      document.body.appendChild(p);
    }
  }, []);

  return null;
}
