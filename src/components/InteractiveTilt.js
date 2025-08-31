"use client";
import { useEffect, useMemo, useRef, useState } from "react";

export default function InteractiveTilt({
  className = "",
  children,
  maxTilt = 6,
  scale = 1.05,
  glow = true,
}) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const canHoverFine = window.matchMedia?.(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    let raf = 0;
    let targetRx = 0,
      targetRy = 0,
      targetScale = 1;
    let rx = 0,
      ry = 0,
      sc = 1;
    const ease = 0.12;

    const animate = () => {
      rx += (targetRx - rx) * ease;
      ry += (targetRy - ry) * ease;
      sc += (targetScale - sc) * ease;
      el.style.transform = `translate3d(0,0,0) rotateX(${rx.toFixed(
        2
      )}deg) rotateY(${ry.toFixed(2)}deg) scale(${sc.toFixed(3)})`;
      raf = requestAnimationFrame(animate);
    };

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const nx = (x / rect.width) * 2 - 1; // -1..1
      const ny = (y / rect.height) * 2 - 1;
      targetRy = -nx * maxTilt; // horizontal -> rotateY opposite
      targetRx = ny * maxTilt; // vertical -> rotateX
      targetScale = scale;
    };

    const reset = () => {
      targetRx = 0;
      targetRy = 0;
      targetScale = 1;
      setHovered(false);
    };

    // Desktop/hover devices: enable tilt
    if (canHoverFine) {
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseenter", () => {
        setHovered(true);
        targetScale = scale;
      });
      el.addEventListener("mouseleave", reset);
    } else {
      // Touch: small bounce on tap
      const onTouch = () => {
        el.classList.remove("tap-bounce");
        // Force restart animation
        // eslint-disable-next-line no-unused-expressions
        el.offsetWidth;
        el.classList.add("tap-bounce");
      };
      el.addEventListener("touchstart", onTouch, { passive: true });
    }

    raf = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(raf);
      el.style.transform = "";
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", () => {});
      el.removeEventListener("mouseleave", reset);
    };
  }, [maxTilt, scale]);

  const boxShadow = useMemo(() => {
    if (!glow || !hovered) return undefined;
    return "0 0 0 1px #c22126 inset, 0 12px 30px rgba(194,33,38,0.25)";
  }, [hovered, glow]);

  return (
    <div className="tilt-wrap">
      <div ref={ref} className={`tilt-item ${className}`} style={{ boxShadow }}>
        {children}
      </div>
    </div>
  );
}
