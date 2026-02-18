import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  placeholderProjects = [
    {
      title: 'Portfolio Website',
      description: 'This very site — built with Angular 18, pure SCSS, and no external CSS frameworks. A dark-themed, animated single-page application.',
      tags: ['Angular 18', 'SCSS', 'Responsive'],
      status: 'Live',
    },
    {
      title: 'Coming Soon',
      description: 'More projects will be added as I build them with Claude and other AI tools. Stay tuned!',
      tags: ['In Progress'],
      status: 'Planned',
    },
    {
      title: 'Coming Soon',
      description: 'Future projects showcasing MEAN stack expertise and Agentic AI integrations.',
      tags: ['In Progress'],
      status: 'Planned',
    },
  ];
}
