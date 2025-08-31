"use client";

import { useState, useMemo } from "react";
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
      { name: "Railway", subtitle: "Deployment", icon: "railway.svg" },
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
      { name: "OBS Studio", subtitle: "Broadcasting", icon: "obs-studio.svg" },
      { name: "vMix", subtitle: "Broadcasting", icon: "vmix.svg" },
      { name: "Streamlabs", subtitle: "Broadcasting", icon: "streamlabs.svg" },
    ],
  },
];

export default function SkillsTabs() {
  const [active, setActive] = useState("web");

  const activeCategory = useMemo(() => {
    return CATEGORIES.find((c) => c.key === active) ?? CATEGORIES[0];
  }, [active]);

  return (
    <div className="skills-tabs">
      <div
        className="tabs-nav no-scrollbar -mx-2 flex gap-2 overflow-x-auto pb-2 md:pb-3 md:mx-0"
        role="tablist"
        aria-label="Skill categories"
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
              onClick={() => setActive(cat.key)}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div className="tab-panels mt-4 md:mt-6">
        {CATEGORIES.map((cat) => {
          const isActive = cat.key === active;
          return (
            <div
              key={cat.key}
              id={`panel-${cat.key}`}
              role="tabpanel"
              aria-labelledby={`tab-${cat.key}`}
              hidden={!isActive}
              className={`tab-panel ${isActive ? "is-active" : ""}`}
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="card card--accent tool-card"
                    aria-label={`${tool.name} - ${tool.subtitle}`}
                    role="group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-3 text-center md:text-left">
                      <div className="shrink-0 mx-auto md:mx-0">
                        <Image
                          src={`/tools-icons/${tool.icon}`}
                          alt={`${tool.name} icon`}
                          width={32}
                          height={32}
                          className="w-8 h-8 select-none"
                        />
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
