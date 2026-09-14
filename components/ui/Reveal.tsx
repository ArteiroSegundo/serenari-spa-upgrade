"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** "rise" fades and lifts; "mask" wipes the element open — used for photography. */
  variant?: "rise" | "mask";
  delay?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Scroll-triggered reveal built on one IntersectionObserver per element.
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
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  const classes = [variant === "mask" ? "reveal reveal--mask" : "reveal", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      className={classes}
      data-visible={visible ? "true" : "false"}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
