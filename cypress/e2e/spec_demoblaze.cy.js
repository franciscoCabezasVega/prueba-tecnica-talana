import { faker } from '@faker-js/faker';

const numberCreditCard = faker.finance.creditCardNumber();

describe('Add products to cart and pay products with a registered user', () => {

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
    cy.contains('Thank you for your purchase!')
    cy.contains(numberCreditCard)
  })

})

describe('make the payment for the products requested by filling in only the required fields', () => {

  beforeEach(() => {
    // we will create a new alias before each test
    cy.login(Cypress.env('user'), Cypress.env('password'))
  })

  it('add one item from each category', () => {
    cy.visit('/')
    cy.addProduct()
    cy.get('#cartur').click()
  })

  it('send payment form with required data', () => {
    cy.visit('/')
    cy.get('#cartur').click()
    cy.contains('Place Order').click()
    cy.get('#name').type(faker.name.fullName())
    cy.get('#card').type(numberCreditCard)
    cy.contains('Purchase').click()
    cy.contains('Thank you for your purchase!')
    cy.contains(numberCreditCard)
  })

})

describe('Make the payment of the requested products without filling in the required fields', () => {

  beforeEach(() => {
    // we will create a new alias before each test
    cy.login(Cypress.env('user'), Cypress.env('password'))
  })

  it('add one item from each category', () => {
    cy.visit('/')
    cy.addProduct()
    cy.get('#cartur').click()
  })

  it('send payment form with required data', () => {
    cy.visit('/')
    cy.get('#cartur').click()
    cy.contains('Place Order').click()
    cy.get('#country').type(faker.address.country())
    cy.get('#city').type(faker.address.cityName())
    cy.get('#month').type(faker.date.month())
    cy.get('#year').type(faker.datatype.number({ min: 2023, max: 2048 }))
    cy.contains('Purchase').click()
    cy.contains('Thank you for your purchase!').should("not.exist")
    cy.contains(numberCreditCard).should("not.exist")
  })

})

describe('Add products to cart with an unregistered user', () => {

  it('add one item from each category', () => {
    cy.visit('/')
    cy.addProduct()
    cy.get('#cartur').click()
    cy.get('img').should("not.exist")
  })

})