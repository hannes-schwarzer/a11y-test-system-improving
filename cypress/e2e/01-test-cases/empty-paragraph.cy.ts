// expected to fail
it('has empty paragraph', () => {
    cy.visit('https://alphagov.github.io/accessibility-tool-audit/tests/html-empty-paragraph.html')
    cy.noEmptyParagraphs()
})

it('has no empty paragraph', () => {
    cy.visit('https://www.gov.uk/')
    cy.noEmptyParagraphs()
})