import { loginPage } from "../../fixtures/shared.js"
import user from "../../fixtures/data/operative-user.json"
import { isOperative } from "../../fixtures/helpers/login.js"
import { login } from "../../fixtures/helpers/users.js"

describe('5.2 - Iniciar sesion con usuario operario', () => {
    it('Valid login', () => {
        loginPage()
        login(user)
        isOperative()
    })
})
