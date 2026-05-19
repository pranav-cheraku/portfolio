# Projects Page Revamp — Design Spec

**Date:** 2026-05-19
**Status:** Draft — awaiting user review

## Goal

Revamp the `/projects` page into a curated, static showcase of six SWE-focused
projects. Remove the category filter entirely. The page should lead with the
single strongest project and present the rest in a clean grid, with an editorial
style consistent with the rest of the site.

## Scope

### In scope
- Replace the filterable projects grid with a static hero + grid + wide-card layout.
- Curate down to **six** projects; comment out the other sixteen in `lib/projects.ts`.
- New card components for the three layout roles (hero, grid card, wide card).
- Responsive behavior for the new layout.

### Out of scope
- Project detail pages (`/projects/[slug]`) — unchanged for the six kept projects.
- Navbar, footer, theme, fonts, other pages.
- Adding new screenshots or copy beyond what already exists.

## The Six Projects (display order)

| # | Project | slug | Layout role | Accent |
|---|---------|------|-------------|--------|
| 01 | Snag | `snag` | Hero | `T.accent` (gold) |
| 02 | Robotic Goalie | `robotic-goalie` | Grid card | `T.accent3` (teal) |
| 03 | Network Chat Application | `network-chat-application` | Grid card | `T.accent2` (lavender) |
| 04 | Single User Relational Database | `single-user-relational-database` | Grid card | `T.accent3` (teal) |
| 05 | KELP | `kelp` | Grid card | `T.accent2` (lavender) |
| 06 | NumPy Deep Neural Network | `numpy-deep-neural-network` | Wide card | `T.accent3` (teal) |

The remaining sixteen projects are commented out in `lib/projects.ts` (kept in
the file, not deleted, so they can be restored later).

### Accent color rule

Per the project's existing convention, gold (`T.accent`) is reserved for the
single featured/hero project. Snag keeps gold. The five non-hero projects use
`accent2`/`accent3`, alternating teal/lavender down the page for visual rhythm.
This means changing the `accent` field for **Robotic Goalie**, **Network Chat
Application**, and **SURLY** (currently gold) and for **KELP** and **NumPy DNN**
(re-assigned to keep the alternation). The now-unused `featured` /
`featuredOrder` fields are removed from the six active entries; they remain
defined as optional on the `Project` interface for the commented-out entries.

## Layout

```
┌─────────────────────────────────────────────────┐
│  Projects                                        │  ← page heading (Playfair 42)
│  Six builds I'm most proud of — ...               │  ← italic intro line
├─────────────────────────────────────────────────┤
│  ┌───────────────┬───────────────────────────┐  │
│  │               │ ★ 2nd Place badge          │  │
│  │  Snag         │ 01                          │  │  ← HERO (full width)
│  │  screenshot   │ Snag (large title)          │  │
│  │               │ subtitle / oneliner / tags  │  │
│  └───────────────┴───────────────────────────┘  │
│  ┌─────────────────────┐ ┌────────────────────┐ │
│  │ [thumbnail]         │ │ [thumbnail]        │ │  ← 2×2 GRID
│  │ 02 Robotic Goalie   │ │ 03 Network Chat    │ │
│  └─────────────────────┘ └────────────────────┘ │
│  ┌─────────────────────┐ ┌────────────────────┐ │
│  │ [thumbnail]         │ │ [thumbnail]        │ │
│  │ 04 SURLY            │ │ 05 KELP            │ │
│  └─────────────────────┘ └────────────────────┘ │
│  ┌─────────────────────────────────────────────┐│
│  │ 06 NumPy Deep Neural Network (text-forward) ││  ← WIDE CARD (full width)
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘
```

### Page heading
- `Projects` heading — Playfair 42px, reusing the existing `.page-heading` class.
- Italic intro line below it (Lora, italic, `T.body`): *"Six builds I'm most
  proud of — spanning full-stack, systems, and machine learning."* (placeholder
  copy; easy to tweak later).

### Hero card (01 — Snag)
- Full-width card. Gold top border (`borderTop: 2px solid T.accent`), matching
  the existing card treatment.
