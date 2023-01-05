describe("Articles List Page", () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit("articles")
        })
    })

    it("User opens Article List with at least 3 items", () => {
        cy.getByTestId("ArticleList").should("exist")
        cy.getByTestId("ArticleList.Item").should("have.length.greaterThan", 3)
    })

    it("User opens Article List with 4 items (stubbed json data)", () => {
        cy.intercept("GET", "**/articles/?*", {fixture: "articles-list.json"})

        cy.getByTestId("ArticleList").should("exist")
        cy.getByTestId("ArticleList.Item").should("have.length", 4)
    })
})
