export class NavSelectors {
  // Lets get the menu elements
  static listElement = document.getElementById('list-menu');
  static addElement = document.getElementById('add-menu');
  static contactElement = document.getElementById('contact-menu');
  // Let's get the sections elements
  static listSection = document.getElementById('lists');
  static addSection = document.getElementById('add-book');
  static contactSection = document.getElementById('contact-section');
  static addButton = document.querySelector('#add-button');
  static form = document.getElementById('add-book-form');
  // lets get the new title
  static newTitle = document.querySelector('#book-title-input');
  // now lets get the new author
  static newAuthor = document.querySelector('#book-author-input');
  // Other selectors
  static booksContainer = document.querySelector('#books');
  static dateSelector = document.getElementById('current-date');

}