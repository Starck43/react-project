import { StateSchema } from "@/app/providers/store-provider"

import { getLoginPassword } from "../selectors/getLoginPassword"

describe("getLoginPassword test", () => {
    test("Return password", () => {
        const state: DeepPartial<StateSchema> = { login: { password: "admin" } }
        expect(getLoginPassword(state as StateSchema)).toEqual("admin")
    })

    test("Return empty password", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginPassword(state as StateSchema)).toEqual("")
    })
})
