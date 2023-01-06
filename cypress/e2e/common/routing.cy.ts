import { selectByTestId } from "../../helpers/selectByTestId"

describe("Routing test", () => {
    const username = Cypress.env("username")
    const password = Cypress.env("password")

    describe("Not authorized", () => {
        it("redirect to auth page", () => {
            cy.visit("/profile/1")
            cy.get(selectByTestId("AuthPage")).should("exist")
        })
    })
    describe("Only for authorized users", () => {
        beforeEach(() => {
            cy.login(username, password)
        })

        it("profile page", () => {
            cy.visit("/profile/1")
            cy.get(selectByTestId("ProfilePage")).should("exist")
        })
        it("articles page", () => {
            cy.visit("/articles")
            cy.get(selectByTestId("ArticlesPage")).should("exist")
        })
    })
    describe("Non exist page", () => {
        it("broken url", () => {
            cy.visit("/sdaad")
            cy.get(selectByTestId("NotFoundPage")).should("exist")
        })
    })
})
