import indicator from "../../fixtures/data/indicator.json"
import { createIndicator, deleteIndicator } from "../../fixtures/helpers/indicators"
import { loginWithTestUser } from "../../fixtures/shared"

describe('4.2 - Eliminar indicador', () => {
    it('Caso de prueba', () => {
        loginWithTestUser()
        createIndicator(indicator)
        deleteIndicator(indicator)
    })
})
