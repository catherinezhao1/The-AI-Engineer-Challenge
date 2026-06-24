"use client";

import { useEffect, useRef } from "react";

/** Characters used for the falling Matrix rain effect. */
const MATRIX_CHARS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface MatrixRainProps {
  /** Rain opacity from 0 (invisible) to 1 (full). */
  opacity?: number;
}

/**
 * Full-screen canvas animation of cascading green characters,
 * inspired by the Matrix digital rain.
 */
export default function MatrixRain({ opacity = 0.18 }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const fontSize = 14;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () =>
        Math.floor(Math.random() * (canvas.height / fontSize))
      );
    };

    const draw = () => {
      ctx.fillStyle = "rgba(2, 10, 2, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = "14px JetBrains Mono, monospace";

      for (let i = 0; i < drops.length; i++) {
        const char =
          MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        const x = i * 14;
        const y = drops[i] * 14;

        const brightness = Math.random();
        ctx.fillStyle =
          brightness > 0.97
            ? "#ffffff"
            : brightness > 0.85
              ? "#39ff14"
              : "#00b32d";

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        opacity,
        pointerEvents: "none",
      }}
    />
  );
}
