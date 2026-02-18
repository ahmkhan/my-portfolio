import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { HERO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  private scrollService = inject(ScrollService);
  hero = HERO_DATA;
  typedText = '';
  private typingInterval: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.startTypingAnimation();
  }

  ngOnDestroy(): void {
    if (this.typingInterval) clearInterval(this.typingInterval);
  }

  navigateTo(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
  }

  private startTypingAnimation(): void {
    const text = this.hero.title;
    let i = 0;
    this.typingInterval = setInterval(() => {
      if (i <= text.length) {
        this.typedText = text.substring(0, i);
        i++;
      } else {
        if (this.typingInterval) clearInterval(this.typingInterval);
      }
    }, 60);
  }
}
