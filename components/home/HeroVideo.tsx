"use client";

import { useEffect, useState } from "react";

const DESKTOP = "(min-width: 900px)";

/**
 * The breakpoint is resolved in JS because `media` on <source> only has meaning
 * inside <picture>: a <video> picks the first source it can decode, so the
 * desktop cut would reach phones no matter what the attribute said.
 */
export default function HeroVideo() {
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia(DESKTOP);

    const syncPreference = () => {
      setMotionAllowed(!motion.matches);
      setIsDesktop(wide.matches);
      if (motion.matches) setIsPlaying(false);
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

      {motionAllowed ? (
        <video
          key={variant}
          className="hero__video"
          data-playing={isPlaying}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          disablePictureInPicture
          onLoadStart={() => setIsPlaying(false)}
          onPlaying={() => setIsPlaying(true)}
          onError={() => setIsPlaying(false)}
        >
          <source src={`/media/hero/serenari-hero-${variant}.webm`} type="video/webm" />
          <source src={`/media/hero/serenari-hero-${variant}.mp4`} type="video/mp4" />
        </video>
      ) : null}
    </>
  );
}
