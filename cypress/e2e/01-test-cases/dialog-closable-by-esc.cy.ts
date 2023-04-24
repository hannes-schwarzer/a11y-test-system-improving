/// <reference types="cypress" />

// expect to fail
it('closes modal with esc', () => {
    cy.visit('https://alphagov.github.io/accessibility-tool-audit/tests/keyboard-access-lightbox-esc-key-doesnt-close-the-lightbox.html')
    cy.findByRole('link', {name: 'Open lightbox'}).click()
    cy.get('.lightbox').dialogClosableByEsc()
})

// expect to fail
it('closes modal with esc', () => {
    cy.visit('https://media.kulturbanause.de/2018/06/html-dialog-element.html')
    cy.findByRole('button', {name: 'Dialog mit show() öffnen'}).click()
    cy.get('dialog#dialog').dialogClosableByEsc();
})

it('closes modal with esc', () => {
    cy.visit('https://media.kulturbanause.de/2018/06/html-dialog-element.html')
    cy.findByRole('button', {name: 'Dialog mit showModal() öffnen'}).click()
    cy.get('dialog#dialog').dialogClosableByEsc();
})

