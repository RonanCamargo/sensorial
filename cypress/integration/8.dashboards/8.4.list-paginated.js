import _ from "lodash"
import { createDashboardWithRandomName, deleteDashboard, loginWithTestUser } from "../../fixtures/shared"

describe('8.4 - Listar tableros (paginado)', () => {
    it('Caso de prueba', () => {
        loginWithTestUser()

        cy.get('[href="#/app/tableros"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.url().should('include','/app/tableros')
        let dashboards = _.range(10).map(createDashboardWithRandomName)

        cy.wait(2000)
        cy.get('[data-testid=pagination-next]').click()
        cy.wait(2000)
        cy.get('[data-testid=pagination-back]').click()
        cy.wait(2000)
        cy.get('[data-testid=pagination-next]').click()
        cy.wait(2000)
        cy.get('[data-testid=pagination-back]').click()

        dashboards.forEach(deleteDashboard)
    })
})