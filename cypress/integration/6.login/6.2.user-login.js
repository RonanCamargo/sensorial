import { login, loginPage } from "../../fixtures/tests.js"
import user from "../../fixtures/data/operative-user.json"
import { isOperative } from "../../fixtures/helpers/login.js"

describe('5.2 - Iniciar sesion con usuario operario', () => {
    it('Valid login', () => {
        loginPage()
        login(user)
        isOperative()
    })
})
