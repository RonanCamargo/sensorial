import validUser from './data/admin-user.json'
import { login } from './helpers/users'

export function loginPage(){
    cy.visit('https://www.sensorial.me/')
}

export function loginWithTestUser(){
    loginPage()
    login(validUser)
}

export function navigateToDashboards(){
    cy.get('[href="#/app/tableros"] > .MuiListItemText-root > .MuiTypography-root').click()
    cy.url().should('include','/app/tableros')
}

export function createDashboard(name, description){
    cy.get('.jss100 > .MuiBox-root > div > .MuiButtonBase-root > .MuiButton-label').click()
    cy.get(':nth-child(2) > .MuiInputBase-root > #name').clear().type(name)
    cy.get(':nth-child(3) > .MuiInputBase-root > #name').clear().type(description)
    cy.get(':nth-child(2) > .MuiButton-label').click()
}

export function deleteDashboard(name){
    cy.contains(name).parent().parent().find('td').first().click()
    cy.get('.MuiPaper-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click()
}

export function randomNumber(){
    return Math.floor(Math.random() * 100)
}
