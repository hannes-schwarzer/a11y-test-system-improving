/// <reference types="cypress" />

it("closes modal with esc", () => {
  cy.visit("https://media.kulturbanause.de/2018/06/html-dialog-element.html");
  cy.findByRole("button", { name: "Dialog mit showModal() öffnen" }).click();
  cy.get("dialog#dialog").hidesDialogByEsc();
});

it("closes modal with esc", () => {
  cy.visit(
    "https://alphagov.github.io/accessibility-tool-audit/tests/keyboard-access-lightbox-focus-is-not-retained-within-the-lightbox.html"
  );
  cy.findByRole("link", { name: "Open lightbox" }).click();
  cy.get(".lightbox").hidesDialogByEsc();
});

it("does not close modal with esc", () => {
  cy.visit(
    "https://alphagov.github.io/accessibility-tool-audit/tests/keyboard-access-lightbox-esc-key-doesnt-close-the-lightbox.html"
  );
  cy.findByRole("link", { name: "Open lightbox" }).click();
  cy.get(".lightbox").hidesDialogByEsc();
});

it("does not close modal with esc", () => {
  cy.visit("https://media.kulturbanause.de/2018/06/html-dialog-element.html");
  cy.findByRole("button", { name: "Dialog mit show() öffnen" }).click();
  cy.get("dialog#dialog").hidesDialogByEsc();
});
