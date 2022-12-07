import {fireEvent, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import {Country} from "entities/country"
import {ProfileCard, profileReducer} from "entities/profile"
import {userReducer} from "entities/user"
import {$api} from "shared/api/api"

import {componentRender} from "shared/lib/tests/componentRender"

import {UpdateProfileForm} from "./UpdateProfileForm"


const profileData = {
    id: "1",
    username: "admin",
    name: "John",
    surname: "Smith",
    email: "admin@t.me",
    phone: "+79991234567",
    country: Country.RUSSIA,
}

const options = {
    initialState: {
        profile: {
            data: profileData,
            copy: profileData,
            isLoading: false,
        },
        user: {
            authData: {
                id: profileData.id,
                // username: "admin",
                // password: "admin",
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
        user: userReducer,
    },
}

describe("UpdateProfileForm Tests", () => {
    beforeEach(() => {}) // common logic, running before every test, may be here

    test("Can save and cancel test", async () => {
        const showProfile = jest.fn(() => componentRender(<UpdateProfileForm show />))
        componentRender(<ProfileCard id="1" />, options)
        await userEvent.click(screen.getByTestId("ProfileCard.EditButton"))
        expect(showProfile).toHaveBeenCalledTimes(1)
        expect(screen.getByTestId("SaveButton")).toBeInTheDocument()
        expect(screen.getByTestId("CancelButton")).toBeInTheDocument()
    })

    test("Revert data on edit cancel test", async () => {
        // render component with all initials in states
        componentRender(<UpdateProfileForm show />, options)
        // check input val on start
        expect(screen.getByTestId("UpdateProfileForm.Username")).toHaveValue("admin")
        // clear input
        await userEvent.clear(screen.getByTestId("UpdateProfileForm.Username"))
        // change input
        await userEvent.type(screen.getByTestId("UpdateProfileForm.Username"), "guest")
        // check input val after change
        expect(screen.getByTestId("UpdateProfileForm.Username")).toHaveValue("guest")
        // click on Cancel btn
        await userEvent.click(screen.getByTestId("CancelButton"))
        // check if input state is reverted to init state
        expect(screen.getByTestId("UpdateProfileForm.Username")).toHaveValue("admin")
    })

    test("Error on saving empty input test", async () => {
        componentRender(<UpdateProfileForm show />, options)
        // clear input
        await userEvent.clear(screen.getByTestId("UpdateProfileForm.Name"))
        // click on Save btn
        fireEvent.click(screen.getByTestId("SaveButton"))
        // check result
        expect(screen.getByTestId("UpdateProfileForm.ValidateErrors.SubTitle")).toBeInTheDocument()
    })

    test("Success save test", async () => {
        const mockedPut = jest.spyOn($api, "put")
        componentRender(<UpdateProfileForm show />, options)
        await userEvent.clear(screen.getByTestId("UpdateProfileForm.Username"))
        await userEvent.type(screen.getByTestId("UpdateProfileForm.Username"), "guest")
        await userEvent.click(screen.getByTestId("SaveButton"))
        // check result
        expect(mockedPut).toHaveBeenCalled()
    })
})
