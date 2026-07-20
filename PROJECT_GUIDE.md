# PROJECT_GUIDE.md

A complete developer's guide to this project — a **premium bilingual (Arabic RTL / French LTR) portfolio website** built with **React 19 + TanStack Start (Vite) + Tailwind CSS v4 + Framer Motion + shadcn/ui**.

This guide assumes you did not build the project yourself. It walks every folder, every important file, the runtime architecture, and the common tasks you'll actually do day-to-day.

---

## 1. Folder Tree (Root)

```
/
├── public/                  # Static assets served as-is (favicon, robots, etc.)
├── src/
│   ├── components/
│   │   ├── site/            # Page sections (Hero, Navbar, Portfolio, ...)
│   │   └── ui/              # shadcn/ui primitives (Button, Card, Accordion, ...)
│   ├── hooks/               # Reusable React hooks (use-mobile, ...)
│   ├── lib/                 # App logic: i18n, projects data, utils, error reporting
│   ├── routes/              # File-based routes (TanStack Router)
│   │   ├── __root.tsx       # App shell: <html>, <head>, providers, error/404
│   │   └── index.tsx        # Home page "/" — assembles all sections
│   ├── routeTree.gen.ts     # AUTO-GENERATED. Never edit.
│   ├── router.tsx           # Router factory (QueryClient + routeTree)
│   ├── server.ts            # SSR entry (Cloudflare Worker)
│   ├── start.ts             # Client entry / middleware
│   └── styles.css           # Tailwind v4 theme, tokens, global CSS
├── components.json          # shadcn/ui config
├── tsconfig.json            # TypeScript config (strict, @/* alias)
├── vite.config.ts           # Vite config (uses @lovable.dev preset)
├── eslint.config.js         # Lint rules
├── package.json             # Dependencies & scripts
└── PROJECT_GUIDE.md         # This file
```

There is **no** `pages/`, `contexts/`, `types/`, `utils/`, `assets/`, or `styles/` folder. This project keeps things flat: contexts live in `src/lib/`, types live inside the file that owns them, and the only stylesheet is `src/styles.css`.

---

## 2. Folder-by-Folder Reference

### `public/`
- **Purpose:** Static files served at the site root, untouched by the build.
- **Contains:** `favicon.ico` (and anything else you drop in — `robots.txt`, images referenced by absolute URL, etc.).
- **When used:** Any request for `/favicon.ico`, `/robots.txt`, `/my-image.png` reads from here.
- **Depends on:** Nothing imports it — files are referenced by URL string.
- **Edit?** ✅ Safe. Add/replace assets freely.

### `src/`
All application source code. The build entry points (`server.ts`, `start.ts`) and the router (`router.tsx`) live directly at the top of this folder.

### `src/routes/`
- **Purpose:** File-based routing. Every `.tsx` file here becomes a URL.
- **Contains:**
  - `__root.tsx` — the app shell. Renders `<html>`, `<head>` (via `HeadContent`), wraps everything in `QueryClientProvider`, defines the 404 and error screens, sets sitewide SEO metadata + Google Fonts + JSON-LD.
  - `index.tsx` — the home page. Wraps the site in `I18nProvider` and mounts every section in order (Navbar → Hero → TrustedTech → Services → Portfolio → WhyChooseUs → Process → Testimonials → About → Pricing → FAQ → Contact → Footer + floating widgets).
  - `README.md` — routing conventions cheat sheet.
- **When used:** On every navigation. TanStack Router matches URLs against filenames.
- **Depends on:** `src/router.tsx`, `src/routeTree.gen.ts`, `src/lib/*`, `src/components/**`.
- **Edit?** ✅ `index.tsx` and `__root.tsx` — yes, carefully. Never touch `routeTree.gen.ts`.

### `src/components/site/`
- **Purpose:** All the visual sections of the portfolio. One component = one section.
- **Contains:** `Navbar`, `Hero`, `TrustedTech`, `Services`, `Portfolio`, `WhyChooseUs`, `Process`, `Testimonials`, `About`, `Pricing`, `FAQ`, `Contact`, `Footer`, plus utilities `AnimatedBackground`, `ScrollProgress`, `BackToTop`, `WhatsAppButton`, `LanguageSwitcher`, `SectionHeader`.
- **Why it exists:** Keeps the home page (`routes/index.tsx`) tiny and readable. Each section is independently editable.
- **Depends on:** `@/lib/i18n` (for `useI18n()` / `t()`), `@/components/ui/*` (buttons, cards…), `framer-motion`, `lucide-react`.
- **Edit?** ✅ This is where **90% of your edits happen**.

