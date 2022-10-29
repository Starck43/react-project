import {Country} from "entities/country"
import {ValidateProfileError} from "entities/profile"
import {validateProfileData} from "./validateProfileData"


const profileValue = {
    id: "1",
    name: "John",
    surname: "Smith",
    email: "admin@t.me",
    phone: "+79991234567",
    country: Country.RUSSIA,
}

describe("validateProfileData test", () => {
    test("Success validation", async () => {
        const res = validateProfileData(profileValue)
        expect(res).toEqual([])
    })

    test("No data", async () => {
        const res = validateProfileData()
        expect(res).toEqual([ ValidateProfileError.NO_DATA ])
    })

    test("All errors", async () => {
        const res = validateProfileData({})
        expect(res).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_EMAIL,
            ValidateProfileError.INCORRECT_PHONE,
        ])
    })

    test("Empty name and surname", async () => {
        const res = validateProfileData({...profileValue, name: ""})
        expect(res).toEqual([ ValidateProfileError.INCORRECT_USER_DATA ])
    })

    test("Empty email", async () => {
        const res = validateProfileData({...profileValue, email: ""})
        expect(res).toEqual([ ValidateProfileError.INCORRECT_EMAIL ])
    })

    test("Empty phone", async () => {
        const res = validateProfileData({...profileValue, phone: ""})
        expect(res).toEqual([ ValidateProfileError.INCORRECT_PHONE ])
    })
})
