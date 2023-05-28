export class Profile  {
  
  bookName(){ return cy.get(".rt-tbody > div:nth-of-type(1) > div[role='row'] > div:nth-of-type(2)").first(); }
  authorName(){ return cy.get(".rt-tbody > div:nth-of-type(1) > div[role='row'] > div:nth-of-type(3)").first(); }
  publisherName(){ return cy.get(".rt-tbody > div:nth-of-type(1) > div[role='row'] > div:nth-of-type(4)").first(); }
  deleteAllBooksButton(){ return cy.get(".button.di.text-right > button#submit").first(); }

  deleteAllSavedBooks() {
    this.deleteAllBooksButton().click();
  }


}