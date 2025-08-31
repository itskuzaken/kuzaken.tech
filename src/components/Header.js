"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

export default function Header() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const sectionsRef = useRef([]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route hash change (anchor nav)
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  // Observe sections to highlight active link
  useEffect(() => {
    const ids = [
      "#home",
      "#about",
      "#skills",
      "#projects",
      "#resume",
      "#contact",
    ];
    const els = ids.map((id) => document.querySelector(id)).filter(Boolean);
    sectionsRef.current = els;
    if (!els.length) return;

    // Scroll-based updater (robust for last section/contact)
    const updateByScroll = () => {
      const header = document.querySelector("header");
      const offset = (header ? header.offsetHeight : 72) + 16; // extra padding for clarity
      const y = window.scrollY + offset;
      let current = "#home";
      for (const el of els) {
        if (el.offsetTop <= y) current = `#${el.id}`;
      }
      setActive(current);
    };

    // Drive active state purely by scroll/resize for consistency (last section friendly)
    window.addEventListener("scroll", updateByScroll, { passive: true });
    window.addEventListener("resize", updateByScroll);
    updateByScroll();
    return () => {
      window.removeEventListener("scroll", updateByScroll);
      window.removeEventListener("resize", updateByScroll);
    };
  }, []);

  const logoSrc = useMemo(
    () =>
      theme === "light" ? "/KuzakenTech_Black.svg" : "/KuzakenTech_White.svg",
    [theme]
  );
  const toggleClass =
    theme === "light"
      ? "ml-4 inline-flex items-center gap-2 rounded-full border border-themic bg-[var(--background)] px-3 py-1.5 text-[var(--foreground)] hover:opacity-90 transition-colors"
      : "ml-4 inline-flex items-center gap-2 rounded-full border border-themic bg-soft px-3 py-1.5 text-white hover:opacity-90 transition-colors";

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur bg-header border-b border-themic"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="#home" className="text-white font-semibold tracking-tight">
          <Image
            src={logoSrc}
            alt="Kuzaken Logo"
            width={160}
            height={40}
            style={{ height: "auto" }}
            priority
          />
        </Link>
        {/* Desktop / Tablet nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-80">
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Resume", "#resume"],
            ["Contact", "#contact"],
          ].map(([label, href]) => {
            const isActive = active === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative transition-colors ${
                  isActive ? "text-[#c22126]" : "hover:text-[#c22126]"
                }`}
                onClick={() => setActive(href)}
              >
                <span>{label}</span>
                <span
                  aria-hidden
                  className={`absolute -bottom-1 left-0 h-[2px] w-full transition-opacity ${
                    isActive
                      ? "opacity-100 bg-[#c22126]"
                      : "opacity-0 bg-transparent"
                  }`}
                />
              </Link>
            );
          })}
          <button
            onClick={toggle}
            className={toggleClass}
            aria-label="Toggle theme"
          >
            <span className="inline-block w-4 text-center" aria-hidden>
              {theme === "dark" ? "🌙" : "☀️"}
            </span>
            <span className="text-xs">
              {theme === "dark" ? "Dark" : "Light"}
            </span>
          </button>
        </nav>

        {/* Mobile: burger button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[var(--foreground)] hover:bg-soft transition-colors"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {/* Burger icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="md:hidden">
          {/* Overlay */}
          <button
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
          />
          <div
            className="absolute right-4 left-4 mt-2 rounded-2xl border border-themic bg-header shadow-lg"
            role="menu"
          >
            <div className="px-5 py-4 flex items-center justify-between">
              <span className="text-sm text-muted-80">Navigate</span>
              <button
                className={toggleClass}
                onClick={toggle}
                aria-label="Toggle theme"
              >
                <span className="inline-block w-4 text-center" aria-hidden>
                  {theme === "dark" ? "🌙" : "☀️"}
                </span>
                <span className="text-xs">
                  {theme === "dark" ? "Dark" : "Light"}
                </span>
              </button>
            </div>
            <nav className="px-2 pb-3 text-sm text-muted-80">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Resume", "#resume"],
                ["Contact", "#contact"],
              ].map(([label, href]) => {
                const isActive = active === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`block rounded-xl px-4 py-3 transition-colors ${
                      isActive
                        ? "text-[#c22126]"
                        : "hover:bg-soft hover:text-[var(--foreground)]"
                    }`}
                    onClick={() => {
                      setActive(href);
                      setMenuOpen(false);
                    }}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
