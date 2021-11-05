import testDashboard from '../data/test-dashboard.json'

export function selectDashboard(name){
    cy.get('.MuiButton-containedSizeSmall').click()
    cy.contains(name).click()
}

export function navigateToTestDashboard(){
    selectDashboard(testDashboard.name)
    cy.wait(3000)
}