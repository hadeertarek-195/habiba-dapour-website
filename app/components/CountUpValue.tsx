"use client";

import { useEffect, useRef, useState } from "react";

type CountUpValueProps = {
  className?: string;
  durationMs?: number;
  end: number;
  format?: (value: number) => string;
  prefix?: string;
  start?: number;
  suffix?: string;
};

export default function CountUpValue({
  className,
  durationMs = 1100,
  end,
  format,
  prefix = "",
  start = 0,
  suffix = "",
}: CountUpValueProps) {
  const [value, setValue] = useState(end);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node || hasAnimated) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      window.requestAnimationFrame(() => {
        setValue(end);
        setHasAnimated(true);
      });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        observer.disconnect();
        setValue(start);
        window.requestAnimationFrame(() => {
          const startedAt = performance.now();

          function tick(now: number) {
            const progress = Math.min((now - startedAt) / durationMs, 1);
            const nextValue = Math.round(start + (end - start) * progress);

            setValue(nextValue);

            if (progress < 1) {
              window.requestAnimationFrame(tick);
              return;
            }

            setHasAnimated(true);
          }

          window.requestAnimationFrame(tick);
        });
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [durationMs, end, hasAnimated, start]);

  const renderedValue = format ? format(value) : value.toLocaleString("en-US");

  return (
    <span className={className} ref={ref}>
      {prefix}
      {renderedValue}
      {suffix}
    </span>
  );
}
