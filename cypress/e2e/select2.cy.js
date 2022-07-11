it('deve selecionar uma unica opcao', function(){

    cy.visit('/apps/select2/index.html')

    cy.get('.select2-selection--single').click()
    cy.contains('.select2-results__options', 'Cypress').click()
})

it('deve selecionar multiplas opcoes', function(){

    cy.visit('/apps/select2/index.html')

    const frameworks = [
        'Cypress',
        'Robot Framework',
        'Protractor'
    ]

    frameworks.forEach(function(framework){

        cy.get('.select2-selection--multiple').click()
        cy.contains('.select2-results__options', framework).click()
    })

})