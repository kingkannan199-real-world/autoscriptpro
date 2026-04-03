# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

There are no test commands configured.

## Architecture Overview

Single-page Next.js 16 App Router portfolio site for an AI/automation agency. All content lives on the home route (`src/app/page.tsx`), with sections rendered after a cinematic 3D intro sequence completes.

### Page Initialization Flow

`page.tsx` controls a `showIntro` boolean. `CinematicIntro.tsx` renders a photorealistic 3D MacBook model (GLTF from `public/macbook_pro_13_inch_2020/scene.gltf`) using React Three Fiber. When the intro animation finishes, all page sections mount. This intro state is the entry point — modify `page.tsx` to add/remove/reorder sections.

### Component Patterns

- All components are `"use client"` — no server components beyond layout/page.
- State is local only (useState/useRef/useEffect). No global state management.
- Animations use **Framer Motion** variants with `whileInView` + `once: true` for scroll-triggered reveals, and spring easing `[0.16, 1, 0.3, 1]` for physics feel.
- **Spotlight effect:** `SpotlightCard.tsx` tracks mouse proximity via a global `mousemove` listener and applies a conic-gradient border. Wrap any card in `<SpotlightCard>` to get the effect.
- **Magnetic buttons:** `MagneticButton.tsx` offsets its position toward the cursor within a defined radius. Use for primary CTAs.
- **Canvas background:** `AutomationBackground.tsx` renders a particle-grid animation on a `<canvas>` scaled to `devicePixelRatio`.

### Navigation

Anchor-based single-page navigation (`#services`, `#process`, etc.). No Next.js routing pages. The `Navbar.tsx` links use smooth-scroll hash hrefs.

### Lead Capture / API

`Contact.tsx` POSTs form data to a hardcoded Google Apps Script URL with `mode: "no-cors"`. No backend, no env vars, no database — leads go to Google Sheets. The Apps Script URL is inline in that component.

## Path Alias

`@/*` resolves to the project root. Use `@/src/components/Foo` for imports.

## Styling

Tailwind CSS 4 (utility-first). Custom keyframes and CSS variables are defined in `src/app/globals.css`. Responsive breakpoints use standard Tailwind `md:` prefixes. Interactive sections use `cursor-none` with a custom SVG cursor overlay provided by `SmoothCursor.tsx`.

## 3D Assets

The MacBook GLTF model and binary/texture files live in `public/macbook_pro_13_inch_2020/`. The Three.js scene in `CinematicIntro.tsx` uses `@react-three/drei` helpers (`useGLTF`, `Environment`, `ContactShadows`). When editing the intro, be aware that `framer-motion-3d` drives the laptop open/close animation separate from the camera dolly.
