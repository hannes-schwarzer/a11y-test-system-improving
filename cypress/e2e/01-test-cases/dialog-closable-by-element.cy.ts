beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
})

// expect to fail
it('should close modal with button and keyboard', () => {
    cy.visit('http://localhost:3000/wcag/operable/keyboard-accessible/keyboard')
    cy.findByRole('link', {name: 'Open lightbox'}).click()
    cy.get('.lightbox').dialogClosableByElement();        
})

it('closes modal with button', () => {
    cy.visit('https://media.kulturbanause.de/2018/06/html-dialog-element.html')
    cy.findByRole('button', {name: 'Dialog mit show() öffnen'}).click()
    cy.get('dialog#dialog').dialogClosableByElement();
})

it.only('dialog has a focus trap', () => {
    cy.viewport(1080, 1200) // otherwise modal is cut off -> 'not visible'
    cy.visit('https://www.fonic.de/prepaid-tarife')

    cy.findByRole('button', {name: 'FONIC Classic Sofort bestellen'}).click()

    cy.findByRole('button', {name: 'Tarifdetails anzeigen'}).click()

    cy.wait(1000)
    cy.get('.modal-content').as('dialog').dialogClosableByElement()
})
