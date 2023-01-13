import { StateSchema } from "@/app/providers/store-provider"
import { Country } from "@/entities/country"
import { getProfileForm, getProfileData, getProfileError, getProfileLoading } from "./getProfile"

const profile = {
    id: "1",
    name: "John",
    email: "admin@t.me",
    country: Country.RUSSIA,
}

describe("getProfileData test", () => {
    test("Return profile data state", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: profile,
            },
        }
        expect(getProfileData(state as StateSchema)).toEqual(profile)
    })

    test("Return an empty data state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})

describe("getProfileForm test", () => {
    test("Return profile form state", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: profile,
            },
        }
        expect(getProfileForm(state as StateSchema)).toEqual(profile)
    })

    test("Return an empty form state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})

describe("getProfileLoading test", () => {
    test("Return state with loading status", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        }
        expect(getProfileLoading(state as StateSchema)).toEqual(true)
    })

    test("Return state with not loading status", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileLoading(state as StateSchema)).toEqual(false)
    })
})

describe("getProfileError test", () => {
    test("Return state with some text error", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: "error", // anything
            },
        }
        expect(getProfileError(state as StateSchema)).toEqual("error")
    })

    test("Return state with undefined error", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileError(state as StateSchema)).toEqual(undefined)
    })
})
