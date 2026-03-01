"use client";
import { useEffect, useRef } from "react";

const COLORS = [
  "#C9A96E", "#D4B87A", "#E8D5A8",
  "#C4A0AA", "#B8879A", "#DBBFC8",
  "#7A9E7E", "#A8C5AB", "#5B8A5E",
];

const COUNT = 90;

export default function Confetti({ active }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < COUNT; i++) {
      const el = document.createElement("div");
      el.className = "confetti-particle";

      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const angle = Math.random() * 360;
      const distance = 120 + Math.random() * 220;
      const size = 5 + Math.random() * 7;
      const duration = 1.8 + Math.random() * 1.2;
      const delay = Math.random() * 0.3;
      const shape = Math.random() > 0.5 ? "50%" : "2px";

      const rad = (angle * Math.PI) / 180;
      const tx = Math.cos(rad) * distance;
      const ty = Math.sin(rad) * distance;

      el.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: ${shape};
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9999;
        animation: confettiBurst ${duration}s ease-out ${delay}s forwards;
        --tx: ${tx}px;
        --ty: ${ty}px;
      `;

      container.appendChild(el);
    }

    const timer = setTimeout(() => {
      if (container) container.innerHTML = "";
    }, 3500);

    return () => {
      clearTimeout(timer);
      if (container) container.innerHTML = "";
    };
  }, [active]);

  return <div ref={containerRef} className="confetti-container" />;
}
