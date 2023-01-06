import { StateSchema } from "@/app/providers/store-provider"
import { getCounterValue } from "./getCounterValue"

describe("getCounterValue test", () => {
    test("", () => {
        const state: DeepPartial<StateSchema> = { counter: { value: 100 } }

        expect(getCounterValue(state as StateSchema)).toEqual(100)
    })
})
