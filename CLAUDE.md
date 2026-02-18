# Mohammed Ahmer Khan — Portfolio Website

## About the Owner
- **Name:** Mohammed Ahmer Khan
- **Role:** Senior MEAN Stack Developer
- **Location:** Karachi, Pakistan
- **Email:** ahmkhan2000@yahoo.com
- **Phone:** +92 333 350 2989
- **LinkedIn:** https://www.linkedin.com/in/ahmerkhan-724953124/
- **GitHub:** https://github.com/ahmkhan
- **Total IT Experience:** 20+ years (since 1999)
- **MEAN Stack Experience:** 7+ years

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
src/
├── styles.scss                          # Global design system (variables, reset, animations)
├── index.html                           # Entry point with Google Fonts
├── app/
│   ├── app.component.ts/html/scss       # Root layout composing all sections
│   ├── data/portfolio-data.ts           # All content as typed constants
│   ├── directives/
│   │   └── scroll-animate.directive.ts  # IntersectionObserver scroll animations
│   ├── services/
│   │   └── scroll.service.ts            # Smooth scroll + active section tracking (signals)
│   └── components/
│       ├── navbar/                      # Fixed navbar, scroll-aware, mobile hamburger
│       ├── hero/                        # Full-screen, CSS particles, typing animation
│       ├── about/                       # Professional summary + stats cards
│       ├── experience/                  # Vertical timeline, 5 roles
│       ├── skills/                      # Animated skill bars by category
│       ├── agentic-ai/                  # Learning journey topic cards
│       ├── projects/                    # Project showcase grid (expandable)
│       └── contact/                     # Contact form + footer + social links
```

## Design System
- **Dark theme:** `#0a0a0f` background, `#1a1a2e` cards
- **Accent:** Cyan/Teal `#00d4aa` with gradient to `#00b4d8`
- **Animations:** CSS transitions + IntersectionObserver directive (no Angular Animations module)
- **Responsive breakpoints:** mobile (768px), tablet (1024px), desktop (1025px+)

## Guidelines for AI Agents
- See [AGENTS.md](./AGENTS.md) for sub-agent roles
- Use Angular standalone components and signals (no NgModules)
- Write clean code that Ahmer can understand and explain
- Keep the design dark-themed, professional, and responsive
- Do not add external CSS frameworks or libraries without discussion
- All content data lives in `src/app/data/portfolio-data.ts` — edit there, not in templates
- Content should be accurate to the information in the PDF files
- **IMPORTANT — Self-Maintenance:** After every session where changes are made (new skills, new components, new sections, structural changes, design changes, or any new information about the owner), you MUST review and update both `CLAUDE.md` and `AGENTS.md` to keep them accurate and useful for future sessions. Do not wait for the user to ask.

## Agentic AI Learning Progress
Topics covered so far:
- What is Agentic AI
- Claude Code
- CLAUDE.md and AGENTS.md files
- Skills, Sub Agents, Plugins, Hooks, MCP
- Building a portfolio website with Claude Code

> This section will be updated as learning progresses.
