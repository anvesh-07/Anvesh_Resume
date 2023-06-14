import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeSection: string | null = null;

  @HostListener('window:scroll')
  onScroll() {
    this.updateActiveSection();
  }

  updateActiveSection() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Adjust the offset value as per your requirements
    const offset = 100;

    const sections = document.querySelectorAll('.section');

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i] as HTMLElement;
      const sectionId = section.getAttribute('id');

      if (section.offsetTop - offset <= scrollPosition) {
        this.activeSection = `#${sectionId}`;
        break;
      }
    }
  }

  isActive(route: string): boolean {
    return this.activeSection === route;
  }

}
