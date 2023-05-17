beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
})

it('closes dialog with button', () => {
    cy.viewport(1080, 1200) // otherwise modal is cut off -> 'not visible'
    cy.visit('https://www.fonic.de/prepaid-tarife')

    cy.findByRole('button', {name: 'FONIC Classic Sofort bestellen'}).click()

    cy.findByRole('button', {name: 'Tarifdetails anzeigen'}).click()

    // content is still loading
    cy.wait(500)

    cy.get('.modal-content').as('dialog').dialogClosableByElement()
})

it('closes dialog with button but dialog stays in DOM', () => {
    cy.visit('https://media.kulturbanause.de/2018/06/html-dialog-element.html')
    cy.findByRole('button', {name: 'Dialog mit show() öffnen'}).click()
    cy.get('dialog#dialog').dialogClosableByElement();
})

it('can not close dialog with button', () => {
    cy.visit('http://localhost:3000/wcag/operable/keyboard-accessible/keyboard')
    cy.findByRole('link', {name: 'Open lightbox'}).click()
    cy.get('.lightbox').dialogClosableByElement();        
})
