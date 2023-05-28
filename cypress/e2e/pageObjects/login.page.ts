export class Login  {
  
  userNameTextField(){ return cy.get('input[id="userName"]').first(); }
  passwordTextField(){ return cy.get('input[id="password"]').first(); }
  loginButton(){ return cy.get('button[id="login"]').first();}

  loginWithValidCredentials() {
    this.userNameTextField().type(Cypress.env('username'));
    this.passwordTextField().type(Cypress.env('pass'));
    this.loginButton().click();
  }


}