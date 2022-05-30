import { ShowSection as showSection } from './modules/nav-mod.js';
import { NavSelectors as navSelector } from './modules/nav-selectors-mod.js';
import { BookClass as bookClass } from './modules/books-mod.js';
import { DateTime } from './modules/luxon.min.js';

let books = new bookClass();
window.books = books;

// Event listener for list menu
navSelector.listElement.addEventListener('click', (e) => {
  showSection.showSection(e, 'lists');
});

// Event listener for add new menu
navSelector.addElement.addEventListener('click', (e) => {
  showSection.showSection(e, 'add-book');
});

// Event listener for contact menu
navSelector.contactElement.addEventListener('click', (e) => {
  showSection.showSection(e, 'contact-section');
});

// Lets add a click event listener with which we will perform the add logic for the new book
navSelector.addButton.addEventListener('click', (e) => {
  e.preventDefault();
  // We return if form is not valid
  if (!navSelector.form.reportValidity()) {
    return;
  }
  
  // lets add the new record to the books object at this point
  if (books.addBook(navSelector.newTitle.value, navSelector.newAuthor.value)) {
    // okay great. Lets reset the form now
    navSelector.form.reset();
 }
});

// Lets display books and set date when the page loads
window.onload = () => {
  navSelector.dateSelector.innerHTML = DateTime.now().toFormat('MMMM dd, yyyy hh:mm:ss a');
  window.books.displayBooks();
};