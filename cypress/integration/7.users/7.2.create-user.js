import validUser from "../../fixtures/data/admin-user.json"
import newOperativeUser from "../../fixtures/data/new-operative-user.json"
import { createUser, deleteUser, login, logout } from "../../fixtures/helpers/users"
import { loginPage, loginWithTestUser } from "../../fixtures/shared"

describe('7. Crear y administrar usuarios', () => {
    it('7.2 - Crear usuario operativo', () => {
        loginPage()

        login(validUser)
        createUser(newOperativeUser)
        logout()
        login(newOperativeUser)
        logout()
        loginWithTestUser()
        deleteUser(newOperativeUser.email)
        cy.wait(2000)
    })
})
