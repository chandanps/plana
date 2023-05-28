export class Store  {
  
  searchTextbox(){ return cy.get('input[id="searchBox"]').first(); }
  fourthBook(){ return cy.get("div:nth-of-type(4) > div[role='row'] > div:nth-of-type(2) > .action-buttons").first(); }
  fourthBookName(){ return cy.get("div:nth-of-type(4) > div[role='row'] > div:nth-of-type(2)").first(); }
  fourthAuthorName(){ return cy.get("div:nth-of-type(4) > div[role='row'] > div:nth-of-type(3)").first(); }
  fourthPublisherName(){ return cy.get("div:nth-of-type(4) > div[role='row'] > div:nth-of-type(4)").first(); }
  addToYourCollectionButton(){ return cy.get('button[id="addNewRecordButton"]').first(); }
  profileMenu(){ return cy.get('#item-3').first(); }

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

  getBookName() {
    return this.fourthBookName().invoke('text');
  }

  getAuthorName() {
    return this.fourthAuthorName().invoke('text');
  }

  getPublisherName() {
    return this.fourthPublisherName().invoke('text');
  }

  addFourthBookToCollection() {
    this.clickFourthBook();
    this.addBookToCollection();
  }
}