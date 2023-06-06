/// <reference types="cypress" />
import "@testing-library/cypress/add-commands";
import { tabbable } from "tabbable";
import { PNG } from "pngjs";

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
Cypress.Commands.add(
  "dialogClosableByElement",
  { prevSubject: "element" },
  (dialog) => {
    cy.wrap(dialog).as("dialog").should("be.visible");

    cy.get("@dialog").getTabbableElements().as("focusableElements");

    let dialogClosed = false;

    cy.get("@focusableElements").each(($el) => {
      cy.then(() => {
        if (dialogClosed) {
          return false;
        }

        // TODO: To work more reliable one would need to check if it is a link which redirects you to a different page before clicking
        // plus if button opens something it is not working either

        cy.wrap($el)
          .click()
          .then(() => {
            if (cy.get("@dialog").should("not.be.visible")) {
              // end loop
              dialogClosed = true;
            } else {
              // every loop, tab one element further
              cy.focused().tab();
            }
          });
      });
    });

    cy.get("@dialog").should("not.be.visible");
  }
);

Cypress.Commands.add(
  "dialogClosableByEsc",
  { prevSubject: "element" },
  (dialog) => {
    cy.wrap(dialog).as("dialog").should("be.visible");

    cy.realType("{esc}");

    // because checking if neither visible nor existant is not easily possible in Cypress
    cy.get("@dialog").should("not.be.visible");
  }
);

Cypress.Commands.add(
  "dialogRetainsFocus",
  { prevSubject: "element" },
  (dialog) => {
    cy.wrap(dialog).getTabbableElements().as("focusableElements");

    cy.get("@focusableElements").each(($focusableElement) => {
      cy.focused().then(($focusedElement) => {
        expect($focusedElement[0]).to.deep.equal($focusableElement[0]);
      });

      // every loop, tab one element further
      cy.focused().tab();
    });

    // one more tab should result in tabbing to the first tabbable element again
    cy.get("@focusableElements")
      .eq(0)
      .then(($firstElement) => {
        cy.focused().then(($focusedElement) => {
          expect($firstElement[0]).to.deep.equal($focusedElement[0]);
        });
      });

    // success message
    cy.get("@focusableElements").then(($focusableElements) => {
      cy.log(
        `Successfully looped through ${$focusableElements.length} elements!`
      );
    });
  }
);

Cypress.Commands.add(
  "dialogGetsFocus",
  { prevSubject: "element" },
  (dialog) => {
    // focus should be on an element inside the dialog (not on the dialog itself)

    // get all elements
    cy.wrap(dialog).getTabbableElements().as("focusableElements");

    let focusableElements: HTMLElement[] = [];

    cy.get("@focusableElements", { log: false })
      .each(($focusableElement) => {
        focusableElements.push($focusableElement[0]);
      })
      .then(() => {
        cy.focused({ log: false }).then(($focusedElement) => {
          cy.wrap(focusableElements, { log: false }).should(
            "include",
            $focusedElement[0]
          );
        });
      });
  }
);

Cypress.Commands.add("pageHasNoFocusTrap", () => {
  cy.get("body").getTabbableElements().as("focusableElements");

  // if we visit an element twice there would be an error
  // if we don't loop through the whole document there would be an error

  cy.get("body").tab(); // move focus to first element on page

  cy.get("@focusableElements").each(($focusableElement) => {
    cy.focused().then(($focusedElement) => {
      expect($focusedElement[0]).to.deep.equal($focusableElement[0]);
    });

    // every loop, tab one element further
    cy.focused().tab();
  });

  // one more tab should result in tabbing to the first tabbable element again -> all elements have been reached
  cy.get("@focusableElements")
    .eq(0)
    .then(($firstElement) => {
      cy.focused().then(($focusedElement) => {
        expect($firstElement[0]).to.deep.equal($focusedElement[0]);
      });
    });
});