### `src/components/ui/`
- **Purpose:** shadcn/ui primitives — accessible, unstyled-but-themed building blocks (Button, Card, Accordion, Dialog, Input, Sonner toaster, …).
- **Why it exists:** These are copy-pasted into your repo so you own them. They read tokens from `src/styles.css`.
- **Depends on:** Radix UI packages, `class-variance-authority`, `@/lib/utils` (the `cn()` helper).
- **Edit?** ⚠️ Only if you need to customize a primitive globally. Prefer wrapping them in `site/` components instead.

### `src/hooks/`
- **Purpose:** Reusable React hooks.
- **Contains:** `use-mobile.tsx` (viewport breakpoint detection).
- **Edit?** ✅ Add new hooks here.

### `src/lib/`
- **Purpose:** Non-UI application logic and shared modules.
- **Contains:**
  - `i18n.tsx` — **the translation engine.** Exports `I18nProvider`, `useI18n()`, and the `translations` dictionary for `ar` and `fr`. Sets `<html lang dir>` automatically and persists the choice in `localStorage`.
  - `projects.ts` — **the portfolio data.** Array of `Project` objects (title/description in `ar` + `fr`, cover image URL, category, tech stack, links). Consumed by `Portfolio.tsx`.
  - `utils.ts` — `cn()` helper (Tailwind class merger). Imported by nearly every UI component.
  - `error-capture.ts`, `error-page.ts`, `lovable-error-reporting.ts` — Lovable platform error plumbing. **Do not touch.**
- **Edit?** ✅ `i18n.tsx`, `projects.ts`, `utils.ts`. ❌ The three `error-*` files.

### `src/styles.css`
- **Purpose:** The **only** stylesheet. Defines Tailwind v4 `@theme`, color tokens (OKLCH), the glassmorphism utility, blue-gradient tokens, dark theme, background patterns.
- **Edit?** ✅ For theme-wide color / spacing / font changes.

### Root files
| File | Purpose | Edit? |
| --- | --- | --- |
| `vite.config.ts` | Vite + TanStack Start build config (uses `@lovable.dev/vite-tanstack-config` preset). | ⚠️ Rarely. |
| `tsconfig.json` | TypeScript strict mode + `@/*` alias → `src/*`. | ⚠️ Rarely. |
| `components.json` | shadcn/ui CLI config. | ❌ Almost never. |
| `eslint.config.js` | Lint rules. | ⚠️ Rarely. |
| `package.json` | Dependencies + scripts. | ✅ To add packages. |
| `.prettierrc`, `.prettierignore` | Format config. | ⚠️ Rarely. |
| `AGENTS.md` | Notes for AI agents. | ❌ Leave alone. |

---

## 3. Application Architecture

### How the app starts
1. **Vite** builds the app using `vite.config.ts` (TanStack Start plugin auto-wires SSR).
2. Server requests hit **`src/server.ts`** (SSR entry, runs on a Cloudflare Worker at deploy).
3. In the browser, **`src/start.ts`** hydrates the client.
4. Both entries call **`getRouter()`** from `src/router.tsx`, which creates a `QueryClient`, loads `routeTree.gen.ts`, and returns a configured router.
5. The router matches the URL to a file in `src/routes/` and renders it.

### Entry point summary
- **Build config:** `vite.config.ts`
- **SSR entry:** `src/server.ts`
- **Client entry:** `src/start.ts`
- **Router factory:** `src/router.tsx`
- **App shell:** `src/routes/__root.tsx`
- **Home page:** `src/routes/index.tsx`

### Routing
File-based via TanStack Router. `src/routeTree.gen.ts` is generated from filenames in `src/routes/` at build/dev time. Right now the tree is:
```
__root.tsx  (shell — <html>, providers, 404/error boundaries)
└── index.tsx  → "/"
```
To add `/about`, create `src/routes/about.tsx` — the tree regenerates automatically.

### How pages are loaded
- `__root.tsx` renders `<Outlet />` inside `QueryClientProvider`.
- The matched child route renders in place of the Outlet.
- Currently there's only one page: `index.tsx`, which assembles every section.

### How components communicate
- **Language / RTL:** via React Context (`I18nProvider` in `src/lib/i18n.tsx`). Any component calls `const { t, lang, dir, setLang } = useI18n()`.
- **Data (projects):** imported directly from `src/lib/projects.ts` — no fetching, no state.
- **Toasts:** `sonner` toaster is mounted once in `index.tsx`; components call `toast(...)`.
- **No global store / Redux / Zustand** — the site is presentational; local `useState` where needed.

