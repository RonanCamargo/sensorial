import { loginWithTestUser } from "../../fixtures/tests"

describe('8.4 - Listar tableros (paginado)', () => {
    it('Caso de uso', () => {
        loginWithTestUser()

        cy.get('[href="#/app/tableros"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.url().should('include','/app/tableros')
    })
})