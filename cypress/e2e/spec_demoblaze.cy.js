import { faker } from '@faker-js/faker';

const numberCreditCard = faker.finance.creditCardNumber();

describe('test demoblaze web page', () => {

  beforeEach(() => {
    // we will create a new alias before each test
    cy.login(Cypress.env('user'), Cypress.env('password'))
  })

  it('add one item from each category', () => {
    cy.visit('/')
    cy.addProduct()
    cy.get('#cartur').click()
  })

  it('send payment form with all data', () => {
    cy.visit('/')
    cy.get('#cartur').click()
    cy.contains('Place Order').click()
    cy.get('#name').type(faker.name.fullName())
    cy.get('#country').type(faker.address.country())
    cy.get('#city').type(faker.address.cityName())
    cy.get('#card').type(numberCreditCard)
    cy.get('#month').type(faker.date.month())
    cy.get('#year').type(faker.datatype.number({ min: 2023, max: 2048 }))
    cy.contains('Purchase').click()
    cy.contains(numberCreditCard)
  })

})