/// <reference types="cypress" />

beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
})

it('dialog has a focus trap', () => {
    cy.visit('https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/')
    
    cy.findByRole('button', {name: 'Add Delivery Address'}).click()

    cy.get('#dialog1').as('dialog').should('be.visible')

    cy.get('@dialog').dialogHasAFocusTrap();
})

it('dialog has a focus trap', () => {
    cy.visit('https://www.fonic.de/prepaid-tarife')

    cy.findByRole('button', {name: 'FONIC Classic Sofort bestellen'}).click()

    cy.findByRole('button', {name: 'Tarifdetails anzeigen'}).click()

    cy.get('.modal-content').as('dialog').should('be.visible')
    cy.wait(1000)

    cy.get('@dialog').dialogHasAFocusTrap();
})
