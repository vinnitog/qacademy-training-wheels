it('deve fazer o upload da minha foto', () => {
    cy.visit('/upload')

    const imgFile = 'cypress/fixtures/eu-foto-slack.png'

    cy.get('input[name="file"]').selectFile(imgFile, {force: true})
    
    cy.get('input[value="Upload"]').click()

    cy.get('img[src="/uploads/eu-foto-slack.png"]', {timeout: 7000})
      .should('be.visible')
})