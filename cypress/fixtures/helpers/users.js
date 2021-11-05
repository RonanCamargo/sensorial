export function logout(){
    cy.get('header').find('button').last().click()
    cy.get('.MuiGrid-root > .MuiButtonBase-root > .MuiButton-label').click()
}

export function login(user, invalidCredentials) {
    cy.get('#email').clear().type(user.email).should('have.value', user.email)
    cy.get('#password').clear().type(user.password).should('have.value',user.password)
    cy.get('.MuiButton-label').click()
    if(!invalidCredentials) cy.url().should('include', '/app/dashboards')
    else cy.contains('Usuario o password incorrecto').should('exist')
}

export function createUser(user, duplicated){
    cy.get('[href="#/app/usuarios"] > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('.jss105 > div > .MuiButtonBase-root > .MuiButton-label').click()
    cy.get('#name').type(user.name)
    cy.get('#mail').type(user.email)
    
    cy.get(':nth-child(4) > .MuiInputBase-root > #outlined-password-input').type(user.password)

    cy.get(':nth-child(5) > .MuiInputBase-root > #outlined-password-input').type(user.password)
    cy.get('#outlined-tel').type(user.phone)
    cy.get('#outlined-select').click()
    
    if(user.role == "Admin") cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    else cy.get('.MuiList-root > [tabindex="-1"]').click()
    
    cy.get(':nth-child(2) > .MuiButton-label').click()

    if(!!duplicated) cy.contains('Ya existe usuario registrado con el mismo mail').should('exist')
    else cy.contains('Usuario creado exitosamente').should('exist')
}

export function deleteUser(email){
    cy.get('[href="#/app/usuarios"] > .MuiListItemText-root > .MuiTypography-root').click()
    cy.contains(email).parent().parent().find('td').first().click()
    cy.get('.MuiPaper-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click()
    cy.contains('Usuario borrado exitosamente').should('exist')
}