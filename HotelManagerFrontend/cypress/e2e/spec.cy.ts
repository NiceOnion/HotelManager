describe('Add Account', () => {
  it('Adds an account to the list of accounts', () => {
    cy.visit('http://localhost:4200')

    cy.contains('accounts').click()
    cy.contains('Add Account').click()
    cy.url().should('include', '/Account/Post')
    cy.get('.username').type("Kaas")
    cy.get('.username').should('have.value', 'Kaas')



  })
})