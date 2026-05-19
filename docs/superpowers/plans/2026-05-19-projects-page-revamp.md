# Projects Page Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the filterable `/projects` page with a static, curated showcase of six SWE-focused projects in a hero + 2×2 grid + wide-card layout.

**Architecture:** `lib/projects.ts` is trimmed to six active projects (the other sixteen commented out). The projects page becomes a server component that renders three new client card components (`ProjectHero`, `ProjectGridCard`, `ProjectWideCard`) directly from the `PROJECTS` array in order. The category filter and its components are removed.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, inline styles, `next/image`, `lucide-react`.

**Verification note:** This project has no unit-test framework (only `next build` and `eslint`). "Verify" steps therefore mean: TypeScript typecheck, lint, production build, and manual dev-server inspection — not unit tests.

**Working directory:** All commands run from `my-app/` unless noted. Repo root is the parent of `my-app/`.

---

## File Structure

| File | Responsibility |
|------|----------------|
| `my-app/lib/projects.ts` | Project data — six active, sixteen archived (commented). Adds `thumbnail` + `award` fields. |
| `my-app/app/projects/page.tsx` | Server component — heading, intro, and layout orchestration. |
| `my-app/app/projects/ProjectHero.tsx` | Client — full-width hero card (project 01). |
| `my-app/app/projects/ProjectGridCard.tsx` | Client — grid card with screenshot thumbnail (projects 02–05). |
| `my-app/app/projects/ProjectWideCard.tsx` | Client — full-width text-forward card (project 06). |
| `my-app/app/projects/[slug]/BackLink.tsx` | Client — simplified to a static "Projects" link. |
| `my-app/app/globals.css` | Responsive rules — hero stacks on mobile; dead filter rules removed. |

**Deleted:** `my-app/app/projects/ProjectsFilter.tsx`, `my-app/app/projects/ProjectCard.tsx`.

---

## Task 1: Trim and restructure project data

**Files:**
- Modify: `my-app/lib/projects.ts`

- [ ] **Step 1: Add two optional fields to the `Project` interface**

In the `Project` interface, add these two lines (after the `linkedin` field, before `screenshots`):

```typescript
  award?: string;        // hero award badge text
  thumbnail?: string;    // overrides screenshots[0] for card/hero image
```

- [ ] **Step 2: Reorder the `PROJECTS` array — six active projects first**

Reorder the objects in the `PROJECTS` array so the six active projects appear first, in exactly this order:

1. `snag`
2. `robotic-goalie`
3. `network-chat-application`
4. `single-user-relational-database`
5. `kelp`
6. `numpy-deep-neural-network`

The remaining sixteen objects (`phylogenetic-tree-construction`, `lattice-based-speech-recognition`, `calculator-app`, `dictionary-app`, `jdbc-course-registration`, `world-clock-app`, `interactive-comments-app`, `tcp-word-game`, `toyos`, `fake-image-detection`, `beer-style-prediction`, `multithreaded-image-edge-detection`, `mini-unix-shell`, `pathora`, `venture-map`, `ngram-language-model`) come after, in any order.

- [ ] **Step 3: Comment out the sixteen archived projects**

Wrap the sixteen archived project objects in a block comment. Place `/*` on its own line immediately before the first archived object's opening `{`, and `*/` on its own line immediately after the last archived object's closing `},`. Add a comment line above explaining why:

```typescript
  // --- Archived projects (hidden from the curated page; restore by uncommenting) ---
  /*
  { ... archived project objects ... },
  */
```

Result: `PROJECTS` evaluates to an array of exactly six objects.

- [ ] **Step 4: Update fields on the six active projects**

Apply these exact changes to the six active objects:

| slug | `accent` | `featured` / `featuredOrder` | `award` |
|------|----------|------------------------------|---------|
| `snag` | `T.accent` (unchanged) | **remove both** | add: `award: "★ 2nd Place · Insforge × Qoder Hackathon",` |
| `robotic-goalie` | change to `T.accent3` | **remove both** | — |
| `network-chat-application` | change to `T.accent2` | **remove both** | — |
| `single-user-relational-database` | change to `T.accent3` | **remove both** | — |
| `kelp` | change to `T.accent2` | (none present) | — |
| `numpy-deep-neural-network` | change to `T.accent3` | (none present) | — |

Do not change any other fields (`oneliner`, `subtitle`, `description`, `tags`, `screenshots`, links, etc.) on any project.

