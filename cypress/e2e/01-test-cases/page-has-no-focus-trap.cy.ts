/// <reference types="cypress" />
beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
})

// works!
    it.skip('page has no focus trap', () => {
        cy.visit('http://localhost:3000/wcag/operable/keyboard-accessible/no-keyboard-trap')
        cy.pageHasNoFocusTrap();        
    })

    // error not obvious why but might be correct
    // highlights non visible elements
    it.skip('page has no focus trap', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://www.inovex.de/de/')
        cy.findByRole('button', {name: 'Alle akzeptieren'}).click()
        cy.pageHasNoFocusTrap();        
    })

    // finds error, where focus is not really on element
    it.skip('page has no focus trap', () => {
        cy.viewport(1080, 1920)
        cy.visit('https://www.inovex.de/de/')
        cy.findByRole('button', {name: 'Alle akzeptieren'}).click()
        cy.findByRole('combobox', {name:'Alle'}).focus().then(() => {
            cy.wait(5000).then(() => {
                console.log(document.activeElement)
            })
        })
    })

    // works
    it('page has no focus trap', () => {
        cy.visit('https://www.gov.uk/')
        cy.findByRole('button', {name: 'Accept additional cookies'}).click()
        cy.pageHasNoFocusTrap();        
    })

    // error because button text changes
    it('page has no focus trap', () => {
        cy.visit('https://www.google.com/')
        cy.findByRole('button', {name: 'Alle akzeptieren'}).click()
        cy.pageHasNoFocusTrap();        
    })

    it.only('page has no focus trap', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://www.google.com/search?q=haus')
        cy.findByRole('button', {name: 'Alle akzeptieren'}).click()
        cy.pageHasNoFocusTrap();        
    })


    // works
    it('page has no focus trap', () => {
        cy.visit('https://www.fonic.de/')
        cy.pageHasNoFocusTrap();        
    })

    // works
    it('page has no focus trap', () => {
        cy.visit('https://www.fonic-mobile.de/')
        cy.pageHasNoFocusTrap();        
    })

    // works
    it('page has no focus trap', () => {
        cy.visit('https://www.fonic.de/prepaid-tarife')
        cy.wait(2000) // page has a loading icon first
        cy.pageHasNoFocusTrap();        
    })

    it.skip('page has no focus trap', () => {
        cy.visit('https://octopus.energy/')
        cy.get('#noToCountrySpecificWebsiteAddress').click()
        cy.findByRole('button', {name: "That's cool"}).click()
        cy.pageHasNoFocusTrap();        
    })