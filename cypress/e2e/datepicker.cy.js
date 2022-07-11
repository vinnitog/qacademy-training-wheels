it('selecionar a data de nascimento', () =>{

    cy.visit('/datepicker')

    const date = {
        month: 'Dec',
        year: '1994',
        day: '29'
    }

    cy.get('.datetimepicker-dummy-input').click()

    //seleciona o mes
    cy.get('.datepicker-nav-month').click()
    cy.contains('.datepicker-month', date.month).click()

    //selecionar o ano
    cy.get('.datepicker-nav-year').click()
    cy.contains('.datepicker-year span', date.year).click()

    //seleciona o dia
    cy.contains('button[class="date-item"]', new RegExp('^' + date.day + '$', 'g')).click()

})