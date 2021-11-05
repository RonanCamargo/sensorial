import newAdminUser from "../../fixtures/data/new-admin-user.json"
import validUser from "../../fixtures/data/admin-user.json"
import { createUser, deleteUser, login, logout } from "../../fixtures/helpers/users"

describe('7. Crear y administrar usuarios', () => {
 
    it('7.1 - Crear usuario administrador', () => {
        cy.visit('localhost')

        login(validUser)
        createUser(newAdminUser)
        logout()
        login(newAdminUser)
        logout()
        login(validUser)
        deleteUser(newAdminUser.email)
        cy.wait(2000)
    })
})
