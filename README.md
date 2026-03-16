# Pranav Cheraku — Portfolio

Personal portfolio website built with Next.js, showcasing projects, experience, skills, and contact information.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + inline styles
- **Icons:** lucide-react
- **Fonts:** Playfair Display, DM Sans, Lora (via `next/font/google`)
- **Analytics:** Vercel Analytics + Speed Insights
- **Contact form:** Web3Forms API

## Pages

| Route | Description |
|---|---|
| `/` | Hero section with dot-grid background and bento nav grid |
| `/about` | Memoji display, bio, and quick stats |
| `/experience` | Timeline of internships and research roles |
| `/projects` | Filterable grid of projects with individual detail pages |
| `/skills` | Categorized skill chips with expandable context panels |
| `/education` | University, coursework, research, leadership, and activities |
| `/contact` | Contact links, message form, and resume download |

## Project Structure

```
my-app/
├── app/
│   ├── layout.tsx          # Root layout, fonts, theme flash prevention
│   ├── page.tsx            # Home page
│   ├── globals.css         # CSS variables, animations, responsive rules
│   ├── about/
│   ├── contact/
│   ├── education/
│   ├── experience/
│   ├── projects/
│   │   └── [slug]/         # Dynamic project detail pages
│   └── skills/
├── components/
│   ├── FadeIn.tsx          # Scroll-triggered fade+slide entrance animation
│   ├── Navbar.tsx          # Sticky nav with mobile menu and theme toggle
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx     # Dark/light mode toggle
│   └── CourseChip.tsx      # Chip with accent bar, used on education page
├── lib/
│   ├── theme.ts            # CSS custom property token references (T.*)
│   └── projects.ts         # Projects data
└── public/
    ├── PranavCheraku_Resume.pdf
    └── projects/           # Project screenshot images
```

## Design System

Colors are defined as CSS custom properties in `globals.css` under `:root` (dark, default) and `[data-theme="light"]`. All color references go through the `T` object from `lib/theme.ts` — no hardcoded colors in components.

**Accent colors:**
- Gold (`--color-accent`) — primary accent, links, highlights
- Lavender (`--color-accent2`) — secondary accent
- Teal (`--color-accent3`) — tertiary accent

**Fonts:**
- `var(--font-playfair)` — headings and display text
- `var(--font-dm-sans)` — UI labels and body text
- `var(--font-lora)` — italic details and subtext