- Two columns: screenshot on the left (~48% width), body on the right.
- Body contains, top to bottom: award badge, number `01`, large Playfair title,
  italic subtitle (gold), oneliner, tag pills.
- Award badge: small pill, uppercase, gold text + border — e.g.
  `★ 2nd Place · Insforge × Qoder Hackathon`.
- Hover: lift + shadow, consistent with existing cards.
- Entire card links to `/projects/snag`.

### Grid cards (02–05)
- 2×2 grid (`projects-grid`, `repeat(2, 1fr)`).
- Each card: screenshot thumbnail on top, then body — number, title (Playfair
  ~18px), short subtitle (project's accent color, italic), oneliner, tag pills.
- Top border in the card's accent color.
- Hover: lift + shadow + accent on the arrow/number, consistent with existing
  `ProjectCard`.
- Each card links to its `/projects/[slug]` detail page.

### Wide card (06 — NumPy DNN)
- Full-width card, text-forward (no image).
- Body: number `06`, title, subtitle, oneliner/description, tag pills.
- The card text is the project's normal description content only — no
  meta-commentary about the absence of screenshots.
- Top border in the accent color. Hover: lift + shadow.
- Links to `/projects/numpy-deep-neural-network`.

## Data Model Changes (`lib/projects.ts`)

1. Comment out the sixteen non-kept project objects in the `PROJECTS` array.
2. Reorder the six active objects to match the display order in the table above.
3. Update the `accent` field on the five non-hero projects per the accent rule.
4. Remove `featured` / `featuredOrder` from the six active entries.
5. Add two optional fields to the `Project` interface:
   - `thumbnail?: string` — image used for the hero/grid thumbnail. Defaults to
     `screenshots[0].src` when omitted. Lets a specific image be chosen without
     reordering the detail-page screenshot list.
   - `award?: string` — text for the hero award badge (set on Snag only).

## Component Architecture (`app/projects/`)

| File | Change | Notes |
|------|--------|-------|
| `page.tsx` | Rewrite | Server component. Renders heading + intro + hero + grid + wide card directly from `PROJECTS`. Drops `Suspense` and `ProjectsFilter`. |
| `ProjectsFilter.tsx` | Delete | Filter logic no longer used. |
| `ProjectCard.tsx` | Delete | Replaced by the three new components below. |
| `ProjectHero.tsx` | New (`"use client"`) | Hero card with hover state. |
| `ProjectGridCard.tsx` | New (`"use client"`) | Grid card with thumbnail + hover state. |
| `ProjectWideCard.tsx` | New (`"use client"`) | Text-forward full-width card with hover state. |

`page.tsx` rendering convention: `PROJECTS[0]` → hero, `PROJECTS.slice(1, 5)` →
grid, `PROJECTS[5]` → wide card. The array order in `lib/projects.ts` is the
single source of truth for display order.

Thumbnails are rendered with `next/image`. Detail page routes,
`generateStaticParams`, and `generateMetadata` continue to work — they map over
`PROJECTS`, which now contains exactly the six active projects.

## Responsive Behavior (`globals.css`, `@media (max-width: 640px)`)

- `.projects-grid` → single column (rule already exists; reused).
- Hero card → stacks vertically, screenshot on top, body below.
- Wide card → unchanged (already full width).
- Remove the now-dead `.projects-filter-bar` rules.

## Error Handling / Edge Cases

- A project without screenshots (NumPy DNN) is the wide card by design, so no
  empty image slot appears.
- Directly visiting a commented-out project's detail URL falls through to the
  existing `notFound()` — acceptable, since those projects are intentionally
  removed from the site.

## Testing

- Manual: run `next dev`, verify `/projects` renders the hero, 2×2 grid, and
  wide card; verify each card links to the correct detail page; verify hover
  states; verify the page at ≤640px (hero stacks, grid is single column).
- Verify `next build` succeeds and static params generate for the six slugs.

## Open Questions

None. Design approved via visual mockup on 2026-05-19.
