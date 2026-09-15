"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "@/components/ui/Icons";

const DESKTOP = "(min-width: 900px)";

type NetworkInformation = {
  saveData?: boolean;
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g";
};

/** True when the visitor asked for less data, or is on a connection too slow to
 * justify an autoplaying loop — the poster stands in for the video in both cases. */
function prefersLessData(): boolean {
  const nav = navigator as Navigator & { connection?: NetworkInformation };
  const connection = nav.connection;
  if (!connection) return false;
  return connection.saveData === true || connection.effectiveType === "slow-2g" || connection.effectiveType === "2g";
}

/**
 * The breakpoint is resolved in JS because `media` on <source> only has meaning
 * inside <picture>: a <video> picks the first source it can decode, so the
 * desktop cut would reach phones no matter what the attribute said.
 */
export default function HeroVideo() {
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [dataAllowed, setDataAllowed] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  // hasStarted drives the fade-in from poster to video, once, the first time a
  // frame actually decodes. paused tracks the current play state for the toggle —
  // kept separate so pausing doesn't also hide the control that resumes it.
  const [hasStarted, setHasStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setDataAllowed(!prefersLessData());

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia(DESKTOP);

    const syncPreference = () => {
      setMotionAllowed(!motion.matches);
      setIsDesktop(wide.matches);
      if (motion.matches) setHasStarted(false);
    };

    syncPreference();
    motion.addEventListener("change", syncPreference);
    wide.addEventListener("change", syncPreference);
    return () => {
      motion.removeEventListener("change", syncPreference);
      wide.removeEventListener("change", syncPreference);
    };
  }, []);

  const variant = isDesktop ? "desktop" : "mobile";
  const showVideo = motionAllowed && dataAllowed;

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
  }

  return (
    <>
      <picture className="hero__poster">
        <source
          media={DESKTOP}
          srcSet="/media/hero/serenari-hero-desktop-poster.webp"
          width={540}
          height={720}
        />
        <img
          src="/media/hero/serenari-hero-mobile-poster.webp"
          alt=""
          width={576}
          height={720}
          fetchPriority="high"
        />
      </picture>

      {showVideo ? (
        <video
          key={variant}
          ref={videoRef}
          className="hero__video"
          data-playing={hasStarted}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          disablePictureInPicture
          onPlaying={() => {
            setHasStarted(true);
            setPaused(false);
          }}
          onPause={() => setPaused(true)}
          onError={() => setHasStarted(false)}
        >
          <source src={`/media/hero/serenari-hero-${variant}.webm`} type="video/webm" />
          <source src={`/media/hero/serenari-hero-${variant}.mp4`} type="video/mp4" />
        </video>
      ) : null}

      {showVideo && hasStarted ? (
        <button
          type="button"
          className="hero__video-toggle"
          onClick={toggle}
          aria-label={paused ? "Reproduzir vídeo de fundo" : "Pausar vídeo de fundo"}
        >
          {paused ? <Play size={14} /> : <Pause size={14} />}
        </button>
      ) : null}
    </>
  );
}
