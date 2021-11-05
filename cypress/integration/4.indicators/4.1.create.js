import { loginWithTestUser } from "../../fixtures/shared"
import indicator from "../../fixtures/data/indicator.json"
import { createIndicator } from "../../fixtures/helpers/indicators"

describe('4.1 - Crear nuevo indicador para un determinado sensor', () => {
    it('Caso de prueba', () => {
        loginWithTestUser()
        createIndicator(indicator)
    })
})
