"use client";
import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    // Smooth scroll for anchor clicks with header offset and section transition
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();

      // Transition out current section (the one mostly in view)
      const allSections = Array.from(
        document.querySelectorAll("main > section")
      );
      const current = allSections.reduce((best, sec) => {
        const r = sec.getBoundingClientRect();
        const visible = Math.max(
          0,
          Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0)
        );
        return !best || visible > best.visible ? { el: sec, visible } : best;
      }, null)?.el;
      const container = target.closest("section") || target;
      [current, container].forEach(
        (el) => el && el.classList.add("section-transition")
      );
      if (current && current !== container) {
        current.classList.add("section-leave");
        setTimeout(() => current.classList.remove("section-leave"), 400);
      }

      const header = document.querySelector("header");
      const offset = header ? header.offsetHeight + 8 : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.history.pushState({}, "", href);
      window.scrollTo({ top, behavior: "smooth" });

      // Transition in target section after a small delay
      setTimeout(() => {
        container.classList.add("section-enter");
        // Force reflow to apply transition
        // eslint-disable-next-line no-unused-expressions
        container.offsetHeight;
        container.classList.remove("section-enter");
      }, 50);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    // Reveal sections and elements as they enter viewport
    const sections = Array.from(document.querySelectorAll("main > section"));
    const revealables = Array.from(
      document.querySelectorAll(".reveal,[data-reveal]")
    );

    // Initialize: sections default to reveal up; standalone revealables keep their own variant
    sections.forEach((s) => {
      s.classList.add("reveal");
      if (!s.hasAttribute("data-reveal")) s.setAttribute("data-reveal", "up");
    });

    const targets = [...new Set([...sections, ...revealables])];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          // Optional stagger within a container
          const stagger = el.getAttribute("data-stagger");
          if (stagger) {
            const items = el.querySelectorAll("[data-reveal-item]");
            items.forEach((it, i) => {
              it.classList.add("reveal");
              it.style.setProperty(
                "--rv-delay",
                `${i * parseInt(stagger, 10)}ms`
              );
              requestAnimationFrame(() => it.classList.add("reveal--visible"));
            });
          }
          el.classList.add("reveal--visible");
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    targets.forEach((t) => observer.observe(t));

    // Lightweight parallax for elements with data-parallax (small translate only)
    const parallaxEls = Array.from(
      document.querySelectorAll("[data-parallax]")
    );
    const onScroll = () => {
      const vh = window.innerHeight;
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-parallax")) || 0.1;
        const rect = el.getBoundingClientRect();
        const progress = Math.max(-1, Math.min(1, (rect.top - vh / 2) / vh));
        el.style.transform = `translate3d(0, ${progress * speed * 40}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    // One-time page load animations with optional stagger on hero
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const loaders = Array.from(document.querySelectorAll("[data-load]"));
    loaders.forEach((el) => {
      const delay = el.getAttribute("data-load-delay");
      if (delay) el.style.setProperty("--ld-delay", `${parseInt(delay, 10)}ms`);
      // double rAF to ensure styles are applied before toggling class
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (el.isConnected) el.classList.add("load-visible");
        });
      });
    });

    // Ensure it runs once per refresh only; listeners not needed
  }, []);

  return null;
}
