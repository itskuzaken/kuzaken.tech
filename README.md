## kuzaken.tech — Personal Portfolio & E‑Portfolio (Next.js)

A modern, responsive personal portfolio for Ken Francen G. Baylon (KUZAKEN). Built with Next.js (App Router) and Tailwind CSS, it showcases skills, projects, resume, and contact information with light/dark themes, smooth interactions, and accessible design.

## Features

- Polished, responsive layout with sticky header and mobile navigation
- Light/Dark theme toggle with smooth, animated transitions
- Hero headline with typewriter effect
- Section reveal animations and smooth in-page anchor scrolling (header offset aware)
- Dotted background with subtle parallax motion on cursor; optional red background orbs
- Interactive tilt/glow effect on profile image
- Social icon buttons with card-like styling and red hover glow
- Skills section with Category Tabs (Web Development, Graphics & Layout Design, Broadcast Operations) and per-tool cards (icon, name, subtitle)
- Themed cards (transparent with red accent on hover)
- Accessible markup, keyboard-friendly tabs, and alt/aria labels

## Tech Stack

- Framework: Next.js 15 (App Router) with Turbopack
- UI: Tailwind CSS v4
- Language: JavaScript (React 19)
- Fonts: Montserrat (headings), Open Sans (body) via `next/font`
- State/Theme: Lightweight ThemeProvider using `localStorage` + CSS variables

## Installation & Setup

Prerequisites

- Node.js 18.18+ or 20+

Clone and install

```powershell
git clone https://github.com/itskuzaken/kuzaken.tech.git
cd kuzaken.tech
npm install
```

Run in development

```powershell
npm run dev
# Open http://localhost:3000
```

Build and start (production)

```powershell
npm run build
npm start
```

## Usage

- Content: Update copy in `src/app/page.js` (sections: Home, About, Skills, Projects, Resume, Contact).
- Skills: Edit categories/tools in `src/components/SkillsTabs.js` (icon files in `public/tools-icons/`).
- Theme: Theme tokens and utilities live in `src/app/globals.css` and `src/components/ThemeProvider.js`.
- Header/Footer: Edit navigation and footer links in `src/components/Header.js` and `src/components/Footer.js`.
- Assets: Replace images/logos under `public/` as needed.

## Screenshots / Demo

> Add screenshots to `public/screenshots/` and reference them here, or include a live demo link if deployed (e.g., Vercel).

```markdown
![Home](public/screenshots/home.png)
![Skills](public/screenshots/skills.png)
```

Demo (optional)

- Live: https://your-demo-url.example (update if deployed)

## Project Structure

```text
.
├─ public/
│  ├─ tools-icons/            # SVG icons for tools (React, Tailwind, Node, etc.)
│  ├─ social-icons/           # Social media SVG icons
│  └─ ...                     # Logos, favicon, images
├─ src/
│  ├─ app/
│  │  ├─ layout.js            # Root layout with ThemeProvider, Header, Footer
│  │  ├─ page.js              # Portfolio sections (Home, About, Skills, Projects, Resume, Contact)
│  │  └─ globals.css          # Theme tokens, utilities, animations, card styles
│  └─ components/
│     ├─ Header.js            # Sticky header, active link detection, theme toggle
│     ├─ Footer.js            # Themed footer
│     ├─ ThemeProvider.js     # Theme context + localStorage persistence
│     ├─ Typewriter.js        # Typewriter headline effect
│     ├─ ScrollEffects.js     # Smooth anchor scroll + section reveal animations
│     ├─ BackgroundOrbs.js    # Optional blurred red orbs + dots parallax control
│     ├─ InteractiveTilt.js   # Hover tilt + glow effect for images/cards
│     └─ SkillsTabs.js        # Category Tabs for Skills with tool cards
├─ package.json               # Scripts (dev/build/start) using Turbopack
└─ next.config.js             # Next.js configuration (incl. outputFileTracingRoot)
```

## Contributors

- Ken Francen G. Baylon (KUZAKEN) — https://github.com/itskuzaken

## License

This repository is currently unlicensed (All rights reserved). If you intend to open-source it, consider adding a license file (e.g., MIT) and updating this section.