- [ ] **Step 5: Verify typecheck passes**

Run: `cd my-app && npx tsc --noEmit`
Expected: no output, exit code 0.

- [ ] **Step 6: Commit**

```bash
git add my-app/lib/projects.ts
git commit -m "$(cat <<'EOF'
Trim projects data to six curated projects

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Create the hero card component

**Files:**
- Create: `my-app/app/projects/ProjectHero.tsx`

- [ ] **Step 1: Create the component**

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { T, tintOf, tintHoverOf } from "@/lib/theme";

interface ProjectHeroProps {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  oneliner: string;
  tags: string[];
  accent: string;
  thumbnail: string | null;
  award?: string;
}

export default function ProjectHero({
  slug,
  number,
  title,
  subtitle,
  oneliner,
  tags,
  accent,
  thumbnail,
  award,
}: ProjectHeroProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/projects/${slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="projects-hero"
      style={{
        display: "flex",
        gap: 0,
        textDecoration: "none",
        background: T.surface,
        border: `1px solid ${T.border}`,
        borderTop: `2px solid ${accent}`,
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: hovered
          ? "0 16px 40px rgba(0,0,0,0.35)"
          : "0 4px 20px rgba(0,0,0,0.18)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      {/* Screenshot */}
      {thumbnail && (
        <div
          className="projects-hero-img"
          style={{
            position: "relative",
            width: "48%",
            minHeight: 300,
            flexShrink: 0,
            background: T.bg,
          }}
        >
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      {/* Body */}
      <div
        style={{
          flex: 1,
          padding: 32,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          justifyContent: "center",
        }}
      >
        {award && (
          <span
            style={{
              alignSelf: "flex-start",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: accent,
              background: tintOf[accent],
              border: `1px solid ${tintHoverOf[accent]}`,
              borderRadius: 999,
              padding: "5px 14px",
            }}
          >
            {award}
          </span>
        )}

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 14,
              color: accent,
              letterSpacing: 1,
            }}
          >
            {number}
          </span>
          <ArrowUpRight
            size={22}
            style={{ color: hovered ? accent : T.muted, transition: "color 0.25s ease" }}
          />
        </div>

        <div
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: 40,
            fontWeight: 400,
            color: T.heading,
            lineHeight: 1.1,
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: 16,
            fontStyle: "italic",
            color: accent,
          }}
        >
          {subtitle}
        </div>

        <div
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: 15,
            color: T.body,
            lineHeight: 1.8,
          }}
        >
          {oneliner}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 4 }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 12,
                color: accent,
                background: tintOf[accent],
                border: `1px solid ${tintHoverOf[accent]}`,
                borderRadius: 999,
                padding: "3px 12px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Verify typecheck passes**

Run: `cd my-app && npx tsc --noEmit`
Expected: no output, exit code 0.

- [ ] **Step 3: Commit**

```bash
git add my-app/app/projects/ProjectHero.tsx
git commit -m "$(cat <<'EOF'
Add ProjectHero card component

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 3: Create the grid card component

**Files:**
- Create: `my-app/app/projects/ProjectGridCard.tsx`

- [ ] **Step 1: Create the component**

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { T, tintOf, tintHoverOf } from "@/lib/theme";

interface ProjectGridCardProps {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  oneliner: string;
  tags: string[];
  accent: string;
  thumbnail: string | null;
}

export default function ProjectGridCard({
  slug,
  number,
  title,
  subtitle,
  oneliner,
  tags,
  accent,
  thumbnail,
}: ProjectGridCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/projects/${slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxSizing: "border-box",
        textDecoration: "none",
        background: T.surface,
        border: `1px solid ${T.border}`,
        borderTop: `2px solid ${accent}`,
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: hovered
          ? "0 16px 40px rgba(0,0,0,0.35)"
          : "0 4px 20px rgba(0,0,0,0.18)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      {/* Screenshot thumbnail */}
      {thumbnail && (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 180,
            flexShrink: 0,
            background: T.bg,
          }}
        >
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      {/* Body */}
      <div
        style={{
          flex: 1,
          padding: 24,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 13,
              color: accent,
              letterSpacing: 1,
            }}
          >
            {number}
          </span>
          <ArrowUpRight
            size={18}
            style={{ color: hovered ? accent : T.muted, transition: "color 0.25s ease" }}
          />
        </div>

        <div
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: 20,
            fontWeight: 400,
            color: T.heading,
            lineHeight: 1.3,
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: 13,
            fontStyle: "italic",
            color: accent,
          }}
        >
          {subtitle}
        </div>

        <div
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: 14,
            color: T.body,
            lineHeight: 1.7,
            marginTop: 2,
          }}
        >
          {oneliner}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto", paddingTop: 8 }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 12,
                color: accent,
                background: tintOf[accent],
                border: `1px solid ${tintHoverOf[accent]}`,
                borderRadius: 999,
                padding: "3px 12px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Verify typecheck passes**

