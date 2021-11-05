import { login } from "../../fixtures/helpers/users.js"
import { loginPage } from "../../fixtures/shared.js"
import validUser from "../../fixtures/data/admin-user.json"

describe('5.1 - Iniciar sesion con usuario administrador', () => {
    it('Valid login', () => {
        loginPage()
        login(validUser)
        cy.wait(2000)
    })
})
