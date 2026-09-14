/**
 * Brand primitives.
 *
 * The wordmark is the real Serenari lockup, painted with `currentColor` through a
 * CSS mask so a single white asset works on both the light header and the dark footer.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={["logo", className].filter(Boolean).join(" ")} role="img" aria-label="Serenari Spa" />
  );
}

/**
 * A quiet reinterpretation of the Serenari symbol: the arch that frames the monogram,
 * drawn as a double outline with the four-point sparkle. Used large, cropped and faint —
 * as texture at the edge of a section, never as a repeating wallpaper.
 */
export function ArchMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 400"
      className={["mark-watermark", className].filter(Boolean).join(" ")}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="8" y="8" width="224" height="384" rx="112" strokeWidth="2" />
      <rect x="22" y="22" width="196" height="356" rx="98" strokeWidth="2" />
      <path
        d="M120 96c24 0 42 16 42 38 0 18-12 30-26 40-22 16-42 30-42 54 0 26 22 44 50 44 30 0 52-20 52-48 0-34-30-52-64-64-22-8-38-16-38-32"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M120 40c2 12 8 18 22 22-14 4-20 10-22 22-2-12-8-18-22-22 14-4 20-10 22-22Z" strokeWidth="2" />
    </svg>
  );
}
