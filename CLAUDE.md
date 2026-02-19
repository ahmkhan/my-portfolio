# Mohammed Ahmer Khan — Portfolio Website

## About the Owner
- **Name:** Mohammed Ahmer Khan
- **Role:** Senior MEAN Stack Developer
- **Location:** Karachi, Pakistan
- **Email:** ahmkhan2000@yahoo.com
- **Phone:** +92 333 350 2989
- **LinkedIn:** https://www.linkedin.com/in/ahmer-khan-724953124/
- **GitHub:** https://github.com/ahmkhan
- **Total IT Experience:** 20+ years (since 1999)
- **MEAN Stack Experience:** 7+ years

## Pending Role Update — DO NOT CHANGE YET
Current role is **Senior MEAN Stack Developer**. Once Ahmer completes his Agentic AI & Robotics learning, the role will be updated across: this file, `portfolio-data.ts`, `index.html`, `og-preview.html`, and `resume-preview.html`. Wait for explicit confirmation before making any role changes.

## Owner's Technical Skills
- **Frontend:** Angular (7yr), JavaScript/ES6+ (8yr), HTML5, CSS3, jQuery
- **Backend:** Node.js (7yr), Express.js
- **Databases:** MongoDB (7yr), MySQL (4yr)
- **AWS:** Elastic Beanstalk, S3, API Gateway, Lambda, DynamoDB, Step Functions, CloudWatch, SES, SQS
- **DevOps:** Serverless Framework, Server Management
- **Tools:** Git, GitHub, BitBucket
- **Currently Learning:** Agentic AI & Robotics

## Deployment
- **Platform:** GitHub Pages (free)
- **Live URL:** https://ahmkhan.github.io/my-portfolio/
- **Repo:** https://github.com/ahmkhan/my-portfolio
- **Deploy command:** `npx ng build && npx angular-cli-ghpages --dir=dist/portfolio/browser`
- **Branch:** `main` (source) → `gh-pages` (deployed build)
- **Dev package:** `angular-cli-ghpages` (devDependency)

## Tech Stack
- **Angular 18** — standalone components, signals, no NgModules
- **SCSS** — custom design system, no external CSS frameworks (no Bootstrap/Tailwind)
- **No Angular Router** — single-page with smooth scroll navigation
- **No backend** — pure static frontend
- **Fonts:** Inter + Fira Code (Google Fonts)

## Project Structure
```
public/
├── favicon.ico                          # Legacy favicon (fallback)
├── favicon.svg                          # Primary SVG favicon (dark bg + cyan AK)
├── Ahmer-Khan-CV.pdf                    # Downloadable CV — generated from resume-preview.html
├── og-image.png                         # Social preview image (1200x630) — generated from og-preview.html
├── profile-photo.png                    # Raw profile photo (RGBA transparent PNG, 408x612) — used in About section
└── profile.png                          # Pre-rendered circular profile card (500x500) — generated from profile-card.html
resume-preview.html                      # HTML resume template (open in browser → print to PDF to regenerate)
og-preview.html                          # Social card template → headless Chrome screenshot → public/og-image.png
profile-card.html                        # Circular profile card template → headless Chrome screenshot → public/profile.png
my-profile-image.png                     # Source profile photo (RGBA transparent PNG, 408x612) — kept in root, NOT public/
src/
├── styles.scss                          # Global design system (variables, reset, animations)
├── index.html                           # Entry point — meta/OG tags, loader, Google Fonts
├── app/
│   ├── app.component.ts/html/scss       # Root layout — back-to-top button, page loader removal
│   ├── data/portfolio-data.ts           # All content as typed constants
│   ├── directives/
│   │   └── scroll-animate.directive.ts  # IntersectionObserver — adds 'animate-visible' class
│   ├── services/
│   │   └── scroll.service.ts            # Smooth scroll + active section tracking (signals)
│   └── components/
│       ├── navbar/                      # Fixed navbar, scroll-aware, mobile hamburger, gradient AK logo, GitHub icon link
│       ├── hero/                        # Full-screen — two-column: text+CTA left, circular profile photo right; particles, typing, Download CV
│       ├── about/                       # Full-width: summary text + 4-column stats cards (no photo — photo is in Hero only)
│       ├── experience/                  # Vertical timeline, 5 roles, pulsing dots, hover accent
│       ├── skills/                      # Skill bars animate on scroll (CSS custom property technique)
│       ├── agentic-ai/                  # Learning journey topic cards — section order position 3 (after About)
│       ├── projects/                    # 3 real projects (Live / Private / In Progress) — cards have Live + GitHub links
│       └── contact/                     # Contact form (mailto:) + footer + social links
```

