"use client";
import { useState } from "react";
import Card from "./Card";
import "./animations.css";

export default function Envelope() {
  const [open, setOpen] = useState(false);
  const [animating, setAnimating] = useState(false);

  const handleOpen = () => {
    if (open || animating) return;
    setAnimating(true);
    // Let the flap animation play, then reveal card
    setTimeout(() => {
      setOpen(true);
      setAnimating(false);
    }, 900);
  };

  return (
    <div className="envelope-wrapper">
      {!open && (
        <div
          className={`royal-envelope float-up ${animating ? "is-opening" : ""}`}
          onClick={handleOpen}
          role="button"
          tabIndex={0}
          aria-label="Open wedding invitation"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleOpen();
          }}
        >
          <div className="envelope-back"></div>
          <div className="envelope-front">
            <span className="rustic-text royal-open-text">
              ✉ Open Invitation
            </span>
          </div>
          <div className="envelope-flap"></div>
          <div className="envelope-glow"></div>
          <div className="envelope-seal">
            <span className="seal-text">J & F</span>
          </div>
        </div>
      )}

      {open && (
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
