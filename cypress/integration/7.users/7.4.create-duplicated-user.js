import validUser from "../../fixtures/data/admin-user.json"
import newOperativeUser from "../../fixtures/data/new-operative-user.json"
import { createUser, deleteUser, login, logout } from "../../fixtures/helpers/users"
import { loginPage } from "../../fixtures/shared"

describe('7. Crear y administrar usuarios', () => {
    it('7.4 - Crear usuario duplicado', () => {
        loginPage()

        login(validUser)
        createUser(newOperativeUser)
        createUser(newOperativeUser, true)
        cy.wait(1000)
        deleteUser(newOperativeUser.email)
        cy.wait(1000)
        
    })
})
