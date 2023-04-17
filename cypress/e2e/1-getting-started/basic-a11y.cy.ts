/// <reference types="cypress" />

describe('first', () => {
    it.skip('should close modal with button and keyboard', () => {
        cy.visit('http://localhost:3000/wcag/operable/keyboard-accessible/keyboard')
        cy.modalCanBeClosedByButton(cy.findByRole('link', {name: 'Open lightbox'}));        
    })

    it.skip('closes modal with esc', () => {
        cy.visit('https://alphagov.github.io/accessibility-tool-audit/tests/keyboard-access-lightbox-esc-key-doesnt-close-the-lightbox.html')
        cy.modalCanBeClosedByEsc(cy.findByRole('link', {name: 'Open lightbox'}))
    })

    it.only('modal has a focus trap', () => {
        cy.visit('https://alphagov.github.io/accessibility-tool-audit/tests/keyboard-access-lightbox-esc-key-doesnt-close-the-lightbox.html')
        cy.modalHasAFocusTrap(cy.findByRole('link', {name: 'Open lightbox'}));        
    })


        it.skip('modal has no focus trap', () => {
        cy.visit('http://localhost:3000/wcag/operable/keyboard-accessible/no-keyboard-trap')
        cy.modalHasAFocusTrap(cy.findByRole('link', {name: 'Open lightbox'}));        
    })


    it.skip('gets all focusable elements', () => {
        // removed hidden elements: checked
        // gets all links: checked
        cy.visit('http://localhost:3000/wcag/operable/keyboard-accessible/keyboard')
        cy.getFocusableElements(cy.get('main')).as('focusableElements')
    })

})