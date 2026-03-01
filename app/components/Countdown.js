"use client";
import { useState, useEffect } from "react";

const WEDDING_DATE = new Date("2026-12-31T18:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="countdown-section scroll-reveal">
      <div className="countdown-inner">
        <span className="section-label gold-text">Counting Down</span>
        <h2 className="countdown-heading">Until We Say&nbsp;&#8220;I&nbsp;Do&#8221;</h2>
        <div className="countdown-grid">
          {units.map(({ label, value }) => (
            <div key={label} className="countdown-unit">
              <div className="countdown-ring">
                <span className="countdown-number">{pad(value)}</span>
              </div>
              <span className="countdown-label">{label}</span>
            </div>
          ))}
        </div>
        <p className="countdown-note accent-text">December 31, 2026 (Placeholder)</p>
      </div>
    </section>
  );
}
