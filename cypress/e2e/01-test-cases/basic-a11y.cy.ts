/// <reference types="cypress" />

describe('first', () => {
    it('should close modal with button and keyboard', () => {
        cy.visit('http://localhost:3000/wcag/operable/keyboard-accessible/keyboard')
        cy.dialogCanBeClosedByButton(cy.findByRole('link', {name: 'Open lightbox'}));        
    })

    it('gets all focusable elements', () => {
        // removed hidden elements: checked
        // gets all links: checked
        cy.visit('http://localhost:3000/wcag/operable/keyboard-accessible/keyboard')
        cy.get('main').getFocusableElements().as('focusableElements')
    })

})