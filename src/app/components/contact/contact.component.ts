import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { CONTACT_DATA, SOCIAL_LINKS } from '../../data/portfolio-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ScrollAnimateDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contact = CONTACT_DATA;
  socials = SOCIAL_LINKS;

  formData = { name: '', email: '', message: '' };
  formSubmitted = false;

  onSubmit(): void {
    if (this.formData.name && this.formData.email && this.formData.message) {
      const subject = encodeURIComponent(`Portfolio Contact from ${this.formData.name}`);
      const body = encodeURIComponent(
        `Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMessage:\n${this.formData.message}`
      );
      window.location.href = `mailto:${this.contact.email}?subject=${subject}&body=${body}`;
      this.formSubmitted = true;
    }
  }
}
