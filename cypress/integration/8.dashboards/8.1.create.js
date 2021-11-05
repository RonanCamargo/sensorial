import { createDashboard, deleteDashboard, loginWithTestUser, navigateToDashboards, randomNumber } from "../../fixtures/shared"

describe('8.1 - Crear tablero', () => {
    it('Caso de prueba', () => {
        loginWithTestUser()
        navigateToDashboards()

        const dashboardName = `Tablero Nuevo ${randomNumber()}`
        createDashboard(dashboardName, 'Tablero')
        cy.contains('Tablero creado exitosamente').should('exist')

        cy.wait(5000)
        deleteDashboard(dashboardName)
        cy.wait(2000)
    })
})