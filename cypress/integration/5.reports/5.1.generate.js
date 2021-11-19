import { loginWithTestUser } from "../../fixtures/shared"
import indicator from "../../fixtures/data/indicator.json"
import { createIndicator, deleteIndicator } from "../../fixtures/helpers/indicators"

describe('5.1 - Generar reporte', () => {
    it('Caso de prueba', () => {
        loginWithTestUser()
        cy.wait(2000)
        cy.contains('Reportes').click()
        cy.contains('Agregar reporte').click()

        let reportName = 'Reporte de prueba'
        cy.get('#name').type(reportName)
        cy.get('#descripcion').type('Reporte')
        cy.get('#outlined-select').click()
        cy.wait(1000)
        cy.contains('Viernes').click()
        cy.get('body').click('top')
        cy.get('#demo-mutiple-chip').click()
        cy.contains('test@sensorial.me').click()
        cy.get('body').click('top')
        cy.get('#time').type('11:11')
        cy.contains('Crear').click()
        cy.contains('Reporte creado exitosamente').should('exist')
        cy.wait(5000)

        cy.contains(reportName).parent().parent().find('td').first().click()
        cy.get('.MuiPaper-root > .MuiButtonBase-root').click()
    })
})
