"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

export default function Header() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-80">
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Resume", "#resume"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="hover:text-red-500 transition-colors"
            >
              {label}
            </Link>
          ))}
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
      </div>
    </header>
  );
}
