import {StateSchema} from "app/providers/store-provider"
import {Country} from "entities/country"
import {getProfileCopy} from "./getProfileCopy"

const profileData = {
    id: "1",
    name: "John",
    email: "admin@t.me",
    country: Country.RUSSIA,
}

describe("getProfileCopy test", () => {
    test("Return success profile data", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                copy: profileData,
            },
        }
        expect(getProfileCopy(state as StateSchema)).toEqual(profileData)
    })

    test("Return an empty state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileCopy(state as StateSchema)).toEqual(undefined)
    })
})
