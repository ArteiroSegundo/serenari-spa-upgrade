"use client";

import { useEffect, useState } from "react";

export default function HeroVideo() {
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => {
      setMotionAllowed(!media.matches);
      if (media.matches) setIsPlaying(false);
    };

    syncPreference();
    media.addEventListener("change", syncPreference);
    return () => media.removeEventListener("change", syncPreference);
  }, []);

  return (
    <>
      <picture className="hero__poster">
        <source media="(min-width: 900px)" srcSet="/media/hero/serenari-hero-desktop-poster.webp" />
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
          onPlaying={() => setIsPlaying(true)}
          onError={() => setIsPlaying(false)}
        >
          <source
            media="(min-width: 900px)"
            src="/media/hero/serenari-hero-desktop.webm"
            type="video/webm"
          />
          <source
            media="(min-width: 900px)"
            src="/media/hero/serenari-hero-desktop.mp4"
            type="video/mp4"
          />
          <source
            media="(max-width: 899px)"
            src="/media/hero/serenari-hero-mobile.webm"
            type="video/webm"
          />
          <source
            media="(max-width: 899px)"
            src="/media/hero/serenari-hero-mobile.mp4"
            type="video/mp4"
          />
        </video>
      ) : null}
    </>
  );
}
