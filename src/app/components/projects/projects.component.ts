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
      description: 'This very site — built with Angular 18, standalone components, pure SCSS, and zero external CSS frameworks. AI-assisted development using Claude Code as a full development partner.',
      tags: ['Angular 18', 'SCSS', 'Claude Code', 'GitHub Pages'],
      status: 'Live',
      link: 'https://ahmkhan.github.io/my-portfolio/',
      githubLink: 'https://github.com/ahmkhan/my-portfolio',
    },
    {
      title: 'Enterprise MEAN Stack Applications',
      description: 'Multiple large-scale web applications at Matech Consulting & Zaavia — real-time dashboards, role-based access control, RESTful APIs, and deep AWS integrations (Elastic Beanstalk, S3, SES, SQS, Lambda).',
      tags: ['Angular', 'Node.js', 'MongoDB', 'AWS', 'Express.js'],
      status: 'Private',
      link: null,
      githubLink: null,
    },
    {
      title: 'AI Dev Assistant',
      description: 'A multi-agent AI coding tool built with MEAN stack + Gemini API. Select your tech stack, describe any coding task — Planner breaks it down, Coder writes it, Reviewer audits it.',
      tags: ['Angular 18', 'Node.js', 'MongoDB', 'Gemini API', 'Render'],
      status: 'Live',
      link: 'https://ai-dev-assistant.onrender.com',
      githubLink: 'https://github.com/ahmkhan/ai-dev-assistant',
    },
    {
      title: 'Agentic AI Exploration',
      description: 'Actively learning and building with Claude Code — exploring agentic workflows, MCP servers, and AI-assisted full-stack development. Combining 20+ years of MEAN stack expertise with next-gen AI tooling.',
      tags: ['Claude Code', 'Agentic AI', 'MCP', 'MEAN Stack'],
      status: 'In Progress',
      link: null,
      githubLink: null,
    },
  ];
}
