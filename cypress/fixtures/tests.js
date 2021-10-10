import validUser from './user.json'

export function loginPage(){
    cy.visit('https://www.sensorial.me/')
}

export function loginWithTestUser(){
    loginPage()
    login(validUser)
}

export function logout(){
    cy.get('.jss49 > .MuiIconButton-label > .MuiSvgIcon-root').click()
    cy.get('.MuiGrid-root > .MuiButtonBase-root > .MuiButton-label').click()
}

export function login(user, invalidCredentials) {
    cy.get('#email').clear().type(user.email).should('have.value', user.email)
    cy.get('#password').clear().type(user.password).should('have.value',user.password)
    cy.get('.MuiButton-label').click()
    if(!invalidCredentials) cy.url().should('include', '/app/dashboards')
    else cy.contains('Usuario o password incorrecto')
}

export function createUser(user, role){
    cy.get('[href="#/app/usuarios"] > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('.jss100 > div > .MuiButtonBase-root > .MuiButton-label').click()
    cy.get('#name').type(user.name)
    cy.get('#mail').type(user.email)
    
    cy.get(':nth-child(4) > .MuiInputBase-root > #outlined-password-input').type(user.password)

    cy.get(':nth-child(5) > .MuiInputBase-root > #outlined-password-input').type(user.password)
    cy.get('#outlined-tel').type(user.phone)
    cy.get('#outlined-select').click()
    if(role == "Admin") cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    else cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="1"]').click()
    
    cy.get(':nth-child(2) > .MuiButton-label').click()
    cy.contains('Usuario creado exitosamente')
}

export function deleteUser(email){
    cy.get('[href="#/app/usuarios"] > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('.jss100 > div > .MuiButtonBase-root > .MuiButton-label').click()
    cy.contains(email).each(console.log)
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