import newAdminUser from "../../fixtures/data/new-admin-user.json"
import validUser from "../../fixtures/data/admin-user.json"
import { createUser, deleteUser, login, logout } from "../../fixtures/helpers/users"

describe('7. Crear y administrar usuarios', () => {
    it('7.3. Eliminar usuario', () => {
        cy.visit('https://www.sensorial.me')

        login(validUser)
        createUser(newAdminUser, "Admin")
        logout()
        login(newAdminUser)
        logout()
        login(validUser)
        deleteUser('random@sensorial.me')
    })
})
