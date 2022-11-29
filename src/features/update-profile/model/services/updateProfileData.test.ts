import {Country} from "entities/country"
import {ValidateProfileError} from "entities/profile"
import {TestAsyncFunc} from "shared/lib/tests/test-async-func/TestAsyncFunc"
import {updateProfileData} from "./updateProfileData"


const profileValue = {
    id: "1",
    name: "John",
    email: "admin@t.me",
    country: Country.RUSSIA,
}

describe("updateProfileData test", () => {
    test("Success profile update fetching", async () => {
        const thunk = new TestAsyncFunc(updateProfileData, {profile: {data: profileValue}})
        thunk.api?.put.mockReturnValue(Promise.resolve({data: {...profileValue, phone: "+79991234567"}}))
        const res = await thunk.CallFunc()

        expect(thunk.api.put).toHaveBeenCalled()
        expect(res.meta.requestStatus).toBe("fulfilled")
        expect(res.payload).toEqual({...profileValue, phone: "+79991234567"})
    })

    test("Failed validation on update", async () => {
        const thunk = new TestAsyncFunc(updateProfileData, {profile: {data: {...profileValue, name: ""}}})
        const res = await thunk.CallFunc()
        // eslint-disable-next-line no-console
        console.log(res)

        expect(res.meta.requestStatus).toBe("rejected")
        expect(res.payload).toEqual([ ValidateProfileError.INCORRECT_USER_DATA ])
    })

    test("Server error on update", async () => {
        const thunk = new TestAsyncFunc(updateProfileData, {profile: {data: profileValue}})
        thunk.api.put.mockReturnValue(Promise.resolve({status: 403}))
        const res = await thunk.CallFunc()

        expect(res.meta.requestStatus).toBe("rejected")
        expect(res.payload).toEqual([ ValidateProfileError.SERVER_ERROR ])

        // console.log(res)
    })
})