Run: `cd my-app && npx tsc --noEmit`
Expected: no output, exit code 0.

- [ ] **Step 3: Commit**

```bash
git add my-app/app/projects/ProjectGridCard.tsx
git commit -m "$(cat <<'EOF'
Add ProjectGridCard component

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 4: Create the wide card component

**Files:**
- Create: `my-app/app/projects/ProjectWideCard.tsx`

- [ ] **Step 1: Create the component**

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { T, tintOf, tintHoverOf } from "@/lib/theme";

interface ProjectWideCardProps {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  oneliner: string;
  tags: string[];
  accent: string;
}

export default function ProjectWideCard({
  slug,
  number,
  title,
  subtitle,
  oneliner,
  tags,
  accent,
}: ProjectWideCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/projects/${slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        textDecoration: "none",
        background: T.surface,
        border: `1px solid ${T.border}`,
        borderTop: `2px solid ${accent}`,
        borderRadius: 16,
        padding: 28,
        boxShadow: hovered
          ? "0 16px 40px rgba(0,0,0,0.35)"
          : "0 4px 20px rgba(0,0,0,0.18)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 13,
            color: accent,
            letterSpacing: 1,
          }}
        >
          {number}
        </span>
        <ArrowUpRight
          size={18}
          style={{ color: hovered ? accent : T.muted, transition: "color 0.25s ease" }}
        />
      </div>

      <div
        style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: 24,
          fontWeight: 400,
          color: T.heading,
          lineHeight: 1.25,
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontFamily: "var(--font-lora), serif",
          fontSize: 14,
          fontStyle: "italic",
          color: accent,
        }}
      >
        {subtitle}
      </div>

      <div
        style={{
          fontFamily: "var(--font-lora), serif",
          fontSize: 14,
          color: T.body,
          lineHeight: 1.7,
          marginTop: 2,
          maxWidth: 720,
        }}
      >
        {oneliner}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 12,
              color: accent,
              background: tintOf[accent],
              border: `1px solid ${tintHoverOf[accent]}`,
              borderRadius: 999,
              padding: "3px 12px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Verify typecheck passes**

Run: `cd my-app && npx tsc --noEmit`
Expected: no output, exit code 0.

- [ ] **Step 3: Commit**

```bash
git add my-app/app/projects/ProjectWideCard.tsx
git commit -m "$(cat <<'EOF'
Add ProjectWideCard component

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 5: Rewrite the projects page

**Files:**
- Modify: `my-app/app/projects/page.tsx` (full replacement)

- [ ] **Step 1: Replace the file contents**

Replace the entire contents of `my-app/app/projects/page.tsx` with:

