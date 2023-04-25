/// <reference types="cypress" />

beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
})

// expect to fail
it('dialog has a focus trap', () => {
    cy.visit('https://alphagov.github.io/accessibility-tool-audit/tests/keyboard-access-lightbox-focus-is-not-retained-within-the-lightbox.html')
    
    cy.get('a.open-lightbox-not-focused').click()

    cy.get('div.lightbox.not-focused').as('dialog').should('be.visible')

    cy.focused().tab() // needs to tab to first element in dialog because it is no native dialog element

    cy.get('@dialog').dialogRetainsFocus();
})


it('dialog has a focus trap', () => {
    cy.visit('https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/')
    
    cy.findByRole('button', {name: 'Add Delivery Address'}).click()

    cy.get('#dialog1').as('dialog').should('be.visible')

    cy.get('@dialog').dialogRetainsFocus();
})

it('dialog has a focus trap', () => {
    cy.visit('https://www.fonic.de/prepaid-tarife')

    cy.findByRole('button', {name: 'FONIC Classic Sofort bestellen'}).click()

    cy.findByRole('button', {name: 'Tarifdetails anzeigen'}).click()

    cy.get('.modal-content').as('dialog').should('be.visible')
    cy.wait(1000)

    cy.get('@dialog').dialogRetainsFocus();
})
