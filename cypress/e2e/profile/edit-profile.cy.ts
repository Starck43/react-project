import {capitalizeFirstLetter} from "@/shared/lib/helpers/strings"


let profileId = ""

describe("User goes to profile page", () => {
    beforeEach(() => {
        cy.visit("")
        cy.login().then((data) => {
            profileId = data.id || ""
            cy.visit(`profile/${data.id}`)
        })
    })
    afterEach(() => {
        cy.resetProfile(profileId)
    })
    it("open a guest profile", () => {
        cy.getByTestId("ProfileCard", "#Username")
        .find("span:last-child()")
        .should("have.text", "guest")
    })

    it("edit profile", () => {
        const name = "test name"
        const surname = "test surname"
        cy.updateProfile({name, surname})

        cy.getByTestId("ProfileCard", "#Name")
        .find("span:last-child()")
        .should("have.text", capitalizeFirstLetter(name))

        cy.getByTestId("ProfileCard", "#Surname")
        .find("span:last-child()")
        .should("have.text", capitalizeFirstLetter(surname))
    })
})
