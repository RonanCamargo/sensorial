import { createObjective, deleteObjective } from "../../fixtures/helpers/objectives"
import objective from "../../fixtures/objective.json"
import { loginWithTestUser } from "../../fixtures/shared"

describe('3.2 - Eliminar objetivo', () => {
    it('Crear', () => {
        loginWithTestUser()
        
        createObjective(objective)
        deleteObjective(objective)
        cy.wait(5000)

        //cy.contains('td',objectiveName).then(elem => expect(elem).to.be(objectiveName)) 
    })
})

