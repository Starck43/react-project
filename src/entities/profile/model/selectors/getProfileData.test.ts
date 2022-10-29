import {StateSchema} from "app/providers/store-provider"
import {Country} from "entities/country"
import {getProfileData} from "./getProfileData"


describe("getProfileData test", () => {
    const profileData = {
        id: "1",
        name: "John",
        email: "admin@t.me",
        country: Country.RUSSIA,
    }

    test("Return success profile data", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: profileData,
            },
        }
        expect(getProfileData(state as StateSchema)).toEqual(profileData)
    })

    test("Return an empty state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
