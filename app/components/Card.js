"use client";
import { useState, useEffect, useMemo } from "react";

/* helper: wrap every character in its own <span> with a stagger delay */
function HandwrittenText({ text, baseDelay = 0, speed = 0.045, className = "" }) {
  const chars = useMemo(() => text.split(""), [text]);
  return (
    <span className={`handwritten-wrapper ${className}`}>
      {chars.map((ch, i) => (
        <span
          key={`${text}-${i}`}
          className="hw-char"
          style={{ animationDelay: `${baseDelay + i * speed}s` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
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

      <h1 className="royal-card-title gold-text stagger-2">
        <HandwrittenText text="You Are Invited" baseDelay={0.3} speed={0.06} />
      </h1>
      <p className="royal-sub stagger-3">
        <HandwrittenText text="To the wedding celebration of" baseDelay={0.8} speed={0.035} />
      </p>

      <p className="royal-families accent-text stagger-3">
        <HandwrittenText text="Together with their families" baseDelay={1.2} speed={0.035} />
      </p>

      <div className="royal-names stagger-4">
        <span className="royal-name gold-shimmer">
          <HandwrittenText text="Jethro Dionisio" baseDelay={1.6} speed={0.07} />
        </span>
        <span className="royal-and">
          <HandwrittenText text="&" baseDelay={2.4} speed={0.06} />
        </span>
        <span className="royal-name gold-shimmer">
          <HandwrittenText text="Francisca Domingo" baseDelay={2.6} speed={0.07} />
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

      <p className="royal-reception gold-text stagger-7">
        <HandwrittenText text="Dinner & Dancing to Follow" baseDelay={4.2} speed={0.04} />
      </p>
      <p className="royal-dress-code stagger-7">
        <HandwrittenText
          text={`Dress Code: ${details.dress_code || "Formal / Semi-Formal"}`}
          baseDelay={4.6}
          speed={0.035}
        />
      </p>

      <p className="royal-rsvp mauve-text stagger-8">
        <HandwrittenText
          text={`Kindly Respond by ${details.rsvp_deadline || "[Date]"}`}
          baseDelay={5.0}
          speed={0.035}
        />
      </p>

      {/* decorative bottom flourish */}
      <div className="card-flourish bottom-flourish stagger-8">❧</div>
    </div>
  );
}
