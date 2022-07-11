it('deve exibir uma notificao toast', () => {
    cy.visit('/toaster')

    cy.contains('button', 'Toast Rápido').click()

    // esse bloco de codigo abaixo foi utilizado para conseguir deixar a notificacao na linha do tempo do cypress para conseguirmos inspecionar o elemento
    /*cy.get('body')
    cy.wait(3000)*/

    cy.get('.notification')
        .should('be.visible')
        .should('have.text', 'Essa notificação é muito rápida!')

})