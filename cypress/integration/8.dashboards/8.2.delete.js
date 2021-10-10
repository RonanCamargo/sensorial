import { createDashboard, deleteDashboard, loginWithTestUser, navigateToDashboards } from "../../fixtures/tests"

describe('8.2 - Eliminar tablero', () => {
    it('Caso de uso', () => {
        loginWithTestUser()
        const dashboardNumber = Math.floor(Math.random() * 100)
        const dashboardName = `Eliminar Tablero ${dashboardNumber}`

        navigateToDashboards()
        createDashboard(dashboardName, 'Tablero')
        cy.contains('Tablero creado exitosamente')
        deleteDashboard(dashboardName)
    })
})