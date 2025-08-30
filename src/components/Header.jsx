"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "backdrop-blur bg-black/40 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="#home" className="text-white font-semibold tracking-tight">
          Ken Baylon
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Resume", "#resume"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-white transition-colors">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
