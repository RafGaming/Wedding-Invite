"use client";
import { useState, useEffect } from "react";

const DISMISS_AFTER_MS = 2800;

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setVisible(false), DISMISS_AFTER_MS);
    return () => clearTimeout(id);
  }, []);

  if (!visible) return null;

  return (
    <div className="preloader">
      <div className="preloader-monogram">
        <span className="preloader-initial">J</span>
        <span className="preloader-amp">&amp;</span>
        <span className="preloader-initial">F</span>
      </div>
      <p className="preloader-text">Loading your invitation&hellip;</p>
      <div className="preloader-dots">
        <span /><span /><span />
      </div>
    </div>
  );
}
