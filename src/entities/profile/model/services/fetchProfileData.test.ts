import {Country} from "@/entities/country"
import {TestAsyncFunc} from "@/shared/lib/tests/TestAsyncFunc"
import {fetchProfileData} from "./fetchProfileData"


const profileValue = {
    id: "1",
    name: "John",
    email: "admin@t.me",
    country: Country.RUSSIA,
}

describe("fetchProfileData test", () => {
    test("Success profile fetching", async () => {
        const thunk = new TestAsyncFunc(fetchProfileData)
        thunk.api?.get.mockReturnValue(Promise.resolve({data: profileValue}))
        const res = await thunk.CallFunc("1")
        // console.log(res)

        expect(thunk.api?.get).toHaveBeenCalled()
        expect(res.meta.requestStatus).toBe("fulfilled")
        expect(res.payload).toEqual(profileValue)
    })

    test("Failed profile fetching", async () => {
        const thunk = new TestAsyncFunc(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({status: 403}))
        const res = await thunk.CallFunc("1")
        expect(res.meta.requestStatus).toBe("rejected")

        // console.log(res)
    })
})
