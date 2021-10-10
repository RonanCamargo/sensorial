import invalidUser from "../../fixtures/invalidUser.json"
import { login, loginPage } from "../../fixtures/tests.js"

describe('5.3 - Iniciar sesion con usuario invalido', () => {
    it('Invalid login', () => {
        loginPage()
        login(invalidUser, true)
    })
})
