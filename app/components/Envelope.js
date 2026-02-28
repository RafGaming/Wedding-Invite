"use client";
import { useState } from "react";
import Card from "./Card";
import "./animations.css";

export default function Envelope({ onOpen }) {
  const [opening, setOpening] = useState(false);
  const [cardRevealed, setCardRevealed] = useState(false);

  const handleOpen = () => {
    if (opening || cardRevealed) return;
    setOpening(true);
    setTimeout(() => {
      setCardRevealed(true);
      if (onOpen) onOpen();
    }, 900);
  };

  return (
    <div className="envelope-wrapper">
      {!cardRevealed && (
        <div
          className={`royal-envelope float-up${opening ? " envelope-opening" : ""}`}
          onClick={handleOpen}
          role="button"
          tabIndex={0}
          aria-label="Open wedding invitation"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleOpen();
          }}
        >
          <img src="/envelope.png" alt="Wedding envelope" className="envelope-image" />
          {!opening && (
            <span className="royal-open-text">✉ Open Invitation</span>
          )}
        </div>
      )}

      {cardRevealed && (
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
