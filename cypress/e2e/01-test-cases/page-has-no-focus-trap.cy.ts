/// <reference types="cypress" />

beforeEach(() => {
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
});

it("page has no focus trap", () => {
  cy.visit(
    "http://localhost:3000/wcag/perceivable/text-alternatives/non-text-content"
  );
  cy.pageHasNoFocusTrap();
});

it("has no focus trap", () => {
  cy.visit("https://www.gov.uk/");
  cy.findByRole("button", { name: "Accept additional cookies" }).click();
  cy.findByRole("button", { name: "Hide this message" }).click();
  cy.pageHasNoFocusTrap();
});

it("has no focus trap", () => {
  cy.visit("https://www.fonic.de/");
  // when button is shown, DOM is fully loaded
  cy.findByRole("button", { name: "Animationen anhalten" });
  cy.pageHasNoFocusTrap();
});

it("has no focus trap", () => {
  cy.visit("https://www.fonic-mobile.de/");
  // when button is shown, DOM is almost fully loaded
  cy.findByRole("button", { name: "Animationen anhalten" });
  cy.wait(1000);
  cy.pageHasNoFocusTrap();
});

it("has no focus trap", () => {
  cy.visit("https://www.fonic.de/prepaid-tarife");
  // when button is shown, DOM is fully loaded
  cy.findByRole("button", { name: "FONIC Classic Sofort bestellen" });
  cy.pageHasNoFocusTrap();
});

it("has no focus trap", () => {
  cy.visit("https://octopus.energy/");
  cy.get("#noToCountrySpecificWebsiteAddress").click();
  cy.pageHasNoFocusTrap();
});

it("has no focus trap", () => {
  cy.viewport(1920, 1080);
  cy.visit("https://www.google.com/search?q=haus");
  cy.findByRole("button", { name: "Alle akzeptieren" }).click();
  // when button is shown, DOM is fully loaded
  cy.findByRole("button", { name: "Einstellungen" });
  cy.pageHasNoFocusTrap();
});

it("page has a focus trap", () => {
  cy.visit("http://localhost:3000/wcag/operable/keyboard-accessible/keyboard");
  cy.pageHasNoFocusTrap();
});

it("has elements which change their text", () => {
  cy.visit("https://www.google.com/");
  cy.findByRole("button", { name: "Alle akzeptieren" }).click();
  cy.pageHasNoFocusTrap();
});

it("page has a focus trap", () => {
  cy.visit(
    "http://localhost:3000/wcag/operable/keyboard-accessible/no-keyboard-trap"
  );
  cy.pageHasNoFocusTrap();
});
