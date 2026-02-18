import { Component, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { NAV_ITEMS } from '../../data/portfolio-data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private scrollService = inject(ScrollService);
  navItems = NAV_ITEMS;
  scrolled = this.scrollService.scrolled;
  activeSection = this.scrollService.activeSection;
  mobileMenuOpen = false;

  navigateTo(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
    this.mobileMenuOpen = false;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
