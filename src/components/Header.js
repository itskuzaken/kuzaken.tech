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
  const menuRef = useRef(null);
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
      const headerHeight = header?.offsetHeight ?? 72;
      const offset = headerHeight + 16; // extra padding for clarity
      const scrollPos = window.scrollY + offset;
      let current = "#home";
      for (const el of els) {
        if (!el) continue;
        if (el.offsetTop <= scrollPos) current = `#${el.id}`;
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

  // Keep a CSS var of header height for overlay/menu positioning
  useEffect(() => {
    const setHeaderVar = () => {
      const header = document.querySelector("header");
      if (header) {
        document.documentElement.style.setProperty(
          "--header-h",
          `${header.offsetHeight}px`
        );
      }
    };
    setHeaderVar();
    window.addEventListener("resize", setHeaderVar);
    window.addEventListener("orientationchange", setHeaderVar);
    return () => {
      window.removeEventListener("resize", setHeaderVar);
      window.removeEventListener("orientationchange", setHeaderVar);
    };
  }, []);

  // Scroll lock + basic focus trap when mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;

    const root = document.documentElement;
    const body = document.body;
    root.classList.add("scroll-lock");
    body.classList.add("scroll-lock");

    const menuEl = menuRef.current;
    let handleKeyDown;
    if (menuEl) {
      const focusables = menuEl.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      handleKeyDown = (e) => {
        if (e.key === "Tab") {
          if (!focusables.length) {
            e.preventDefault();
            return;
          }
          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        } else if (e.key === "Escape") {
          setMenuOpen(false);
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      // initial focus
      if (first) first.focus();
      else menuEl.focus();
    }

    return () => {
      root.classList.remove("scroll-lock");
      body.classList.remove("scroll-lock");
      if (handleKeyDown) document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const logoSrc = useMemo(
    () =>
      theme === "light" ? "/KuzakenTech_Black.svg" : "/KuzakenTech_White.svg",
    [theme]
  );
  // theme-toggle styles now come from globals.css

  return (
    <header
      className={`sticky top-0 z-[60] transition-all ${
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
            sizes="(max-width: 768px) 160px, 160px"
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
                className={`nav-link ${isActive ? "nav-link--active" : ""}`}
                onClick={() => setActive(href)}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{label}</span>
              </Link>
            );
          })}
          <button
            onClick={toggle}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            <svg
              className="icon icon-sun"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
            <svg
              className="icon icon-moon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </button>
        </nav>

        {/* Mobile: burger button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-[var(--foreground)] hover:bg-soft transition-all"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-haspopup="dialog"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`burger ${menuOpen ? "burger--open" : ""}`}
            aria-hidden
          >
            <span className="burger-line burger-line--top" />
            <span className="burger-line burger-line--mid" />
            <span className="burger-line burger-line--bot" />
          </span>
        </button>
      </div>

      {/* Mobile menu panel — header stays visible (sticky). We offset overlay/panel by --header-h. */}
      {menuOpen && (
        <div className="md:hidden">
          {/* Overlay */}
          <button
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="fixed left-0 right-0 bottom-0 z-[50] bg-black/45 backdrop-blur-sm"
            style={{ top: "var(--header-h, 64px)" }}
          />
          <div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-hidden={!menuOpen}
            tabIndex={-1}
            className="fixed left-0 right-0 z-[55] border-t border-themic bg-header mobile-panel max-h-[calc(100vh-var(--header-h,64px))] overflow-y-auto"
            style={{ top: "calc(var(--header-h, 64px) + 0.5rem)" }}
          >
            <div className="px-5 py-4 flex items-center justify-between">
              <span className="text-sm text-muted-80">Navigate</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggle}
                  className="theme-toggle"
                  aria-label="Toggle theme"
                >
                  <svg
                    className="icon icon-sun"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                  </svg>
                  <svg
                    className="icon icon-moon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                </button>
              </div>
            </div>
            <nav className="px-0 pb-2 text-base text-muted-80">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Resume", "#resume"],
                ["Contact", "#contact"],
              ].map(([label, href], idx) => {
                const isActive = active === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`mobile-link mobile-link-anim ${
                      isActive ? "mobile-link--active" : ""
                    }`}
                    style={{ animationDelay: `${idx * 40}ms` }}
                    onClick={() => {
                      setActive(href);
                      setMenuOpen(false);
                    }}
                    role="menuitem"
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
