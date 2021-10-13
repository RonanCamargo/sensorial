import { navigateToTestDashboard, selectDashboard } from "../../fixtures/helpers/main"
import { loginWithTestUser, navigateToDashboards } from "../../fixtures/shared"

describe('3.1 - Crear objetivo en base a un indicador', () => {
    it('Crear', () => {
        loginWithTestUser()
        //navigateToTestDashboard()
        //cy.get(':nth-child(3) > .jss132 > .MuiPaper-root > .jss135 > .jss105 > .MuiGrid-container > :nth-child(2) > .recharts-wrapper > .recharts-surface > .recharts-line > .recharts-curve').should('exist')

        //cy.contains('Temperatura Verde').find('path').should('exist')

        cy.wait(5000)
        cy.get('.recharts-layer .recharts-bar-rectangle').should('have.length',3)
        cy.get(':nth-child(1) > .recharts-rectangle').children().its('fill').should('exist')
        
    })
})