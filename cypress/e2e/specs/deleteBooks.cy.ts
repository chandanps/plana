import { Books } from "../pageObjects/books.page";
import { Login } from "../pageObjects/login.page";
import { Store } from "../pageObjects/store.page";
import { Profile } from "../pageObjects/profile.page";

const books = new Books();
const login = new Login();
const store = new Store();
const profile = new Profile();

describe('Delete Books from Collection', () => {

  before(() => {
    cy.visit('https://demoqa.com/books');
    books.clickLogin();
    login.loginWithValidCredentials();
  });

  it('Should be able to delete book from collection', () => {
    store.searchOreillyMedia();
    store.clickProfileMenu();
    profile.deleteAllSavedBooks();
    profile.authorName().should("have.length",1);
  });
});
