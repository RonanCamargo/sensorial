import { loginWithTestUser, navigateToDashboards } from "../../fixtures/tests"

describe('8.3 - Listar tableros', () => {
    it('Caso de uso', () => {
        loginWithTestUser()
        navigateToDashboards()
    })
})