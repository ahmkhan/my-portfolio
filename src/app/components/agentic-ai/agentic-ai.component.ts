import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { AGENTIC_AI_TOPICS } from '../../data/portfolio-data';

@Component({
  selector: 'app-agentic-ai',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './agentic-ai.component.html',
  styleUrl: './agentic-ai.component.scss',
})
export class AgenticAiComponent {
  topics = AGENTIC_AI_TOPICS;
}
