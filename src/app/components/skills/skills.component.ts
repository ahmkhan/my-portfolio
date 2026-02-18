import { Component, OnInit } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { SKILLS, SKILL_CATEGORIES, Skill } from '../../data/portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  categories = SKILL_CATEGORIES;
  skillsByCategory: Record<string, Skill[]> = {};

  ngOnInit(): void {
    for (const cat of this.categories) {
      this.skillsByCategory[cat.key] = SKILLS.filter(s => s.category === cat.key);
    }
  }
}
