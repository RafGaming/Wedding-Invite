"use client";
import { useEffect, useRef, useState } from "react";

const FADE_DURATION_MS = 1500;
const TARGET_VOLUME = 1.0;
const FADE_STEPS = 30;

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const clearFade = () => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }
  };

  const fadeIn = () => {
    const audio = audioRef.current;
    if (!audio) return;
    clearFade();
    audio.volume = 0;
    audio.play().catch(() => {});
    setPlaying(true);
    const step = TARGET_VOLUME / FADE_STEPS;
    const interval = FADE_DURATION_MS / FADE_STEPS;
    fadeIntervalRef.current = setInterval(() => {
      if (audio.volume + step >= TARGET_VOLUME) {
        audio.volume = TARGET_VOLUME;
        clearFade();
      } else {
        audio.volume += step;
      }
    }, interval);
  };

  const fadeOut = () => {
    const audio = audioRef.current;
    if (!audio) return;
    clearFade();
    const step = audio.volume / FADE_STEPS;
    const interval = FADE_DURATION_MS / FADE_STEPS;
    fadeIntervalRef.current = setInterval(() => {
      if (audio.volume - step <= 0) {
        audio.volume = 0;
        audio.pause();
        setPlaying(false);
        clearFade();
      } else {
        audio.volume -= step;
      }
    }, interval);
  };

  useEffect(() => {
    const playOnFirstClick = () => fadeIn();
    document.addEventListener("click", playOnFirstClick, { once: true });
    return () => document.removeEventListener("click", playOnFirstClick);
  }, []);

  const handleToggle = () => {
    if (playing) {
      fadeOut();
    } else {
      fadeIn();
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/ambient.mp3" loop />
      <button
        className="music-toggle"
        onClick={handleToggle}
        aria-label={playing ? "Pause music" : "Play music"}
        title={playing ? "Pause music" : "Play music"}
      >
        {playing ? "♫" : "♪"}
      </button>
    </>
  );
}
