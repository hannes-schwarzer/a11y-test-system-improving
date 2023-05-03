it('has difference', () => {
    cy.visit('https://www.gov.uk/')

    cy.findByRole('search').find('input').elementHasVisibleFocus()
})

it('has difference', () => {
    cy.visit('https://www.gov.uk/')

    cy.findByRole('search').find('input').elementHasVisibleFocus()
})

it('has difference', () => {
    cy.visit('https://alphagov.github.io/accessibility-tool-audit/tests/colour-and-contrast-focus-not-visible.html')

    cy.findByRole('link', {name: 'This links has visible focus'}).elementHasVisibleFocus()
})

it('has no difference', () => {
    cy.visit('https://alphagov.github.io/accessibility-tool-audit/tests/colour-and-contrast-focus-not-visible.html')

    cy.findByRole('button', {name: 'Search'}).elementHasVisibleFocus()
})