describe('sort', ()=> {
    beforeEach( ()=> {
      cy.visit('https://practicesoftwaretesting.com/#/category/hand-tools')
    })
    it('A-Z', ()=> {
      cy.getByData("sort").select('Name (A - Z)')
      cy.get('.page-link').contains('2').click()
      cy.get('h5').contains('Slip').should('be.visible') //Slip Joint Pliers are not visible on the 2nd page sorted with A-Z on the Home Page.
    })
})