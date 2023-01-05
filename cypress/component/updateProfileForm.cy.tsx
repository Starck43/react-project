import {ProfileCard, profileReducer} from "@/entities/profile"
import {userReducer} from "@/entities/user"
import {TestProvider} from "@/shared/lib/tests/componentRender"


const options = {
    initialState: {
        user: {
            authData: {
                id: "3",
            },
        },
    },
    asyncReducers: {
        user: userReducer,
        profile: profileReducer,
    },
}

describe("ProfileCard component test", () => {
    it("playground", () => {
        cy.intercept("GET", "**/profile/*", {fixture: "profile.json"})
        cy.mount(
            <TestProvider options={options}>
                <ProfileCard id="3" />
            </TestProvider>,
        )
    })
})
