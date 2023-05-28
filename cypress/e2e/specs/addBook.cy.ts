import { Books } from "../pageObjects/books.page";
import { Login } from "../pageObjects/login.page";
import { Store } from "../pageObjects/store.page";
import { Profile } from "../pageObjects/profile.page";

const books = new Books();
const login = new Login();
const store = new Store();
const profile = new Profile();

describe('Add Books to Collection', () => {

  before(() => {
    cy.visit('https://demoqa.com/books');
    books.clickLogin();
    login.loginWithValidCredentials();
    store.clickProfileMenu();
    profile.deleteAllSavedBooks();
  });

  let bookName, authorName, publisherName;

  it('Should be able to login to Book Store', () => {
    cy.visit('https://demoqa.com/books');
    books.clickLogin();
    login.loginWithValidCredentials();
  });

  it('Should be able to add book to collection', () => {
    store.searchOreillyMedia();
    bookName = store.getBookName();
    authorName = store.getAuthorName();
    publisherName = store.getPublisherName();
    store.addFourthBookToCollection();
  });

  it('Should be able to see the added book in collection', () => {
    store.clickProfileMenu();
    profile.authorName().should("have.text",bookName);
    profile.authorName().should("have.text",authorName);
    profile.publisherName().should("have.text",publisherName);
  });
});