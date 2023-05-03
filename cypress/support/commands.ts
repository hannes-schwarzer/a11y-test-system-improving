/// <reference types="cypress" />
import '@testing-library/cypress/add-commands'
import { tabbable } from 'tabbable'
import {PNG} from 'pngjs'

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

        // TODO: before check if it is a link which redirects you to a different page?
        // plus if button opens something it is not working either
        // TODO: Maybe: Only click on buttons without submit. But if dialog open and close is used with URL parameters that is a false positive then.
        // button nicht aria-haspopup

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

Cypress.Commands.add('dialogRetainsFocus', {prevSubject: 'element'}, (dialog) => {
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

Cypress.Commands.add('dialogGetsFocus', {prevSubject: 'element'}, (dialog) => {
  // focus should be on an element inside the dialog (not on the dialog itself)

  // get all elements
  cy.wrap(dialog).getFocusableElements().as('focusableElements')

  let focusableElements: HTMLElement[] = []

    cy.get('@focusableElements', {log: false}).each(($focusableElement) => {
      focusableElements.push($focusableElement[0])
  }).then(() => {
    cy.focused({log: false}).then(($focusedElement) => {
      cy.wrap(focusableElements, {log: false}).should('include', $focusedElement[0])
    })
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

  Cypress.Commands.add('noEmptyParagraphs', () => {
    // TODO: Include paragraphs with whitespace
    cy.get('body').find('p:empty').should('have.length', 0)
  })

  Cypress.Commands.add('elementHasVisibleFocus', {prevSubject: 'element'}, (element) => {
    const pixelmatch = require('pixelmatch')

    // get all focusableElements
    cy.wrap(element).getFocusableElements().as('focusableElements')
    cy.wrap(element).as('element')

    // screenshot from unfocused element
    cy.get('@element').screenshot('unfocused', {padding: 10, overwrite: true})

    // screenshot from focused element
    cy.get('@element').focus()
    cy.focused().tab({shift: true})
    cy.focused().tab()
    cy.get('@element').screenshot('focused', {padding: 10, overwrite: true})

    // inspired from https://gambini.me/en/blog/comparing-website-screenshots-with-cypress-and-pixelmatch

    cy.fixture('../screenshots/focused.png', 'base64').then(focusedScreenshot => {
        cy.fixture('../screenshots/unfocused.png', 'base64').then(unfocusedScreenshot => {
            const img1 = PNG.sync.read(Buffer.from(focusedScreenshot, 'base64'))
            const img2 = PNG.sync.read(Buffer.from(unfocusedScreenshot, 'base64'))

            const {width, height} = img1;
            const diff = new PNG({width, height})

            console.log(`image 1 dimensions: ${width} x ${height}`)
            console.log(`image 2 dimensions: ${img2.width} x ${img2.height}`)

            const numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, {treshold: 0.1})

            const diffPercent = (numDiffPixels / (width * height) * 100)

            cy.log(`Found a ${diffPercent.toFixed(2)}% pixel difference`)

            expect(diffPercent).not.equal(0)
        })
    })
  })

export {}

declare global {
  namespace Cypress {
    interface Chainable {
        dialogClosableByElement(): Chainable<void>
        dialogClosableByEsc(): Chainable<void>
        dialogRetainsFocus(): Chainable<void>
        dialogGetsFocus(): Chainable<void>
        pageHasNoFocusTrap(): Chainable<void>
        getFocusableElements(): Chainable<JQuery<HTMLElement>>
        noEmptyParagraphs(): Chainable<void>
        elementHasVisibleFocus(): Chainable<void>
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}