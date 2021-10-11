import indicator from "../../fixtures/data/indicator.json"
import { createIndicator, deleteIndicator } from "../../fixtures/helpers/indicators"
import { loginWithTestUser } from "../../fixtures/tests"

describe('4.2 - Eliminar indicador', () => {
    it('Caso de uso', () => {
        loginWithTestUser()
        createIndicator(indicator)
        deleteIndicator(indicator)
    })
})
