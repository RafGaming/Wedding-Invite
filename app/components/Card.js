"use client";
import { useState, useEffect, useMemo } from "react";

/*
 * Map of gradient variant names to inline style objects.
 * Each .hw-char span will receive the gradient so that
 * background-clip:text works per-character (inline-block).
 */
const GRADIENT_STYLES = {
  gold: {
    background: "linear-gradient(135deg, #7A9E7E, #A8C5AB, #5B8A5E)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  accent: {
    background: "linear-gradient(135deg, #C9A96E, #E8D5A8, #D4B87A)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  mauve: {
    background: "linear-gradient(135deg, #C4A0AA, #DBBFC8, #B8879A)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  shimmer: {
    background: "linear-gradient(90deg, #C9A96E 0%, #E8D5A8 25%, #D4B87A 50%, #E8D5A8 75%, #C9A96E 100%)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
};

/* helper: wrap every character in its own <span> with a stagger delay */
function HandwrittenText({ text, baseDelay = 0, speed = 0.045, className = "", variant = "" }) {
  const chars = useMemo(() => text.split(""), [text]);
  const gradientStyle = GRADIENT_STYLES[variant] || {};

  return (
    <span className={`handwritten-wrapper ${className}`}>
      {chars.map((ch, i) => {
        const delay = baseDelay + i * speed;
        const charStyle = {
          ...gradientStyle,
          animationDelay: `${delay}s`,
        };
        /* For shimmer variant, combine both handwriteIn and shimmer animations */
        if (variant === "shimmer") {
          charStyle.animation = `handwriteIn 0.4s ease-out ${delay}s forwards, shimmer 3s linear ${delay + 0.4}s infinite`;
        }
        return (
          <span
            key={`${i}-${ch}`}
            className="hw-char"
            style={charStyle}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        );
      })}
    </span>
  );
}

export default function Card() {
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch("/api/wedding-details")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setDetails(data))
      .catch(() => {});
  }, []);

  return (
    <div className="card">
      {/* ornamental corners */}
      <div className="corner tl"></div>
      <div className="corner tr"></div>
      <div className="corner bl"></div>
      <div className="corner br"></div>

      {/* decorative top flourish */}
      <div className="card-flourish top-flourish stagger-1">❧</div>

      {/* monogram crest */}
      <div className="card-monogram stagger-1">
        <span className="monogram-letter">J</span>
        <span className="monogram-ampersand">&#x26;</span>
        <span className="monogram-letter">F</span>
      </div>

      <h1 className="royal-card-title stagger-2">
        <HandwrittenText text="You Are Invited" baseDelay={0.3} speed={0.06} variant="gold" />
      </h1>
      <p className="royal-sub stagger-3">
        <HandwrittenText text="To the wedding celebration of" baseDelay={0.8} speed={0.035} />
      </p>

      <p className="royal-families stagger-3">
        <HandwrittenText text="Together with their families" baseDelay={1.2} speed={0.035} variant="accent" />
      </p>

      <div className="royal-names stagger-4">
        <span className="royal-name">
          <HandwrittenText text="Jethro Dionisio" baseDelay={1.6} speed={0.07} variant="shimmer" />
        </span>
        <span className="royal-and">
          <HandwrittenText text="&" baseDelay={2.4} speed={0.06} />
        </span>
        <span className="royal-name">
          <HandwrittenText text="Francisca Domingo" baseDelay={2.6} speed={0.07} variant="shimmer" />
        </span>
      </div>

      <div className="royal-divider stagger-5"></div>

      <p className="royal-date stagger-6">
        <HandwrittenText
          text={`Date: ${details.wedding_date || "TBA"}`}
          baseDelay={3.4}
          speed={0.04}
        />
      </p>
      <p className="royal-venue stagger-6">
        <HandwrittenText
          text={`Venue: ${details.venue || "To Be Announced"}`}
          baseDelay={3.8}
          speed={0.04}
        />
      </p>

      <p className="royal-reception stagger-7">
        <HandwrittenText text="Dinner & Dancing to Follow" baseDelay={4.2} speed={0.04} variant="gold" />
      </p>
      <p className="royal-dress-code stagger-7">
        <HandwrittenText
          text={`Dress Code: ${details.dress_code || "Formal / Semi-Formal"}`}
          baseDelay={4.6}
          speed={0.035}
        />
      </p>

      <p className="royal-rsvp stagger-8">
        <HandwrittenText
          text={`Kindly Respond by ${details.rsvp_deadline || "[Date]"}`}
          baseDelay={5.0}
          speed={0.035}
          variant="mauve"
        />
      </p>

      {/* decorative bottom flourish */}
      <div className="card-flourish bottom-flourish stagger-8">❧</div>
    </div>
  );
}
