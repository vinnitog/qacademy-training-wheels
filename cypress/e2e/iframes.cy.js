const niceIframe = () =>{
    return cy
        .get('#weareqaninja')
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)
}

const badIframe = () =>{
    return cy
        .get('iframe[src*="instagram"]')
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)
}

it('deve validar o total de seguidores do iframe bom', () => {
    cy.visit('/nice_iframe')

    niceIframe().contains('.FollowerCountText', '6,796 followers')
        .should('be.visible')
})

it('deve validar o total de seguidores do iframe ruim', () => {
    cy.visit('/bad_iframe')

    badIframe().contains('.FollowerCountText', '6,796 followers')
        .should('be.visible')
})