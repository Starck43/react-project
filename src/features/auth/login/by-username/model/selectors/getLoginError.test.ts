import { StateSchema } from "@/app/providers/store-provider"
import { getLoginError } from "./getLoginError"

describe("getLoginError test", () => {
    test("Return error", () => {
        const state: DeepPartial<StateSchema> = {
            login: { error: "Error" },
        }
        expect(getLoginError(state as StateSchema)).toEqual("Error")
    })

    test("Empty state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginError(state as StateSchema)).toEqual(undefined)
    })
})
