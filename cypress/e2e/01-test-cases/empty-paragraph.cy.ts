it('has no empty paragraph', () => {
    cy.visit('https://www.gov.uk/')
    cy.noEmptyParagraphs()
})

it('has no empty paragraph', () => {
    cy.visit('http://localhost:3000/wcag/perceivable/text-alternatives/non-text-content')
    cy.noEmptyParagraphs()
})

it('has empty paragraph', () => {
    cy.visit('http://localhost:3000/wcag/operable/keyboard-accessible/keyboard')
    cy.noEmptyParagraphs()
})

it('has empty paragraph', () => {
    cy.visit('https://alphagov.github.io/accessibility-tool-audit/tests/html-empty-paragraph.html')
    cy.noEmptyParagraphs()
})