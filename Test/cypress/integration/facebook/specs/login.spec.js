import loginPage from "../pages/login.page.js"

describe(" test 1 : facebook page", function () {

    beforeEach(function(){
     //access fixture data
     cy.fixture('testdata').then(function (testdata) {
                this.testdata = testdata
            })
          })
  
  
      it("should launch url", function () {
        loginPage.launch()
        cy.wait(7000)
    })
})
