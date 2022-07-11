//agrupamento
describe('Drag and Drop', function(){

    const dataTransfer = new DataTransfer()

    //gancho
    before(function(){
        
        cy.visit('/drag_and_drop')
    })


    it('deve arrastar o cypress para a caixinha do node', function(){

        cy.get('img[alt=Cypress]')
            .trigger('dragstart', {dataTransfer})

        cy.get('.nodejs figure[draggable=true]')
            .trigger('drop', {dataTransfer})

    })

    it('deve arrastar o robot framekwork para a caixinha do python', function(){

        cy.get('img[alt="Robot Framework"]')
            .trigger('dragstart', {dataTransfer})

        cy.get('.python figure[draggable=true]')
            .trigger('drop', {dataTransfer})
    })

})