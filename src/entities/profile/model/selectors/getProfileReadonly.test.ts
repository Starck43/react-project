import {StateSchema} from "app/providers/store-provider"
import {getProfileReadonly} from "./getProfileReadonly"


describe("getProfileReadonly test", () => {
    test("Return success profile readonly", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        }
        expect(getProfileReadonly(state as StateSchema)).toEqual(true)
    })

    test("Return an empty state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileReadonly(state as StateSchema)).toEqual(false)
    })
})
