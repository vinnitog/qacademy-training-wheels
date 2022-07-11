it('deve marcar os top 5 filmes da Marvel', function(){

    cy.visit('/checkboxes')

    const movies = [
        'avengers',
        'cap2',
        'guardians',
        'blackpanther',
        'thor3'
    ]

    //percorre o array movies e marca os 5 checkboxes referentes na tela de checkboxes
    movies.forEach(function(m){

        cy.get(`input[name=${m}]`)
            .click()
            .should('be.checked')
    })


})