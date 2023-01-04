export const setRating = (value = 5, text = "I Like It") => {
    cy.getByTestId(`Rate.${value}`).click()
    cy.getByTestId("Modal", "textarea").type(text)
    cy.getByTestId("Modal.SubmitButton").click()
}
