/// <reference types="cypress" />

beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
})

it('retains focus in dialog', () => {
    cy.visit('https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/')
    
    cy.findByRole('button', {name: 'Add Delivery Address'}).click()

    cy.get('#dialog1').as('dialog').should('be.visible')

    cy.get('@dialog').dialogRetainsFocus();
})

it('retains focus in dialog', () => {
    // otherwise modal gets cut off
    cy.viewport(1000, 1500)
    cy.visit('https://www.fonic.de/prepaid-tarife')

    cy.findByRole('button', {name: 'FONIC Classic Sofort bestellen'}).click()

    cy.findByRole('button', {name: 'Tarifdetails anzeigen'}).click()

    cy.get('.modal-content').as('dialog').should('be.visible')
    // needs to wait for dialog to be fully loaded
    cy.wait(500)

    cy.get('@dialog').dialogRetainsFocus();
})

it('retains no focus in dialog', () => {
    cy.visit('https://alphagov.github.io/accessibility-tool-audit/tests/keyboard-access-lightbox-focus-is-not-retained-within-the-lightbox.html')
    
    cy.get('a.open-lightbox-not-focused').click()

    cy.get('div.lightbox.not-focused').as('dialog').should('be.visible')

    // needs to tab to first element in dialog because it is no native dialog element
    cy.focused().tab()

    cy.get('@dialog').dialogRetainsFocus();
})
