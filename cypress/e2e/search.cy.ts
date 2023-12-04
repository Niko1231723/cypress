describe('search', ()=> {
  beforeEach( ()=> {
    cy.visit('https://practicesoftwaretesting.com/#/')
  })
  it('press search', ()=> {
    cy.getByData('search-submit').click()
    cy.get('h5').contains('Hammer').should('exist')
  })
  it('enter letter c', ()=> {
    cy.getByData('search-query').type('c')
    cy.getByData('search-submit').click()
    cy.get('h5').contains('Hammer').should('exist')
  })
  it('enter letter co', ()=> {
    cy.getByData('search-query').type('co')
    cy.getByData('search-submit').click()
    cy.get('h5').contains('Hammer').should('exist')
  })
  it('enter letter com', ()=> {
    cy.getByData('search-query').type('com')
    cy.getByData('search-submit').click()
    cy.get('h5').contains('Combination').should('exist')
    cy.get('h5').contains('Hammer').should('not.exist')
  })
})