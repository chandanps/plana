export class Store  {
  
  searchTextbox(){ return cy.get('input[id="searchBox"]').first(); }
  fourthBook(){ return cy.get("div:nth-of-type(4) > div[role='row'] > div:nth-of-type(2) > .action-buttons").first(); }
  fourthBookName(){ return cy.get("div:nth-of-type(4) > div[role='row'] > div:nth-of-type(2)").first(); }
  fourthAuthorName(){ return cy.get("div:nth-of-type(4) > div[role='row'] > div:nth-of-type(3)").first(); }
  fourthPublisherName(){ return cy.get("div:nth-of-type(4) > div[role='row'] > div:nth-of-type(4)").first(); }
  addToYourCollectionButton(){ return cy.get('.fullButton.text-right > button#addNewRecordButton').first(); }
  profileMenu(){ return cy.get('.collapse.element-list.show > .menu-list > li:nth-of-type(3) > .text').first(); }

  searchOreillyMedia() {
    this.searchTextbox().type("O'Reilly Media");
  }

  clickFourthBook() {
    this.fourthBook().click();
  }

  addBookToCollection() {
    this.addToYourCollectionButton().click();
  }

  clickProfileMenu() {
    this.profileMenu().click();
  }

  addFourthBookToCollection() {
    this.clickFourthBook();
    this.addBookToCollection();
  }
}