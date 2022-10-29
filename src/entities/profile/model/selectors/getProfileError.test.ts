import {StateSchema} from "app/providers/store-provider"
import {getProfileError} from "./getProfileError"


describe("getProfileError test", () => {
    test("Return success profile error", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: "error", // anything
            },
        }
        expect(getProfileError(state as StateSchema)).toEqual("error")
    })

    test("Return an empty state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileError(state as StateSchema)).toEqual(undefined)
    })
})
