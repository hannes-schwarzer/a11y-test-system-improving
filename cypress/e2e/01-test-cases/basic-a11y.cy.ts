/// <reference types="cypress" />

describe('first', () => {
    it('should close modal with button and keyboard', () => {
        cy.visit('http://localhost:3000/wcag/operable/keyboard-accessible/keyboard')
        cy.dialogCanBeClosedByButton(cy.findByRole('link', {name: 'Open lightbox'}));        
    })

    it('closes modal with esc', () => {
        cy.visit('https://alphagov.github.io/accessibility-tool-audit/tests/keyboard-access-lightbox-esc-key-doesnt-close-the-lightbox.html')
        cy.dialogCanBeClosedByEsc(cy.findByRole('link', {name: 'Open lightbox'}))
    })

    it('closes modal with esc', () => {
        cy.visit('https://media.kulturbanause.de/2018/06/html-dialog-element.html')
        cy.dialogCanBeClosedByEsc(cy.findByRole('button', {name: 'Dialog mit show() öffnen'}));
    })

    it('gets all focusable elements', () => {
        // removed hidden elements: checked
        // gets all links: checked
        cy.visit('http://localhost:3000/wcag/operable/keyboard-accessible/keyboard')
        cy.get('main').getFocusableElements().as('focusableElements')
    })

})