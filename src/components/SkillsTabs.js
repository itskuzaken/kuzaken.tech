"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";

const CATEGORIES = [
  {
    key: "web",
    label: "Web Development",
    tools: [
      { name: "React", subtitle: "Frontend", icon: "react.svg" },
      { name: "Next.js", subtitle: "Frontend / SSR", icon: "next.svg" },
      { name: "Tailwind CSS", subtitle: "Frontend", icon: "tailwindcss.svg" },
      { name: "HTML5", subtitle: "Frontend", icon: "html5.svg" },
      { name: "CSS3", subtitle: "Frontend", icon: "css3.svg" },
      { name: "JavaScript", subtitle: "Frontend", icon: "javascript.svg" },
      { name: "Node.js", subtitle: "Backend", icon: "nodejs.svg" },
      { name: "Express", subtitle: "Backend", icon: "express.svg" },
      { name: "MySQL", subtitle: "Database", icon: "mysql.svg" },
      { name: "Firebase", subtitle: "Backend / Hosting", icon: "firebase.svg" },
      { name: "Vercel", subtitle: "Deployment", icon: "vercel.svg" },
      { name: "Github", subtitle: "Version Control", icon: "github.svg" },
    ],
  },
  {
    key: "design",
    label: "Graphics & Layout Design",
    tools: [
      { name: "Photoshop", subtitle: "Design", icon: "adobe-photoshop.svg" },
      {
        name: "Illustrator",
        subtitle: "Design",
        icon: "adobe-illustrator.svg",
      },
      { name: "Figma", subtitle: "Design", icon: "figma.svg" },
      { name: "Canva", subtitle: "Design", icon: "canva.svg" },
    ],
  },
  {
    key: "broadcast",
    label: "Broadcast Operations",
    tools: [
      { name: "OBS Studio", subtitle: "Broadcasting", icon: "obsstudio.svg" },
      { name: "vMix", subtitle: "Broadcasting", icon: "vmix.svg" },
    ],
  },
];

export default function SkillsTabs() {
  const [active, setActive] = useState("web");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const tabsNavRef = useRef(null);
  const indicatorRef = useRef(null);
  const announcerRef = useRef(null);

  const activeCategory = useMemo(() => {
    return CATEGORIES.find((c) => c.key === active) ?? CATEGORIES[0];
  }, [active]);

  const activeIndex = useMemo(() => {
    return CATEGORIES.findIndex((c) => c.key === active);
  }, [active]);

  // Update sliding indicator position
  useEffect(() => {
    if (!tabsNavRef.current || !indicatorRef.current) return;

    const activeButton = tabsNavRef.current.querySelector(
      `#tab-${active}`
    );
    if (!activeButton) return;

    const navRect = tabsNavRef.current.getBoundingClientRect();
    const btnRect = activeButton.getBoundingClientRect();
    const left = btnRect.left - navRect.left + tabsNavRef.current.scrollLeft;
    const width = btnRect.width;

    indicatorRef.current.style.setProperty("--indicator-left", `${left}px`);
    indicatorRef.current.style.setProperty("--indicator-width", `${width}px`);
  }, [active]);

  // Handle tab change with transition
  const handleTabChange = (newKey) => {
    if (newKey === active) return;

    setIsTransitioning(true);
    setActive(newKey);

    // Announce to screen readers
    const newCategory = CATEGORIES.find((c) => c.key === newKey);
    if (announcerRef.current && newCategory) {
      announcerRef.current.textContent = `${newCategory.label} tab selected`;
    }

    // Reset transition state
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    let newIndex = activeIndex;

    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        newIndex = activeIndex > 0 ? activeIndex - 1 : CATEGORIES.length - 1;
        break;
      case "ArrowRight":
        e.preventDefault();
        newIndex = activeIndex < CATEGORIES.length - 1 ? activeIndex + 1 : 0;
        break;
      case "Home":
        e.preventDefault();
        newIndex = 0;
        break;
      case "End":
        e.preventDefault();
        newIndex = CATEGORIES.length - 1;
        break;
      default:
        return;
    }

    const newKey = CATEGORIES[newIndex].key;
    handleTabChange(newKey);

    // Focus the new tab
    const newButton = document.getElementById(`tab-${newKey}`);
    if (newButton) {
      newButton.focus();
      // Scroll into view if needed
      newButton.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  return (
    <div className="skills-tabs">
      <div className="tabs-nav-wrapper">
        <div
          ref={tabsNavRef}
          className="tabs-nav no-scrollbar -mx-2 flex gap-2 overflow-x-auto pb-2 md:pb-3 md:mx-0"
          role="tablist"
          aria-label="Skill categories"
          onKeyDown={handleKeyDown}
        >
          {CATEGORIES.map((cat) => {
            const isActive = cat.key === active;
            return (
              <button
                key={cat.key}
                id={`tab-${cat.key}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${cat.key}`}
                tabIndex={isActive ? 0 : -1}
                className={`tab-btn ${isActive ? "tab-btn--active" : ""}`}
                onClick={() => handleTabChange(cat.key)}
              >
                {cat.label}
              </button>
            );
          })}
          <div
            ref={indicatorRef}
            className="tab-indicator"
            aria-hidden="true"
          />
        </div>
        <div className="tabs-scroll-fade tabs-scroll-fade--left" aria-hidden="true" />
        <div className="tabs-scroll-fade tabs-scroll-fade--right" aria-hidden="true" />
      </div>

      {/* Screen reader announcements */}
      <div
        ref={announcerRef}
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      />

      <div className="tab-panels mt-4 md:mt-6">
        {CATEGORIES.map((cat, catIndex) => {
          const isActive = cat.key === active;
          return (
            <div
              key={cat.key}
              id={`panel-${cat.key}`}
              role="tabpanel"
              aria-labelledby={`tab-${cat.key}`}
              hidden={!isActive}
              className={`tab-panel ${isActive ? "is-active" : ""} ${isTransitioning ? "is-transitioning" : ""}`}
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.tools.map((tool, toolIndex) => (
                  <div
                    key={tool.name}
                    className="card card--accent tool-card"
                    aria-label={`${tool.name} - ${tool.subtitle}`}
                    role="group"
                    style={{
                      animationDelay: isActive ? `${toolIndex * 40}ms` : "0ms",
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-3 text-center md:text-left">
                      <div className="shrink-0 mx-auto md:mx-0">
                        <div className="tool-icon-wrapper">
                          <Image
                            src={`/tools-icons/${tool.icon}`}
                            alt={`${tool.name} icon`}
                            width={32}
                            height={32}
                            className="w-8 h-8 select-none"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-base md:text-lg">
                          {tool.name}
                        </div>
                        <div className="text-xs md:text-sm text-muted opacity-80">
                          {tool.subtitle}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
