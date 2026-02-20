describe('Creating users', () => {
  beforeEach(() => {
    cy.visit('/edit')
  })

  it('creates ignition settings', () => {
    // load fixtures
    cy.get('input[type=file]').selectFile('cypress/fixtures/AddUsers.json')
    cy.get('[data-testid=download_ignition]').click()

    // checking generated ignition file
    cy.readFile('cypress/downloads/config.ign').then((content) => {
      cy.log(content)
      const parsed = JSON.parse(content)
      expect(parsed.passwd.users[0].name).to.equal('schubi')
      expect(parsed.passwd.users[0].passwordHash).to.be.a('string')
      expect(parsed.passwd.users[0].sshAuthorizedKeys[0]).to.equal('ssh_pubilic_keys')
      expect(parsed.storage.filesystems[0].device).to.equal('/dev/disk/by-label/ROOT')
      expect(parsed.storage.filesystems[0].format).to.equal('btrfs')
      expect(parsed.storage.filesystems[0].mountOptions[0]).to.equal('subvol=/@/home')
      expect(parsed.storage.filesystems[0].path).to.equal('/home')
      expect(parsed.storage.filesystems[0].wipeFilesystem).to.be.false
      expect(parsed.storage.files[0].path).to.equal('/home/schubi/.pam_oath_usersfile')
      expect(parsed.storage.files[0].contents.source).to.include('9aaff31535438560d767daf81f0d5ec2ee207336')
      expect(parsed.passwd.users[1].name).to.equal('root')
      expect(parsed.storage.files[1]).to.be.undefined
    });
  });

  it('creates combustion settings', () => {
    cy.get('[data-testid=toggle_ignition]').click()
    // load fixtures
    cy.get('input[type=file]').selectFile('cypress/fixtures/AddUsers.json')
    cy.get('[data-testid=download_combustion]').click()

    // checking generated combustion file
    cy.readFile('cypress/downloads/script').then((content) => {
      cy.log(content)
      expect(content).to.have.string(
        'Setup /home...')
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
