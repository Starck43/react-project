describe("Articles List Page", () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit("articles")
        })
    })

    it("User open Article List with at least 3 items", () => {
        cy.getByTestId("ArticleList").should("exist")
        cy.getByTestId("ArticleList.Item").should("have.length.greaterThan", 3)
    })
})
