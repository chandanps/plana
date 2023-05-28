export class Books  {
  
  loginButton(){ return cy.get('button[id="login"]').first();}
  
  clickLogin() {
    this.loginButton().click();
  }
}