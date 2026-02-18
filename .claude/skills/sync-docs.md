# Skill: sync-docs

You are performing the mandatory post-session documentation sync for this portfolio project.

## What this skill does

Reviews all changes made in the current session and updates CLAUDE.md and AGENTS.md so future AI sessions have accurate context. This must run after EVERY session where any of the following happened:

- New component created or deleted
- Component significantly modified (new features, new logic, new patterns)
- New file added anywhere in the project
- Design system changed (colors, typography, spacing, animations)
- New technique or pattern introduced
- Deployment-related changes
- Content/data changes (new projects, new skills, updated bio)
- Any new information about Ahmer (employer, skills, contact, etc.)
- Any bug fixed that reveals something non-obvious about how the code works

---

## Step-by-step instructions

### 1. Review what changed this session
Look back at every file that was read, edited, or created this session. Make a mental list of:
- What changed (structural / design / content / logic)
- Why it changed (what problem it solved)
- Any non-obvious technique or pattern used

### 2. Update CLAUDE.md
Open and read the current CLAUDE.md, then update these sections as needed:

**Project Structure** — if any file was added, removed, or its purpose changed, update the tree. Keep descriptions short and accurate.

**Design System** — if a new animation technique, CSS trick, color, or pattern was introduced, document it here. Include the "how" briefly (e.g. "CSS custom property trick for scroll-triggered value animations").

**Guidelines for AI Agents** — if any new rule or exception was discovered (e.g. "projects data lives in the component, not portfolio-data.ts"), add it here.

**Agentic AI Learning Progress** — if Ahmer learned or discussed any new AI/agentic topic, add it to the list.

### 3. Update AGENTS.md
Open and read the current AGENTS.md, then update these sections as needed:

**Component Builder agent** — if AppComponent or any shared component gained new responsibilities, document them so future agents don't clobber them.

**Style & Design agent** — if a new CSS technique or animation pattern was used, explain it so future agents know the established approach and follow it.

**Content Editor agent** — if content moved to a different file or a new data exception was introduced, update this.

**Build & Deploy agent** — if anything about the build pipeline, asset handling, or deploy process changed, update this.

### 4. Keep entries concise
- One line per fact where possible
- No repeating information that's already there
- Remove or correct anything that is now outdated or wrong

### 5. Confirm
After writing both files, briefly tell the user: "CLAUDE.md and AGENTS.md updated — [1-2 sentence summary of what was added]."

---

## Trigger reminder

This skill should be run at the END of every working session. If you notice the session is ending (user says "deploy", "done", "push it", "looks good") and you haven't updated the docs yet — do it now without being asked.