Cypress.Commands.add(
  "getTabbableElements",
  { prevSubject: "element" },
  (parent /* :JQuery<HTMLElement> */) => {
    return cy.wrap(parent).then(($parent /* JQuery<HTMLElement */) => {
      cy.wrap(tabbable($parent[0] /* gets HTMLElement */));
    });

    // Own implementation. Only includes tabindex 0 and 1
    // TODO: Throw error if element has tabindex greater than 1 or give option to include those with boolean?
    // return cy.wrap(parent).
    // find('a[href], area[href], input:not([type="hidden"]), select, textarea, button, iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls], summary, [tabindex^="0"], [tabindex^="1"]')
    // .not('[tabindex=-1], [disabled], :hidden, [aria-hidden]')
  }
);

Cypress.Commands.add("noEmptyParagraphs", () => {
  cy.get("body").find("p:empty").should("have.length", 0);
  cy.get("body")
    .find("p")
    .each(($p) => {
      expect($p.text().trim()).not.equal("");
    });
});

Cypress.Commands.add(
  "elementHasVisibleFocus",
  { prevSubject: "element" },
  (element) => {
    const pixelmatch = require("pixelmatch");

    cy.wrap(element).as("element");

    // screenshot from unfocused element
    // make sure element is not focused
    cy.get("@element", { log: false }).blur({ force: true, log: false });
    cy.get("@element", { log: false }).screenshot("focusTest/unfocused", {
      padding: 5,
      overwrite: true,
    });

    // move real focus with visual identification to element and make screenshot
    cy.get("@element", { log: false }).focus({ log: false });
    cy.realPress(["Shift", "Tab"], { log: false });
    cy.realPress("Tab", { log: false });
    cy.get("@element", { log: false }).screenshot("focusTest/focused", {
      padding: 5,
      overwrite: true,
    });

    // inspired from https://gambini.me/en/blog/comparing-website-screenshots-with-cypress-and-pixelmatch

    cy.readFile("./cypress/screenshots/focusTest/focused.png", "base64", {
      log: false,
    }).then((focusedScreenshot) => {
      cy.readFile("./cypress/screenshots/focusTest/unfocused.png", "base64", {
        log: false,
      }).then((unfocusedScreenshot) => {
        const img1 = PNG.sync.read(Buffer.from(focusedScreenshot, "base64"));
        const img2 = PNG.sync.read(Buffer.from(unfocusedScreenshot, "base64"));

        const { width, height } = img1;
        const diff = new PNG({ width, height });

        const numDiffPixels = pixelmatch(
          img1.data,
          img2.data,
          diff.data,
          width,
          height,
          { treshold: 0.1 }
        );

        const diffPercent = (numDiffPixels / (width * height)) * 100;

        cy.log(`Found a ${diffPercent.toFixed(2)}% pixel difference`);

        expect(Math.round(diffPercent * 100) / 100).to.be.greaterThan(0);
      });
    });
  }
);

Cypress.Commands.add(
  "elementsHaveVisibleFocus",
  { prevSubject: "element" },
  (element, excludedElements?) => {
    cy.wrap(element, { log: false }).as("elementRoot");

    // get focusable Elements
    cy.get("@elementRoot", { log: false })
      .getTabbableElements()
      .not(excludedElements)
      .as("focusableElements");

    cy.get("@focusableElements").each(($focusableElement) => {
      cy.wrap($focusableElement, { log: false }).elementHasVisibleFocus();
    });
  }
);

