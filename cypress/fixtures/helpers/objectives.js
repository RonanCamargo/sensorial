export function createObjective(objective){
    cy.get('.jss86 > :nth-child(2) > .MuiButton-label').click()

    cy.get(':nth-child(2) > .MuiInputBase-root > #name').type(objective.name)
    cy.get(':nth-child(3) > .MuiInputBase-root > #name').type(objective.description)

    cy.get(':nth-child(4) > .MuiInputBase-root > .MuiSelect-root').click()
    cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()

    cy.get('#datetime-localinit').type(objective.date_start)
    cy.get('#datetime-localend').type(objective.date_end)

    cy.get('#standard-start-adornment').type(objective.expected_value)

    cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()
}

export function deleteObjective(objective){
    cy.contains(objective.name).click()
    cy.get('.jss167 > .MuiButtonBase-root > .MuiButton-label').click()
}