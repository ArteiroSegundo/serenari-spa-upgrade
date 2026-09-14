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
 * The Serenari symbol used as texture: large, cropped by the section edge and very faint.
 * It is the real mark — cropped out of the brand lockup and painted with `currentColor`
 * through a mask — never a hand-drawn approximation and never a repeating wallpaper.
 */
export function ArchMark({ className }: { className?: string }) {
  return (
    <span
      className={["mark-watermark", className].filter(Boolean).join(" ")}
      aria-hidden="true"
    />
  );
}
