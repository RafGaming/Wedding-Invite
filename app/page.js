"use client";
import { useState, useEffect } from "react";
import Envelope from "./components/Envelope";
import Sparkles from "./components/Sparkles";
import Petals from "./components/Petals";
import CursorTrail from "./components/CursorTrail";
import MusicPlayer from "./components/MusicPlayer";
import ScrollSections from "./components/ScrollSections";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpened]);

  return (
    <main>
      {/* cinematic parallax background */}
      <div className="parallax-bg">
        <div className="bg-layer layer1"></div>
        <div className="bg-layer layer2"></div>
      </div>

      {/* ambient effects */}
      <Sparkles />
      <Petals />
      <CursorTrail />
      <MusicPlayer />

      {/* hero section — floating envelope */}
      <section className="hero-section">
        <div className="photo-bg">
          <img src="/bg.jpg" alt="Wedding background" className="section-photo" />
          <div className="photo-blur-overlay"></div>
        </div>
        <Envelope onOpen={() => setIsOpened(true)} />
      </section>

      {/* scrollable bride & groom sections */}
      <ScrollSections />
    </main>
  );
}
