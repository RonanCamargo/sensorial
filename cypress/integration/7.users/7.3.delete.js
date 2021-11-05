import newAdminUser from "../../fixtures/data/new-admin-user.json"
import validUser from "../../fixtures/data/admin-user.json"
import { createUser, deleteUser, login, logout } from "../../fixtures/helpers/users"
import { loginPage } from "../../fixtures/shared"

describe('7. Crear y administrar usuarios', () => {
    it('7.3. Eliminar usuario', () => {
        loginPage()

        login(validUser)
        createUser(newAdminUser)
        logout()
        login(newAdminUser)
        logout()
        login(validUser)
        deleteUser(newAdminUser.email)
        logout()
        login(newAdminUser, true)
        cy.wait(2000)
    })
})
