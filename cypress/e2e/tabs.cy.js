it('nova guia', () => {
    cy.visit('/new_tab')

    //cy.contains('a', 'Clique aqui').click()

    cy.get('a[href="https://www.google.com.br"]').should('have.attr', 'target', '_blank')

    // a funcao invoke nesse caso esta removendo o atributo/propriedade target do botao para que nao abra em uma nova aba/guia
    cy.contains('a', 'Clique aqui').invoke('removeAttr', 'target')

    cy.contains('a', 'Clique aqui').click()

})