## Design System
- **Dark theme:** `#0a0a0f` background, `#1a1a2e` cards
- **Accent:** Cyan/Teal `#00d4aa` with gradient to `#00b4d8`
- **Animations:** CSS transitions + IntersectionObserver directive (no Angular Animations module)
- **Scroll animation pattern:** directive adds `animate-visible` class → CSS transitions fire
- **Skill bar trick:** CSS custom property `--skill-level` set on `.skill-item`, `.skill-category.animate-visible .skill-fill { width: var(--skill-level) }` triggers on scroll
- **Responsive breakpoints:** mobile (768px), tablet (1024px), desktop (1025px+)
- **Static assets:** place in `public/` folder (not `src/`), served at root by Angular

## Guidelines for AI Agents
- See [AGENTS.md](./AGENTS.md) for sub-agent roles
- Use Angular standalone components and signals (no NgModules)
- Write clean code that Ahmer can understand and explain
- Keep the design dark-themed, professional, and responsive
- Do not add external CSS frameworks or libraries without discussion
- All content data lives in `src/app/data/portfolio-data.ts` — edit there, not in templates
- Exception: `projects.component.ts` holds its own `projects` array (not in portfolio-data.ts)
- Content should be accurate to the information in the PDF files
- Static assets (images, icons, favicons) go in `public/` — Angular copies these to dist root
- Contact form uses `window.location.href = 'mailto:...'` — no backend, no Formspree needed
- **IMPORTANT:** `background-image: url()` in Angular component SCSS cannot resolve `public/` assets — always use `<img src="...">` in templates instead
- Profile photo appears ONLY in the Hero section — it was intentionally removed from About to avoid repetition
- Profile photo also in Hero section: same technique, larger circle (340px), `top: -68px` — hidden on mobile (≤768px)
- Hero layout: two-column grid (`1fr 400px`) — text left, photo right; collapses to single column on mobile
- Section order: Hero → About → Agentic AI → Experience → Skills → Projects → Contact (Agentic AI moved up as current-focus USP)
- **MANDATORY — Doc Sync & Push:** After every session where changes are made (or on deploy/push/session close): (1) update `MEMORY.md`, (2) update `CLAUDE.md` and `AGENTS.md`, (3) run `git add CLAUDE.md AGENTS.md && git commit -m "Update docs" && git push origin main`. All three steps required. MEMORY.md is local-only (no git). Do NOT wait for the user to ask.

## Agentic AI Learning Progress
Topics covered so far:
- What is Agentic AI
- Claude Code
- CLAUDE.md and AGENTS.md files
- Skills, Sub Agents, Plugins, Hooks, MCP
- Building a portfolio website with Claude Code
- Iterative improvement — fixing real UX issues (forms, animations, favicons, SEO)
- Portfolio UI/UX audit — scoring, credibility review for LinkedIn/Upwork/Fiverr
- Creating a professional HTML/PDF resume with headless Chrome PDF generation
- Adding profile photo with CSS circular frame, glow border, and scroll animation
- Adding GitHub icon link to navbar and GitHub repo links on project cards

> This section will be updated as learning progresses.
