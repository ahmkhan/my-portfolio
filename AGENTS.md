# AGENTS.md — Sub-Agent Definitions

## Agent: Component Builder
**Purpose:** Create and modify Angular components for the portfolio.
- Use standalone components with signals (no NgModules)
- Follow the existing pattern: `component.ts`, `component.html`, `component.scss`
- Import `ScrollAnimateDirective` for scroll-triggered animations — it adds `animate-visible` class via IntersectionObserver
- Use data from `src/app/data/portfolio-data.ts` — never hardcode content in templates
- Exception: `projects.component.ts` has its own `projects` array
- `AppComponent` has `HostListener('window:scroll')`, `ngOnInit()` (loader removal), and `scrollToTop()` — be aware when modifying it
- Navbar has a `.nav-github` anchor (external link → GitHub profile) placed between `.nav-links` and `.hamburger` — do not remove it when modifying the navbar
- Keep SCSS scoped to the component, use CSS variables from `styles.scss`

## Agent: Style & Design
**Purpose:** Handle styling and visual design changes.
- Dark theme only — use CSS variables defined in `src/styles.scss`
- Accent color: `var(--accent)` / `var(--gradient)` — do not introduce new colors without approval
- Responsive: test at 375px (mobile), 768px (tablet), 1024px+ (desktop)
- Animations via CSS transitions + `animate-on-scroll` / `animate-visible` classes
- Scroll-triggered value animations: use CSS custom properties (e.g. `[style]="'--skill-level:' + val + '%'"`) then `.parent.animate-visible .child { property: var(--skill-level) }` — avoids inline style specificity conflicts
- No external CSS frameworks (Bootstrap, Tailwind, etc.)

## Agent: Content Editor
**Purpose:** Update portfolio content and data.
- All content lives in `src/app/data/portfolio-data.ts`
- Exception: projects are in `src/app/components/projects/projects.component.ts` (`projects` array)
- Ensure accuracy — cross-reference `My resume.pdf` and `LinkedIn-Profile.pdf`
- Keep the tone professional and concise
- Update the Agentic AI section in CLAUDE.md when new topics are learned

## Agent: Build & Deploy
**Purpose:** Handle builds and deployment tasks.
- Build command: `npx ng build` (output: `dist/portfolio/`)
- Serve locally: `npx ng serve`
- Deploy to GitHub Pages: `npx ng build && npx angular-cli-ghpages --dir=dist/portfolio/browser`
- Live URL: https://ahmkhan.github.io/my-portfolio/
- Component style budget: 6kB warning / 10kB error (configured in `angular.json`)
- No SSR — static site only
- **Static assets** (images, SVGs, favicons, PDFs) go in `public/` — Angular copies them to the dist root. Do NOT put them in `src/` expecting them to be served
- `Ahmer-Khan-CV.pdf` lives in `public/` — regenerate from `resume-preview.html` using headless Chrome: `chrome --headless --print-to-pdf=public/Ahmer-Khan-CV.pdf --print-to-pdf-no-header file:///path/to/resume-preview.html`
- `og-image.png` lives in `public/` — regenerate from `og-preview.html` using headless Chrome: `chrome --headless --screenshot=public/og-image.png --window-size=1200,630 file:///path/to/og-preview.html`
- `profile.png` lives in `public/` — regenerate from `profile-card.html` using headless Chrome: `chrome --headless --screenshot=public/profile.png --window-size=500,500 file:///path/to/profile-card.html`
- SEO: `index.html` has full og: and twitter: meta tags including og:image pointing to the deployed PNG URL
- **CRITICAL:** `background-image: url()` in Angular component SCSS does NOT resolve `public/` assets at runtime — always use `<img src="filename">` in the HTML template for images from `public/`

## Shared Rules
1. Do not introduce technologies outside Ahmer's expertise without discussion
2. All professional information must match the source PDFs
3. Code should be clean enough for Ahmer to modify independently
4. Always refer to CLAUDE.md for project context
5. Ask before assuming on design or technical decisions
6. **MANDATORY — Doc Sync & Push:** After every session where changes are made, AND on any deploy, push, or session close:
   - Step 1: Update `MEMORY.md` at `C:\Users\Ahmer\.claude\projects\D--laptopData-ai-claude-my-portfolio\memory\MEMORY.md` (local only, no git)
   - Step 2: Update `CLAUDE.md` and `AGENTS.md`
   - Step 3: Run: `git add CLAUDE.md AGENTS.md && git commit -m "Update docs" && git push origin main`
   - All three steps are required. Do not skip any.
   - Trigger words: "deploy", "done", "push", "looks good", "commit", "close"
   - The skill file is at `.claude/skills/sync-docs.md`
