import userDataLogin from '../fixtures/userDataLogin.json'

describe('Enviar Dinheiro', () => {

  beforeEach(() => {
    // returning false here prevents Cypress from failing the test
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    cy.visit('http://localhost:3000/signin');
  });

  it('Enviar dinheiro com saldo suficiente', () => {
    cy.get('#username').type(userDataLogin.userSuccess.userName);
    cy.get('#password').type(userDataLogin.userSuccess.password);
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-item-GjWovtg2hr"] > .MuiListItemText-root > .MuiTypography-body1').click()
    cy.get('#amount').type("100")
    cy.get('#transaction-create-description-input').type("Tranferencia com saldo")
    cy.get('[data-test="transaction-create-form"] > .MuiGrid-container > :nth-child(2)').click()
    
  });


  it('Enviar dinheiro com saldo insuficiente', () => {
    cy.get('#username').type(userDataLogin.userSuccess.userName);
    cy.get('#password').type(userDataLogin.userSuccess.password);
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-item-GjWovtg2hr"] > .MuiListItemText-root > .MuiTypography-body1').click()
    cy.get('#amount').type("2000")
    cy.get('#transaction-create-description-input').type("Tranferencia sem saldo")
    cy.get('[data-test="transaction-create-form"] > .MuiGrid-container > :nth-child(2)').click()
    
  });
});