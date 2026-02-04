describe('Setting keyboard', () => {
  beforeEach(() => {
    cy.visit('/edit')
  })

  it('creates combustion settings', () => {
    // load fixtures
    cy.get('input[type=file]').selectFile('cypress/fixtures/Keyboard.json')
    cy.get('[data-testid=download_combustion]').click()
    
    // checking generated combustion file
    cy.readFile('cypress/downloads/script').then((content) => {
      cy.log(content)
      expect(content).to.have.string(
        'systemd-firstboot --force --keymap=arabic')
      expect(content).to.have.string(
        'test -f /etc/vconsole.conf && FONT=$(grep ^FONT= /etc/vconsole.conf)')
      expect(content).to.have.string(
        'test -n "$FONT" && echo "$FONT" >> /etc/vconsole.conf')
    });
  })
})