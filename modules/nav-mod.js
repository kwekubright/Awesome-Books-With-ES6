import { NavSelectors as navSelector } from './nav-selectors-mod.js';

export class ShowSection {
  // Function to show a section and hide other sections.
  static showSection = (e, sectionId) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    const targetClasses = target.classList;
    targetClasses.add('show');

    switch (sectionId) {
      case 'lists':
        // Show lists section and hide the others
        navSelector.listSection.classList.remove('hide');
        navSelector.addSection.classList.add('hide');
        navSelector.addSection.classList.remove('show');
        navSelector.contactSection.classList.add('hide');
        navSelector.contactSection.classList.remove('show');
        break;
      case 'add-book':
        // Show add book section and hide the others
        navSelector.addSection.classList.remove('hide');
        navSelector.listSection.classList.add('hide');
        navSelector.listSection.classList.remove('show');
        navSelector.contactSection.classList.add('hide');
        navSelector.contactSection.classList.remove('show');
        break;
      case 'contact-section':
        // Show contact section and hide the others
        navSelector.contactSection.classList.remove('hide');
        navSelector.listSection.classList.add('hide');
        navSelector.listSection.classList.remove('show');
        navSelector.addSection.classList.add('hide');
        navSelector.addSection.classList.remove('show');
        break;
      default:
    }
  }
}