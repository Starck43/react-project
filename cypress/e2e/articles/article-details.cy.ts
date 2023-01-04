let currentId = ""

describe("Article Details Page", () => {
    beforeEach(() => {
        cy.login()
        cy.createArticle().then((article) => {
            currentId = article.id
            cy.visit(`articles/${currentId}`)
        })
    })
    afterEach(() => {
        cy.removeArticle(currentId)
    })

    it("article content is visible", () => {
        cy.getByTestId("Article.Info").should("exist")
    })

    it("related articles section is visible", () => {
        cy.getByTestId("Article.Related").should("exist")
    })

    it("user can leave comment", () => {
        cy.getByTestId("Article.Info").as("article")
        cy.get("@article").scrollIntoView()
        cy.addComment("some new comment")
        cy.getByTestId("Comment.Card").should("have.length", 1)
        .then((subject) => {
            if (subject.length > 0) console.log(subject[0])
        })
    })

    it("user can leave rating with feedback", () => {
        const rate = 5
        cy.getByTestId("Article.Info").as("article")
        cy.getByTestId("Article.Rating").as("rating")
        cy.get("@rating").scrollIntoView()
        cy.setRating(rate, "perfect article!!!")
        cy.get("[data-selected=true]").should("have.length", rate)
    })
})
