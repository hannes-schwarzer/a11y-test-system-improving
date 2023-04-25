/// <reference types="cypress" />
import '@testing-library/cypress/add-commands'
import { tabbable } from 'tabbable'

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// function needs element which opens the modal, plus an identifier of the modal
Cypress.Commands.add('dialogClosableByElement', {prevSubject: 'element'}, (dialog) => {
    cy.wrap(dialog).as('dialog').should('be.visible')

    cy.get('@dialog').getFocusableElements().as('focusableElements')

    let dialogClosed = false;

    cy.get('@focusableElements').each(($el, index, $list) => {
      cy.then(() => 
      {
        if(dialogClosed) {
          return false
        }

        cy.wrap($el).click().then(() => {
           if(cy.get('@dialog').should('not.exist') || cy.get('@dialog').should('not.be.visible')) {
          // end loop
          dialogClosed = true
        }
      })

        // every loop, tab one element further
        cy.focused().tab()
      })
    })

    cy.get('@dialog').should('not.exist') || cy.get('@dialog').should('not.be.visible')
})

Cypress.Commands.add('dialogClosableByEsc', {prevSubject: 'element'}, (dialog) => {
    cy.wrap(dialog).as('dialog').should('be.visible')

    cy.realType('{esc}')

    cy.get('@dialog').should('not.be.visible')
})

Cypress.Commands.add('dialogHasAFocusTrap', {prevSubject: 'element'}, (dialog) => {
    cy.wrap(dialog).getFocusableElements().as('focusableElements')

    cy.get('@focusableElements').each(($focusableElement) => {
      cy.focused().then($focusedElement => {
        expect($focusedElement[0]).to.deep.equal($focusableElement[0])
      })

      // every loop, tab one element further
      cy.focused().tab()
    })

    // one more tab should result in tabbing to the first tabbable element again
    cy.get('@focusableElements').eq(0).then($firstElement => {
      cy.focused().then($focusedElement => {
        expect($firstElement[0]).to.deep.equal($focusedElement[0])
      })
    })

    // success message
    cy.get('@focusableElements').then(($focusableElements) => {
      cy.log(`Successfully looped through ${$focusableElements.length} elements!`)
    })
})

Cypress.Commands.add('pageHasNoFocusTrap', () => {    
    cy.get('body').getFocusableElements().as('focusableElements')

    // if we visit an element twice there would be an error
    // if we don't loop through the whole document there would be an error

    cy.get('body').tab() // move focus to first element on page

    cy.get('@focusableElements').each(($focusableElement) => {
      cy.focused().then($focusedElement => {
        expect($focusedElement[0]).to.deep.equal($focusableElement[0])
      })

      // every loop, tab one element further
      cy.focused().tab()
    })

    // one more tab should result in tabbing to the first tabbable element again -> all elements have been reached
    cy.get('@focusableElements').eq(0).then($firstElement => {
      cy.focused().then($focusedElement => {
        expect($firstElement[0]).to.deep.equal($focusedElement[0])
      })
    })
})

    Cypress.Commands.add('getFocusableElements', {prevSubject: 'element'}, (parent /* :JQuery<HTMLElement> */) => {
      return cy.wrap(parent).then(($parent /* JQuery<HTMLElement */) => {
        cy.wrap(tabbable($parent[0] /* gets HTMLElement */))
      })

      // Own implementation. Only includes tabindex 0 and 1
      // TODO: Throw error if element has tabindex greater than 1 or give option to include those with boolean?
      // return cy.wrap(parent).
      // find('a[href], area[href], input:not([type="hidden"]), select, textarea, button, iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls], summary, [tabindex^="0"], [tabindex^="1"]')
      // .not('[tabindex=-1], [disabled], :hidden, [aria-hidden]')
  })

export {}

declare global {
  namespace Cypress {
    interface Chainable {
        dialogClosableByElement(): Chainable<void>
        dialogClosableByEsc(): Chainable<void>
        dialogHasAFocusTrap(): Chainable<void>
        pageHasNoFocusTrap(): Chainable<void>
        getFocusableElements(): Chainable<JQuery<HTMLElement>>
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}