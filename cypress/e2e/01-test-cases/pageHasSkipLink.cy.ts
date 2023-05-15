it('has skip link', () => {
    cy.visit('https://www.gov.uk/')
    cy.findByRole('button', {name: 'Accept additional cookies'}).click()
    cy.findByRole('button', {name: 'Hide this message'}).click()

    cy.pageHasSkipLink()
})

it('has skip link', () => {
    cy.visit('http://localhost:3000/')

    cy.pageHasSkipLink()
})

it('has skip link', () => {
    cy.visit('https://www.h-ka.de/')
    cy.findByRole('button', {name: 'Speichern und schließen'}).click()

    cy.pageHasSkipLink()
})

it('has no skip link', () => {
    cy.visit('https://www.fonic.de/')
    cy.wait(1000)

    cy.pageHasSkipLink()
})

it('has skip link but not to main', () => {
    cy.visit('https://www.stadtwerke-karlsruhe.de/de/')
    cy.findByRole('button', {name: 'Auswahl bestätigen'}).click()

    cy.pageHasSkipLink()
})

it('has no skip link', () => {
    cy.visit('http://localhost:3000/wcag/operable/navigable/bypass-blocks')

    cy.pageHasSkipLink()
})