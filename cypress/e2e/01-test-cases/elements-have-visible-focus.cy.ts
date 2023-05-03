// import pixelmatch from 'pixelmatch'

it('has difference', () => {
    const PNG = require('pngjs')
    const pixelmatch = require('pixelmatch')

    cy.visit('https://www.gov.uk/')
    cy.findByRole('search').find('input').screenshot('unfocused', {padding: 18, overwrite: true}) // elementsHaveVisibleFocus()
    cy.findByRole('search').find('input').focus().tab({shift: true}).tab().screenshot('focused', {padding: 18, overwrite: true}) // elementsHaveVisibleFocus()

    cy.readFile('./cypress/screenshots/focused.png', 'base64').then((focusedScreenshot) => {
        const img = new Image();
        img.src = `data:image/png;base64,${focusedScreenshot}`;

        new Promise<void>(resolve => {
            img.onload = () => {
                console.log(img.width)
                console.log(img.height)

                resolve()
            }
        })

        cy.readFile('./cypress/screenshots/unfocused.png', null).then((unfocusedScreenshot) => {
            console.log('width:' + img.width)
            console.log('height' + img.height)

            const numDiffPixels = pixelmatch(unfocusedScreenshot, unfocusedScreenshot, null, img.width, img.height, {treshold: 0.1})
            
            console.log(`numDiffPixels: ${numDiffPixels}`)
        })

    })

    // const numDiffPixels = pixelmatch(img1, img2, null, 800, 600, {treshold: 0.1})
})