```tsx
import FadeIn from "@/components/FadeIn";
import { T } from "@/lib/theme";
import { PROJECTS } from "@/lib/projects";
import type { Project } from "@/lib/projects";
import ProjectHero from "./ProjectHero";
import ProjectGridCard from "./ProjectGridCard";
import ProjectWideCard from "./ProjectWideCard";

export const metadata = {
  title: "Projects - Pranav Cheraku",
};

// Card image — explicit thumbnail override, else first screenshot, else none.
function thumbOf(p: Project): string | null {
  return p.thumbnail ?? p.screenshots?.[0]?.src ?? null;
}

// Two-digit display number for a zero-based index.
function num(i: number): string {
  return String(i + 1).padStart(2, "0");
}

export default function ProjectsPage() {
  // Array order in lib/projects.ts is the display order:
  // [0] hero, [1..4] grid, [5] wide card.
  const hero = PROJECTS[0];
  const gridProjects = PROJECTS.slice(1, 5);
  const wide = PROJECTS[5];

  return (
    <div style={{ position: "relative" }}>
      {/* Heading */}
      <FadeIn immediate>
        <h2
          className="page-heading"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: 42,
            fontWeight: 400,
            color: T.heading,
            marginBottom: 12,
          }}
        >
          Projects
        </h2>
      </FadeIn>

      {/* Intro line */}
      <FadeIn immediate delay={60}>
        <p
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: 16,
            color: T.body,
            fontStyle: "italic",
            marginTop: 0,
            marginBottom: 36,
          }}
        >
          Six builds I&apos;m most proud of — spanning full-stack, systems, and machine learning.
        </p>
      </FadeIn>

      {/* Hero — project 01 */}
      <FadeIn immediate delay={100}>
        <ProjectHero
          slug={hero.slug}
          number={num(0)}
          title={hero.title}
          subtitle={hero.subtitle}
          oneliner={hero.oneliner}
          tags={hero.tags}
          accent={hero.accent}
          thumbnail={thumbOf(hero)}
          award={hero.award}
        />
      </FadeIn>

      {/* Grid — projects 02–05 */}
      <FadeIn immediate delay={160}>
        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
            marginTop: 16,
          }}
        >
          {gridProjects.map((p, i) => (
            <ProjectGridCard
              key={p.slug}
              slug={p.slug}
              number={num(i + 1)}
              title={p.title}
              subtitle={p.subtitle}
              oneliner={p.oneliner}
              tags={p.tags}
              accent={p.accent}
              thumbnail={thumbOf(p)}
            />
          ))}
        </div>
      </FadeIn>

      {/* Wide card — project 06 */}
      <FadeIn immediate delay={220}>
        <div style={{ marginTop: 16 }}>
          <ProjectWideCard
            slug={wide.slug}
            number={num(5)}
            title={wide.title}
            subtitle={wide.subtitle}
            oneliner={wide.oneliner}
            tags={wide.tags}
            accent={wide.accent}
          />
        </div>
      </FadeIn>
    </div>
  );
}
```

- [ ] **Step 2: Verify typecheck passes**

Run: `cd my-app && npx tsc --noEmit`
Expected: no output, exit code 0. (`ProjectsFilter.tsx` and `ProjectCard.tsx` still exist but are now unimported — that is fine; they are deleted in Task 6.)

- [ ] **Step 3: Commit**

```bash
git add my-app/app/projects/page.tsx
git commit -m "$(cat <<'EOF'
Rewrite projects page as static hero + grid layout

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 6: Delete the obsolete filter components

**Files:**
- Delete: `my-app/app/projects/ProjectsFilter.tsx`
- Delete: `my-app/app/projects/ProjectCard.tsx`

- [ ] **Step 1: Confirm nothing imports them**

Run: `cd my-app && grep -rn "ProjectsFilter\|ProjectCard" app components lib`
Expected: no matches (output empty).

- [ ] **Step 2: Delete the files**

```bash
git rm my-app/app/projects/ProjectsFilter.tsx my-app/app/projects/ProjectCard.tsx
```

- [ ] **Step 3: Verify typecheck passes**

Run: `cd my-app && npx tsc --noEmit`
Expected: no output, exit code 0.

- [ ] **Step 4: Commit**

```bash
git commit -m "$(cat <<'EOF'
Remove obsolete projects filter components

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 7: Simplify the detail-page BackLink

The current `BackLink` reads a `from` query param (set by the old filter) to label itself "Featured Projects", "Machine Learning", etc. With the filter gone, that param is never set, so it would always render a misleading "Featured Projects" label. Simplify it to a plain "Projects" link.

**Files:**
- Modify: `my-app/app/projects/[slug]/BackLink.tsx` (full replacement)

- [ ] **Step 1: Replace the file contents**

Replace the entire contents of `my-app/app/projects/[slug]/BackLink.tsx` with:

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { T } from "@/lib/theme";

export default function BackLink({ accent }: { accent: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="/projects"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-dm-sans), sans-serif",
        fontSize: 14,
        fontWeight: 500,
        color: hovered ? T.heading : accent,
        textDecoration: "none",
        marginBottom: 20,
        border: `1px solid ${accent}`,
        borderRadius: 999,
        padding: "8px 16px",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        filter: hovered ? "brightness(1.25)" : "none",
        transition: "color 0.2s ease, transform 0.25s cubic-bezier(0.22,1,0.36,1), filter 0.25s ease",
      }}
    >
      <ChevronLeft size={15} />
      Projects
    </Link>
  );
}
```

(The `<Suspense>` wrapper around `BackLink` in `[slug]/page.tsx` is now unnecessary but harmless — leave it as-is to minimize churn.)

- [ ] **Step 2: Verify typecheck passes**

Run: `cd my-app && npx tsc --noEmit`
Expected: no output, exit code 0.

- [ ] **Step 3: Commit**

```bash
git add my-app/app/projects/[slug]/BackLink.tsx
git commit -m "$(cat <<'EOF'
Simplify detail-page BackLink to a static Projects link

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 8: Update responsive CSS

