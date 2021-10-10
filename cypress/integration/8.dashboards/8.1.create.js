import { createDashboard, loginWithTestUser, navigateToDashboards, randomNumber } from "../../fixtures/tests"

describe('8.1 - Crear tablero', () => {
    it('Caso de uso', () => {
        loginWithTestUser()
        navigateToDashboards()

        const dashboardName = `Tablero Nuevo ${randomNumber()}`
        createDashboard(dashboardName, 'Tablero')

        cy.contains('Tablero creado exitosamente')
    })
})