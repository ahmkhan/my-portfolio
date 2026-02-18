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
  projects = [
    {
      title: 'Portfolio Website',
      description: 'This very site — built with Angular 18, pure SCSS, and no external CSS frameworks. AI-assisted development using Claude Code as a full development partner.',
      tags: ['Angular 18', 'SCSS', 'Claude Code'],
      status: 'Live',
      link: 'https://ahmkhan.github.io/my-portfolio/',
    },
    {
      title: 'Enterprise MEAN Stack Applications',
      description: 'Multiple large-scale web applications developed at Matech Consulting & Zaavia — real-time dashboards, role-based access, RESTful APIs, and AWS cloud integrations.',
      tags: ['Angular', 'Node.js', 'MongoDB', 'AWS'],
      status: 'Private',
      link: null,
    },
    {
      title: 'Agentic AI Projects',
      description: 'Exploring AI-assisted development with Claude Code — building tools and applications that combine MEAN stack expertise with agentic AI capabilities. More coming soon.',
      tags: ['Claude Code', 'Agentic AI', 'MEAN Stack'],
      status: 'In Progress',
      link: null,
    },
  ];
}