**Files:**
- Modify: `my-app/app/globals.css`

- [ ] **Step 1: Remove the dead filter-bar rules**

Inside the `@media (max-width: 640px)` block, delete this block (currently around lines 349–356):

```css
  /* Filter bar scrolls horizontally on mobile */
  .projects-filter-bar {
    overflow-x: auto !important;
  }

  .projects-filter-bar button {
    padding: 14px 18px !important;
  }
```

- [ ] **Step 2: Add hero responsive rules**

Inside the same `@media (max-width: 640px)` block, immediately after the existing `.projects-grid` rule:

```css
  .projects-grid {
    grid-template-columns: 1fr !important;
  }
```

add:

```css
  /* Hero card stacks — screenshot on top, body below */
  .projects-hero {
    flex-direction: column !important;
  }

  .projects-hero-img {
    width: 100% !important;
    min-height: 220px !important;
  }
```

- [ ] **Step 3: Verify the production build passes**

Run: `cd my-app && npm run build`
Expected: build completes successfully; route list includes `/projects` and six `/projects/[slug]` static pages; no type or lint errors.

- [ ] **Step 4: Commit**

```bash
git add my-app/app/globals.css
git commit -m "$(cat <<'EOF'
Update projects page responsive rules for new layout

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 9: Final verification

**Files:** none (verification only)

- [ ] **Step 1: Run the production build**

Run: `cd my-app && npm run build`
Expected: success, exit code 0.

- [ ] **Step 2: Run the dev server and inspect manually**

Run: `cd my-app && npm run dev`, then open `http://localhost:3000/projects` and confirm:
- Heading "Projects" + italic intro line render.
- Snag appears as a full-width hero with screenshot, gold top border, and the award badge.
- Robotic Goalie, Network Chat Application, SURLY, KELP render in a 2×2 grid, each with a screenshot thumbnail and equal height within a row.
- NumPy Deep Neural Network renders as a full-width text-forward card at the bottom (no image).
- Numbers 01–06 appear in each card's accent color.
- No filter bar / "All Projects" button anywhere.
- Hovering any card lifts it and shows the accent arrow.
- Clicking each card navigates to the correct `/projects/<slug>` detail page.
- On a detail page, the back link reads "Projects" and returns to `/projects`.

- [ ] **Step 3: Inspect mobile layout**

In browser dev tools, set viewport width to ≤640px and confirm on `/projects`:
- The hero stacks (screenshot on top, body below).
- The grid collapses to a single column.
- The wide card remains full width.

- [ ] **Step 4: Verify archived projects are gone**

Confirm `http://localhost:3000/projects/toyos` returns the 404 / not-found page (archived projects are no longer generated).

---

## Self-Review

**Spec coverage:**
- Remove filter, six static projects → Tasks 1, 5, 6 ✓
- Comment out sixteen projects → Task 1 Step 3 ✓
- Hero + 2×2 grid + wide card layout → Tasks 2, 3, 4, 5 ✓
- Accent rule (only Snag gold) → Task 1 Step 4 ✓
- `award` + `thumbnail` interface fields → Task 1 Step 1 ✓
- Three new components, delete `ProjectCard`/`ProjectsFilter` → Tasks 2–4, 6 ✓
- Detail pages keep working → Task 9 Step 2 / Step 4 ✓
- Responsive behavior → Task 8 ✓
- Page heading + intro line → Task 5 ✓

**Deviation from spec:** Task 7 (simplify `BackLink`) is not in the spec — the spec said detail pages stay untouched. It is included because removing the filter leaves `BackLink` rendering a stale "Featured Projects" label; this is a defect the revamp would otherwise introduce. Flag for user confirmation.

**Placeholder scan:** No TBD/TODO; every code step contains complete code; every command has expected output.

**Type consistency:** `thumbOf` returns `string | null`; `ProjectHero`/`ProjectGridCard` accept `thumbnail: string | null`. `num()` returns `string`; all `number` props typed `string`. `award?: string` on the interface and on `ProjectHeroProps` match. Component prop names match the `page.tsx` call sites.
