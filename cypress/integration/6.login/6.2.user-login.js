import { loginPage } from "../../fixtures/shared.js"
import user from "../../fixtures/data/operative-user.json"
import { isOperative } from "../../fixtures/helpers/login.js"
import { deleteUser, login, logout } from "../../fixtures/helpers/users.js"
import validUser from "../../fixtures/data/admin-user.json"

describe('5.2 - Iniciar sesion con usuario operario', () => {
    it('Valid login', () => {
        loginPage()
        login(user)
        isOperative()
        cy.wait(5000)
    })
})
