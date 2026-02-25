describe('Creating users', () => {
  beforeEach(() => {
    cy.visit('/edit')
  })

  it('creates combustion settings', () => {
    cy.get('[data-testid=toggle_ignition]').click()
    // load fixtures
    cy.get('input[type=file]').selectFile('cypress/fixtures/AddUsers.json')
    cy.get('[data-testid=download_combustion]').click()

    // checking generated combustion file
    cy.readFile('cypress/downloads/script').then((content) => {
      cy.log(content)
      expect(content).to.have.string(
        'useradd -m -s /bin/bash schubi')
      expect(content).to.have.string(
        '/home/schubi/.ssh/authorized_keys')
      expect(content).to.have.string(
        'Set Time-based one-time password')
      expect(content).to.have.string(
        'FILE_PATH=\"/home/schubi/.pam_oath_usersfile\"')
      expect(content).to.have.string(
        ' | chpasswd -e')
      expect(content).to.have.string(
        'FILE_PATH="/home/schubi/.pam_oath_usersfile"')
    });

  })
})