Cypress.Commands.add("firstLinkIsSkipLink", () => {
  // Check that a link is the first focusable control on the page with a local ref
  cy.get("body").tab();
  cy.focused().as("firstElement");

  cy.get("@firstElement").should("have.attr", "href").and("match", /#.*/);
  cy.get("@firstElement").invoke("prop", "tagName").should("eq", "A");

  // link should be visible when in focus
  cy.get("@firstElement").should("be.visible");
});

Cypress.Commands.add(
  "skipLinkMovesFocusToMain",
  { prevSubject: "element" },
  (subject) => {
    // link should be visible when in focus
    cy.wrap(subject).as("skipLink");
    cy.get("@skipLink").scrollIntoView({ log: false }).should("be.visible");

    cy.get("@skipLink").realType("{enter}");
    cy.realPress("Tab");
    cy.focused()
      .parentsUntil('main, [role="main"]')
      .eq(-1)
      .parent()
      .invoke("prop", "tagName")
      // element is undefined if no main-element has been found
      .should("not.be.an", "undefined");
  }
);

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * @deprecated
       * Checks that there is an element which can close the dialog by clicking on it.
       * Dialog must be visible and opened.
       * EXPERIMENTAL/not reliable! Does not work if another element gets opened or a link moves focus.
       * Only works if the dialog stays in the DOM after closing, but hidden.
       * @example
       * cy.get('@dialog').dialogClosableByElement()
       */
      dialogClosableByElement(): Chainable<void>;
      /**
       * Checks that the dialog is closable by pressing Escape.
       * Dialog must be visible and opened.
       * Dialog must be existant in DOM after closing.
       * @example
       * cy.get('@dialog').dialogClosableByEsc()
       */
      dialogClosableByEsc(): Chainable<void>;
      /**
       * Checks that the focus stays within the dialog by tabbing through all tabbable elements within the dialog.
       * Dialog must be visible and opened.
       * @example
       * cy.get('@dialog').dialogRetainsFocus()
       */
      dialogRetainsFocus(): Chainable<void>;
      /**
       * Checks that the focus moves to the dialog after opening
       * by checking if the currently focused element is within the tabbable elements of the dialog.
       * Dialog must be visible and opened.
       * @example
       * cy.get('@dialog').dialogGetsFocus()
       */
      dialogGetsFocus(): Chainable<void>;
      /**
       * Checks that there are no focus traps by tabbing through all elements on the webpage.
       * Expects to reach every element on the page once and in order of tabbable elements.
       * @example
       * cy.pageHasNoFocusTrap()
       */
      pageHasNoFocusTrap(): Chainable<void>;
      /**
       * Returns all tabbable elements within the provided element.
       * @example
       * cy.get('body').getTabbableElements().as('tabbableElements')
       */
      getTabbableElements(): Chainable<JQuery<HTMLElement>>;
      /**
       * Checks the whole page for empty paragraphs.
       * To trigger the paragraphs they must either be completely empty or just whitespace.
       * @example
       * // code
       * <p></p>
       * <p>   </p>
       *
       * // Cypress
       * cy.noEmptyParagraphs()
       */
      noEmptyParagraphs(): Chainable<void>;
      /**
       * Checks a single element on having a visible focus state which is different than unfocused.
       * Saves a screenshot of the element in unfocused and focused state.
       * @example
       * cy.get('button.buy').elementHasVisibleFocus()
       */
      elementHasVisibleFocus(): Chainable<void>;
      /**
       * Check all tabbable elements within the selected element on having a visible focus state which is different than unfocused
       * Saves a screenshot of the element checked last in unfocused and focused state.
       * @param {string} excludedElements (optional) Selector for elements to exclude
       * @example
       * cy.get('body').elementsHaveVisibleFocus('a.skip-link')
       */
      elementsHaveVisibleFocus(excludedElements?: string): Chainable<void>;
      /**
       * Checks that the first focusable element is a link with a local ref.
       * Gets the first element by tabbing once inside the body.
       * The link must be visible after tabbing to it. Stops after the first element appears with no difference.
       * @example
       * // code
       * <a class="skip-link" href="#main">Skip to main content</a>
       *
       * // Cypress
       * cy.firstLinkIsSkipLink()
       */
      firstLinkIsSkipLink(): Chainable<void>;
      /**
       * Checks that selecting the skip link moves focus to main (by pressing enter).
       * A chained command, one needs to select the skip-link first.
       * The link must be visible.
       * @example
       * cy.get('a.skip-link').skipLinkMovesFocusToMain()
       */
      skipLinkMovesFocusToMain(): Chainable<void>;
      //       login(email: string, password: string): Chainable<void>
      //       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      //       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      //       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}