### Data flow
```
src/lib/projects.ts  ──▶  Portfolio.tsx  ──▶  rendered cards
src/lib/i18n.tsx     ──▶  useI18n()      ──▶  every section (labels, dir)
```

### State management
- **Language:** context in `i18n.tsx`, persisted in `localStorage` under key `"lang"`.
- **UI state** (menu open, active filter, form fields): plain `useState` inside each component.
- **Server state:** `@tanstack/react-query` is installed and its `QueryClient` is wired up — but not yet used (no API calls). Ready if you need it.

### Translations (AR / FR)
All strings live in **one file: `src/lib/i18n.tsx`**, inside the `translations` object with two keys: `ar` and `fr`.

```ts
// Usage in any component:
import { useI18n } from "@/lib/i18n";
const { t, lang, dir } = useI18n();
return <h1>{t("hero.title")}</h1>;
```

Switching language calls `setLang("ar" | "fr")`. That:
1. Updates React state → all `t()` calls re-render.
2. Writes to `localStorage`.
3. Sets `<html lang="…" dir="rtl|ltr">` — Tailwind's logical properties (`ps-*`, `pe-*`, `start`, `end`) flip automatically. No page reload.

### Animations
All animations use **Framer Motion** (`motion.*`, `AnimatePresence`, `whileInView`). Each section owns its own animations — there's no shared animation config file. Common patterns:
- Section reveal: `initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}}`
- Marquee (TrustedTech): CSS keyframes in `styles.css` + duplicated content.
- Scroll progress bar: `ScrollProgress.tsx` (uses `useScroll` + `useSpring`).

### Styling
- **Tailwind CSS v4** — configured entirely via `@theme` blocks in `src/styles.css`. There is **no `tailwind.config.js`**.
- Semantic tokens: `bg-background`, `text-foreground`, `text-muted-foreground`, `bg-primary`, `border-border`, etc.
- Custom utilities defined in `styles.css`: `.glass` (glassmorphism), `.shadow-glow`, gradient tokens, grid backgrounds.
- Fonts: **Inter** (body), **Space Grotesk** (display, `font-display`), **Cairo** (Arabic). Loaded via `<link>` in `__root.tsx`.

### Reusable component structure
- `components/ui/*` — dumb primitives (from shadcn).
- `components/site/*` — feature sections; each is self-contained.
- Shared bits: `SectionHeader` (eyebrow + title + subtitle), `LanguageSwitcher`.

---

## 4. Dependency Map

```
                       ┌────────────────────────┐
                       │  vite.config.ts        │
                       └──────────┬─────────────┘
                                  │ builds
                                  ▼
       ┌───────────────┐   ┌─────────────────┐   ┌──────────────┐
       │ src/server.ts │   │  src/start.ts   │   │  styles.css  │
       └──────┬────────┘   └────────┬────────┘   └──────┬───────┘
              │                     │                    │
              ▼                     ▼                    ▼
                    ┌──────────────────────┐
                    │   src/router.tsx     │──▶ routeTree.gen.ts (auto)
                    └──────────┬───────────┘
                               ▼
                    ┌──────────────────────┐
                    │  routes/__root.tsx   │  ← SEO, fonts, providers, 404
                    └──────────┬───────────┘
                               ▼
                    ┌──────────────────────┐
                    │  routes/index.tsx    │  ← wraps in <I18nProvider>
                    └──────────┬───────────┘
                               ▼
          ┌────────────────────┼────────────────────┐
          ▼                    ▼                    ▼
  components/site/*     lib/i18n.tsx        lib/projects.ts
  (Hero, Portfolio, …)  (t, lang, dir)      (portfolio data)
          │                    ▲
          ▼                    │ useI18n()
  components/ui/*     ─────────┘
  (Button, Card, …)
          │
          ▼
     lib/utils.ts (cn helper)
```

Arrows mean "imports from" / "renders". `hooks/` is imported ad-hoc by components (e.g. `use-mobile` in Navbar).

---

## 5. How to Modify This Project Safely

### Files you'll edit most often
1. `src/components/site/*.tsx` — the visible sections.
2. `src/lib/i18n.tsx` — every piece of text on the site (AR + FR).
3. `src/lib/projects.ts` — the portfolio entries.
4. `src/styles.css` — colors, fonts, glass effect, shadows.
5. `src/routes/__root.tsx` — SEO metadata (title, description, OG tags).
6. `src/routes/index.tsx` — order of sections on the home page.

