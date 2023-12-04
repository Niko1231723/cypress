import { contains } from "cypress/types/jquery"

describe('Proceed to checkout', ()=> {
  beforeEach( ()=> {
    cy.visit("https://practicesoftwaretesting.com/#/")
  })
  context('Payment of 2 different product ', ()=> {
    it('Hammer', ()=> {
      cy.getByData("category-01HGQW7HEC1KWXQZNM96JS2H1W").check()
      cy.getByData("filter_completed").find('a').eq(0).click()
      cy.getByData("increase-quantity").click()
      cy.getByData("add-to-cart").click()
      cy.contains('Product added to shopping cart.').should('be.visible')
      cy.getByData("nav-cart").click()
      cy.contains('Claw Hammer with Shock Reduction Grip').should('be.visible')
    })
    it('Sander and payment', ()=> {
      cy.getByData("category-01HGQW7HEC1KWXQZNM96JS2H22").check()
      cy.getByData("filter_completed").find('a').eq(0).click()
      cy.getByData("add-to-cart").click()
      cy.contains('Product added to shopping cart.').should('be.visible')
      cy.getByData("nav-cart").click()
      cy.contains('Sheet Sander').should('be.visible')
      cy.contains('Claw Hammer with Shock Reduction Grip').should('be.visible')
      cy.getByData("proceed-1").click()
      cy.getByData("email").type("1234@gmail.com")
      cy.getByData("password").type("123456")
      cy.getByData("login-submit").click()
      cy.getByData("proceed-2").click()
      cy.getByData("address").type("1")
      cy.getByData("city").type("123456")
      cy.getByData("state").type("123456")
      cy.getByData("country").type("123456")
      cy.getByData("postcode").type("123456")
      cy.getByData("proceed-3").click()
      cy.getByData("payment-method").select("Bank Transfer")
      cy.getByData("account-name").type("1")
      cy.getByData("account-number").type("1")
      cy.getByData("finish").click()
      cy.contains("Payment was successful").should('be.visible')
      cy.getByData("finish").click()
      cy.contains("Thanks for your order! Your invoice number is").should("be.visible")
    })
  })
})