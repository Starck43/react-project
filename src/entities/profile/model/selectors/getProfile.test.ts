import {StateSchema} from "@/app/providers/store-provider"
import {Country} from "@/entities/country"
import {getProfileCopy, getProfileData, getProfileError, getProfileLoading} from "./getProfile"


const profileData = {
    id: "1",
    name: "John",
    email: "admin@t.me",
    country: Country.RUSSIA,
}

describe("getProfileData test", () => {
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
