## kuzaken.tech — Personal Portfolio & E‑Portfolio (Next.js)

A modern, responsive personal portfolio for Ken Francen G. Baylon (KUZAKEN). Built with Next.js (App Router) and Tailwind CSS, it showcases skills, projects, resume, and contact information with light/dark themes, smooth interactions, and accessible design.

## Features

- Polished, responsive layout with sticky header and modern mobile navigation
- Light/Dark theme toggle with smooth, animated transitions
- Hero headline with typewriter effect
- Section reveal animations and smooth in-page anchor scrolling (header offset aware)
- Dotted background with subtle parallax motion on cursor; optional red background orbs
- Interactive tilt/glow effect on profile image
- Social icon buttons with card-like styling and red hover glow
- Skills section with Category Tabs (Web Development, Graphics & Layout Design, Broadcast Operations) and per-tool cards (icon, name, subtitle)
- Themed cards (transparent with red accent on hover)
- Accessible markup, keyboard-friendly tabs, and alt/aria labels

### Recent UI/UX improvements

- Mobile menu: full-width stacked links, generous tap targets, underline hover effect, edge-to-edge panel
- Overlay + scroll locking on mobile menu; header stays visible; focus trap and Escape-to-close
- Header: animated nav link underline, burger morph animation, refined theme toggle sizing
- Buttons: unified button styles (primary CTA, secondary) with micro-interactions and loading spinner for form submit
- Contact: consistent contact rows with inline icons, right chevrons, phone tel: link
- Footer: dynamic logo by theme (white on dark, black on light) + social links with icons and hover effects

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

## Configuration

- Social/profile links: update in `src/app/page.js` (hero socials), `src/components/Footer.js` (footer socials), and Contact section links in `src/app/page.js`.
- Phone number: update the `tel:` link and display text in the Contact section of `src/app/page.js`.
- Resume file: replace `/Ken-Baylon-Resume.pdf` under `public/` or update the link text accordingly.
- Logos: customize SVGs in `public/` (`KuzakenTech_White.svg`, `KuzakenTech_Black.svg`, `Kuzaken_Logo_White.svg`, `Kuzaken_Logo_Black.svg`).

## Usage

- Content: Update copy in `src/app/page.js` (sections: Home, About, Skills, Projects, Resume, Contact).
- Skills: Edit categories/tools in `src/components/SkillsTabs.js` (icon files in `public/tools-icons/`).
- Theme: Theme tokens and utilities live in `src/app/globals.css` and `src/components/ThemeProvider.js`.
- Header/Footer: Edit navigation and footer links in `src/components/Header.js` and `src/components/Footer.js`.
- Assets: Replace images/logos under `public/` as needed.

## Accessibility

- Semantic structure (header, nav, main, section, footer) and ARIA labels on interactive elements
- Mobile menu: focus is trapped while open; `aria-expanded`, `aria-controls`, and `role="dialog"` are used; Escape closes menu
- Keyboard navigation: visible focus styles; links and buttons have adequate hit areas (≥44px on mobile)

## Screenshots / Demo

> Add screenshots to `public/screenshots/` and reference them here, or include a live demo link if deployed (e.g., Vercel).

```markdown
![Home](public/screenshots/home.png)
![Skills](public/screenshots/skills.png)
```

Demo (optional)

- Live: https://your-demo-url.example (update if deployed)

## Deployment

- Vercel recommended: connect the repo and deploy. Analytics via `@vercel/analytics` is already integrated.
- For self-hosting, ensure Node.js 18/20 runtime and run `npm run build` then `npm start`.

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