### Where the UI lives
- **Page sections:** `src/components/site/`
- **Buttons, cards, inputs, dialogs:** `src/components/ui/`
- **Home page layout / section order:** `src/routes/index.tsx`

### Where to change text
Open **`src/lib/i18n.tsx`**. Find the key (e.g. `"hero.title"`) inside `ar` and update both languages. Always update both — a missing key falls back to the raw key string.

```ts
ar: { "hero.title": "عنوان جديد" },
fr: { "hero.title": "Nouveau titre" },
```

### Where to change colors
Open **`src/styles.css`**. Change the OKLCH values inside `@theme` / `:root` (e.g. `--primary`, `--background`). Do **not** hardcode `text-white` / `bg-[#123456]` in components — use the tokens (`text-foreground`, `bg-primary`, etc.).

### Where to add a new page
1. Create a new file in `src/routes/`, e.g. `src/routes/about.tsx`:
   ```tsx
   import { createFileRoute } from "@tanstack/react-router";
   export const Route = createFileRoute("/about")({
     component: AboutPage,
     head: () => ({ meta: [{ title: "About — Nova.dev" }] }),
   });
   function AboutPage() { return <h1>About</h1>; }
   ```
2. Save. The router regenerates `routeTree.gen.ts` automatically.
3. Link to it from anywhere: `<Link to="/about">About</Link>`.

### Where to add a new portfolio project
Open **`src/lib/projects.ts`** and append to the `projects` array:
```ts
{
  id: "my-new-project",
  title: { ar: "اسم المشروع", fr: "Nom du projet" },
  description: { ar: "وصف قصير", fr: "Description courte" },
  category: "ecommerce",           // must be a valid ProjectCategory
  cover: "https://…/image.jpg",
  technologies: ["Next.js", "Stripe"],
  date: "2025-01",
  liveUrl: "https://…",
  featured: true,
},
```
No other file needs to change — `Portfolio.tsx` reads this array automatically.

### Where to change images
- **Portfolio covers:** `cover` field in `src/lib/projects.ts` (currently Unsplash URLs; replace with your own hosted images or files added to `public/`).
- **Hero mockups / decorative visuals:** inline in `src/components/site/Hero.tsx`.
- **Favicon:** replace `public/favicon.ico`.
- **Tech logos (marquee):** in `src/components/site/TrustedTech.tsx`.

### Where to edit navigation
- **Links + mobile menu:** `src/components/site/Navbar.tsx`.
- **Link labels (text):** the `nav.*` keys in `src/lib/i18n.tsx`.

### Where to edit SEO
- **Sitewide title, description, OG tags, JSON-LD, fonts, favicon:** `src/routes/__root.tsx` inside the `head()` function.
- **Per-page SEO** (once you add more pages): add `head()` inside each new route file.

### Files you should almost never touch
| File / Folder | Why |
| --- | --- |
| `src/routeTree.gen.ts` | Auto-generated on every build. Manual edits are wiped. |
| `src/server.ts`, `src/start.ts` | SSR / hydration entry points wired to the Lovable platform. |
| `src/lib/error-capture.ts`, `src/lib/error-page.ts`, `src/lib/lovable-error-reporting.ts` | Platform error reporting glue. |
| `vite.config.ts` | Uses the `@lovable.dev` preset that already includes plugins; changing it can break the build. |
| `components.json` | shadcn CLI config — only if reconfiguring shadcn. |
| `AGENTS.md` | Guidance for AI agents. |
| `src/components/ui/*` | Safe to tweak, but changes affect the whole app. Prefer wrapping. |

---

## 6. Quick Recipes

**Change the site tagline (both languages):** edit `hero.title` + `hero.subtitle` in `src/lib/i18n.tsx`.

**Change the accent blue:** edit `--primary` (and gradient stops if defined) in `src/styles.css`.

**Reorder sections:** rearrange the JSX inside `<main>` in `src/routes/index.tsx`.

**Hide a section:** comment out its line in `src/routes/index.tsx`.

**Add a new language (e.g. English):** extend the `Lang` union in `src/lib/i18n.tsx`, add an `en: { … }` block with every key, add an option to `LanguageSwitcher.tsx`.

**Change the WhatsApp number:** edit `src/components/site/WhatsAppButton.tsx` (and `Contact.tsx` if the number appears there too).

---

*Happy hacking. When in doubt: start in `src/components/site/`, `src/lib/i18n.tsx`, or `src/lib/projects.ts` — those three cover most changes.*
