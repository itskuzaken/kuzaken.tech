"use client";
import { useEffect, useRef } from "react";

export default function BackgroundOrbs() {
  useEffect(() => {
    // Apply parallax to dotted background (kb-bg) via CSS variables
    const dotted = document.querySelector('.kb-bg') || document.body;
  if (!dotted) return;

  // Enable only on hover-capable fine pointers (desktop, laptops with mouse)
  const canHoverFine = window.matchMedia?.("(hover: hover) and (pointer: fine)").matches;
  if (!canHoverFine) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
  const maxShiftX = 28; // px, still subtle but more noticeable
  const maxShiftY = 18; // px
  const ease = 0.12; // smoothing factor

    const animate = () => {
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
  dotted.style.setProperty('--dots-x', `${currentX.toFixed(2)}px`);
  dotted.style.setProperty('--dots-y', `${currentY.toFixed(2)}px`);
  // Also set on html as fallback in some UA computations
  document.documentElement.style.setProperty('--dots-x', `${currentX.toFixed(2)}px`);
  document.documentElement.style.setProperty('--dots-y', `${currentY.toFixed(2)}px`);
      raf = requestAnimationFrame(animate);
    };

    const onMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const nx = (e.clientX / w) * 2 - 1; // -1 .. 1
      const ny = (e.clientY / h) * 2 - 1;
      // Move opposite to cursor for depth
      targetX = -nx * maxShiftX;
      targetY = -ny * maxShiftY;
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave, { passive: true });
    document.addEventListener("mouseout", (e) => {
      if (!e.relatedTarget && !e.toElement) onLeave();
    });
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
  dotted.style.removeProperty('--dots-x');
  dotted.style.removeProperty('--dots-y');
  document.documentElement.style.removeProperty('--dots-x');
  document.documentElement.style.removeProperty('--dots-y');
    };
  }, []);

  return (
    <div className="kb-orbs" aria-hidden="true">
      <span className="orb orb--sm" />
      <span className="orb orb--md" />
      <span className="orb orb--lg" />
    </div>
  );
}
