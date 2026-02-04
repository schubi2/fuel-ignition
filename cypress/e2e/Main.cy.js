describe('showing fuel-ignition', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('goes to page -Create New Config-', () => {
    cy.contains('Let\'s do it').click()
    cy.contains('Config Generator')
  })

})