it('has skip link', () => {
    cy.visit('https://www.gov.uk/')

    cy.pageHasSkipLink()
})

it('has skip link', () => {
    cy.visit('http://localhost:3000/')

    cy.pageHasSkipLink()
})

it('has no skip link', () => {
    cy.visit('http://localhost:3000/wcag/operable/navigable/bypass-blocks')

    cy.pageHasSkipLink()
})