"use client";
import { useState, useEffect } from "react";

const DISMISS_AFTER_MS = 2800;
const FADE_DURATION_MS = 600;

export default function Preloader({ onDone }) {
  const [visible, setVisible] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fadeId = setTimeout(() => {
      setHidden(true);
      if (onDone) onDone();
    }, DISMISS_AFTER_MS);

    const removeId = setTimeout(
      () => setVisible(false),
      DISMISS_AFTER_MS + FADE_DURATION_MS
    );

    return () => {
      clearTimeout(fadeId);
      clearTimeout(removeId);
    };
  }, [onDone]);

  if (!visible) return null;

  return (
    <div className={`preloader-overlay${hidden ? " preloader-hidden" : ""}`}>
      <div className="preloader-content">
        <div className="preloader-monogram">
          <span className="preloader-initial">J</span>
          <span className="preloader-amp">&amp;</span>
          <span className="preloader-initial">F</span>
        </div>
        <p className="preloader-text">Loading your invitation&hellip;</p>
        <div className="preloader-dots">
          <span className="preloader-dot" /><span className="preloader-dot" /><span className="preloader-dot" />
        </div>
      </div>
    </div>
  );
}
