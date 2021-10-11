import { loginWithTestUser } from "../../fixtures/tests"
import objective from "../../fixtures/objective.json"
import { createObjective } from "../../fixtures/helpers/objectives"

describe('3.1 - Crear objetivo en base a un indicador', () => {
    it('Crear', () => {
        loginWithTestUser()
        
        createObjective(objective)

        //cy.contains('td',objectiveName).then(elem => expect(elem).to.be(objectiveName)) 
    })
})