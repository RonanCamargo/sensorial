import newAdminUser from "../../fixtures/data/new-admin-user.json"
import validUser from "../../fixtures/data/admin-user.json"
import { createUser, login, logout } from "../../fixtures/helpers/users"

describe('7. Crear y administrar usuarios', () => {
 
    it('7.1 - Crear usuario administrador', () => {
        cy.visit('https://www.sensorial.me')

        login(validUser)
        createUser(newAdminUser)
        logout()
        login(newAdminUser)
    })
})
