"use client";

import { useEffect, useRef, useState } from "react";

type MusicPlayerProps = {
  startAt?: number; // waktu mulai dalam detik (optional)
};

export default function MusicPlayer({ startAt = 0 }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.currentTime = startAt;
        audioRef.current.play().catch((e) => {
          console.warn("Autoplay prevented:", e);
        });
        setHasInteracted(true);
      }
    };

    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, [hasInteracted, startAt]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !audio.muted;
      setIsMuted(audio.muted);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop muted={isMuted}>
        <source src="/music/backgroundmusic.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div
        onClick={toggleMute}
        className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-black/70 hover:bg-black/90 text-white text-xl flex items-center justify-center cursor-pointer shadow-lg transition"
        aria-label="Toggle Music"
      >
        {isMuted ? "🔇" : "🔊"}
      </div>
    </>
  );
}
