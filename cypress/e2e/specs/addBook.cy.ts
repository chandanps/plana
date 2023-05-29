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
  });

  it('Should be able to add book to collection', () => {
    store.searchOreillyMedia();
    store.addFourthBookToCollection();
    store.clickProfileMenu();
    profile.bookName().should("have.text","Speaking JavaScript ");
    profile.authorName().should("have.text","Axel Rauschmayer");
    profile.publisherName().should("have.text","O'Reilly Media");
  });
});