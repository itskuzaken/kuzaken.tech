## kuzaken.tech — Personal Portfolio & E‑Portfolio (Next.js)

A modern, responsive personal portfolio of Ken Francen G. Baylon (KUZAKEN). Built with Next.js (App Router) and Tailwind CSS, it showcases skills, projects, resume, and contact information with light/dark themes, smooth interactions, and accessible design.

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
- 
## Contributors

- Ken Francen G. Baylon (KUZAKEN) — https://github.com/itskuzaken

## License

This repository is currently unlicensed (All rights reserved). If you intend to open-source it, consider adding a license file (e.g., MIT) and updating this section.
