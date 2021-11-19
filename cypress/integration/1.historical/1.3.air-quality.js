import { navigateToTestDashboard } from "../../fixtures/helpers/main"
import { loginWithTestUser } from "../../fixtures/shared"

describe('1.3 - Visualizar histórico de sensor de calidad de aire', () => {
    it('Caso de prueba', () => {
        loginWithTestUser()
        navigateToTestDashboard()

        cy.wait(5000)
        cy.get(':nth-child(6) > .jss182 > .MuiPaper-root > .jss183 > .MuiButtonBase-root > .MuiIconButton-label').click()
        cy.contains('Ver histórico').click()
        cy.get('.MuiGrid-container > :nth-child(1) > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('#datetime-localinit').type('2021-10-01T00:00')
        cy.get('#datetime-localend').type('2021-10-20T00:00')
        cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()
        cy.get('.recharts-responsive-container > .recharts-wrapper > .recharts-surface').should('exist')        
        cy.wait(5000)
    })
})