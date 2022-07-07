class loginPage{
    launch(){
        cy.visit(Cypress.env('url'))
    }
}

export default new loginPage()