export function isOperative(){
    cy.get('.MuiList-root').should('not.exist')
}