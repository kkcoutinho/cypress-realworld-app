import userDataLogin from '../fixtures/userDataLogin.json'

describe('Login com sucesso', () => {

  beforeEach(() => {
    // returning false here prevents Cypress from failing the test
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    cy.visit('http://localhost:3000/signin');
  });

  it('Deve fazer login com um usuário válido', () => {
    cy.get("#username").type(userDataLogin.userSuccess.userName);
    cy.get("#password").type(userDataLogin.userSuccess.password);
    cy.get('[data-test="signin-submit"]').click();
  });

  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.get("#username").type(userDataLogin.userFail.userName);
    cy.get("#password").type(userDataLogin.userFail.password);
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="signin-error"]').should('have.text', 'Username or password is invalid')
  });
})