import { Profile } from "@/entities/profile"

export const updateProfile = (data: Profile) => {
    cy.getByTestId("ProfileCard.EditButton")
        .click()
        .then(() => {
            cy.getByTestId("UpdateProfileForm.Name")
                .clear()
                .type(data.name || "")
            cy.getByTestId("UpdateProfileForm.Surname")
                .clear()
                .type(data.surname || "")
            cy.getByTestId("Modal.SubmitButton").click()
        })
}

export const resetProfile = (id: string) =>
    cy.request({
        method: "PUT",
        url: `${Cypress.env("api_server")}/profile/${id}`,
        headers: { Authorization: "some header" },
        body: {
            id: "3",
            name: "Michael",
            surname: "Jackson",
            email: "test@mail.ru",
            phone: "007123456780",
            avatar: "https://rognowsky.ru/wp-content/uploads/2019/09/u55628068.jpg",
            username: "guest",
            country: "Russia",
        },
    })
