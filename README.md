# Gayatri Kancherla Ramesh | Portfolio

Premium 2026-style 3D interactive portfolio with motion design, skill logos, and performance safeguards. Built with Next.js, Tailwind, Framer Motion, and React Three Fiber.

**Live site:** [gayatri-kr.netlify.app](https://gayatri-kr.netlify.app)

live site: https://gayatri-kr.netlify.app

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Content

All data lives in **`/src/content/profile.ts`** — edit that file to update your info:

- **Skills** — `profile.skills` is an object of category → string[]. Add/remove skills per category.
- **Projects** — `profile.projects` array. Each project has `title`, `slug`, `dates`, `summary`, `tech`, `highlights`, `github`, `demo`.
- **Experience** — `profile.experience` array.
- **Education** — `profile.education` array. Each entry has `degree`, `institution`, `location`, `dates`, `notes`.
- **Certifications** — `profile.certifications` array. Each entry has `name`, `issuer`, `date`, `url`.
- **Publications** — `profile.publications` array.
- **Status pill** — `profile.statusPill` (e.g. `"Open to work"` or `"Building AI + Full Stack"`).

## Skill Icons

Icons are mapped in **`/src/lib/skillIcons.ts`**:

- **Canonical map** — `skillIconMap` maps normalized keys (e.g. `react`, `nodejs`) to Devicon CDN URLs.
- **Synonyms** — `synonyms` maps variants (e.g. `node` → `nodejs`, `js` → `javascript`, `ts` → `typescript`).
- **Fuzzy matching** — `normalize()` lowercases, removes punctuation/spaces. Matching checks exact key, synonym tokens, and substring matches.
- **Fallback** — If no match, `getSkillIcon()` returns a sparkle SVG. Use `hasRealIcon(skill)` to show a dot instead of the fallback when desired.

To add a new skill icon: add an entry to `skillIconMap` and optionally `synonyms`.

## 3D Parameters

Tunable in **`/src/lib/threeConfig.ts`** and **`/src/hooks/usePerformant.ts`**:

- **Hero stars** — `Hero3D.tsx` uses `starCount` from `usePerformantContext()` (desktop: 5000, mobile: 1500, reduced: 800).
- **Hero rings** — 4 torus meshes in `Hero3D.tsx` `Rings` component. Add/remove entries in the `rings` array.
- **Star dust** — `Hero3D.tsx` uses `dustCount` (desktop: 500, mobile: 150, reduced: 0).
- **DPR** — `usePerformant` sets `dpr: 1` on mobile, `1.5` on desktop for canvas resolution.

## Features

- **Motion system** — Centralized variants in `/src/lib/motion.ts` (container, stagger, fadeUp, fadeDown, fadeLeft, fadeRight, scaleIn, rotateIn, hoverLift, magneticHover).
- **Performance** — `PerformanceGate` via `usePerformantContext()`: respects `prefers-reduced-motion`, mobile, low memory; DPR 1.0 on mobile, 1.5 on desktop; lazy 3D with static fallback.
- **Reduce motion** — Toggle in Command Palette (⌘K) → Motion. Respects system preference by default.
- **Theme** — Dark mode by default (forced). Light/dark options available in Command Palette (⌘K).
- **Command palette** — ⌘K to jump to sections, open links, change theme, reduce motion.
