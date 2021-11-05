import { loginWithTestUser, navigateToDashboards } from "../../fixtures/shared"

describe('8.3 - Listar tableros', () => {
    it('Caso de prueba', () => {
        loginWithTestUser()
        navigateToDashboards()
        cy.wait(2000)
    })
})