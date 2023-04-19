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

    it.skip('modal has a focus trap', () => {
        cy.visit('https://alphagov.github.io/accessibility-tool-audit/tests/keyboard-access-lightbox-esc-key-doesnt-close-the-lightbox.html')
        cy.modalHasAFocusTrap(cy.findByRole('link', {name: 'Open lightbox'}));
    })

    it.skip('closes modal with esc', () => {
        cy.visit('https://media.kulturbanause.de/2018/06/html-dialog-element.html')
        cy.modalCanBeClosedByEsc(cy.findByRole('button', {name: 'Dialog mit show() öffnen'}));
    })

    it.skip('gets all focusable elements', () => {
        // removed hidden elements: checked
        // gets all links: checked
        cy.visit('http://localhost:3000/wcag/operable/keyboard-accessible/keyboard')
        cy.get('main').getFocusableElements().as('focusableElements')
    })

})