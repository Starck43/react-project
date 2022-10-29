import {Country} from "entities/country"
import {updateProfileData} from "features/update-profile"
import {ProfileSchema, ValidateProfileError} from "../types/profile"
import {profileActions, profileReducer} from "./profileSlice"


const profileValue = {
    id: "1",
    name: "John",
    surname: "Smith",
    email: "admin@t.me",
    // phone: "+79991234567",
    country: Country.RUSSIA,
}

describe("profileSlice test", () => {
    test("set readonly", () => {
        const state: DeepPartial<ProfileSchema> = {readonly: false}
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadOnly(true),
        )).toEqual({readonly: true})
    })

    test("profile updating", () => {
        const state: DeepPartial<ProfileSchema> = {data: profileValue}
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfileData({...profileValue, phone: "+79991234567"}),
        )).toEqual({data: {...profileValue, phone: "+79991234567"}})
    })

    test("update in extra reducers (pending)", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ ValidateProfileError.SERVER_ERROR ],
        }
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        })
    })

    test("update in extra reducers (fulfilled)", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        }
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(profileValue, "", profileValue),
        )).toEqual({
            isLoading: false,
            validateError: undefined,
            validateErrors: undefined,
            data: profileValue,
            readonly: true,
        })
    })
})
