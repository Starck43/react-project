import {StateSchema} from "app/providers/store-provider"
import {getProfileValidateErrors} from "./getProfile"
import {ValidateProfileError} from "../types/profile"


describe("ProfileValidateErrors test", () => {
    test("Return success profile validate errors", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.NO_DATA,
                ],
            },
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.NO_DATA,
        ])
    })

    test("Return an empty state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
    })
})
