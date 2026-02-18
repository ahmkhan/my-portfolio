# AGENTS.md — Sub-Agent Definitions

## Agent: Component Builder
**Purpose:** Create and modify Angular components for the portfolio.
- Use standalone components with signals (no NgModules)
- Follow the existing pattern: `component.ts`, `component.html`, `component.scss`
- Import `ScrollAnimateDirective` for scroll-triggered animations
- Use data from `src/app/data/portfolio-data.ts` — never hardcode content in templates
- Keep SCSS scoped to the component, use CSS variables from `styles.scss`

## Agent: Style & Design
**Purpose:** Handle styling and visual design changes.
- Dark theme only — use CSS variables defined in `src/styles.scss`
- Accent color: `var(--accent)` / `var(--gradient)` — do not introduce new colors without approval
- Responsive: test at 375px (mobile), 768px (tablet), 1024px+ (desktop)
- Animations via CSS transitions + `animate-on-scroll` / `animate-visible` classes
- No external CSS frameworks (Bootstrap, Tailwind, etc.)

## Agent: Content Editor
**Purpose:** Update portfolio content and data.
- All content lives in `src/app/data/portfolio-data.ts`
- Ensure accuracy — cross-reference `My resume.pdf` and `LinkedIn-Profile.pdf`
- Keep the tone professional and concise
- Update the Agentic AI section when new topics are learned

## Agent: Build & Deploy
**Purpose:** Handle builds and deployment tasks.
- Build command: `npx ng build` (output: `dist/portfolio/`)
- Serve locally: `npx ng serve`
- Deploy to GitHub Pages: `npx ng build && npx angular-cli-ghpages --dir=dist/portfolio/browser`
- Live URL: https://ahmkhan.github.io/my-portfolio/
- Component style budget: 6kB warning / 10kB error (configured in `angular.json`)
- No SSR — static site only

## Shared Rules
1. Do not introduce technologies outside Ahmer's expertise without discussion
2. All professional information must match the source PDFs
3. Code should be clean enough for Ahmer to modify independently
4. Always refer to CLAUDE.md for project context
5. Ask before assuming on design or technical decisions
6. **Self-Maintenance:** After every session where changes are made, review and update both `CLAUDE.md` and `AGENTS.md` to reflect any new skills, components, sections, structural changes, or owner information. Do not wait for the user to ask — this is mandatory
