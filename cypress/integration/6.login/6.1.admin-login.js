import { login, loginPage } from "../../fixtures/tests.js"
import validUser from "../../fixtures/user.json"

describe('5.1 - Iniciar sesion con usuario administrador', () => {
    it('Valid login', () => {
        loginPage()
        login(validUser)
    })
})
