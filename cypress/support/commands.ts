/// <reference types="cypress" />
import '@testing-library/cypress/add-commands'

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
Cypress.Commands.add('modalCanBeClosedByButton', (modalOpenElementSelector) => {
    // there should be no open dialogs
    // TODO: Later change to 'dialog' instead of '.lightbox'
    cy.get('.lightbox').should('not.be.visible')

    // open modal
    // cy.get(`${modalOpenElementSelector}`).click()
    modalOpenElementSelector.click()

    // there should be (only) one open dialog
    // TODO: Change lightbox to dialog. Only assign alias here as we can not be sure that before the element exists in the DOM.
    cy.get('.lightbox').as('dialog').should('be.visible')
    // TODO: What if there is more than one dialog on the DOM?
    cy.get('@dialog').should('have.length', 1)

    // get first focusable element
    cy.focused().tab().as('firstFocusableElement'); // without tab the focus is still on the open link

    // TODO: tab through all focusable elements, click each one and see if the dialog is gone
    // TODO: Check if the location still is the same
    
    // do {
        cy.focused().tab().as('currentFocusedElement');
        cy.get('@currentFocusedElement').click()
        cy.go('back')

        cy.focused().tab().as('currentFocusedElement');
        cy.get('@currentFocusedElement').click()

    //     debugger;
    // } while (cy.get('dialog').should('be.visible') && cy.get('@currentFocusedElement').should('not.equal', cy.get('@firstFocusableElement')))

    // TODO: throw error if we get to the first element for the second time (better: any element for the second time)
    // if(cy.get('@firstFocusableElement') === cy.get('@currentFocusedElement')) {
    //     cy.log('Looped through all focusable elements in the dialog. \nThe dialog can not be closed with the keyboard. \nMake sure there is a button to close the dialog and it is accessible by keyboard.')
    //     expect(cy.get('@firstFocusableElement')).not.to.equal(cy.get('@currentFocusedElement'))
    // }

    // cy.log('Success!')
})

Cypress.Commands.add('modalCanBeClosedByEsc', (modalOpener) => {
    // there should be no open dialogs
    // TODO: Later change to 'dialog' instead of '.lightbox'
    cy.get('.lightbox').should('not.be.visible')

    // open modal
    modalOpener.click()

    // dialog should now be visible
    // TODO: Change lightbox to dialog. Only assign alias here as we can not be sure that before the element exists in the DOM.
    cy.get('.lightbox').as('dialog').should('be.visible')

    cy.focused().type('{esc}')

    // TODO: Later change to 'dialog' instead of '.lightbox'
    cy.get('.lightbox').should('not.be.visible')
})

Cypress.Commands.add('modalHasAFocusTrap', (modalOpener) => {
    // there should be no open dialogs
    // TODO: Later change to 'dialog' instead of '.lightbox'
    cy.get('.lightbox').should('not.be.visible')

    // open modal
    modalOpener.click()

    // dialog should now be visible
    // TODO: Change lightbox to dialog. Only assign alias here as we can not be sure that before the element exists in the DOM.
    cy.get('.lightbox').as('dialog').should('be.visible')

    cy.getFocusableElements(cy.get('@dialog')).as('focusableElements')

    // TODO: Tab to next HTMLElement, until we get to the first HTMLElement a second time or we leave the dialog
    // -> Find out if we are still in the list of elements
    // -> find out if we are at the first element
    // TODO: Check that we never visit an element twice

    cy.focused().tab().as('firstElement');
    cy.focused().as('currentElement').tab()
    cy.get('@focusedElements').find(cy.get('@currentElement'))
    cy.get('@currentElement').should('contain', cy.get('@focusableElements'))
    // TODO: HOW TO check if HTMLElement is within the HTMLElements group?



    // cy.get('@focusableElements').each((element) => {
    //   expect(cy.get('@focusableElements').find(element)).to.be.
    //   expect(cy.get('@focusableElements').contains())
    //   expect(element).to.be.oneOf(cy.get('@focusableElements'))
    // })

    // cy.get('@focusableElements').each(($element) => {
      
    // })

    // const elementCount = Cypress.$(cy.get('@focusableElements')).length;

    // for(let i = 0, i < this.elementCount, elementCount)
    // while (cy.get('@dialog') !== cy.get('@currentElement') && cy.get('@currentElement') !== cy.get('body')) {
      // cy.get('@currentElement').parents().find('dialog').should('not.be.empty')
    // }
    // stop when the location is a different location
})

  Cypress.Commands.add('getFocusableElements', (parent) => {
    // TODO: idea: exclude elements with tabindex greater than 1 and only include it with option?
    // only includes tabindex 0 and 1
    return parent.find('a[href], area[href], input:not([type="hidden"]), select, textarea, button, iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls], summary, [tabindex^="0"], [tabindex^="1"]')
    .not('[tabindex=-1], [disabled], :hidden, [aria-hidden]')
    .as('focusableElements')
  })


    // cy.focused().tab(); // Tab into the currently focused element
    // Tabbing does not exist in Cypress
    // cy.get("input").focus()
    // + has the now focused element tabindex set?
    // document.activeElement
    // cy.focused() // Yields the element currently in focus
    // Can only be called on a valid focusable element
    // Ensure the element you are trying to call .focus() on is a focusable element.
    // https://docs.cypress.io/api/commands/focus
    // cy.get('#enter').should("have.attr", "tabIndex")
    // get all focusable elements plus taborder: https://stackoverflow.com/questions/20250397/how-can-i-find-an-element-using-tabindex-javascript-not-jquery
    // compare two elements: expect($first).to.eql($second); https://stackoverflow.com/questions/53192609/how-to-compare-two-dom-elements-using-cypress
    // expect($focused[0] === $span[0]), 'span is focussed').to.be.true;
    // Chai: Difference equal to eql: equal = strict -> same reference .eql is deep equal -> compares values. Or use to.deep.equal to make it clearer. https://www.chaijs.com/api/bdd/#method_eql


export {}

declare global {
  namespace Cypress {
    interface Chainable {
        modalCanBeClosedByButton(modalOpenElementSelector: Chainable<JQuery<HTMLElement>>): Chainable<void>
        modalCanBeClosedByEsc(modalOpener: Chainable<JQuery<HTMLElement>>): Chainable<void>
        modalHasAFocusTrap(modalOpener: Chainable<JQuery<HTMLElement>>): Chainable<void>
        getFocusableElements(parent: Chainable<JQuery<HTMLElement>>): Chainable<JQuery<HTMLElement>>
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}