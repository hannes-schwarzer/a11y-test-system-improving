it("has skip link", () => {
  cy.visit("https://www.gov.uk/");
  cy.findByRole("button", { name: "Accept additional cookies" }).click();
  cy.findByRole("button", { name: "Hide this message" }).click();

  cy.firstLinkIsSkipLink();
  cy.get("body").tab();
  cy.focused().skipLinkMovesFocusToMain();
});

it("has skip link", () => {
  cy.visit("http://localhost:3000/");

  cy.firstLinkIsSkipLink();
  cy.get("body").tab();
  cy.focused().skipLinkMovesFocusToMain();
});

it("has skip link", () => {
  cy.visit("https://www.h-ka.de/");
  cy.findByRole("button", { name: "Speichern und schließen" }).click();

  cy.firstLinkIsSkipLink();
  cy.get("body").tab();
  cy.focused().skipLinkMovesFocusToMain();
});

it("has no skip link", () => {
  cy.visit("https://www.fonic.de/");
  // when button is shown, DOM is fully loaded
  cy.findByRole("button", { name: "Animationen anhalten" });

  cy.firstLinkIsSkipLink();
});

it("has no skip link", () => {
  cy.visit("http://localhost:3000/wcag/operable/navigable/bypass-blocks");

  cy.firstLinkIsSkipLink();
});

it("has skip link but not to main", () => {
  cy.visit("https://www.stadtwerke-karlsruhe.de/de/");
  cy.findByRole("button", { name: "Auswahl bestätigen" }).click();
  cy.wait(1000);

  cy.firstLinkIsSkipLink();
  cy.get("body").tab();
  cy.focused().skipLinkMovesFocusToMain();
});

it("has skip link that does not move focus to main but should", () => {
  cy.visit("https://www.stadtwerke-karlsruhe.de/de/");
  cy.findByRole("button", { name: "Auswahl bestätigen" }).click();

  cy.get("body").tab().tab();
  cy.focused().skipLinkMovesFocusToMain();
});
