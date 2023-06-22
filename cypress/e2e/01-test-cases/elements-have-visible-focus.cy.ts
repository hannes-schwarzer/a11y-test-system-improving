beforeEach(() => {
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
});

it("has visible focus: single element", () => {
  cy.visit("https://www.gov.uk/");

  cy.findByRole("search").find("input").elementHasVisibleFocus();
});

it("has visible focus: single element", () => {
  cy.visit(
    "https://alphagov.github.io/accessibility-tool-audit/tests/colour-and-contrast-focus-not-visible.html"
  );

  cy.findByRole("link", {
    name: "This links has visible focus",
  }).elementHasVisibleFocus();
});

it("has visible focus: single element", () => {
  cy.visit("https://www.fonic.de/");

  cy.get("a.logo").elementHasVisibleFocus();
});

it("has visible focus: whole site", () => {
  cy.visit("https://www.fonic.de/");

  // when button is shown, DOM is fully loaded
  cy.findByRole("button", { name: "Animationen anhalten" });

  cy.get("body").elementsHaveVisibleFocus("#skiplink");
});

it("has visible focus: section", () => {
  cy.visit("https://www.gov.uk/");

  cy.get(
    "section.homepage-section.homepage-section--links-and-search"
  ).elementsHaveVisibleFocus();
});

it("has visible focus: whole site", () => {
  cy.visit("https://www.gov.uk/");

  cy.get("body").elementsHaveVisibleFocus(".gem-c-skip-link");
});

it("has no visible focus: single element", () => {
  cy.visit(
    "https://alphagov.github.io/accessibility-tool-audit/tests/keyboard-access-keyboard-focus-is-not-indicated-visually.html"
  );

  cy.findByRole("link", {
    name: "Link with no focus style",
  }).elementHasVisibleFocus();
});

it("has no visible focus: single element", () => {
  cy.visit("https://suitsupply.com/en-de/");

  // remove cookie notice
  cy.findByRole("button", { name: "Accept" }).click();

  cy.findByRole("link", {
    name: "Shipping & Delivery",
  }).elementHasVisibleFocus();
});

it("has no visible focus: whole site", () => {
  cy.visit("https://suitsupply.com/en-de/");

  // remove cookie notice
  cy.findByRole("button", { name: "Accept" }).click();

  cy.get("body").elementsHaveVisibleFocus();
});

it("has no visible focus but error due to moving button on focus", () => {
  cy.visit(
    "https://alphagov.github.io/accessibility-tool-audit/tests/colour-and-contrast-focus-not-visible.html"
  );

  cy.findByRole("button", { name: "Search" }).elementHasVisibleFocus();
});
