"use client"; import { useEffect } from "react";

export default function Sparkles() { useEffect(() => { for (let i = 0; i < 25; i++) { const s = document.createElement("img"); s.src = "/sparkles/gold-sparkle.png"; s.className = "sparkle"; s.style.left = Math.random() * window.innerWidth + "px"; s.style.top = window.innerHeight + "px"; s.style.animationDelay = (Math.random() * 3) + "s"; document.body.appendChild(s); } }, []);

return null; }
