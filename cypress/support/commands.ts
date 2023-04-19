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
    // cy.get('.lightbox').should('not.be.visible')
    cy.get('dialog').should('not.be.visible')

    // open modal
    modalOpener.click()

    // dialog should now be visible
    // TODO: Change lightbox to dialog. Only assign alias here as we can not be sure that before the element exists in the DOM.
    // cy.get('.lightbox').as('dialog').should('be.visible')
    cy.get('dialog').as('dialog').should('be.visible')

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


    //cy.getFocusableElements(cy.get('@dialog')).as('focusableElements')
    cy.get('@dialog').find('a[href], area[href], input:not([type="hidden"]), select, textarea, button, iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls], summary, [tabindex^="0"], [tabindex^="1"]')
    .not('[tabindex=-1], [disabled], :hidden, [aria-hidden]').as('focusableElements')

    // TODO: Tab to next HTMLElement, until we get to the first HTMLElement a second time or we leave the dialog
    // -> Find out if we are still in the list of elements
    // -> find out if we are at the first element
    // TODO: Check that we never visit an element twice

    // cy.focused().tab().as('firstElement');
    // cy.focused().as('currentElement').tab()

    cy.get('@focusableElements').each(($element) => {
      // every loop, tab one element further
      // TODO: Remove first tab when using a real dialog and add a tab afterwards
      cy.focused().tab().then($focused => {
        expect($focused).to.deep.equal($element)
      })
    })

    // one more tab should result in tabbing to the first tabbable element again
    cy.focused().tab().then($focused => {
      expect($focused).to.deep.equal(cy.get('@focusableElements').eq(0))
    })
})

Cypress.Commands.add('pageHasNoFocusTrap', () => {
    // cy.get('body').find('a[href], area[href], input:not([type="hidden"]), select, textarea, button, iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls], summary, [tabindex^="0"], [tabindex^="1"]')
    // .not('[tabindex=-1], [disabled], :hidden, [aria-hidden]').as('focusableElements')

    // cy.getFocusableElements(cy.get('body')).as('focusableElements')
    
    // working
    // cy.get('body').getFocusableElements().as('focusableElements')

        // working:
    // getFocusableElements2(cy.get('body')).as('focusableElements')

    // working:
    getFocusableElements4(cy.get('body')).as('focusableElements')

    // not working:
    // cy.getFocusableElements2(cy.get('body')).as('focusableElements')

    // not working
    // cy.get('body').getFocusableElements3().as('focusableElements')

        // cy.get('body').then(() => {
          // cy.getFocusableElements(cy.get('body')).as('focusableElements')
    // })

        // cy.get('body').then(() => {
          // cy.getFocusableElements(cy.get('body')).then((el) => {
            // cy.wrap(el).as('focusedElements')
          // })
    // })

    // working:
    // cy.getFocusableElements(cy.get('body')).then((elements) => {
      // cy.wrap(elements).as('focusedElements')
    // })


//  cy.get('#my-parent-element').then(($parent) => {
    // cy.getFocusableElements(Cypress.$($parent)).each(($el) => {
      // Do something with each focusable element
    // })})
    
    // if we visit an element twice there would be an error, too
    // if we don't loop through the document there would be an error, too

    cy.get('body').tab() // move focus to first element on page

    cy.get('@focusableElements').each(($focusableElement) => {
      // every loop, tab one element further
      cy.focused().then($focusedElement => {
        // expect($focused.get(0)).to.deep.equal($element.get(0))
        // expect($focused[0] === $element[0]).to.be.true;
        expect($focusedElement[0]).to.deep.equal($focusableElement[0])
        // expect($focused[0]).to.equal($element[0])
        // expect($focused[0]).to.eql($element[0])
        // expect($focused[0]).to.eq($element[0])
      })
      cy.focused().tab()
    })

    // one more tab should result in tabbing to the first tabbable element again
    cy.get('@focusableElements').eq(0).then($firstElement => {
      cy.focused().then($focusedElement => {
        expect($firstElement[0]).to.deep.equal($focusedElement[0])
      })
    })
})

  Cypress.Commands.add('getFocusableElements', {prevSubject: true}, (prevSubject: Cypress.Chainable<JQuery<HTMLElement>>) => {
    // only includes tabindex 0 and 1
    // TODO: Throw error if element has tabindex greater than 1 or give option to include those with boolean?
    return prevSubject.
      find('a[href], area[href], input:not([type="hidden"]), select, textarea, button, iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls], summary, [tabindex^="0"], [tabindex^="1"]')
      .not('[tabindex=-1], [disabled], :hidden, [aria-hidden]')
  })

  // working
  Cypress.Commands.add('getFocusableElements2', (parent) => {
    parent.then(($parent) => {
      const focusableElements = tabbable($parent[0])

      cy.wait(5000)
      return cy.wrap(focusableElements)
    })
  })

  // working
  function getFocusableElements4(parent: Cypress.Chainable<JQuery<HTMLElement>>): Cypress.Chainable<JQuery<HTMLElement>> {
    return parent.then(($parent) => {
      cy.wrap(tabbable($parent[0]))
    })
  }

  // TODO: Make working
    Cypress.Commands.add('getFocusableElements3', {prevSubject: true}, (parent: Cypress.Chainable<JQuery<HTMLElement>>) => {
      return parent.then(($parent) => {
        cy.wrap(tabbable($parent[0]))
      })
  })


export {}

declare global {
  namespace Cypress {
    interface Chainable {
        modalCanBeClosedByButton(modalOpenElementSelector: Chainable<JQuery<HTMLElement>>): Chainable<void>
        modalCanBeClosedByEsc(modalOpener: Chainable<JQuery<HTMLElement>>): Chainable<void>
        modalHasAFocusTrap(modalOpener: Chainable<JQuery<HTMLElement>>): Chainable<void>
        pageHasNoFocusTrap(): Chainable<void>
        getFocusableElements(): Chainable<JQuery<HTMLElement>>
        getFocusableElements2(parent: Chainable<JQuery<HTMLElement>>): Chainable<JQuery<HTMLElement>>
        getFocusableElements3(): Chainable<JQuery<HTMLElement>>
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}