beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
})

it('has difference: single element', () => {
    cy.visit('https://www.gov.uk/')

    cy.findByRole('search').find('input').elementHasVisibleFocus()
})

it('has difference: single element', () => {
    cy.visit('https://alphagov.github.io/accessibility-tool-audit/tests/colour-and-contrast-focus-not-visible.html')

    cy.findByRole('link', {name: 'This links has visible focus'}).elementHasVisibleFocus()
})

it('has difference: single element', () => {
    cy.visit('https://www.fonic.de/')

    cy.get('a.logo').elementHasVisibleFocus()
})

// button moves on focus -> error with image size
it.skip('has no difference', () => {
    cy.visit('https://alphagov.github.io/accessibility-tool-audit/tests/colour-and-contrast-focus-not-visible.html')

    cy.findByRole('button', {name: 'Search'}).elementHasVisibleFocus()
})

it('has no difference: single element', () => {
    cy.visit('https://alphagov.github.io/accessibility-tool-audit/tests/keyboard-access-keyboard-focus-is-not-indicated-visually.html')

    cy.findByRole('link', {name: 'Link with no focus style'}).elementHasVisibleFocus()
})

it('has no difference: single element', () => {
    cy.visit('https://suitsupply.com/en-de/')

    // remove cookie notice
    cy.findByRole('button', {name: 'Accept'}).click()

    cy.get('.js-product-carousel-see-all').elementHasVisibleFocus()
})

it('has difference: whole site', () => {
    cy.visit('https://www.fonic.de/')

    // has loading icon at first
    cy.wait(3000)

    cy.get('body').elementsHaveVisibleFocus()
})

it('has difference: section', () => {
    cy.visit('https://www.gov.uk/')

    cy.get('section.homepage-section.homepage-section--links-and-search').elementsHaveVisibleFocus()
})

it('has difference: whole site', () => {
    cy.visit('https://www.gov.uk/')

    cy.get('body').elementsHaveVisibleFocus('.gem-c-skip-link')
})


