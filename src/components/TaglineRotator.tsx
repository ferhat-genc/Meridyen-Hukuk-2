"use client";

import { useEffect, useState } from "react";
import { heroTaglines } from "@/lib/data";

export default function TaglineRotator() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % heroTaglines.length);
        setVisible(true);
      }, 300);
    }, 4500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 flex max-w-xl items-start gap-4">
      <span className="mt-1 shrink-0 font-mono text-xs text-gold-300">
        0{index + 1}/0{heroTaglines.length}
      </span>
      <p
        className={`text-base leading-relaxed text-ink-200 transition-opacity duration-300 sm:text-lg ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {heroTaglines[index]}
      </p>
    </div>
  );
}
