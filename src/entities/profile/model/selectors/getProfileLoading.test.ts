import {StateSchema} from "app/providers/store-provider"
import {getProfileLoading} from "./getProfileLoading"


describe("getProfileLoading test", () => {
    test("Return success profile loading", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        }
        expect(getProfileLoading(state as StateSchema)).toEqual(true)
    })

    test("Return an empty state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileLoading(state as StateSchema)).toEqual(false)
    })
})
