import { deleteObjective } from "../../fixtures/helpers/objectives"
import objective from "../../fixtures/objective.json"
import { loginWithTestUser } from "../../fixtures/tests"

describe('3.2 - Eliminar objetivo', () => {
    it('Crear', () => {
        loginWithTestUser()
        
        deleteObjective(objective)

        //cy.contains('td',objectiveName).then(elem => expect(elem).to.be(objectiveName)) 
    })
})

