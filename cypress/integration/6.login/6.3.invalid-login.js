import { login } from "../../fixtures/helpers/users"
import invalidUser from "../../fixtures/invalidUser.json"
import { loginPage } from "../../fixtures/shared"

describe('5.3 - Iniciar sesion con usuario invalido', () => {
    it('Invalid login', () => {
        loginPage()
        login(invalidUser, true)
        cy.wait(2000)
    })
})
