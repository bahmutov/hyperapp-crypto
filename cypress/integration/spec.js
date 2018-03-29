/// <reference types="cypress" />
it('opens page', () => {
  cy.visit('http://localhost:3000')
  cy.contains('Cryptocurrency Prices')
})
