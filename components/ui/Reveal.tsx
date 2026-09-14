import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** "rise" fades and lifts; "mask" wipes the element open — used for photography. */
  variant?: "rise" | "mask";
  delay?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Server-rendered reveal marker. One shared observer in RevealObserver activates
 * every marker, keeping this primitive free of client-side state and hydration.
 * Reduced-motion users get the finished state immediately (handled in CSS),
 * and the <noscript> rule in the layout keeps content visible without JS.
 */
export default function Reveal({
  children,
  variant = "rise",
  delay = 0,
  as: Tag = "div",
  className,
}: RevealProps) {
  const classes = [variant === "mask" ? "reveal reveal--mask" : "reveal", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      className={classes}
      data-reveal="true"
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
