import { contains } from "cypress/types/jquery"

describe('Login page', ()=> {
  context('Enter valid data at first attempt, and for the same user enter an invalid password for the next four consecutive attempts.', ()=> {
    beforeEach( ()=> {
      cy.visit("https://practicesoftwaretesting.com/#/auth/login")
    })
    it('enter valid password', ()=> {
      cy.getByData("email").type('15@gmail.com')
      cy.getByData("password").type('123456')
      cy.getByData("login-submit").click()
      cy.getByData("success-message").should("not.exist")
      cy.get('a').eq(8).should('contain','Nikola Novosel')
    })
    it('enter invalid password', ()=> {
      cy.getByData("email").type('15@yahoo.com')
      cy.getByData("password").type('123')
      cy.getByData("login-submit").click()
      cy.contains('Invalid email or password').should('be.visible')
    })
    it('enter invalid password', ()=> {
      cy.getByData("email").type('15@yahoo.com')
      cy.getByData("password").type('123')
      cy.getByData("login-submit").click()
      cy.contains('Invalid email or password').should('be.visible')
    })
    it('enter invalid password', ()=> {
      cy.getByData("email").type('15@yahoo.com')
      cy.getByData("password").type('123')
      cy.getByData("login-submit").click()
      cy.contains('Invalid email or password').should('be.visible')
    })
    it('enter invalid password', ()=> {
      cy.getByData("email").type('15@yahoo.com')
      cy.getByData("password").type('123')
      cy.getByData("login-submit").click()
      cy.contains('Account locked, too many failed attempts. Please contact the administrator.').should('be.visible')
    })
  })
  context('Enter fake user for the fourth time in a row', ()=> {
    beforeEach( ()=> {
      cy.visit("https://practicesoftwaretesting.com/#/auth/login")
    })
    it('enter fake users data', ()=> {
      cy.getByData("email").type('12@yahoo.com')
      cy.getByData("password").type('123')
      cy.getByData("login-submit").click()
      cy.contains('Invalid email or password').should('be.visible')
    })
    it('enter fake users data', ()=> {
      cy.getByData("email").type('12@yahoo.com')
      cy.getByData("password").type('123')
      cy.getByData("login-submit").click()
      cy.contains('Invalid email or password').should('be.visible')
    })
    it('enter fake users data', ()=> {
      cy.getByData("email").type('12@yahoo.com')
      cy.getByData("password").type('123')
      cy.getByData("login-submit").click()
      cy.contains('Invalid email or password').should('be.visible')
    })
    it('enter fake users data', ()=> {
      cy.getByData("email").type('12@yahoo.com')
      cy.getByData("password").type('123')
      cy.getByData("login-submit").click()
      cy.contains('Invalid email or password').should('be.visible')
    })
  })
})