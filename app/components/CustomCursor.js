"use client";
import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    document.body.classList.add("custom-cursor-active");
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    />
  );
}
