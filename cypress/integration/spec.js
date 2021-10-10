import newAdminUser from "../fixtures/newAdminUser.json"
import { createUser, deleteUser, login, logout } from "../fixtures/tests.js"
import validUser from "../fixtures/user.json"

describe('Usuarios', () => {
 
    it('Create admin user', () => {
        cy.visit('https://www.sensorial.me')

        login(validUser)
        createUser(newAdminUser, "Admin")
        logout()
        login(newAdminUser)
    })

    it('Delete user', () => {
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

