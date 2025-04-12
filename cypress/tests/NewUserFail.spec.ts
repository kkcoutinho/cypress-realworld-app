describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('Maria')
    cy.get('#lastName').type('Silva')
    cy.get('#username').type('MariaSilva')
    cy.get('#password').type('s3')
    cy.get('#password-helper-text').should('have.text', 'Password must contain at least 4 characters')
    
  });
});