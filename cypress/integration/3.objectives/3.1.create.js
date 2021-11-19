import { loginWithTestUser } from "../../fixtures/shared"
import objective from "../../fixtures/objective.json"
import { createObjective, deleteObjective } from "../../fixtures/helpers/objectives"
import { createIndicator, deleteIndicator } from "../../fixtures/helpers/indicators"
import indicator from "../../fixtures/data/indicator.json"
describe('3.1 - Crear objetivo en base a un indicador', () => {
    it('Crear', () => {
        loginWithTestUser()
        
        createIndicator(indicator)
        createObjective(objective)
        cy.wait(5000)
        deleteObjective(objective)
        deleteIndicator(indicator)

        //cy.contains('td',objectiveName).then(elem => expect(elem).to.be(objectiveName)) 
    })
})