"use client";
import { useState } from "react";
import Card from "./Card";
import "./animations.css";

export default function Envelope({ onOpen }) {
  const [stage, setStage] = useState(0); // 0=sealed, 1=opening, 2=letter-rising, 3=card-revealed
  const [cardRevealed, setCardRevealed] = useState(false);

  const handleOpen = () => {
    if (stage !== 0) return;
    setStage(1); // seal breaks, flap opens
    setTimeout(() => setStage(2), 600); // letter starts sliding out
    setTimeout(() => {
      setStage(3);
      setCardRevealed(true);
      if (onOpen) onOpen();
    }, 2000); // full card revealed
  };

  return (
    <div className="envelope-wrapper">
      {!cardRevealed && (
        <div
          className={`royal-envelope float-up stage-${stage}`}
          onClick={handleOpen}
          role="button"
          tabIndex={0}
          aria-label="Open wedding invitation"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleOpen();
          }}
        >
          {/* Envelope body */}
          <div className="envelope-back"></div>
          {/* Letter behind front panel — slides upward on stage 2 */}
          {stage >= 2 && (
            <div className="envelope-letter">
              <div className="letter-line delay-1">You Are Invited</div>
              <div className="letter-line delay-2">Jethro &amp; Francisca</div>
            </div>
          )}
          {/* Front face of envelope (acts as pocket for letter) */}
          <div className="envelope-front">
            <span className={`royal-open-text${stage > 0 ? " fade-out" : ""}`}>
              ✉ Open Invitation
            </span>
          </div>
          {/* Inner glow when opening */}
          <div className="envelope-inner-glow"></div>
          {/* Flap — triangle at top, animates away on open */}
          <div className="envelope-flap"></div>
          {/* Wax Seal */}
          <div className={`envelope-seal${stage > 0 ? " seal-breaking" : ""}`}>
            <span className="seal-text">J &amp; F</span>
          </div>
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
