import { Country } from "@/entities/country"

import type { ProfileSchema, Profile } from "../types/profile"
import { ValidateProfileError } from "../consts"
import { updateProfileData } from "../services/updateProfileData"
import { profileActions, profileReducer } from "../slice/profileSlice"

const profile: Profile = {
    id: "1",
    name: "John",
    surname: "Smith",
    email: "admin@t.me",
    // phone: "+79991234567",
    country: Country.RUSSIA,
}

describe("profileSlice test", () => {
    test("update on input", () => {
        const state: DeepPartial<ProfileSchema> = { form: profile }
        expect(
            profileReducer(state as ProfileSchema, profileActions.updateFormState({ phone: "+79991234567" })),
        ).toEqual({
            form: { ...profile, phone: "+79991234567" },
        })
    })

    test("update in extra reducers (pending)", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        }
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateErrors: undefined,
        })
    })

    test("update in extra reducers (fulfilled)", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        }
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled)).toEqual({
            isLoading: false,
            validateErrors: undefined,
        })
    })
})
