"use client";
import { useState } from "react";
import Card from "./Card";
import "./animations.css";

const FADE_OVERLAP_MS = 400;
const GROW_DURATION_MS = 1000;

export default function Envelope({ onOpen, ready }) {
  const [phase, setPhase] = useState("sealed"); // sealed, fading, revealing, done

  const handleOpen = () => {
    if (phase !== "sealed") return;
    setPhase("fading");
    setTimeout(() => setPhase("revealing"), FADE_OVERLAP_MS);
    setTimeout(() => {
      setPhase("done");
      if (onOpen) onOpen();
    }, FADE_OVERLAP_MS + GROW_DURATION_MS);
  };

  const visibilityClass = ready ? " envelope-visible" : " envelope-hidden";

  return (
    <div className={`envelope-wrapper${visibilityClass}`}>
      {(phase === "sealed" || phase === "fading") && (
        <>
          <div
            className={`royal-envelope float-up${phase === "fading" ? " envelope-fading" : ""}`}
            onClick={handleOpen}
            role="button"
            tabIndex={0}
            aria-label="Open wedding invitation"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleOpen();
            }}
          >
            <img src="/envelope.png" alt="Wedding envelope" className="envelope-image" />
          </div>
          <span className={`royal-open-text${phase === "fading" ? " royal-open-text--fading" : ""}`}>✉ Open Invitation</span>
        </>
      )}

      {(phase === "revealing" || phase === "done") && (
        <div className="card-reveal">
          <Card />
          <div className="scroll-hint">
            <span className="scroll-arrow">▼</span>
            <p>Scroll down for more</p>
          </div>
        </div>
      )}
    </div>
  );
}
