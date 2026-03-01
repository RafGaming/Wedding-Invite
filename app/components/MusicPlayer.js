"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const FADE_DURATION_MS = 2000;
const FADE_STEPS = 40;
const TARGET_VOLUME = 0.6;

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const fadeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  const fadeIn = useCallback((audio) => {
    if (fadeRef.current) clearInterval(fadeRef.current);
    audio.volume = 0;
    audio.play().catch(() => {});
    const step = TARGET_VOLUME / FADE_STEPS;
    const interval = FADE_DURATION_MS / FADE_STEPS;
    fadeRef.current = setInterval(() => {
      const next = Math.min(audio.volume + step, TARGET_VOLUME);
      audio.volume = next;
      if (next >= TARGET_VOLUME) clearInterval(fadeRef.current);
    }, interval);
  }, []);

  const fadeOut = useCallback((audio) => {
    if (fadeRef.current) clearInterval(fadeRef.current);
    const step = TARGET_VOLUME / FADE_STEPS;
    const interval = FADE_DURATION_MS / FADE_STEPS;
    fadeRef.current = setInterval(() => {
      const next = Math.max(audio.volume - step, 0);
      audio.volume = next;
      if (next <= 0) {
        clearInterval(fadeRef.current);
        audio.pause();
      }
    }, interval);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = () => {
      if (!started) {
        setStarted(true);
        setIsPlaying(true);
        fadeIn(audio);
      }
    };

    document.addEventListener("click", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
      if (fadeRef.current) clearInterval(fadeRef.current);
    };
  }, [fadeIn, started]);

  const handleToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      setIsPlaying(false);
      fadeOut(audio);
    } else {
      setStarted(true);
      setIsPlaying(true);
      fadeIn(audio);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/ambient.mp3" loop></audio>
      <button
        className="music-toggle-btn"
        onClick={handleToggle}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        title={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? "♫" : "♪"}
      </button>
    </>
  );
}
