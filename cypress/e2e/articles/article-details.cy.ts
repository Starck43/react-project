let articleId = ""
let userId = ""

describe("Article Details Page", () => {
    beforeEach(() => {
        cy.login().then((user) => {
            userId = user.id || "0"
        })
        cy.createArticle().then((article) => {
            articleId = article.id
            cy.visit(`articles/${articleId}`)
        })
    })
    afterEach(() => {
        if (articleId) {
            cy.removeArticle(articleId)
        }
    })

    it.skip("article content is visible", () => {
        cy.getByTestId("Article.Info").should("exist")
    })

    it("related articles section is visible", () => {
        cy.getByTestId("Article.Related").should("exist")
    })

    it("user can leave a comment", () => {
        cy.getByTestId("Article.Info").as("article")
        cy.get("@article").scrollIntoView()
        cy.addComment("some new comment")
        cy.getByTestId("Comment.Card").should("have.length", 1)
        .then((subject) => {
            // eslint-disable-next-line no-console
            if (subject.length > 0) console.log(subject[0])
        })
    })

    it("user can leave a rating with feedback (stubbed data)", () => {
        // mocking data without fetching to DB
        cy.intercept("GET", "**/articles/*", {fixture: "article-details.json"})
        const rate = 5
        cy.getByTestId("Article.Info").as("article")
        cy.getByTestId("Article.Rating").as("rating")
        cy.get("@rating").scrollIntoView()
        cy.setArticleRating(rate, "perfect article!!!")
        cy.get("[data-selected=true]").should("have.length", rate)
        cy.getArticleRating({userId, articleId}).then((data) => {
            if (data.length) {
                cy.removeArticleRating(data[0].id)
            }
        })
    })
})
