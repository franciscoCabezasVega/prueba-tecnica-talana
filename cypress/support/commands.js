// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.session([username, '****'], () => {
        cy.visit('index.html');
        cy.get('#login2').click()
        cy.get('#loginusername').type(username, { force: true })
        cy.get('#loginpassword').type(password, { force: true })
        cy.get('.btn-primary').contains('Log in').click()
        cy.contains(username)
    })
})

Cypress.Commands.add('addProduct', () => {
    const categories = ['Phones', 'Laptops', 'Monitors']

    for (var i = 0; i < categories.length; i++) {
      cy.contains(categories[i]).click()
      cy.get('.hrefch').first().click()
      // verify name of each product
      cy.get('.name').then(($temp)=>{
        const txt = $temp.text()
        cy.contains('Add to cart').click()
        cy.get('#cartur').click()
        cy.contains(txt)
      })
      cy.get('#nava').click()
    }
})