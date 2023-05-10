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

  Cypress.Commands.add('noEmptyParagraphs', {prevSubject: 'element'}, (subject) => {
    cy.wrap(subject).find('p:empty').should('have.length', 0)
    cy.wrap(subject).find('p').invoke('text').then((text) => {
      expect(text.trim()).not.equal('')
    })
  })

  Cypress.Commands.add('elementHasVisibleFocus', {prevSubject: 'element'}, (element) => {
    const pixelmatch = require('pixelmatch')

    cy.wrap(element).as('element')

    // screenshot from unfocused element
    // make sure element is not focused
    cy.get('@element', {log: false}).blur({force: true, log: false})
    cy.get('@element', {log: false}).screenshot('unfocused', {padding: 5, overwrite: true})

    // move real focus with visual identification to element and make screenshot
    cy.get('@element', {log: false}).focus({log: false})
    cy.realPress(["Shift", "Tab"], {log: false})
    cy.realPress("Tab", {log: false})
    cy.get('@element', {log: false}).screenshot('focused', {padding: 5, overwrite: true})

    // inspired from https://gambini.me/en/blog/comparing-website-screenshots-with-cypress-and-pixelmatch

    cy.readFile('./cypress/screenshots/focused.png', 'base64', {log: false}).then(focusedScreenshot => {
        cy.readFile('./cypress/screenshots/unfocused.png', 'base64', {log: false}).then(unfocusedScreenshot => {
            const img1 = PNG.sync.read(Buffer.from(focusedScreenshot, 'base64'))
            const img2 = PNG.sync.read(Buffer.from(unfocusedScreenshot, 'base64'))

            const {width, height} = img1;
            const diff = new PNG({width, height})

            const numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, {treshold: 0.1})

            const diffPercent = (numDiffPixels / (width * height) * 100)

            cy.log(`Found a ${diffPercent.toFixed(2)}% pixel difference`)

            expect(Math.round(diffPercent)).not.equal(0)
        })
    })
  })

  Cypress.Commands.add('elementsHaveVisibleFocus', {prevSubject: 'element'}, (element, excludedElements?) => {
    cy.wrap(element, {log: false}).as('elementRoot')

    // get focusable Elements
    cy.get('@elementRoot', {log: false}).getFocusableElements().not(excludedElements).as('focusableElements')

    cy.get('@focusableElements').each(($focusableElement) => {
      cy.wrap($focusableElement, {log: false}).elementHasVisibleFocus()
    })

  })

  Cypress.Commands.add('pageHasSkipLink', () => {
    //• Check that a link is the first focusable control on the Web page.
    // get first focusableElement of page and check that it is a link
    cy.get('body').getFocusableElements().eq(0).as('firstElement')
    // TODO: Better just tab to first element and then check?
    cy.get('@firstElement').should('have.attr', 'href').and('match', /#.*/)
    cy.get('@firstElement').invoke('prop', 'tagName').should('eq', 'A')

    //• Check that the description of the link communicates that it links to the main content.
    // check name of link?

    //• Check that the link is either always visible or visible when it has keyboard focus. 
    // element should be visible when in focus -> Set focus and then it should be visible
    cy.get('body').tab()
    
    cy.focused().then(($focusedElement) => {
      cy.get('@firstElement').then(($firstElement) => {
        expect($focusedElement.get(0)).to.deep.equal($firstElement.get(0))
      })
    })

    cy.get('@firstElement').should('be.visible').and('not.be.hidden')

    //• Check that activating the link moves the focus to the main content. 
    // click link, then expect parent to be 'main'
    //• Check that after activating the link, the keyboard focus has moved to the main content.
    // also check from focused element -> can do in one, as when from focused there is main it's okay

    cy.focused().realType('{enter}')
    cy.focused().scrollIntoView()
    cy.realPress('Tab')
    cy.focused().parentsUntil('main').eq(-1).parent().invoke('prop', 'tagName').should('eq', 'MAIN')
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
          /**
           * Check all tabbable elements within the selected element on having a visible focus state which is different than unfocused
          * @param {string} excludedElements (optional) Selector for elements to exclude
          * @example
          * cy.get('body').elementsHaveVisibleFocus('a.skip-link')
          */
        elementsHaveVisibleFocus(excludedElements?: string): Chainable<void>
        pageHasSkipLink(): Chainable<void>
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}