/// <reference types="cypress" />

beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
})

it('dialog has a focus trap', () => {
    cy.visit('https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/')

    cy.get('#dialog1').as('dialog').should('not.be.visible')
    
    cy.findByRole('button', {name: 'Add Delivery Address'}).click()

    cy.get('@dialog').should('be.visible')

    cy.get('@dialog').dialogHasAFocusTrap();
    })
