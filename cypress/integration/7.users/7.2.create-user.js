import validUser from "../../fixtures/data/admin-user.json"
import newOperativeUser from "../../fixtures/data/new-operative-user.json"
import { createUser, login, logout } from "../../fixtures/helpers/users"
import { loginPage } from "../../fixtures/shared"

describe('7. Crear y administrar usuarios', () => {
    it('7.2 - Crear usuario operativo', () => {
        loginPage()

        login(validUser)
        createUser(newOperativeUser)
        logout()
        login(newOperativeUser)
    })
})
