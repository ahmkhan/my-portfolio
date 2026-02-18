import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  activeSection = signal('hero');
  scrolled = signal(false);

  private sectionIds = ['hero', 'about', 'experience', 'skills', 'agentic-ai', 'projects', 'contact'];

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => this.onScroll(), { passive: true });
    }
  }

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80; // navbar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  private onScroll(): void {
    this.scrolled.set(window.scrollY > 50);

    const scrollPos = window.scrollY + 200;
    for (let i = this.sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(this.sectionIds[i]);
      if (el && el.offsetTop <= scrollPos) {
        this.activeSection.set(this.sectionIds[i]);
        break;
      }
    }
  }
}
