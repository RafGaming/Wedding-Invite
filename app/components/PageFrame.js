"use client";
import "./frame-styles.css";

export default function PageFrame() {
  return (
    <div className="page-frame" aria-hidden="true">
      {/* Double gold border layers */}
      <div className="page-frame-outer" />
      <div className="page-frame-inner" />

      {/* Traveling shimmer */}
      <div className="page-frame-shimmer" />

      {/* Ornamental corner pieces */}
      <div className="page-frame-corner tl">
        <div className="corner-bracket" />
        <span className="corner-flourish">❧</span>
      </div>
      <div className="page-frame-corner tr">
        <div className="corner-bracket" />
        <span className="corner-flourish">❧</span>
      </div>
      <div className="page-frame-corner bl">
        <div className="corner-bracket" />
        <span className="corner-flourish">❧</span>
      </div>
      <div className="page-frame-corner br">
        <div className="corner-bracket" />
        <span className="corner-flourish">❧</span>
      </div>

      {/* Top edge ornament — two lines with ◆ diamond */}
      <div className="page-frame-top-ornament">
        <div className="ornament-line" />
        <span className="ornament-diamond">◆</span>
        <div className="ornament-line" />
      </div>

      {/* Bottom edge ornament — two lines with J & F initials */}
      <div className="page-frame-bottom-ornament">
        <div className="ornament-line" />
        <span className="ornament-initials">J &amp; F</span>
        <div className="ornament-line" />
      </div>
    </div>
  );
}
