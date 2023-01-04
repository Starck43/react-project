export const addComment = (text: string) => {
    cy.getByTestId("NewCommentForm").within(() => {
        cy.get("textarea").type(text)
        cy.get("button").click()
    })
}
