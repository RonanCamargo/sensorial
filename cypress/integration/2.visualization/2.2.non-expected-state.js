import { navigateToTestDashboard } from "../../fixtures/helpers/main"
import { loginWithTestUser } from "../../fixtures/shared"

describe('2.2 - Crear objetivo en base a un indicador', () => {
    it('Crear', () => {
        loginWithTestUser()
        navigateToTestDashboard()
    })
})