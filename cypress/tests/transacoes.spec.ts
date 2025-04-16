import userDataLogin from '../fixtures/userDataLogin.json'

describe('Visualizar Histórico de Transações', () => {

  beforeEach(() => {
    // returning false here prevents Cypress from failing the test
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    cy.visit('http://localhost:3000/signin');
  });

  it('Visualizar histórico de transações com sucesso', () => {
    cy.get("#username").type(userDataLogin.userSuccess.userName);
    cy.get("#password").type(userDataLogin.userSuccess.password);
    cy.get('[data-test="signin-submit"]').click();
  });

  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    cy.get("#username").type(userDataLogin.userSuccess.userName);
    cy.get("#password").type(userDataLogin.userSuccess.password);
    cy.get('[data-test="signin-submit"]').click();
    cy.get("[data-test='transaction-list-filter-date-range-button']").should('be.visible').click();
    cy.get('.MuiBackdrop-root').invoke('remove'); // Remove a camada de fundo
    cy.get('.Cal__Day__month').contains('Mar').click({ force: true });
    cy.get('[style="position: absolute; top: 117800px; left: 0px; width: 100%; height: 250px; line-height: 50px;"] > .Cal__Month__rows > [aria-label="Week 1"] > .Cal__Day__root').contains('1').click({ force: true });
    cy.get('[data-test="empty-list-header"] > .MuiTypography-root').contains('No Transactions').should('be.visible');
    
    

    
    
   
    
  });
})