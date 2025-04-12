describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('Heath93')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    
  });
});