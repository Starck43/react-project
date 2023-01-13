import { Country } from "@/entities/country"
import { TestAsyncFunc } from "@/shared/lib/tests/TestAsyncFunc"

import type { Profile } from "../types/profile"
import { ValidateProfileError } from "../consts"
import { updateProfileData } from "./updateProfileData"

const profile: Profile = {
    id: "1",
    username: "admin",
    name: "John",
    surname: "Smith",
    email: "admin@t.me",
    phone: "+79991234567",
    country: Country.RUSSIA,
}

describe("updateProfileData test", () => {
    test("Success profile update fetching", async () => {
        const thunk = new TestAsyncFunc(updateProfileData, {
            profile: {
                form: profile,
            },
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ data: profile }))
        const res = await thunk.CallFunc()

        expect(thunk.api.put).toBeCalledTimes(1)
        expect(res.meta.requestStatus).toBe("fulfilled")
        expect(res.payload).toEqual(profile)
    })

    test("Failed validation on update", async () => {
        const thunk = new TestAsyncFunc(updateProfileData, {
            profile: {
                form: { ...profile, name: "" },
            },
        })
        const res = await thunk.CallFunc()

        expect(res.meta.requestStatus).toBe("rejected")
        expect(res.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })

    test("Server error on update", async () => {
        const thunk = new TestAsyncFunc(updateProfileData, {
            profile: { form: profile },
        })

        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
        const res = await thunk.CallFunc()

        expect(res.meta.requestStatus).toBe("rejected")
        expect(res.payload).toEqual([ValidateProfileError.SERVER_ERROR])
    })
})
