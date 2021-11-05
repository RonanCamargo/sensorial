function selectByName(name) {
    cy.wait(5000)
    cy.contains(name).click()
}

export function createIndicator(indicator){
        // Click Agregar indicador
        cy.get('.jss86 > :nth-child(1) > .MuiButton-label').click()

        // Fill data
        cy.get('#name').type(indicator.name)
        cy.get(':nth-child(3) > .MuiInputBase-root > #outlined-select').click()
        cy.contains(indicator.type).click()

        cy.get('#demo-mutiple-chip').click()
        indicator.sensors.forEach(selectByName)

        // Click outside the listbox
        cy.get('body').click('top')

        cy.get(':nth-child(1) > .MuiInputBase-root > #outlined-select').type(indicator.limits.upper)
        cy.get(':nth-child(2) > .MuiInputBase-root > #outlined-select').type(indicator.limits.lower)
        cy.get(':nth-child(6) > .MuiInputBase-root > #outlined-select').type(indicator.refresh_rate)

        // Click Crear
        cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()

        cy.contains(indicator.name).should('exist')
}

export function deleteIndicator(indicator){
    cy.wait(5000)
    cy.contains(indicator.name).parent().find('button').click()
    cy.contains('Borrar').click()
    cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()

    cy.contains('Indicador borrado exitosamente').should('exist')
}