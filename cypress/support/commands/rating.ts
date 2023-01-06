import { ArticleRatingSchema } from "@/features/articles"

export const setArticleRating = (value = 5, text = "I Like It") => {
    cy.getByTestId(`Rate.${value}`).click()
    cy.getByTestId("Modal", "textarea").type(text)
    cy.getByTestId("Modal.SubmitButton").click()
}

export const getArticleRating = ({ articleId, userId }: ArticleRatingSchema) =>
    cy
        .request({
            method: "GET",
            url: `${Cypress.env(
                "api_server",
            )}/article-ratings?articleId=${articleId}&userId=${userId}`,
            headers: { Authorization: "some header" },
        })
        .then((res) => res.body)

export const removeArticleRating = (id: string) =>
    cy.request({
        method: "DELETE",
        url: `${Cypress.env("api_server")}/article-ratings/${id}`,
        headers: { Authorization: "some header" },
    })
