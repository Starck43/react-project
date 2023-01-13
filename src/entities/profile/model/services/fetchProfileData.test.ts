import { Country } from "@/entities/country"
import { TestAsyncFunc } from "@/shared/lib/tests/TestAsyncFunc"
import { Profile } from "../.."

import { fetchProfileData } from "./fetchProfileData"

const profile: Profile = {
    id: "1",
    name: "John",
    email: "admin@t.me",
    country: Country.RUSSIA,
}

describe("fetchProfileData test", () => {
    test("Success profile fetching", async () => {
        const thunk = new TestAsyncFunc(fetchProfileData)
        thunk.api?.get.mockReturnValue(Promise.resolve({ data: profile }))
        const res = await thunk.CallFunc(profile.id)

        expect(thunk.api?.get).toHaveBeenCalled()
        expect(res.meta.requestStatus).toBe("fulfilled")
        expect(res.payload).toEqual(profile)
    })

    test("Failed profile fetching", async () => {
        const thunk = new TestAsyncFunc(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const res = await thunk.CallFunc(profile.id)
        expect(res.meta.requestStatus).toBe("rejected")
        expect(res.payload).toEqual("error")
    })
})
