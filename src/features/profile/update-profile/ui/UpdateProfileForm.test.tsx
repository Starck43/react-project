import { screen, waitFor, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Country } from "@/entities/country"
import { profileReducer, Profile } from "@/entities/profile"
import { userReducer } from "@/entities/user"
import { $api } from "@/shared/api/api"

import { componentRender, RenderWithRouterProps } from "@/shared/lib/tests/componentRender"

import { UpdateProfileForm } from "./UpdateProfileForm"

const profile: Profile = {
    id: "1",
    username: "admin",
    name: "John",
    surname: "Smith",
    email: "admin@t.me",
    phone: "+79991234567",
    country: Country.RUSSIA,
}

const options: RenderWithRouterProps = {
    initialState: {
        profile: {
            data: profile,
            form: profile,
            isLoading: false,
        },
        user: {
            authData: {
                id: profile.id,
                username: profile.username,
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
        user: userReducer,
    },
}

describe("UpdateProfileForm test", () => {
    // common logic, running before every test, may be here
    beforeEach(() => {
        componentRender(<UpdateProfileForm show />, options)
    })

    test("User сan change his profile", async () => {
        expect(screen.getByTestId("Modal.SubmitButton")).toBeInTheDocument()
        expect(screen.getByTestId("Modal.CancelButton")).toBeInTheDocument()
    })

    test("Success save", async () => {
        const mockedPut = jest.spyOn($api, "put")

        await userEvent.clear(screen.getByTestId("UpdateProfileForm.Username"))
        await userEvent.type(screen.getByTestId("UpdateProfileForm.Username"), "guest")
        await userEvent.click(screen.getByTestId("Modal.SubmitButton"))

        // check result for async
        await waitFor(() => {
            expect(screen.getByTestId("UpdateProfileForm.Username")).toHaveValue("guest")
            expect(screen.queryByTestId("UpdateProfileForm")).not.toBeInTheDocument()
            expect(mockedPut).toHaveBeenCalled()
        })
    })

    test("Revert data after cancel", async () => {
        const mockedPut = jest.spyOn($api, "put")
        // check input val on start
        expect(screen.getByTestId("UpdateProfileForm.Name")).toHaveValue(profile.name)
        // clear input
        await userEvent.clear(screen.getByTestId("UpdateProfileForm.Name"))
        // change input
        await userEvent.type(screen.getByTestId("UpdateProfileForm.Name"), "Nick")
        // check input val after change
        expect(screen.getByTestId("UpdateProfileForm.Name")).toHaveValue("Nick")
        // click on Cancel button
        await userEvent.click(screen.getByTestId("Modal.CancelButton"))
        // check if input state is dropped to init state
        await waitFor(() => {
            expect(mockedPut).not.toHaveBeenCalled()
        })
    })

    test("Error on saving with empty data in input", async () => {
        // clear input
        await userEvent.clear(screen.getByTestId("UpdateProfileForm.Name"))
        // click on Save button
        fireEvent.click(screen.getByTestId("Modal.SubmitButton"))
        // check result
        expect(await screen.findByTestId("UpdateProfileForm.ValidateErrors")).toBeInTheDocument()
    })
})
