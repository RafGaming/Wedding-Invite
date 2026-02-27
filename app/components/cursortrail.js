"use client"; import { useEffect } from "react";

export default function CursorTrail() { useEffect(() => { const handler = (e) => { const dot = document.createElement("div"); dot.className = "cursor-particle"; dot.style.left = ${e.clientX}px; dot.style.top = ${e.clientY}px; document.body.appendChild(dot); setTimeout(() => dot.remove(), 700); };



window.addEventListener("mousemove", handler);
return () => window.removeEventListener("mousemove", handler);
}, []);

return null; }
