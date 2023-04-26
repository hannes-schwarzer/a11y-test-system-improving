beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
})

// expect to fail
it('dialog has a focus trap', () => {
    cy.visit('https://alphagov.github.io/accessibility-tool-audit/tests/keyboard-access-lightbox-focus-is-not-moved-immediately-to-lightbox.html')
    
    cy.get('a.open-lightbox-focus-far').click()

    cy.get('div.lightbox.focus-far').as('dialog').should('be.visible')

    cy.get('@dialog').dialogGetsFocus();
})

it('dialog has a focus trap', () => {
    cy.visit('https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/')
    
    cy.findByRole('button', {name: 'Add Delivery Address'}).click()

    cy.get('#dialog1').as('dialog').should('be.visible')

    cy.get('@dialog').dialogGetsFocus();
})
