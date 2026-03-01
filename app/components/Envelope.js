"use client";
import { useState } from "react";
import Card from "./Card";
import "./animations.css";

const SHRINK_DURATION_MS = 700;
const GROW_DURATION_MS = 800;

export default function Envelope({ onOpen, ready }) {
  const [phase, setPhase] = useState("sealed"); // sealed, shrinking, revealing, done

  const handleOpen = () => {
    if (phase !== "sealed") return;
    setPhase("shrinking");
    setTimeout(() => setPhase("revealing"), SHRINK_DURATION_MS);
    setTimeout(() => {
      setPhase("done");
      if (onOpen) onOpen();
    }, SHRINK_DURATION_MS + GROW_DURATION_MS);
  };

  const visibilityClass = ready ? " envelope-visible" : " envelope-hidden";

  return (
    <div className={`envelope-wrapper${visibilityClass}`}>
      {(phase === "sealed" || phase === "shrinking") && (
        <>
          <div
            className={`royal-envelope float-up${phase === "shrinking" ? " envelope-shrinking" : ""}`}
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
          <span className={`royal-open-text${phase === "shrinking" ? " royal-open-text--fading" : ""}`}>✉ Open Invitation</span>
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
