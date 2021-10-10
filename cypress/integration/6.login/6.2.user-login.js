import { login, loginPage } from "../../fixtures/tests.js"
import validUser from "../../fixtures/user.json"

describe('5.2 - Iniciar sesion con usuario operario', () => {
    it('Valid login', () => {
        loginPage()
        login(validUser)
    })
})
