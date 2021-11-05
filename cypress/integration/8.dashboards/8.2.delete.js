import { createDashboard, deleteDashboard, loginWithTestUser, navigateToDashboards } from "../../fixtures/shared"

describe('8.2 - Eliminar tablero', () => {
    it('Caso de prueba', () => {
        loginWithTestUser()
        const dashboardNumber = Math.floor(Math.random() * 100)
        const dashboardName = `Eliminar Tablero ${dashboardNumber}`

        navigateToDashboards()
        createDashboard(dashboardName, 'Tablero')
        cy.contains('Tablero creado exitosamente')
        deleteDashboard(dashboardName)
        cy.wait(2000)
    })
})